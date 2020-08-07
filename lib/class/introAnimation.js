"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroAnimation = void 0;
var stoppingGearAnim_1 = require("./stoppingGearAnim");
var bouncingAnimation_1 = require("./bouncingAnimation");
var $ = require("jquery");
var IntroAnimation = /** @class */ (function () {
    function IntroAnimation(allGears) {
        var _this = this;
        this.firstLaunch = true;
        this.one = $('#one');
        this.two = $('#two');
        this.three = $('#three');
        this.four = $('#four');
        this.five = $('#five');
        this.background = $('#top-gear-container');
        this.centralCircle = $('#first-ground-circle');
        this.overflowContainer = $('#overflow-container');
        this.gearsArray = [];
        this.initColor = true;
        this.backgroundHeight = window.window.innerHeight;
        this.backgroundCircleContainer = $("#background-circle-container");
        this.backgroundCircle = $("#background-circle");
        this.rise = function () {
            _this.request = requestAnimationFrame(_this.rise);
            if (_this.backgroundHeight > window.window.innerHeight / 2) {
                _this.speedUpGears();
                _this.riseBottomElements();
            }
            else {
                cancelAnimationFrame(_this.request);
                //this.bouncingBackgroud
                _this.typedGears.forEach(function (gear, i) {
                    //gear.stopRotation();
                    var breaking = new stoppingGearAnim_1.StopingGearAnimation(gear, 50, 0.1, 30, 0.4);
                });
                _this.request = requestAnimationFrame(_this.increaseBackgroundCircleScale);
                var bouncingBackground = new bouncingAnimation_1.BouncingAnimation(_this.background, _this.overflowContainer, 40);
                _this.launchSwitchColors();
            }
        };
        this.jumpOneFrame = false;
        this.increaseBackgroundCircleScale = function () {
            if (_this.backgroundCircle.height() < 2300) {
                if (_this.backgroundCircle.height() < 500) {
                    _this.request = requestAnimationFrame(_this.increaseBackgroundCircleScale);
                    _this.backgroundCircle.css('height', _this.backgroundCircle.height() + 150 + "px");
                    _this.backgroundCircle.css('width', _this.backgroundCircle.width() + 200 + "px");
                }
                else if (_this.backgroundCircle.height() < 1500) {
                    _this.request = requestAnimationFrame(_this.increaseBackgroundCircleScale);
                    _this.backgroundCircle.css('height', _this.backgroundCircle.height() + 150 + "px");
                    _this.backgroundCircle.css('width', _this.backgroundCircle.width() + 200 + "px");
                }
                else {
                    //* slow the animation on it end
                    _this.request = requestAnimationFrame(_this.increaseBackgroundCircleScale);
                    _this.backgroundCircle.css('height', _this.backgroundCircle.height() + 50 + "px");
                    _this.backgroundCircle.css('width', _this.backgroundCircle.width() + 70 + "px");
                }
            }
            else {
                cancelAnimationFrame(_this.request);
                //*change BACKGROUND color here because of lazyness....
                _this.background.addClass('yellow-background');
                _this.background.removeClass('dark-background');
                _this.backgroundCircle.remove();
            }
        };
        this.riseSpeedControl = 5;
        this.typedGears = allGears;
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.setInitialHeight();
        this.backgroundMaxHeigth = this.background.height();
        //this.initialAnimation();
    }
    IntroAnimation.prototype.speedUpGears = function () {
        this.typedGears.forEach(function (gear) {
            gear.editRoationSpeed(function (currentSpeed) {
                return currentSpeed + 0.1;
            });
        });
    };
    IntroAnimation.prototype.setInitialHeight = function () {
        this.background.css('height', this.backgroundHeight + "px");
        this.overflowContainer.css('height', '0');
    };
    IntroAnimation.prototype.launchSwitchColors = function () {
        var _this = this;
        this.gearsArray.forEach(function (gear) {
            _this.switchColor(gear);
        });
    };
    IntroAnimation.prototype.riseBottomElements = function () {
        this.setRiseSpeed();
        this.backgroundHeight = this.backgroundHeight - this.riseSpeedControl;
        this.background.css('height', this.backgroundHeight + "px");
        this.backgroundCircleContainer.css('height', this.backgroundHeight + "px");
        this.overflowContainer.css('height', "" + (this.overflowContainer.height() + this.riseSpeedControl));
    };
    IntroAnimation.prototype.setRiseSpeed = function () {
        // if (this.backgroundHeight < (window.window.innerHeight / 12)) {
        //     this.riseSpeedControl = 3
        // }
        // if (this.backgroundHeight < (window.window.innerHeight / 11)) {
        //     this.riseSpeedControl = 4
        // }
        // if (this.backgroundHeight < (window.window.innerHeight / 10)) {
        //     this.riseSpeedControl = 5
        // }
        // if (this.backgroundHeight < (window.window.innerHeight / 9)) {
        //     this.riseSpeedControl = 6
        // }
        if (this.backgroundHeight < (window.window.innerHeight / 6)) {
            this.riseSpeedControl = 6;
        }
        if (this.backgroundHeight < (window.window.innerHeight / 1.2)) {
            this.riseSpeedControl = 9;
        }
    };
    IntroAnimation.prototype.switchColor = function (gear) {
        var childrenJQueryObj = gear.children();
        var childrenArray = childrenJQueryObj.toArray();
        childrenArray.forEach(function (jqueryMachin, i) {
            if (jqueryMachin.classList.contains('dark-fill')) {
                jqueryMachin.classList.replace('dark-fill', 'yellow-fill');
            }
            else if (jqueryMachin.classList.contains('yellow-fill')) {
                jqueryMachin.classList.replace('yellow-fill', 'dark-fill');
            }
            if (jqueryMachin.classList.contains('yellow-stroke')) {
                jqueryMachin.classList.replace('yellow-stroke', 'dark-stroke');
            }
        });
        this.centralCircle.addClass('yellow-background');
        this.centralCircle.removeClass('dark-background');
        this.overflowContainer.addClass('dark-background');
        this.overflowContainer.removeClass('yellow-background');
    };
    return IntroAnimation;
}());
exports.IntroAnimation = IntroAnimation;
//# sourceMappingURL=introAnimation.js.map
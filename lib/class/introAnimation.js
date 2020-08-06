"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroAnimation = void 0;
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
        this.rise = function () {
            _this.request = requestAnimationFrame(_this.rise);
            if (_this.backgroundHeight > window.window.innerHeight / 2 /*(window.window.innerWidth > 1200 ? 650 : (window.window.innerHeight / 2))*/) {
                _this.speedUpGears();
                _this.riseBottomElements();
            }
            else {
                cancelAnimationFrame(_this.request);
                setTimeout(function () {
                    _this.typedGears.forEach(function (gear) {
                        gear.stopRotation();
                    });
                    _this.launchSwitchColors();
                }, 300);
            }
        };
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
                return currentSpeed + 0.3;
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
        this.backgroundHeight = this.backgroundHeight - 5;
        this.background.css('height', this.backgroundHeight + "px");
        this.overflowContainer.css('height', "" + (this.overflowContainer.height() + 5));
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
        this.background.addClass('yellow-background');
        this.background.removeClass('dark-background');
        this.centralCircle.addClass('yellow-background');
        this.centralCircle.removeClass('dark-background');
        this.overflowContainer.addClass('dark-background');
        this.overflowContainer.removeClass('yellow-background');
    };
    return IntroAnimation;
}());
exports.IntroAnimation = IntroAnimation;
//# sourceMappingURL=introAnimation.js.map
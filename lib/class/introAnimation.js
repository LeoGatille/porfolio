"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroAnimation = void 0;
var $ = require("jquery");
var IntroAnimation = /** @class */ (function () {
    function IntroAnimation() {
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
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.initialAnimation();
    }
    IntroAnimation.prototype.initialAnimation = function () {
        var _this = this;
        this.gearsArray.forEach(function (gear) {
            _this.switchColor(gear);
        });
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BouncingAnimation = void 0;
var BouncingAnimation = /** @class */ (function () {
    function BouncingAnimation(background, overflowContainer, bounceValue) {
        var _this = this;
        this.bouncePhase = 1;
        this.bounceValueCounter = 0;
        this.animation = function () {
            _this.request = requestAnimationFrame(_this.animation);
            _this.bounceManager();
        };
        this.background = background;
        this.overflowContainer = overflowContainer;
        this.bounceValue = bounceValue;
        this.animation();
    }
    BouncingAnimation.prototype.bounce = function (increment, maxValue) {
        this.background.css('height', "" + (this.background.height() + (increment * -1)));
        this.overflowContainer.css('height', "" + (this.overflowContainer.height() + increment));
        this.bounceValueCounter += increment * -1;
        if (this.bounceValueCounter === maxValue) {
            this.bouncePhase++;
            console.log('BouncePhase => ', this.bouncePhase);
        }
    };
    BouncingAnimation.prototype.bounceManager = function () {
        switch (this.bouncePhase) {
            case (1):
                this.bounce(((this.bounceValue / 10) * -1), this.bounceValue);
                break;
            case (2):
                this.bounce(this.bounceValue / 4, 0);
                break;
            case (3):
                this.bounce(((this.bounceValue / 20) * -1), (this.bounceValue / 2));
                break;
            case (4):
                this.bounce(this.bounceValue / 8, 0);
                break;
            default:
                cancelAnimationFrame(this.request);
                break;
        }
    };
    return BouncingAnimation;
}());
exports.BouncingAnimation = BouncingAnimation;
//# sourceMappingURL=bouncingAnimation.js.map
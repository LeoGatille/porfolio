"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeIn = void 0;
var FadeIn = /** @class */ (function () {
    function FadeIn(target) {
        var _this = this;
        this.isDisplayed = false;
        this.jumpFrame = false;
        this.topDrag = function () {
            // console.log(this.target.css('padding-top'));
            if (_this.jumpFrame) {
                cancelAnimationFrame(_this.request);
                _this.jumpFrame = false;
                _this.topDrag();
            }
            else {
                _this.jumpFrame = true;
                _this.request = requestAnimationFrame(_this.topDrag);
                if (parseInt(_this.target.css('padding-top').split('px')[0], 10) <= 0) {
                    cancelAnimationFrame(_this.request);
                }
                else {
                    if (parseInt(_this.target.css('padding-top').split('px')[0], 10) >= 20) {
                        _this.target.css('padding-top', parseInt(_this.target.css('padding-top').split('px')[0], 10) - 1 + 'px');
                    }
                    _this.target.css('padding-top', parseInt(_this.target.css('padding-top').split('px')[0], 10) - 0.8 + 'px');
                }
            }
        };
        this.target = target;
    }
    FadeIn.prototype.topDraggedAppearence = function () {
        this.topDrag();
        this.target.fadeIn(1000, 'swing');
    };
    return FadeIn;
}());
exports.FadeIn = FadeIn;
//# sourceMappingURL=fadeIn.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardAnimation = void 0;
var StandardAnimation = /** @class */ (function () {
    function StandardAnimation(typedGears, jQueryGears) {
        var _this = this;
        this.animation = function () {
            requestAnimationFrame(_this.animation);
            _this.typedGears.forEach(function (gear) {
                gear.editRoationSpeed(function () {
                    return 0.9;
                });
            });
        };
        this.typedGears = typedGears;
        this.jQueryGears = jQueryGears;
    }
    return StandardAnimation;
}());
exports.StandardAnimation = StandardAnimation;
//# sourceMappingURL=standardAnimation.js.map
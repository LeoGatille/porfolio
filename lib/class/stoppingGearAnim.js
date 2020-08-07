"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopingGearAnimation = void 0;
var StopingGearAnimation = /** @class */ (function () {
    function StopingGearAnimation(gear, breakInterval, breakIntensity, rollBackAngle, rollBackMaxSpeed) {
        var _this = this;
        if (rollBackAngle === void 0) { rollBackAngle = null; }
        if (rollBackMaxSpeed === void 0) { rollBackMaxSpeed = null; }
        this.breaking = setInterval(function () {
            _this.gear.editRoationSpeed(function (speed) {
                return speed - (speed >= 0 ? _this.breakIntensity : (_this.breakIntensity * -1));
            });
            if (((_this.gear.speed >= 0 ? _this.gear.speed : (_this.gear.speed * -1)) - _this.breakIntensity) <= 0) {
                _this.gear.speed = 0;
                _this.gear.stopRotation();
                clearInterval(_this.breaking);
                _this.setRollBack();
            }
        }, this.breakInterval);
        this.gear = gear;
        this.breakInterval = breakInterval;
        this.breakIntensity = breakIntensity;
        this.rollBackAngle = rollBackAngle;
        this.rollBackMaxSpeed = rollBackMaxSpeed;
    }
    StopingGearAnimation.prototype.setMomentumSuppension = function () {
        var _this = this;
        this.gear.animation();
        var momentumSpeed = this.gear.speed / 4;
        var momentum = setInterval(function () {
            _this.gear.editRoationSpeed(function (speed) {
                return speed - (speed >= 0 ? 0.1 : -0.1);
            });
        }, 50);
    };
    StopingGearAnimation.prototype.setRollBack = function () {
        var _this = this;
        var initalDeg = this.gear.currentRotationDeg;
        this.gear.animation();
        var rollBack = setInterval(function () {
            if (initalDeg - (_this.gear.currentRotationDeg <= 0 ? _this.gear.currentRotationDeg : (_this.gear.currentRotationDeg * -1)) < _this.rollBackAngle) {
                if (_this.gear.speed < _this.rollBackMaxSpeed) {
                    _this.gear.editRoationSpeed(function (speed) {
                        return speed + (speed >= 0 ? 0.1 : (-0.1));
                    });
                }
            }
            else {
            }
        }, 50);
    };
    return StopingGearAnimation;
}());
exports.StopingGearAnimation = StopingGearAnimation;
//# sourceMappingURL=stoppingGearAnim.js.map
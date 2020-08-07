"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopingGearAnimation = void 0;
var StopingGearAnimation = /** @class */ (function () {
    function StopingGearAnimation(gear, breakInterval, breakIntensity, rollBackAngle, rollBackMaxSpeed) {
        var _this = this;
        if (rollBackAngle === void 0) { rollBackAngle = null; }
        if (rollBackMaxSpeed === void 0) { rollBackMaxSpeed = null; }
        this.rollBacked = false;
        this.breaking = setInterval(function () {
            _this.setBreaking();
        }, this.breakInterval);
        this.setMomentumSuppension = function () {
            _this.gear.animation();
            _this.request = requestAnimationFrame(_this.setMomentumSuppension);
            var momentumSpeed = _this.gear.speed;
            _this.gear.editRoationSpeed(function (speed) {
                // return speed + (0.01);
            });
        };
        this.gear = gear;
        this.breakInterval = breakInterval;
        this.breakIntensity = breakIntensity;
        this.rollBackAngle = rollBackAngle;
        this.rollBackMaxSpeed = rollBackMaxSpeed;
    }
    StopingGearAnimation.prototype.setBreaking = function () {
        var _this = this;
        this.gear.editRoationSpeed(function (speed) {
            return speed - (speed >= 0 ? _this.breakIntensity : (_this.breakIntensity * -1));
        });
        if (((this.gear.speed >= 0 ? this.gear.speed : (this.gear.speed * -1)) - this.breakIntensity) <= 0) {
            this.gear.speed = 0;
            if (!this.rollBacked) {
                this.setRollBack();
            }
            else {
                this.gear.stopRotation();
            }
            clearInterval(this.breaking);
            // this.setRollBack();
            // this.setMomentumSuppension()
        }
    };
    StopingGearAnimation.prototype.setRollBack = function () {
        var _this = this;
        this.gear.editRoationSpeed(function (speed) {
            return (Math.random() * (0.5 - 0.1 + 1) + 0.5) * -1;
        });
        setTimeout(function () {
            _this.gear.stopRotation();
        }, Math.floor(Math.random() * (300 - 100 + 1) + 50));
    };
    return StopingGearAnimation;
}());
exports.StopingGearAnimation = StopingGearAnimation;
//# sourceMappingURL=stoppingGearAnim.js.map
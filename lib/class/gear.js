"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gear = void 0;
var $ = require("jquery");
var Gear = /** @class */ (function () {
    function Gear(id, speed) {
        var _this = this;
        this.speening = true;
        this.currentRotationDeg = 0;
        this.animation = function () {
            _this.request = requestAnimationFrame(_this.animation);
            _this.automaticRotation();
        };
        this.id = id;
        this.myGear = $('#' + id);
        this.myGear.css({ 'transform-origin': 'center', });
        this.speed = speed;
        this.lastLength = document.getElementById(this.id).getBoundingClientRect().width;
        this.trueLength = document.getElementById(this.id).getBoundingClientRect().width;
    }
    Gear.prototype.automaticRotation = function () {
        this.setRotationDeg();
        this.rotate();
    };
    Gear.prototype.editRoationSpeed = function (callback) {
        this.speed = callback(this.speed);
    };
    Gear.prototype.stopRotation = function () {
        cancelAnimationFrame(this.request);
    };
    Gear.prototype.rotate = function (rotation) {
        this.myGear.css({ 'transform': 'rotate(' + (rotation ? rotation : this.currentRotationDeg) + 'deg)', });
    };
    Gear.prototype.setRotationDeg = function () {
        if (this.currentRotationDeg === 360) {
            this.currentRotationDeg = 0;
        }
        this.currentRotationDeg += 1 * this.speed;
    };
    return Gear;
}());
exports.Gear = Gear;
//# sourceMappingURL=gear.js.map
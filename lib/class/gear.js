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
            _this.test();
        };
        this.myGear = $('#' + id);
        this.myGear.css({ 'transform-origin': 'center', });
        //this.speening = true;
        this.speed = speed;
    }
    Gear.prototype.stopRotation = function () {
        cancelAnimationFrame(this.request);
    };
    Gear.prototype.test = function () {
        if (this.speening) {
            this.setRotationDeg();
            this.myGear.css({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
            this.test;
        }
    };
    Gear.prototype.setRotationDeg = function () {
        this.currentRotationDeg += 1 * this.speed;
    };
    return Gear;
}());
exports.Gear = Gear;
//# sourceMappingURL=gear.js.map
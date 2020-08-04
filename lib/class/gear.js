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
//! Backup fuckedUp
/*
import * as $ from 'jquery';

export class Gear {
    constructor(id: string, speed: number) {
        // this.myGear = $('#' + id);
        this.myGear = document.getElementById(id)
        this.myGear.style.transformOrigin = 'center';
        // this.myGear.css({ 'transform-origin': 'center', });
        this.speening = true;
        this.speed = speed;
        // this.myGear = document.getElementById(id);
    }
    speed: number;
    speening = false;
    // myGear: JQuery<HTMLElement>;
    myGear: HTMLElement;
    currentRotationDeg = 0;
    // animation = requestAnimationFrame(this.test);
    // rotation = requestAnimationFrame(this.test);
    // rotation = setInterval(() => {
    //     if (this.speening) {
    //         this.setRotationDeg();
    //         this.myGear.css({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
    //     }
    // }, 41.6);

    public test() {
        if (this.speening) {
            this.setRotationDeg();
            this.myGear.style.transform = 'rotate(' + this.currentRotationDeg + 'deg)'
            // this.myGear.animate({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
            this.test;
        }

    }
    public stopRotation() {
        // clearInterval(this.rotation);
    }
    private setRotationDeg() {
        this.currentRotationDeg += 1 * this.speed;
    }
}
*/ 
//# sourceMappingURL=gear.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopGears = void 0;
var $ = require("jquery");
var TopGears = /** @class */ (function () {
    function TopGears() {
        this.firstLaunch = true;
        this.one = $('#one');
        this.two = $('#two');
        this.three = $('#three');
        this.four = $('#four');
        this.five = $('#five');
        this.gearsArray = [];
        this.initColor = true;
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.initialAnimation();
    }
    TopGears.prototype.initialAnimation = function () {
        var _this = this;
        this.setInitialRotation();
        this.setInitalSpeed();
        setTimeout(function () {
            _this.stopRotation();
        }, 2000);
    };
    TopGears.prototype.setInitialRotation = function () {
        this.gearsArray.forEach(function (gear, i) {
            if (i % 2) {
                gear.addClass('rotation-clock');
            }
            else {
                gear.addClass('rotation-reversed-clock');
            }
        });
    };
    TopGears.prototype.setInitalSpeed = function () {
        this.gearsArray.forEach(function (gear, i) {
            gear.addClass("rotation-speed-fast-" + (i + 1));
        });
    };
    TopGears.prototype.stopRotation = function () {
        var anglesArray = this.getCurrentRotationsValues();
        this.gearsArray.forEach(function (gear, i) {
            gear.addClass('stoping-transition');
            gear.css('transform', 'matrix(' + anglesArray[i] + ')');
            gear.removeClass("rotation-speed-fast-" + (i + 1));
        });
    };
    TopGears.prototype.getRotationDegrees = function (gear) {
        var matrix = gear.css("transform");
        var matrixValues = matrix.split('(')[1];
        matrixValues = matrixValues.split(')')[0],
            matrixValues = matrixValues.split(',');
        return matrixValues;
    };
    TopGears.prototype.getCurrentRotationsValues = function () {
        var _this = this;
        var rotationsValuesArray = [];
        this.gearsArray.forEach(function (gear) {
            rotationsValuesArray.push(_this.getRotationDegrees(gear));
        });
        return rotationsValuesArray;
    };
    TopGears.prototype.setRegularSpeed = function () {
        this.gearsArray.forEach(function (gear, i) {
            gear.addClass("rotation-speed-slow-" + (i + 1));
        });
    };
    TopGears.prototype.setGearsToinitialRotation = function () {
        this.gearsArray.forEach(function (gear) {
            gear.addClass();
        });
    };
    return TopGears;
}());
exports.TopGears = TopGears;
//# sourceMappingURL=topGears.js.map
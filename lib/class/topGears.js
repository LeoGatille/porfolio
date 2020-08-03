"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopGears = void 0;
var $ = require("jquery");
var TopGears = /** @class */ (function () {
    function TopGears() {
        var _this = this;
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
        this.setInitialRotation();
        this.setInitalSpeed();
        setTimeout(function () {
            _this.stopRotation();
            // setTimeout(() => {
            //     this.setRegularSpeed();
            // }, 200);
        }, 1000);
    }
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
        var matrix = this.getCurrentRotationsValues();
        console.log('matrix => ', matrix);
        //! must get the rotate values !
        this.gearsArray.forEach(function (gear, i) {
            gear.removeClass("rotation-speed-fast-" + (i + 1));
            gear.css('transform', 'matrix(' + matrix[i] + ')');
        });
    };
    TopGears.prototype.getCurrentRotationsValues = function () {
        var rotationsValuesArray = [];
        this.gearsArray.forEach(function (gears) {
            rotationsValuesArray.push(gears.css('transform'));
        });
        return rotationsValuesArray;
    };
    TopGears.prototype.setRegularSpeed = function () {
        this.gearsArray.forEach(function (gear, i) {
            gear.addClass("rotation-speed-slow-" + (i + 1));
        });
    };
    return TopGears;
}());
exports.TopGears = TopGears;
//# sourceMappingURL=topGears.js.map
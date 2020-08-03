"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopGears = void 0;
var $ = require("jquery");
var TopGears = /** @class */ (function () {
    function TopGears() {
        this.one = $('#one');
        this.two = $('#two');
        this.three = $('#three');
        this.four = $('#four');
        this.five = $('#five');
        this.gearsArray = [];
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.setInitialRotation();
        this.setInitalSpeed();
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
            gear.addClass("rotation-speed-" + (i + 1));
        });
    };
    return TopGears;
}());
exports.TopGears = TopGears;
//# sourceMappingURL=topGears.js.map
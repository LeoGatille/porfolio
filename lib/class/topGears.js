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
        this.background = $('#top-gear-container');
        this.gearsArray = [];
        this.initColor = true;
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.initialAnimation();
    }
    TopGears.prototype.initialAnimation = function () {
        var _this = this;
        this.gearsArray.forEach(function (gear) {
            _this.switchColor(gear);
        });
    };
    TopGears.prototype.switchColor = function (gear) {
        var childrenJQueryObj = gear.children();
        var childrenArray = childrenJQueryObj.toArray();
        childrenArray.forEach(function (jquerMachin, i) {
            jquerMachin.classList.replace('yellow-fill', 'gears-seconday-color-fill');
            jquerMachin.classList.replace('yellow-stroke', 'gears-seconday-color-fill');
            jquerMachin.classList.replace('black-fill', 'gears-init-color-fill');
        });
        this.background.addClass('yellow-background');
        this.background.removeClass('dark-background');
    };
    return TopGears;
}());
exports.TopGears = TopGears;
//# sourceMappingURL=topGears.js.map
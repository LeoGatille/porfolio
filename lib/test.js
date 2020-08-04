"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gear_1 = require("./class/gear");
var $ = require("jquery");
console.log('Bonjour les enfants');
$(document).ready(function () {
    // const topGears: TopGears = new TopGears();
    // $('#first-ground-circle').click(() => {
    //     topGears.initialAnimation()
    // })
    var topGears = {
        one: new gear_1.Gear('one', -0.2),
        two: new gear_1.Gear('two', 0.7),
        three: new gear_1.Gear('three', -0.4),
        four: new gear_1.Gear('four', 1.5),
        five: new gear_1.Gear('five', -1.9),
    };
    for (var key in topGears) {
        topGears[key].animation();
    }
    // const firstGear = new Gear('four', 3);
    // firstGear.animation();
    // setTimeout(() => {
    //     firstGear.stopRotation()
    // }, 2000)
});
//# sourceMappingURL=test.js.map
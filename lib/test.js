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
    var firstGear = new gear_1.Gear('four', -3);
    firstGear.animation();
    setTimeout(function () {
        firstGear.stopRotation();
    }, 2000);
});
//* deported into TopGears.ts
// function speenTopGears() {
//     getTopGears();
// }
// function getTopGears() {
//     return {
//     }
//     const one = $('#one');
//     const two = $('#two');
//     const three = $('#three');
//     const four = $('#four');
//     const five = $('#five');
//     const six = $('#six');
// }
//# sourceMappingURL=test.js.map
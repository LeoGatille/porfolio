"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var introAnimation_1 = require("./class/introAnimation");
var relativeWidth_1 = require("./class/relativeWidth");
var gear_1 = require("./class/gear");
var $ = require("jquery");
console.log('Bonjour les enfants');
$(document).ready(function () {
    var topGears = [
        new gear_1.Gear('one', -0.2),
        new gear_1.Gear('two', 0.7),
        new gear_1.Gear('three', -0.4),
        new gear_1.Gear('four', 1.5),
        new gear_1.Gear('five', -2),
    ];
    topGears.forEach(function (gear) {
        gear.animation();
    });
    var testResize = new relativeWidth_1.RelativeWidth('top-SVG', 'first-ground-circle', 15);
    var introAnimationManager = new introAnimation_1.IntroAnimation(topGears);
    setTimeout(function () {
        introAnimationManager.rise();
    }, 1500);
});
//# sourceMappingURL=test.js.map
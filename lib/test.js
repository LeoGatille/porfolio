"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var introAnimation_1 = require("./class/introAnimation");
var relativeWidth_1 = require("./class/relativeWidth");
var gear_1 = require("./class/gear");
var $ = require("jquery");
console.log('Bonjour les enfants');
$(document).ready(function () {
    var topGears = {
        one: new gear_1.Gear('one', -0.2),
        two: new gear_1.Gear('two', 0.7),
        three: new gear_1.Gear('three', -0.4),
        four: new gear_1.Gear('four', 1.5),
        five: new gear_1.Gear('five', -2),
    };
    for (var key in topGears) {
        topGears[key].animation();
    }
    var testResize = new relativeWidth_1.RelativeWidth('top-SVG', 'first-ground-circle', 15);
    setTimeout(function () {
        var intorAnimationManager = new introAnimation_1.IntroAnimation();
    }, 1000);
});
//# sourceMappingURL=test.js.map
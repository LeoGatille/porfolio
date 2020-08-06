"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=test.js.map
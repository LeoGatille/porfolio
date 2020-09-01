"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scrollListener_1 = require("./class/scrollListener");
var introductionTextContainer_1 = require("./class/introductionTextContainer");
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
    ];
    var xpGears = [
        new gear_1.Gear('xp-one', -0.5),
        new gear_1.Gear('xp-two', 0.2),
        new gear_1.Gear('xp-three', -0.1),
        new gear_1.Gear('xp-four', 0.3),
        new gear_1.Gear('xp-five', -0.4),
    ];
    var skillsGears = [
        new gear_1.Gear('skills-one', -0.2),
        new gear_1.Gear('skills-two', 0.5),
        new gear_1.Gear('skills-three', -0.2),
    ];
    var lastGears = [
        new gear_1.Gear('last-gears-one', 0.5),
        new gear_1.Gear('last-gears-two', -0.5),
        new gear_1.Gear('last-gears-three', 0.1),
        new gear_1.Gear('last-gears-four', -0.3),
        new gear_1.Gear('last-gears-five', 0.2),
    ];
    topGears.forEach(function (gear) {
        gear.animation();
    });
    xpGears.forEach(function (gear) {
        gear.animation();
    });
    skillsGears.forEach(function (gear) {
        gear.animation();
    });
    lastGears.forEach(function (gear) {
        gear.animation();
    });
    // const bottomGears: Gear[] = [
    //     new Gear('six', -2),
    //     new Gear('seven', -2),
    //     new Gear('eight', -2),
    //     new Gear('nine', -2),
    //     new Gear('ten', -2),
    // ]
    // bottomGears.forEach(gear => {
    //     gear.animation()
    // })
    var testResize = new relativeWidth_1.RelativeWidth('top-SVG', 'first-ground-circle', 15);
    var introAnimationManager = new introAnimation_1.IntroAnimation(topGears);
    var introductionTextContainer = new introductionTextContainer_1.IntroductionTextConatainer($('#overflow-container'));
    var scrollListener = new scrollListener_1.ScrollListener();
    // const stendhalQuote = new FadeIn($('.quote-container'));
    var scrollDirFn = window.addEventListener('scroll', function () {
        if (scrollListener.getScrollDirection() === 'up') {
            console.log('GearsUP');
            topGears.forEach(function (gear) {
                if (gear.speed > 0) {
                    gear.currentRotationDeg -= 4;
                }
                if (gear.speed < 0) {
                    gear.currentRotationDeg += 2;
                }
            });
        }
        if (scrollListener.getScrollDirection() === 'down') {
            console.log('GearsDOWN', scrollListener.newScrollY);
            topGears.forEach(function (gear) {
                if (gear.speed > 0) {
                    gear.currentRotationDeg += 1;
                }
                if (gear.speed < 0) {
                    gear.currentRotationDeg -= 1;
                }
            });
        }
        // }
    });
    setTimeout(function () {
        var myPromise = introAnimationManager.rise();
        introAnimationManager.promise.then(function (test) {
            introductionTextContainer.resizeHeigth();
            var quoteApearence = window.addEventListener('scroll', function () {
                if (scrollListener.getScrollDirection() === 'down' && scrollListener.newScrollY >= 70) {
                    console.log('Bonjour');
                    // stendhalQuote.topDraggedAppearence();
                }
            });
        });
    }, 1500);
    function setTopGearsOnScroll() {
    }
});
//# sourceMappingURL=test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scrollListener_1 = require("./class/scrollListener");
var introAnimation_1 = require("./class/introAnimation");
var relativeWidth_1 = require("./class/relativeWidth");
var gear_1 = require("./class/gear");
var $ = require("jquery");
console.log('Bonjour les enfants');
window.scrollTo(500, 500);
$(document).ready(function () {
    var topGears = [
        new gear_1.Gear('one', -0.2),
        new gear_1.Gear('two', 0.7),
        new gear_1.Gear('three', -0.4),
        new gear_1.Gear('four', 1.5),
        new gear_1.Gear('five', -2.9),
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
        new gear_1.Gear('skills-three', -0.4),
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
    var testResize = new relativeWidth_1.RelativeWidth('top-SVG', 'first-ground-circle', 15);
    var introAnimationManager = new introAnimation_1.IntroAnimation(topGears);
    // const introductionTextContainer = new IntroductionTextContainer($('#overflow-container'));
    var scrollListener = new scrollListener_1.ScrollListener();
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
    // $('main').css('display', 'none');
    // $('#bottom-gear-container').css('display', 'none');
    // $('.xp-gears').css('opacity', '0');
    $('#biographie').css('display', 'none');
    setTimeout(function () {
        var myPromise = introAnimationManager.rise();
        introAnimationManager.promise.then(function (test) {
            // introductionTextContainer.resizeHeigth();
            // const textAppear = new IntroductionTextContainer($('.presentation-text-container'));
            // $('main').css('display', 'flex');
            // $('#bottom-gear-container').css('display', 'flex');
            // $('.xp-gears').css('opacity', '1');
            $('body').css('overflow-y', 'scroll');
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
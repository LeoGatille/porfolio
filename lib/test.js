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
        new gear_1.Gear('five', -2),
    ];
    topGears.forEach(function (gear) {
        gear.animation();
    });
    var testResize = new relativeWidth_1.RelativeWidth('top-SVG', 'first-ground-circle', 15);
    var introAnimationManager = new introAnimation_1.IntroAnimation(topGears);
    var introductionTextContainer = new introductionTextContainer_1.IntroductionTextConatainer($('#overflow-container'));
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
            console.log('GearsDOWN');
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
    /*
    () => scrollListener.getScrollDirection((direction: string) => {
        if (direction === 'up') {
            topGears.forEach(gear => {
                gear.editRoationSpeed((speed: number) => {
                    return speed + 1
                })
            })
        }
        if (direction === 'down') {
            topGears.forEach(gear => {
                gear.editRoationSpeed((speed: number) => {
                    return speed - 1
                })
            })

        }
    })
    */
    // const setScrollDirection = window.addEventListener('scroll', () => {
    //     console.log('Listener says => ', scrollListener.getScrollValues());
    //     if (scrollListener.getScrollValues() !== scrollDirection) {
    //         scrollDirection = scrollListener.getScrollValues();
    //         switch (scrollDirection) {
    //             case ('up'):
    //                 console.log('up');
    //                 topGears.forEach(gear => {
    //                     gear.editRoationSpeed((speed: number) => {
    //                         return speed + 1
    //                     })
    //                 })
    //                 break;
    //             case ('down'):
    //                 console.log('down');
    //                 topGears.forEach(gear => {
    //                     gear.editRoationSpeed((speed: number) => {
    //                         return speed - 1
    //                     })
    //                 })
    //                 break;
    //         }
    //     }
    // })
    // const toto = () => {
    //     console.log(scrollDirection);
    // }
    // introductionTextContainer.contentFadeIn();
    setTimeout(function () {
        var myPromise = introAnimationManager.rise();
        introAnimationManager.promise.then(function (test) {
            console.log('Ended');
            introductionTextContainer.resizeHeigth();
        });
    }, 1500);
    function setTopGearsOnScroll() {
    }
});
//# sourceMappingURL=test.js.map
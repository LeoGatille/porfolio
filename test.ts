import { ScrollListener } from './class/scrollListener';
import { IntroductionTextConatainer } from './class/introductionTextContainer';
import { IntroAnimation } from './class/introAnimation';
import { RelativeWidth } from './class/relativeWidth';
import { Gear } from './class/gear';
import { TopGears } from './class/topGears';
import * as $ from 'jquery'
import { promises } from 'fs';
import { resolve } from 'path';
console.log('Bonjour les enfants');
$(document).ready(() => {
    const topGears: Gear[] = [
        new Gear('one', -0.2),
        new Gear('two', 0.7),
        new Gear('three', -0.4),
        new Gear('four', 1.5),
        new Gear('five', -2),
    ]
    topGears.forEach(gear => {
        gear.animation()
    })
    const testResize = new RelativeWidth('top-SVG', 'first-ground-circle', 15);
    const introAnimationManager = new IntroAnimation(topGears);
    const introductionTextContainer = new IntroductionTextConatainer($('#overflow-container'));
    const scrollListener = new ScrollListener();
    const scrollDirFn = window.addEventListener('scroll', () => {
        if (scrollListener.getScrollDirection() === 'up') {
            console.log('GearsUP');
            topGears.forEach(gear => {
                if (gear.speed > 0) {
                    gear.currentRotationDeg -= 4;
                }
                if (gear.speed < 0) {
                    gear.currentRotationDeg += 2;
                }
            })
        }
        if (scrollListener.getScrollDirection() === 'down') {
            console.log('GearsDOWN');
            topGears.forEach(gear => {
                if (gear.speed > 0) {
                    gear.currentRotationDeg += 1;
                }
                if (gear.speed < 0) {
                    gear.currentRotationDeg -= 1;
                }
            })
        }
        // }
    })
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
    setTimeout(() => {
        const myPromise = introAnimationManager.rise();
        introAnimationManager.promise.then(test => {
            console.log('Ended');

            introductionTextContainer.resizeHeigth();
        });
    }, 1500)
    function setTopGearsOnScroll() {
    }
});

import { FadeIn } from './class/fadeIn';
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
    // const stendhalQuote = new FadeIn($('.quote-container'));


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
            console.log('GearsDOWN', scrollListener.newScrollY);
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
    });


    setTimeout(() => {
        const myPromise = introAnimationManager.rise();
        introAnimationManager.promise.then(test => {
            introductionTextContainer.resizeHeigth();
            const quoteApearence = window.addEventListener('scroll', () => {
                if (scrollListener.getScrollDirection() === 'down' && scrollListener.newScrollY >= 70) {
                    console.log('Bonjour');
                    // stendhalQuote.topDraggedAppearence();
                }
            })
        });
    }, 1500)
    function setTopGearsOnScroll() {
    }
});

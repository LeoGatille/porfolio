import { ScrollListener } from './class/scrollListener';
import { IntroductionTextContainer } from './class/introductionTextContainer';
import { IntroAnimation } from './class/introAnimation';
import { RelativeWidth } from './class/relativeWidth';
import { Gear } from './class/gear';
import * as $ from 'jquery'
console.log('Bonjour les enfants');
window.scrollTo(500,500)
$(document).ready(() => {
    const topGears: Gear[] = [
        new Gear('one', -0.2),
        new Gear('two', 0.7),
        new Gear('three', -0.4),
        new Gear('four', 1.5),
        new Gear('five', -2.9),
    ]
    const xpGears = [
        new Gear('xp-one', -0.5),
        new Gear('xp-two', 0.2),
        new Gear('xp-three', -0.1),
        new Gear('xp-four', 0.3),
        new Gear('xp-five', -0.4),
    ]
    const skillsGears = [
        new Gear('skills-one', -0.2),
        new Gear('skills-two', 0.5),
        new Gear('skills-three', -0.4),
    ]
    const lastGears = [
        new Gear('last-gears-one', 0.5),
        new Gear('last-gears-two', -0.5),
        new Gear('last-gears-three', 0.1),
        new Gear('last-gears-four', -0.3),
        new Gear('last-gears-five', 0.2),
    ]
    topGears.forEach(gear => {
        gear.animation()
    })
    xpGears.forEach(gear => {
        gear.animation()
    })
    skillsGears.forEach(gear => {
        gear.animation()
    })
    lastGears.forEach(gear => {
        gear.animation()
    })
    const testResize = new RelativeWidth('top-SVG', 'first-ground-circle', 15);
    const introAnimationManager = new IntroAnimation(topGears);
    // const introductionTextContainer = new IntroductionTextContainer($('#overflow-container'));
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
    // $('main').css('display', 'none');
    // $('#bottom-gear-container').css('display', 'none');
    // $('.xp-gears').css('opacity', '0');
    $('#biographie').css('display', 'none');
    setTimeout(() => {
        const myPromise = introAnimationManager.rise();
        introAnimationManager.promise.then(test => {
            // introductionTextContainer.resizeHeigth();
            // const textAppear = new IntroductionTextContainer($('.presentation-text-container'));
            // $('main').css('display', 'flex');
            // $('#bottom-gear-container').css('display', 'flex');
            // $('.xp-gears').css('opacity', '1');
            $('body').css('overflow-y', 'scroll')
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

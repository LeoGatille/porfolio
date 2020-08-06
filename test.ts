import { IntroAnimation } from './class/introAnimation';
import { RelativeWidth } from './class/relativeWidth';
import { Gear } from './class/gear';
import { TopGears } from './class/topGears';
import * as $ from 'jquery'
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
    setTimeout(() => {
        introAnimationManager.rise();
    }, 1500)
});

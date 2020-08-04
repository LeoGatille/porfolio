import { Gear } from './class/gear';
import { TopGears } from './class/topGears';
import * as $ from 'jquery'
console.log('Bonjour les enfants');
$(document).ready(() => {
    // const topGears: TopGears = new TopGears();
    // $('#first-ground-circle').click(() => {
    //     topGears.initialAnimation()
    // })
    const topGears: any = {
        one: new Gear('one', -0.2),
        two: new Gear('two', 0.7),
        three: new Gear('three', -0.4),
        four: new Gear('four', 1.5),
        five: new Gear('five', -1.9),
    }

    for (const key in topGears) {
        topGears[key].animation()
    }

    // const firstGear = new Gear('four', 3);
    // firstGear.animation();
    // setTimeout(() => {
    //     firstGear.stopRotation()
    // }, 2000)
});

import { Gear } from './class/gear';
import { TopGears } from './class/topGears';
import * as $ from 'jquery'
console.log('Bonjour les enfants');
$(document).ready(() => {
    // const topGears: TopGears = new TopGears();
    // $('#first-ground-circle').click(() => {
    //     topGears.initialAnimation()
    // })
    const firstGear = new Gear('four', -3);
    requestAnimationFrame(firstGear.animation);
    // firstGear.a();
});

//* deported into TopGears.ts
// function speenTopGears() {
//     getTopGears();
// }
// function getTopGears() {
//     return {

//     }
//     const one = $('#one');
//     const two = $('#two');
//     const three = $('#three');
//     const four = $('#four');
//     const five = $('#five');
//     const six = $('#six');
// }

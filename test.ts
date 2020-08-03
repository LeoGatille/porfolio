import { TopGears } from './class/topGears';
import * as $ from 'jquery'
console.log('Bonjour les enfants');
$(document).ready(() => {
    const topGears: TopGears = new TopGears();
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

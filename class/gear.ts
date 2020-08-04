import * as $ from 'jquery';

export class Gear {
    constructor(id: string, speed: number) {
        this.myGear = $('#' + id);
        this.myGear.css({ 'transform-origin': 'center', });
        //this.speening = true;
        this.speed = speed;
    }
    speed: number;
    speening = true;
    // myGear: JQuery<HTMLElement>;
    myGear: JQuery<HTMLElement>;
    currentRotationDeg = 0;
    request: any;
    animation = () => {
        this.request = requestAnimationFrame(this.animation);
        this.test();
    }
    public stopRotation() {
        cancelAnimationFrame(this.request);
    }
    public test() {
        if (this.speening) {
            this.setRotationDeg();
            this.myGear.css({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
            this.test;
        }

    }

    private setRotationDeg() {
        this.currentRotationDeg += 1 * this.speed;
    }
}

//! Backup fuckedUp
/*
import * as $ from 'jquery';

export class Gear {
    constructor(id: string, speed: number) {
        // this.myGear = $('#' + id);
        this.myGear = document.getElementById(id)
        this.myGear.style.transformOrigin = 'center';
        // this.myGear.css({ 'transform-origin': 'center', });
        this.speening = true;
        this.speed = speed;
        // this.myGear = document.getElementById(id);
    }
    speed: number;
    speening = false;
    // myGear: JQuery<HTMLElement>;
    myGear: HTMLElement;
    currentRotationDeg = 0;
    // animation = requestAnimationFrame(this.test);
    // rotation = requestAnimationFrame(this.test);
    // rotation = setInterval(() => {
    //     if (this.speening) {
    //         this.setRotationDeg();
    //         this.myGear.css({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
    //     }
    // }, 41.6);

    public test() {
        if (this.speening) {
            this.setRotationDeg();
            this.myGear.style.transform = 'rotate(' + this.currentRotationDeg + 'deg)'
            // this.myGear.animate({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
            this.test;
        }

    }
    public stopRotation() {
        // clearInterval(this.rotation);
    }
    private setRotationDeg() {
        this.currentRotationDeg += 1 * this.speed;
    }
}
*/
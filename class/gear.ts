import * as $ from 'jquery';

export class Gear {
    constructor(id: string, speed: number) {
        this.myGear = $('#' + id);
        this.myGear.css({ 'transform-origin': 'center', });
        this.speed = speed;
    }
    speed: number;
    speening = true;
    myGear: JQuery<HTMLElement>;
    currentRotationDeg = 0;
    request: any;
    animation = () => {
        this.request = requestAnimationFrame(this.animation);
        this.test();
    }
    public editRoationSpeed(newSpeed: number) {
        this.speed = newSpeed;
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
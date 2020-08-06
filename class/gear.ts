import * as $ from 'jquery';

export class Gear {
    constructor(id: string, speed: number) {
        this.id = id;
        this.myGear = $('#' + id);
        this.myGear.css({ 'transform-origin': 'center', });
        this.speed = speed;
        this.lastLength = document.getElementById(this.id).getBoundingClientRect().width;
        this.trueLength = document.getElementById(this.id).getBoundingClientRect().width;
    }
    id: string;
    speed: number;
    speening = true;
    myGear: JQuery<HTMLElement>;
    currentRotationDeg = 0;
    request: any;
    lastLength: number;
    trueLength: number;
    distortionPercentage: number;
    animation = () => {
        this.request = requestAnimationFrame(this.animation);
        this.rotate();
    }
    public editRoationSpeed(newSpeed: number) {
        this.speed = newSpeed;
    }
    public stopRotation() {
        cancelAnimationFrame(this.request);
    }
    private rotate() {
        if (this.speening) {
            this.setRotationDeg();
            this.myGear.css({ 'transform': 'rotate(' + this.currentRotationDeg + 'deg)', });
            this.rotate;
        }
    }
    private setRotationDeg() {
        if (this.currentRotationDeg === 360) {
            this.currentRotationDeg = 0;
        }
        this.currentRotationDeg += 1 * this.speed;
    }

}
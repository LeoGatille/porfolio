import { Gear } from './gear';
import * as $ from 'jquery';
export class StopingGearAnimation {
    constructor(gear: Gear, breakInterval: number, breakIntensity: number, rollBackAngle: number = null, rollBackMaxSpeed: number = null) {
        this.gear = gear;
        this.breakInterval = breakInterval;
        this.breakIntensity = breakIntensity;
        this.rollBackAngle = rollBackAngle;
        this.rollBackMaxSpeed = rollBackMaxSpeed;
    }
    gear: Gear;
    breakInterval: number;
    breakIntensity: number
    rollBackAngle: number;
    rollBackMaxSpeed: number;
    rollBacked = false;
    breaking = setInterval(() => {
        this.setBreaking();
    }, this.breakInterval);
    request: any;
    setMomentumSuppension = () => {
        this.gear.animation();
        this.request = requestAnimationFrame(this.setMomentumSuppension)
        let momentumSpeed = this.gear.speed;
        this.gear.editRoationSpeed((speed: number) => {
            // return speed + (0.01);
        });
    }
    setBreaking() {
        this.gear.editRoationSpeed((speed: number) => {
            return speed - (speed >= 0 ? this.breakIntensity : (this.breakIntensity * -1));
        });
        if (((this.gear.speed >= 0 ? this.gear.speed : (this.gear.speed * -1)) - this.breakIntensity) <= 0) {
            this.gear.speed = 0;
            if (!this.rollBacked) {
                this.setRollBack();
            } else {
                this.gear.stopRotation();

            }
            clearInterval(this.breaking);
            // this.setRollBack();
            // this.setMomentumSuppension()
        }
    }
    public setRollBack() {
        this.gear.editRoationSpeed((speed: number) => {
            return (Math.random() * (0.5 - 0.1 + 1) + 0.5) * -1;
        });
        setTimeout(() => {
            this.gear.stopRotation()
        }, Math.floor(Math.random() * (300 - 100 + 1) + 50));
    }
    // public setRollBack() {
    //     const initalDeg = this.gear.currentRotationDeg;
    //     this.gear.animation();
    //     const rollBack = setInterval(() => {
    //         if (initalDeg - (this.gear.currentRotationDeg <= 0 ? this.gear.currentRotationDeg : (this.gear.currentRotationDeg * -1)) < this.rollBackAngle) {
    //             if (this.gear.speed < this.rollBackMaxSpeed) {
    //                 this.gear.editRoationSpeed((speed: number) => {
    //                     return speed + (speed >= 0 ? 0.1 : (-0.1));
    //                 });
    //             }
    //         } else {

    //         }
    //     }, 50);
    // }

}
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
    breaking = setInterval(() => {
        this.gear.editRoationSpeed((speed: number) => {
            return speed - (speed >= 0 ? this.breakIntensity : (this.breakIntensity * -1));
        });
        if (((this.gear.speed >= 0 ? this.gear.speed : (this.gear.speed * -1)) - this.breakIntensity) <= 0) {
            this.gear.speed = 0;
            this.gear.stopRotation();
            clearInterval(this.breaking);
            this.setRollBack();
        }
    }, this.breakInterval);

    public setMomentumSuppension() {
        this.gear.animation();
        let momentumSpeed = this.gear.speed / 4;
        const momentum = setInterval(() => {
            this.gear.editRoationSpeed((speed: number) => {
                return speed - (speed >= 0 ? 0.1 : -0.1);
            });
        }, 50);
    }

    private setRollBack() {
        const initalDeg = this.gear.currentRotationDeg;
        this.gear.animation();
        const rollBack = setInterval(() => {
            if (initalDeg - (this.gear.currentRotationDeg <= 0 ? this.gear.currentRotationDeg : (this.gear.currentRotationDeg * -1)) < this.rollBackAngle) {
                if (this.gear.speed < this.rollBackMaxSpeed) {
                    this.gear.editRoationSpeed((speed: number) => {
                        return speed + (speed >= 0 ? 0.1 : (-0.1));
                    });
                }
            } else {

            }
        }, 50);
    }

}
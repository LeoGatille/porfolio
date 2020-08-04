import * as $ from 'jquery'
export class TopGears {
    firstLaunch = true;
    one = $('#one');
    two = $('#two');
    three = $('#three');
    four = $('#four');
    five = $('#five');
    gearsArray: JQuery<HTMLElement>[] = [];
    initColor = true;
    constructor() {
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.initialAnimation();
    }
    public initialAnimation() {
        this.setInitialRotation();
        this.setInitalSpeed();
        setTimeout(() => {
            this.stopRotation();
        }, 2000);
    }
    private setInitialRotation() {
        this.gearsArray.forEach((gear, i) => {
            if (i % 2) {
                gear.addClass('rotation-clock');
            } else {
                gear.addClass('rotation-reversed-clock');
            }
        });
    }
    private setInitalSpeed() {
        this.gearsArray.forEach((gear, i) => {
            gear.addClass(`rotation-speed-fast-${i + 1}`);
        });
    }
    private stopRotation() {
        const anglesArray: number[] = this.getCurrentRotationsValues();
        this.gearsArray.forEach((gear, i) => {
            gear.addClass('stoping-transition');
            gear.css('transform', 'matrix(' + anglesArray[i] + ')');
            gear.removeClass(`rotation-speed-fast-${i + 1}`);
        });
    }
    private getRotationDegrees(gear: JQuery<HTMLElement>) {
        const matrix = gear.css("transform");
        let matrixValues: any = matrix.split('(')[1];
        matrixValues = matrixValues.split(')')[0],
            matrixValues = matrixValues.split(',');
        return matrixValues;
    }
    private getCurrentRotationsValues() {
        const rotationsValuesArray: number[] = [];
        this.gearsArray.forEach(gear => {
            rotationsValuesArray.push(this.getRotationDegrees(gear));
        });
        return rotationsValuesArray;
    }
    private setRegularSpeed() {
        this.gearsArray.forEach((gear, i) => {
            gear.addClass(`rotation-speed-slow-${i + 1}`);
        });
    }
    private setGearsToinitialRotation() {
        this.gearsArray.forEach(gear => {
            // gear.addClass()
        })
    }
}
import * as $ from 'jquery'
export class TopGears {
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
        this.setInitialRotation();
        this.setInitalSpeed();
        setTimeout(() => {
            this.stopRotation();
            // setTimeout(() => {
            //     this.setRegularSpeed();
            // }, 200);
        }, 1000);
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
        console.log('angles => ', anglesArray);

        this.gearsArray.forEach((gear, i) => {
            gear.css('transform', 'matrix(' + anglesArray[i] + ')');
            gear.removeClass(`rotation-speed-fast-${i + 1}`);
        });
    }
    getRotationDegrees(gear: JQuery<HTMLElement>) {
        const matrix = gear.css("transform");
        let matrixValues: any = matrix.split('(')[1];
        matrixValues = matrixValues.split(')')[0],
            matrixValues = matrixValues.split(',');
        console.log('MatrixValues => ', matrixValues);
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
    // private switchColors() {
    //     if (this.initColor) {
    //         console.log('toto');
    //         const toto = $('.cls-2')
    //         toto.removeClass('cls-2');
    //         toto.addClass('gears-init-color-fill');
    //         // $('.cls-2').addClass('gears-seconday-color-fill');
    //     }
    // }
}
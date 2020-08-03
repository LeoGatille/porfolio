import * as $ from 'jquery'
export class TopGears {
    one = $('#one');
    two = $('#two');
    three = $('#three');
    four = $('#four');
    five = $('#five');
    gearsArray: JQuery<HTMLElement>[] = [];
    constructor() {
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.setInitialRotation();
        this.setInitalSpeed();
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
            gear.addClass(`rotation-speed-${i + 1}`);
        });
    }
}
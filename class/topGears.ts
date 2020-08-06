import * as $ from 'jquery'
export class TopGears {
    firstLaunch = true;
    one = $('#one');
    two = $('#two');
    three = $('#three');
    four = $('#four');
    five = $('#five');
    background = $('#top-gear-container');
    gearsArray: JQuery<HTMLElement>[] = [];
    initColor = true;
    constructor() {
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.initialAnimation();
    }
    public initialAnimation() {
        this.gearsArray.forEach((gear) => {
            this.switchColor(gear);
        })
    }
    private switchColor(gear: JQuery<HTMLElement>) {
        const childrenJQueryObj = gear.children();
        const childrenArray = childrenJQueryObj.toArray();
        childrenArray.forEach((jquerMachin, i) => {
            jquerMachin.classList.replace('yellow-fill', 'gears-seconday-color-fill');
            jquerMachin.classList.replace('yellow-stroke', 'gears-seconday-color-stroke');
            jquerMachin.classList.replace('black-fill', 'gears-init-color-fill');
        });
        this.background.addClass('yellow-background');
        this.background.removeClass('dark-background');
    }
}
import * as $ from 'jquery';
export class IntroAnimation {
    firstLaunch = true;
    one = $('#one');
    two = $('#two');
    three = $('#three');
    four = $('#four');
    five = $('#five');
    background = $('#top-gear-container');
    centralCircle = $('#first-ground-circle');
    overflowContainer = $('#overflow-container')
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
        childrenArray.forEach((jqueryMachin, i) => {
            if (jqueryMachin.classList.contains('dark-fill')) {
                jqueryMachin.classList.replace('dark-fill', 'yellow-fill');
            } else if (jqueryMachin.classList.contains('yellow-fill')) {
                jqueryMachin.classList.replace('yellow-fill', 'dark-fill');
            }
            if (jqueryMachin.classList.contains('yellow-stroke')) {
                jqueryMachin.classList.replace('yellow-stroke', 'dark-stroke');
            }
        });
        this.background.addClass('yellow-background');
        this.background.removeClass('dark-background');
        this.centralCircle.addClass('yellow-background');
        this.centralCircle.removeClass('dark-background');
        this.overflowContainer.addClass('dark-background');
        this.overflowContainer.removeClass('yellow-background');
    }
}
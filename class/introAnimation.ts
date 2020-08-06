import { Gear } from './gear';
import * as $ from 'jquery';
export class IntroAnimation {
    constructor(allGears: Gear[]) {
        this.typedGears = allGears;
        this.gearsArray = [
            this.one, this.two, this.three, this.four, this.five,
        ];
        this.setInitialHeight();
        this.backgroundMaxHeigth = this.background.height();
        //this.initialAnimation();
    }
    typedGears: Gear[];
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
    request: any;
    backgroundHeight = window.window.innerHeight;
    backgroundMaxHeigth: number;
    rise = () => {
        this.request = requestAnimationFrame(this.rise);
        if (this.backgroundHeight > (window.window.innerWidth > 1200 ? 650 : (window.window.innerHeight / 2))) {
            this.speedUpGears();
            this.riseBottomElements();
        } else {
            cancelAnimationFrame(this.request);
            setTimeout(() => {
                this.typedGears.forEach(gear => {
                    gear.stopRotation();
                })
                this.launchSwitchColors();
            }, 300)
        }
    }
    private speedUpGears() {
        this.typedGears.forEach(gear => {
            gear.editRoationSpeed((currentSpeed: number) => {
                return currentSpeed + 0.3;
            });
        });
    }
    private setInitialHeight() {
        this.background.css('height', `${this.backgroundHeight}px`);
        this.overflowContainer.css('height', '0');
    }
    public launchSwitchColors() {
        this.gearsArray.forEach((gear) => {
            this.switchColor(gear);
        })
    }
    private riseBottomElements() {
        this.backgroundHeight = this.backgroundHeight - 5;
        this.background.css('height', `${this.backgroundHeight}px`);
        this.overflowContainer.css('height', `${this.overflowContainer.height() + 5}`);
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
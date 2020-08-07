import { StopingGearAnimation } from './stoppingGearAnim';
import { BouncingAnimation } from './bouncingAnimation';
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
    backgroundCircleContainer = $("#background-circle-container");
    backgroundCircle = $("#background-circle");
    rise = () => {
        this.request = requestAnimationFrame(this.rise);
        if (this.backgroundHeight > window.window.innerHeight / 2) {
            this.speedUpGears();
            this.riseBottomElements();
        } else {
            cancelAnimationFrame(this.request);
            //this.bouncingBackgroud
            this.typedGears.forEach((gear, i) => {
                //gear.stopRotation();
                const breaking = new StopingGearAnimation(gear, 50, 0.1, 30, 0.4);
            });
            this.request = requestAnimationFrame(this.increaseBackgroundCircleScale);
            const bouncingBackground = new BouncingAnimation(this.background, this.overflowContainer, 40);
            this.launchSwitchColors();

        }
    }
    jumpOneFrame = false;
    increaseBackgroundCircleScale = () => {
        if (this.backgroundCircle.height() < 2300) {
            if (this.backgroundCircle.height() < 500) {
                this.request = requestAnimationFrame(this.increaseBackgroundCircleScale);
                this.backgroundCircle.css('height', `${this.backgroundCircle.height() + 150}px`);
                this.backgroundCircle.css('width', `${this.backgroundCircle.width() + 200}px`);
            } else if (this.backgroundCircle.height() < 1500) {
                this.request = requestAnimationFrame(this.increaseBackgroundCircleScale);
                this.backgroundCircle.css('height', `${this.backgroundCircle.height() + 150}px`);
                this.backgroundCircle.css('width', `${this.backgroundCircle.width() + 200}px`);
            } else {
                //* slow the animation on it end
                this.request = requestAnimationFrame(this.increaseBackgroundCircleScale);
                this.backgroundCircle.css('height', `${this.backgroundCircle.height() + 50}px`);
                this.backgroundCircle.css('width', `${this.backgroundCircle.width() + 70}px`);
            }

        } else {
            cancelAnimationFrame(this.request);
            //*change BACKGROUND color here because of lazyness....
            this.background.addClass('yellow-background');
            this.background.removeClass('dark-background');
            this.backgroundCircle.remove();

        }

    }
    private speedUpGears() {
        this.typedGears.forEach(gear => {
            gear.editRoationSpeed((currentSpeed: number) => {
                return currentSpeed + 0.1;
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
        this.backgroundCircleContainer.css('height', `${this.backgroundHeight}px`);
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
        this.centralCircle.addClass('yellow-background');
        this.centralCircle.removeClass('dark-background');
        this.overflowContainer.addClass('dark-background');
        this.overflowContainer.removeClass('yellow-background');

    }
}
import { Gear } from './gear';
export class BouncingAnimation {
    constructor(background: JQuery<HTMLElement>, overflowContainer: JQuery<HTMLElement>, bounceValue: number) {
        this.background = background;
        this.overflowContainer = overflowContainer;
        this.bounceValue = bounceValue;
        this.animation();
    }

    background: JQuery<HTMLElement>;
    overflowContainer: JQuery<HTMLElement>;
    bounceValue: number;
    request: any;
    bouncePhase = 1;
    bounceValueCounter = 0;
    private animation = () => {
        this.request = requestAnimationFrame(this.animation);
        this.bounceManager();
    }
    private bounce(increment: number, maxValue: number) {
        this.background.css('height', `${this.background.height() + (increment * -1)}`);
        this.overflowContainer.css('height', `${this.overflowContainer.height() + increment}`);
        this.bounceValueCounter += increment * -1;
        if (this.bounceValueCounter === maxValue) {
            this.bouncePhase++
            console.log('BouncePhase => ', this.bouncePhase);
        }
    }
    private bounceManager() {
        switch (this.bouncePhase) {
            case (1):
                this.bounce(((this.bounceValue / 10) * - 1), this.bounceValue);
                break;
            case (2):
                this.bounce(this.bounceValue / 4, 0);
                break;
            case (3):
                this.bounce(((this.bounceValue / 20) * - 1), (this.bounceValue / 2));
                break;
            case (4):
                this.bounce(this.bounceValue / 8, 0);
                break;
            default:
                cancelAnimationFrame(this.request)
                break;
        }
    }


}
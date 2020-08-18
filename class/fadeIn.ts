import * as $ from 'jquery';
export class FadeIn {
    constructor(target: JQuery<HTMLElement>) {
        this.target = target;
    }
    target: JQuery<HTMLElement>;
    isDisplayed = false;
    request: any;
    jumpFrame = false;
    public topDraggedAppearence() {
        this.topDrag();
        this.target.fadeIn(1000, 'swing');
    }
    private topDrag = () => {
        // console.log(this.target.css('padding-top'));
        if (this.jumpFrame) {
            cancelAnimationFrame(this.request);
            this.jumpFrame = false;
            this.topDrag();
        } else {
            this.jumpFrame = true
            this.request = requestAnimationFrame(this.topDrag);
            if (parseInt(this.target.css('padding-top').split('px')[0], 10) <= 0) {
                cancelAnimationFrame(this.request);
            } else {
                if (parseInt(this.target.css('padding-top').split('px')[0], 10) >= 20) {
                    this.target.css('padding-top', parseInt(this.target.css('padding-top').split('px')[0], 10) - 1 + 'px');
                }
                this.target.css('padding-top', parseInt(this.target.css('padding-top').split('px')[0], 10) - 0.8 + 'px');
            }
        }
    }
}
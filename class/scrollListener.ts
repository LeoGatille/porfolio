import * as $ from 'jquery';

export class ScrollListener {
    constructor() { }
    oldScrollY: number;
    newScrollY: number;
    scrollGap: number;
    scrollValue = window.addEventListener('scroll', () => this.setScrollValues())
    private setScrollValues() {
        this.oldScrollY = this.newScrollY;
        this.newScrollY = window.scrollY;
    }
    public getScrollDirection() {
        let direction: string = null;
        if (this.newScrollY < this.oldScrollY) {
            // console.log('up');
            direction = 'up';
        } else {
            // console.log('down');
            direction = 'down';
        }
        return direction;
    }
}
export class ScrollEvents {
    constructor() { }
    scrollListener = new ScrollListener();
    public fadeIn(scrollY: number, target: JQuery<HTMLElement>) {
        if (this.scrollListener.newScrollY === scrollY) {
            target.fadeIn();
        }
    }
}
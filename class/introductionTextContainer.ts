import { ScrollListener } from './scrollListener';
export class IntroductionTextConatainer {
    constructor(target: JQuery<HTMLElement>) {
        this.container = target;
    }
    container: JQuery<HTMLElement>;
    scrollListener = new ScrollListener();
    request: any;
    resized = 0;
    displayed = false;
    resizeHeigth = () => {
        this.resized++;
        this.request = requestAnimationFrame(this.resizeHeigth);
        this.container.css('height', `${this.container.height() + 10}px`);
        if (this.resized === 10) {
            cancelAnimationFrame(this.request);
        }
    }
    contentFadeIn = window.addEventListener('scroll', () => {
        if (!this.displayed && this.scrollListener.getScrollDirection() === 'down' && this.scrollListener.newScrollY <= 50) {
            console.log('fuck');
            this.displayed = true;
            $('#presentation').fadeIn();
        }
    });
}
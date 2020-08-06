import * as $ from 'jquery'
export class RelativeWidth {
    constructor(idReference: string, idTarget: string, percentageWidth: number) {
        this.idReference = idReference;
        this.reference = $('#' + idReference);
        this.target = $('#' + idTarget);
        this.referenceWidth = document.getElementById(idReference).getBoundingClientRect().width;
        // this.referenceWidth = this.reference.width();
        this.percentageWidth = percentageWidth;
        this.editTargetWidthNheight();
    }
    idReference: string;
    percentageWidth: number
    reference: JQuery<HTMLElement>;
    target: JQuery<HTMLElement>;
    referenceWidth: number;
    windowResizeListener = window.addEventListener('resize', () => this.editTargetWidthNheight());
    //? Do I need targetWidth ?
    private calculTargetWidth() {
        return (document.getElementById(this.idReference).getBoundingClientRect().width * this.percentageWidth) / 100;
    }
    private editTargetWidthNheight() {
        this.target.css('width', `${this.calculTargetWidth()}px`);
        this.target.css('height', `${this.calculTargetWidth()}px`);
    }
    //? Control if .width() works better than .css('width')
    private extractWidthPX(domElement: JQuery<HTMLElement>): number {

        const widthAndUnit: string = domElement.css('width');
        return parseInt(widthAndUnit.split('px')[0], 10);
    }
} 
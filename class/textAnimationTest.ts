import * as $ from 'jquery';
import { time } from 'console';

export class textAnimTest {
    constructor(target: string, txt?: string, speed: number = null, cryptageLvl?: number) {
        this.target = $(target);
        this.randomTxtContainer = this.target.children('.crypted');
        this.trueTxtContainer = this.target.children('.uncrypted');
        this.mask = this.target.children('.mask');
        this.speed = speed ? speed : 0;
        this.originalTxt = txt ? txt : null;
        this.splitedTxt = txt ? txt.split('') : null;
        this.cryptageLvl = cryptageLvl ? cryptageLvl : null
        if (this.originalTxt) {
            this.suffleTxt();
        }
    }
    speed: number
    target: JQuery<HTMLElement>;
    trueTxtContainer: JQuery<HTMLElement>;
    randomTxtContainer: JQuery<HTMLElement>;
    mask: JQuery<HTMLElement>;
    originalTxt: string;
    splitedTxt: string[];
    cryptedTxt: string[] = [];
    cryptageLvl: number;
    randomTxt: string[] = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z',

        'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p',
        's', 'r', 's', 't',
        'u', 'v', 'w', 'x',
        'y', 'z',

        '!', '§', '$', '%',
        '&', '/', '(', ')',
        '=', '?', '_', '<',
        '>', '^', '°', '*',
        '#', '-', ':', ';', '~',
    ];
    request: any;
    removalMaskValue = 0;
    private extractCssValue(attribut: string, element: JQuery<HTMLElement>) {
        console.log('Ectracted => ', parseInt(element.css(attribut).split('px')[0], 10));
        return parseInt(element.css(attribut).split('px')[0], 10);
    }
    removeMask = () => {
        if (this.mask.hasClass('yellow-background')) {
            this.mask.addClass('dark-background');
            this.mask.removeClass('yellow-background');
            this.mask.addClass('dark-shadow');
        }
        console.log('Mask => ', this.mask.width());

        this.request = requestAnimationFrame(this.removeMask);
        this.mask.css('margin-left', `${this.extractCssValue('margin-left', this.mask) + this.speed}px`);
        this.removalMaskValue += this.speed;
        if (this.removalMaskValue >= this.mask.width()) {
            cancelAnimationFrame(this.request);
        }
    }
    public animationDecryptText() {
        let delay = 0;
        this.splitedTxt.forEach((letter, splitedTxtIndex) => {
            const cryptedString = this.cryptedTxt[splitedTxtIndex];
            cryptedString.split('').forEach((randomLetter, cryptedString) => {
                this.delayDisplay(delay, randomLetter, true);
                delay += 20;
            });
            delay += 20;
            this.delayDisplay(delay, letter);
        });
    }
    private delayDisplay(delay: number, txtToDisplay: string, cryptedCharactere = false) {
        setTimeout(() => {
            if (cryptedCharactere) {
                this.randomTxtContainer.text(txtToDisplay);
            } else {
                this.randomTxtContainer.text('');
                this.trueTxtContainer.text((index, currentTxt) => {
                    return (currentTxt ? currentTxt : '') + txtToDisplay;
                });
            }
        }, delay - this.speed);
    }
    private suffleTxt() {
        this.splitedTxt.forEach(letter => {
            this.cryptedTxt.push(this.generateRandomString())
        });
    }
    private generateRandomString(): string {
        let randomString = '';
        for (let i = 0; i < (this.cryptageLvl ? this.cryptageLvl : 8); i++) {
            const randomLetter = this.randomTxt[Math.floor(Math.random() * (this.randomTxt.length + 1))];
            if (this.originalTxt.includes(randomLetter)) {
                i--;
            } else {
                randomString += randomLetter;
            }
        }
        return randomString;
    }
}
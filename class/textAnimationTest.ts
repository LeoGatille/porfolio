import * as $ from 'jquery';
import { time } from 'console';

export class textAnimTest {
    constructor(target: string, txt: string) {
        this.target = $(target);
        this.randomTxtContainer = this.target.children('.crypted');
        this.trueTxtContainer = this.target.children('.uncrypted');
        console.log('RandoMContainer => ', this.randomTxtContainer);

        this.originalTxt = txt;
        this.splitedTxt = txt.split('');
        this.suffleTxt();
    }
    target: JQuery<HTMLElement>;
    trueTxtContainer: JQuery<HTMLElement>;
    randomTxtContainer: JQuery<HTMLElement>;
    originalTxt: string;
    splitedTxt: string[];
    cryptedTxt: string[] = [];
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
    public animationDecryptText() {
        let delay = 0;
        this.splitedTxt.forEach((letter, splitedTxtIndex) => {
            const cryptedString = this.cryptedTxt[splitedTxtIndex];
            cryptedString.split('').forEach((randomLetter, cryptedString) => {
                this.delayDisplay(delay, randomLetter, true);
                delay += 40;
            });
            delay += 40;
            this.delayDisplay(delay, letter);
            // if (this.trueTxtContainer.text().length === this.originalTxt.length) {
            //     return 'toto'
            // }
        });
    }
    private delayDisplay(delay: number, txtToDisplay: string, cryptedCharactere = false) {
        console.log('Delay => ', cryptedCharactere, ' ', delay);
        setTimeout(() => {
            if (cryptedCharactere) {
                this.randomTxtContainer.text(txtToDisplay);

            } else {
                this.randomTxtContainer.text('');
                this.trueTxtContainer.text((index, currentTxt) => {
                    return (currentTxt ? currentTxt : '') + txtToDisplay;
                });
            }
        }, delay);
    }
    private suffleTxt() {
        this.splitedTxt.forEach(letter => {
            this.cryptedTxt.push(this.generateRandomString())
        });
    }
    private generateRandomString(): string {
        let randomString = '';
        for (let i = 0; i < 8; i++) {
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
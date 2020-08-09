import * as $ from 'jquery';
export interface txtShuffled {
    originalContents: string[];
    shuffledContent: string[][];
}
export class TextAnimation {
    constructor(target: string) {
        this.textContainer = $(target);
    }
    textContainer: JQuery<HTMLElement>;
    randomText: string[] = [
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
    public titleAppear() {
        this.letterByLetterDisplay(this.shuffleText());
    }
    private letterByLetterDisplay(txtShuffled: txtShuffled) {
        let delay = 0;
        this.textContainer.each((index, element) => {
            txtShuffled.shuffledContent[index].forEach(randomString => {
                randomString.split(',').forEach((randomLetter) => {
                    delay += 200;
                    this.delayDisplay(element, delay, randomLetter);
                });
            })
        })
    }
    private delayDisplay(element: HTMLElement, delay: number, txt: string) {
        setTimeout(() => {
            if (!element.innerText.length) {
                element.innerText += txt;
            } else {
                element.innerText = element.innerText.slice(0, -1);
                element.innerText += txt;
            }
        }, delay);
    }
    private shuffleText(): txtShuffled {
        const originalContents: string[] = [];
        const shuffledContent: string[][] = [];
        this.textContainer.each((index, element) => {
            originalContents.push(element.innerText);
            element.innerText = '';
        });
        originalContents.forEach(innerText => {
            const splitedInnerText = innerText.split('');
            const fullRandomString: string[] = [];
            splitedInnerText.forEach(letter => {
                const randomLetterShuffled = [];
                for (let i = 0; i < 5; i++) {
                    const randomLetter = this.randomText[Math.floor(Math.random() * (this.randomText.length - 0 + 1)) + 0];
                    if (randomLetter !== letter) {
                        randomLetterShuffled.push(randomLetter);
                    }
                }
                randomLetterShuffled.push(letter);
                fullRandomString.push(randomLetterShuffled.join());
            });
            shuffledContent.push(fullRandomString);
        });
        console.log('Original => ', originalContents);
        console.log('random => ', shuffledContent);
        return {
            originalContents,
            shuffledContent
        }
    }

}
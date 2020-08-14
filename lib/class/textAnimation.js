//! Obsolete
// import * as $ from 'jquery';
// export interface txtShuffled {
//     originalContents: string[];
//     shuffledContent: string[][];
// }
// export class TextAnimation {
//     constructor(target: string) {
//         this.textContainer = $(target);
//     }
//     textContainer: JQuery<HTMLElement>;
//     randomText: string[] = [
//         'A', 'B', 'C', 'D',
//         'E', 'F', 'G', 'H',
//         'I', 'J', 'K', 'L',
//         'M', 'N', 'O', 'P',
//         'Q', 'R', 'S', 'T',
//         'U', 'V', 'W', 'X',
//         'Y', 'Z',
//         'a', 'b', 'c', 'd',
//         'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l',
//         'm', 'n', 'o', 'p',
//         's', 'r', 's', 't',
//         'u', 'v', 'w', 'x',
//         'y', 'z',
//         '!', '§', '$', '%',
//         '&', '/', '(', ')',
//         '=', '?', '_', '<',
//         '>', '^', '°', '*',
//         '#', '-', ':', ';', '~',
//     ];
//     public titleAppear() {
//         this.textContainer.each((i, element) => {
//             element.classList.remove('hide');
//         });
//         this.letterByLetterDisplay(this.shuffleText());
//     }
//     private letterByLetterDisplay(txtShuffled: txtShuffled) {
//         let delay = 0;
//         this.textContainer.each((index, element) => {
//             txtShuffled.shuffledContent[index].forEach((randomString, i) => {
//                 randomString.split(',').forEach((randomLetter) => {
//                     delay += 50;
//                     this.delayDisplay(element, delay, randomLetter, txtShuffled.originalContents[index], i);
//                 });
//             })
//         })
//     }
//     private delayDisplay(element: HTMLElement, delay: number, txt: string, originalTxt: string, index: number) {
//         const spanCrypted = (element.children)
//         setTimeout(() => {
//             if (txt === originalTxt[index]) {
//                 // spanCrypted.innerText = '';
//                 element.innerText += txt;
//             } else {
//                 // console.log('WTF => ', spanCrypted);
//                 // spanCrypted.forEach(childNode => {
//                 //     childNode.textContent = txt;
//                 // })
//                 // // spanCrypted.innerText = txt;
//             }
//             // if (element.childNodes.length) {
//             //     if (txt === originalTxt[index]) {
//             //         element.innerText += txt;
//             //     }
//             // } else {
//             //     // element.childNode
//             //     element.innerText = txt;
//             //     // element.innerText += txt;
//             // }
//         }, delay);
//     }
//     private shuffleText(): txtShuffled {
//         const originalContents: string[] = [];
//         const shuffledContent: string[][] = [];
//         this.textContainer.each((index, element) => {
//             originalContents.push(element.innerText);
//             element.innerText = '';
//         });
//         originalContents.forEach(innerText => {
//             const splitedInnerText = innerText.split('');
//             const fullRandomString: string[] = [];
//             splitedInnerText.forEach((letter, i) => {
//                 const randomLetterShuffled = [];
//                 for (let i = 0; i < 5; i++) {
//                     const randomLetter = this.randomText[Math.floor(Math.random() * (this.randomText.length - 0 + 1)) + 0];
//                     if (!innerText.includes(randomLetter)) {
//                         randomLetterShuffled.push(randomLetter);
//                     }
//                 }
//                 randomLetterShuffled.push(letter);
//                 fullRandomString.push(randomLetterShuffled.join());
//             });
//             shuffledContent.push(fullRandomString);
//         });
//         console.log('Original => ', originalContents);
//         console.log('random => ', shuffledContent);
//         return {
//             originalContents,
//             shuffledContent
//         }
//     }
// }
//# sourceMappingURL=textAnimation.js.map
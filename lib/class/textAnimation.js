"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAnimation = void 0;
var $ = require("jquery");
var TextAnimation = /** @class */ (function () {
    function TextAnimation(target) {
        this.randomText = [
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
        this.textContainer = $(target);
    }
    TextAnimation.prototype.titleAppear = function () {
        this.textContainer.each(function (i, element) {
            element.classList.remove('hide');
        });
        this.letterByLetterDisplay(this.shuffleText());
    };
    TextAnimation.prototype.letterByLetterDisplay = function (txtShuffled) {
        var _this = this;
        var delay = 0;
        this.textContainer.each(function (index, element) {
            txtShuffled.shuffledContent[index].forEach(function (randomString, i) {
                randomString.split(',').forEach(function (randomLetter) {
                    delay += 50;
                    _this.delayDisplay(element, delay, randomLetter, txtShuffled.originalContents[index], i);
                });
            });
        });
    };
    TextAnimation.prototype.delayDisplay = function (element, delay, txt, originalTxt, index) {
        // console.log('Original => ', originalTxt, 'random => ', txt);
        var spanCrypted = (element.children);
        // console.log('Element => ', element);
        setTimeout(function () {
            if (txt === originalTxt[index]) {
                // spanCrypted.innerText = '';
                element.innerText += txt;
            }
            else {
                // console.log('WTF => ', spanCrypted);
                // spanCrypted.forEach(childNode => {
                //     childNode.textContent = txt;
                // })
                // // spanCrypted.innerText = txt;
            }
            // if (element.childNodes.length) {
            //     if (txt === originalTxt[index]) {
            //         element.innerText += txt;
            //     }
            // } else {
            //     // element.childNode
            //     element.innerText = txt;
            //     // element.innerText += txt;
            // }
        }, delay);
    };
    TextAnimation.prototype.shuffleText = function () {
        var _this = this;
        var originalContents = [];
        var shuffledContent = [];
        this.textContainer.each(function (index, element) {
            originalContents.push(element.innerText);
            element.innerText = '';
        });
        originalContents.forEach(function (innerText) {
            var splitedInnerText = innerText.split('');
            var fullRandomString = [];
            splitedInnerText.forEach(function (letter, i) {
                var randomLetterShuffled = [];
                for (var i_1 = 0; i_1 < 5; i_1++) {
                    var randomLetter = _this.randomText[Math.floor(Math.random() * (_this.randomText.length - 0 + 1)) + 0];
                    if (!innerText.includes(randomLetter)) {
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
            originalContents: originalContents,
            shuffledContent: shuffledContent
        };
    };
    return TextAnimation;
}());
exports.TextAnimation = TextAnimation;
//# sourceMappingURL=textAnimation.js.map
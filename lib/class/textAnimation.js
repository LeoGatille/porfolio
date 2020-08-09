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
        this.letterByLetterDisplay(this.shuffleText());
    };
    TextAnimation.prototype.letterByLetterDisplay = function (txtShuffled) {
        var _this = this;
        var delay = 0;
        this.textContainer.each(function (index, element) {
            txtShuffled.shuffledContent[index].forEach(function (randomString) {
                randomString.split(',').forEach(function (randomLetter) {
                    delay += 200;
                    _this.delayDisplay(element, delay, randomLetter);
                });
            });
        });
    };
    TextAnimation.prototype.delayDisplay = function (element, delay, txt) {
        setTimeout(function () {
            if (!element.innerText.length) {
                element.innerText += txt;
            }
            else {
                element.innerText = element.innerText.slice(0, -1);
                element.innerText += txt;
            }
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
            splitedInnerText.forEach(function (letter) {
                var randomLetterShuffled = [];
                for (var i = 0; i < 5; i++) {
                    var randomLetter = _this.randomText[Math.floor(Math.random() * (_this.randomText.length - 0 + 1)) + 0];
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
            originalContents: originalContents,
            shuffledContent: shuffledContent
        };
    };
    return TextAnimation;
}());
exports.TextAnimation = TextAnimation;
//# sourceMappingURL=textAnimation.js.map
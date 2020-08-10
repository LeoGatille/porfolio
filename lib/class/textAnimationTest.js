"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textAnimTest = void 0;
var $ = require("jquery");
var textAnimTest = /** @class */ (function () {
    function textAnimTest(target, txt) {
        this.cryptedTxt = [];
        this.randomTxt = [
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
        this.target = $(target);
        this.randomTxtContainer = this.target.children('.crypted');
        this.trueTxtContainer = this.target.children('.uncrypted');
        console.log('RandoMContainer => ', this.randomTxtContainer);
        this.originalTxt = txt;
        this.splitedTxt = txt.split('');
        this.suffleTxt();
    }
    textAnimTest.prototype.animationDecryptText = function () {
        var _this = this;
        var delay = 0;
        this.splitedTxt.forEach(function (letter, splitedTxtIndex) {
            var cryptedString = _this.cryptedTxt[splitedTxtIndex];
            cryptedString.split('').forEach(function (randomLetter, cryptedString) {
                _this.delayDisplay(delay, randomLetter, true);
                delay += 40;
            });
            delay += 40;
            _this.delayDisplay(delay, letter);
            // if (this.trueTxtContainer.text().length === this.originalTxt.length) {
            //     return 'toto'
            // }
        });
    };
    textAnimTest.prototype.delayDisplay = function (delay, txtToDisplay, cryptedCharactere) {
        var _this = this;
        if (cryptedCharactere === void 0) { cryptedCharactere = false; }
        console.log('Delay => ', cryptedCharactere, ' ', delay);
        setTimeout(function () {
            if (cryptedCharactere) {
                _this.randomTxtContainer.text(txtToDisplay);
            }
            else {
                _this.randomTxtContainer.text('');
                _this.trueTxtContainer.text(function (index, currentTxt) {
                    return (currentTxt ? currentTxt : '') + txtToDisplay;
                });
            }
        }, delay);
    };
    textAnimTest.prototype.suffleTxt = function () {
        var _this = this;
        this.splitedTxt.forEach(function (letter) {
            _this.cryptedTxt.push(_this.generateRandomString());
        });
    };
    textAnimTest.prototype.generateRandomString = function () {
        var randomString = '';
        for (var i = 0; i < 8; i++) {
            var randomLetter = this.randomTxt[Math.floor(Math.random() * (this.randomTxt.length + 1))];
            if (this.originalTxt.includes(randomLetter)) {
                i--;
            }
            else {
                randomString += randomLetter;
            }
        }
        return randomString;
    };
    return textAnimTest;
}());
exports.textAnimTest = textAnimTest;
//# sourceMappingURL=textAnimationTest.js.map
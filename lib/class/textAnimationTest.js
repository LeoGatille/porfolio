"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textAnimTest = void 0;
var $ = require("jquery");
var textAnimTest = /** @class */ (function () {
    function textAnimTest(target, txt, speed, cryptageLvl) {
        var _this = this;
        if (speed === void 0) { speed = null; }
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
        this.removalMaskValue = 0;
        this.removeMask = function () {
            if (_this.mask.hasClass('yellow-background')) {
                _this.mask.addClass('dark-background');
                _this.mask.removeClass('yellow-background');
                _this.mask.addClass('dark-shadow');
            }
            console.log('Mask => ', _this.mask.width());
            _this.request = requestAnimationFrame(_this.removeMask);
            _this.mask.css('margin-left', _this.extractCssValue('margin-left', _this.mask) + _this.speed + "px");
            _this.removalMaskValue += _this.speed;
            if (_this.removalMaskValue >= _this.mask.width()) {
                cancelAnimationFrame(_this.request);
            }
        };
        this.target = $(target);
        this.randomTxtContainer = this.target.children('.crypted');
        this.trueTxtContainer = this.target.children('.uncrypted');
        this.mask = this.target.children('.mask');
        this.speed = speed ? speed : 0;
        this.originalTxt = txt ? txt : null;
        this.splitedTxt = txt ? txt.split('') : null;
        this.cryptageLvl = cryptageLvl ? cryptageLvl : null;
        if (this.originalTxt) {
            this.suffleTxt();
        }
    }
    textAnimTest.prototype.extractCssValue = function (attribut, element) {
        console.log('Ectracted => ', parseInt(element.css(attribut).split('px')[0], 10));
        return parseInt(element.css(attribut).split('px')[0], 10);
    };
    textAnimTest.prototype.animationDecryptText = function () {
        var _this = this;
        var delay = 0;
        this.splitedTxt.forEach(function (letter, splitedTxtIndex) {
            var cryptedString = _this.cryptedTxt[splitedTxtIndex];
            cryptedString.split('').forEach(function (randomLetter, cryptedString) {
                _this.delayDisplay(delay, randomLetter, true);
                delay += 20;
            });
            delay += 20;
            _this.delayDisplay(delay, letter);
        });
    };
    textAnimTest.prototype.delayDisplay = function (delay, txtToDisplay, cryptedCharactere) {
        var _this = this;
        if (cryptedCharactere === void 0) { cryptedCharactere = false; }
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
        }, delay - this.speed);
    };
    textAnimTest.prototype.suffleTxt = function () {
        var _this = this;
        this.splitedTxt.forEach(function (letter) {
            _this.cryptedTxt.push(_this.generateRandomString());
        });
    };
    textAnimTest.prototype.generateRandomString = function () {
        var randomString = '';
        for (var i = 0; i < (this.cryptageLvl ? this.cryptageLvl : 8); i++) {
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paralax = void 0;
var Paralax = /** @class */ (function () {
    function Paralax() {
        this.parallax1 = document.querySelector('#planete-1');
        this.parallax2 = document.querySelector('#planete-2');
        this.parallax4 = document.querySelector('#planete-4');
        this.listener = window.addEventListener('scroll', function () {
            // this.parallax1.style.backgroundPositionY = (window.scrollY * 0.4 - 300 + "px");
            // this.parallax2.style.backgroundPositionY = (window.scrollY * 0.3 + 100 + "px");
            // this.parallax4.style.backgroundPositionY = (window.scrollY * 0.1 + 400 + "px");
            // var PosY = window.scrollY;
            // console.log(window.scrollY);
        });
    }
    return Paralax;
}());
exports.Paralax = Paralax;
//# sourceMappingURL=paralax.js.map
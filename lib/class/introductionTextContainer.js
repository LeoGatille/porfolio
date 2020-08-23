"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroductionTextConatainer = void 0;
var scrollListener_1 = require("./scrollListener");
var IntroductionTextConatainer = /** @class */ (function () {
    function IntroductionTextConatainer(target) {
        var _this = this;
        this.scrollListener = new scrollListener_1.ScrollListener();
        this.resized = 0;
        this.displayed = false;
        this.resizeHeigth = function () {
            _this.resized++;
            _this.request = requestAnimationFrame(_this.resizeHeigth);
            _this.container.css('height', _this.container.height() + 10 + "px");
            if (_this.resized === 250) {
                cancelAnimationFrame(_this.request);
            }
        };
        this.contentFadeIn = window.addEventListener('scroll', function () {
            if (!_this.displayed && _this.scrollListener.getScrollDirection() === 'down' && _this.scrollListener.newScrollY <= 50) {
                console.log('fuck');
                _this.displayed = true;
                $('#presentation').fadeIn();
            }
        });
        this.container = target;
    }
    return IntroductionTextConatainer;
}());
exports.IntroductionTextConatainer = IntroductionTextConatainer;
//# sourceMappingURL=introductionTextContainer.js.map
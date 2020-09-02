"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroductionTextContainer = void 0;
var scrollListener_1 = require("./scrollListener");
var IntroductionTextContainer = /** @class */ (function () {
    function IntroductionTextContainer(target) {
        var _this = this;
        this.scrollListener = new scrollListener_1.ScrollListener();
        this.resized = 0;
        this.displayed = false;
        this.resizeHeigth = function () {
            _this.resized++;
            _this.request = requestAnimationFrame(_this.resizeHeigth);
            _this.container.css('height', _this.container.height() + 10 + "px");
            if (_this.resized === 10) {
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
    return IntroductionTextContainer;
}());
exports.IntroductionTextContainer = IntroductionTextContainer;
//# sourceMappingURL=introductionTextContainer.js.map
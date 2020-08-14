"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollEvents = exports.ScrollListener = void 0;
var ScrollListener = /** @class */ (function () {
    function ScrollListener() {
        var _this = this;
        this.scrollValue = window.addEventListener('scroll', function () { return _this.setScrollValues(); });
    }
    ScrollListener.prototype.setScrollValues = function () {
        this.oldScrollY = this.newScrollY;
        this.newScrollY = window.scrollY;
    };
    ScrollListener.prototype.getScrollDirection = function () {
        var direction = null;
        if (this.newScrollY < this.oldScrollY) {
            // console.log('up');
            direction = 'up';
        }
        else {
            // console.log('down');
            direction = 'down';
        }
        return direction;
    };
    return ScrollListener;
}());
exports.ScrollListener = ScrollListener;
var ScrollEvents = /** @class */ (function () {
    function ScrollEvents() {
        this.scrollListener = new ScrollListener();
    }
    ScrollEvents.prototype.fadeIn = function (scrollY, target) {
        if (this.scrollListener.newScrollY === scrollY) {
            target.fadeIn();
        }
    };
    return ScrollEvents;
}());
exports.ScrollEvents = ScrollEvents;
//# sourceMappingURL=scrollListener.js.map
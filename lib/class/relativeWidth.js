"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeWidth = void 0;
var $ = require("jquery");
var RelativeWidth = /** @class */ (function () {
    function RelativeWidth(idReference, idTarget, percentageWidth) {
        var _this = this;
        this.windowResizeListener = window.addEventListener('resize', function () { return _this.editTargetWidthNheight(); });
        this.idReference = idReference;
        this.reference = $('#' + idReference);
        this.target = $('#' + idTarget);
        this.referenceWidth = document.getElementById(idReference).getBoundingClientRect().width;
        // this.referenceWidth = this.reference.width();
        this.percentageWidth = percentageWidth;
        this.editTargetWidthNheight();
    }
    //? Do I need targetWidth ?
    RelativeWidth.prototype.calculTargetWidth = function () {
        return (document.getElementById(this.idReference).getBoundingClientRect().width * this.percentageWidth) / 100;
    };
    RelativeWidth.prototype.editTargetWidthNheight = function () {
        this.target.css('width', this.calculTargetWidth() + "px");
        this.target.css('height', this.calculTargetWidth() + "px");
    };
    //? Control if .width() works better than .css('width')
    RelativeWidth.prototype.extractWidthPX = function (domElement) {
        var widthAndUnit = domElement.css('width');
        return parseInt(widthAndUnit.split('px')[0], 10);
    };
    return RelativeWidth;
}());
exports.RelativeWidth = RelativeWidth;
//# sourceMappingURL=relativeWidth.js.map
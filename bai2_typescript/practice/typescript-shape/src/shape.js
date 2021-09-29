"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this._x = x;
        this._y = y;
    }
    Shape.prototype.gety = function () {
        return this._y;
    };
    Shape.prototype.sety = function (y) {
        this._y = y;
    };
    Shape.prototype.getx = function () {
        return this._x;
    };
    Shape.prototype.setx = function (x) {
        this._x = x;
    };
    Shape.prototype.toString = function () {
        return "(x: " + this._x + ", y: " + this._y + ")";
    };
    return Shape;
}());
exports.Shape = Shape;

import {Shape} from "./shape";
// import {IArea} from "./IArea";

interface IArea {
    area(): number;
}

export class Rectangle extends Shape implements IArea{
    constructor(x: number, y: number, private _width: number, private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width*this._height;
    }

     getwidth() {
        return this._width;
    }

    setwidth(width: number) {
        this._width = width;
    }

    getheight() {
        return this._height;
    }

    setheight(height: number) {
        this._height = height;
    }
}
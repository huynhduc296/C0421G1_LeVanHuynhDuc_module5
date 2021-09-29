export class Shape {
    private _x: number;

    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    gety() {
        return this._y;
    }

    sety(y: number) {
        this._y = y;
    }

    getx() {
        return this._x;
    }

    setx(x: number) {
        this._x = x;
    }

    toString(): string {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}
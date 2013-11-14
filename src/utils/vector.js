define(function (require, exports, module) {

    var Vector = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;

        this.magnitude = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };

        this.unit = function () {
            magnitude = this.magnitude();
            return new Vector(this.x / magnitude, this.y / magnitude);
        };

        this.not = function () {
            return new Vector(-this.x, -this.y);
        };

        this.add = function (operand) {
            if (operand instanceof Vector) return new Vector(this.x + operand.x, this.y + operand.y);
            else return new Vector(this.x + operand, this.y + operand);
        };

        this.subtract = function (operand) {
            if (operand instanceof Vector) return new Vector(this.x - operand.x, this.y - operand.y);
            else return new Vector(this.x - operand, this.y - operand);
        };

        this.dot = function (vector) {
            return this.x * vector.x + this.y * vector.y;
        };

        this.perpendicular = function () {
            return new Vector(-this.y, this.x);
        };

        this.lerp = function () {
        };
    };

    return Vector;

});

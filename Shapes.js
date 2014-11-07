var Shape = (function() {
    var Shape = function(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    };
    Shape.prototype.toString = function() {
            var stringed =
                "x: " + this._x +
                ", y: " + this._y +
                ", color: " + this._color;
            return stringed;
        };
    Shape.prototype.canvas = function() {
        var canvas = {
            element: document.getElementById('drawBoard').getContext('2d')
        };
        return canvas;
    };
    return Shape;
})();

var Rectangle = (function() {
    var Rectangle = function(x, y, color, width, height) {
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;
    };

    Rectangle.prototype = new Shape();

    Rectangle.prototype.toString = function() {
            var stringed = Shape.prototype.toString.call(this) +
                ", width: " + this._width + ", height: " + this._height;
            return stringed;
        };
        Rectangle.prototype.draw = function() {
            this.canvas().element.beginPath();
            this.canvas().element.fillStyle = this._color;
            this.canvas().element.fillRect(this._x, this._y, this._width, this._height);
        };
    return Rectangle;
})();

var Circle = (function() {
    function circle(x, y, color, r) {
        Shape.call(this, x, y, color);
        this._r = r;
    }
    circle.prototype = new Shape();
    circle.prototype.draw = function() {

        this.canvas().element.beginPath();
        this.canvas().element.arc(this._x, this._y, this._r , 0, 2 * Math.PI);
        this.canvas().element.fillStyle = this._color;
        this.canvas().element.fill();


    };

    circle.prototype.toString = function() {
        var stringed = Shape.prototype.toString.call(this) +
            ", radius: " + this._r;
        return stringed;
    };
    return circle;
})();

var Triangle = (function() {
    var Triangle = function(x, y, color, x2, y2, x3, y3) {
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._x3 = x3;
        this._y2 = y2;
        this._y3 = y3;
    };
    Triangle.prototype = {
        toString: function() {
            var stringed = Shape.prototype.toString.call(this) +
                ", x2: " + this._x2 + ", y2: " + this._y2 +
                ", x3: " + this._x3 + ", y3: " + this._y3;
            return stringed;
        },
        draw: function() {
            //TODO
        }
    };
    return Triangle;
})();


var rect = new Rectangle(10, 10, 'darkgreen', 300, 1000);
var circ = new Circle(123, 233, 'white', 63);
var tri = new Triangle(300, 301, 'f3000', 302, 303, 304, 305);



console.log(rect.toString());
console.log(circle.toString());
console.log(Triangle.toString());

[1mdiff --git a/Shapes.js b/Shapes.js[m
[1mindex 24b6a62..ff1f532 100644[m
[1m--- a/Shapes.js[m
[1m+++ b/Shapes.js[m
[36m@@ -42,13 +42,13 @@[m [mvar Rectangle = (function() {[m
     return Rectangle;[m
 })();[m
 [m
[31m-var Circ = (function() {[m
[31m-    function Circ(x, y, color, r) {[m
[32m+[m[32mvar Circle = (function() {[m
[32m+[m[32m    function circle(x, y, color, r) {[m
         Shape.call(this, x, y, color);[m
         this._r = r;[m
     }[m
[31m-    Circ.prototype = new Shape();[m
[31m-    Circ.prototype.draw = function() {[m
[32m+[m[32m    circle.prototype = new Shape();[m
[32m+[m[32m    circle.prototype.draw = function() {[m
 [m
         this.canvas().element.beginPath();[m
         this.canvas().element.arc(this._x, this._y, this._r , 0, 2 * Math.PI);[m
[36m@@ -58,23 +58,23 @@[m [mvar Circ = (function() {[m
 [m
     };[m
 [m
[31m-    Circ.prototype.toString = function() {[m
[32m+[m[32m    circle.prototype.toString = function() {[m
         var stringed = Shape.prototype.toString.call(this) +[m
             ", radius: " + this._r;[m
         return stringed;[m
     };[m
[31m-    return Circ;[m
[32m+[m[32m    return circle;[m
 })();[m
 [m
[31m-var Tri = (function() {[m
[31m-    var Tri = function(x, y, color, x2, y2, x3, y3) {[m
[32m+[m[32mvar Triangle = (function() {[m
[32m+[m[32m    var Triangle = function(x, y, color, x2, y2, x3, y3) {[m
         Shape.call(this, x, y, color);[m
         this._x2 = x2;[m
         this._x3 = x3;[m
         this._y2 = y2;[m
         this._y3 = y3;[m
     };[m
[31m-    Tri.prototype = {[m
[32m+[m[32m    Triangle.prototype = {[m
         toString: function() {[m
             var stringed = Shape.prototype.toString.call(this) +[m
                 ", x2: " + this._x2 + ", y2: " + this._y2 +[m
[36m@@ -85,16 +85,16 @@[m [mvar Tri = (function() {[m
             //TODO[m
         }[m
     };[m
[31m-    return Tri;[m
[32m+[m[32m    return Triangle;[m
 })();[m
 [m
 [m
 var rect = new Rectangle(10, 10, 'darkgreen', 300, 1000);[m
[31m-var circ = new Circ(123, 233, 'white', 63);[m
[31m-var tri = new Tri(300, 301, 'f3000', 302, 303, 304, 305);[m
[32m+[m[32mvar circ = new Circle(123, 233, 'white', 63);[m
[32m+[m[32mvar tri = new Triangle(300, 301, 'f3000', 302, 303, 304, 305);[m
 [m
 [m
 [m
 // console.log(rect.toString());[m
[31m-// console.log(circ.toString());[m
[31m-// console.log(tri.toString());[m
\ No newline at end of file[m
[32m+[m[32m// console.log(circle.toString());[m
[32m+[m[32m// console.log(Triangle.toString());[m
\ No newline at end of file[m

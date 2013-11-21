define(function (require, exports, module) {

    var Waypoint = function (canvas, map) {
        var Vector = require('vector'),
            size = 40,
            fillStyle = 'rgba(0, 0, 255, 0.3)';

        this.list = [];

        this.create = function () {
            canvas.context.fillStyle = fillStyle;

            canvas.context.fillRect(780, 492, size, size);
            canvas.context.fillRect(396, 492, size, size);
            canvas.context.fillRect(396, 204, size, size);
            canvas.context.fillRect(716, 204, size, size);
            canvas.context.fillRect(716, 300, size, size);
            canvas.context.fillRect(812, 300, size, size);
            canvas.context.fillRect(812, 108, size, size);
            canvas.context.fillRect(172, 108, size, size);
            canvas.context.fillRect(172, 396, size, size);
            canvas.context.fillRect(300, 396, size, size);
            canvas.context.fillRect(300, 492, size, size);
            canvas.context.fillRect(172, 492, size, size);
            canvas.context.fillRect(172, 664, size, size);

            this.list.push({ id: 0, v: new Vector(780, 492), s:size, d:'up' });
            this.list.push({ id: 1, v: new Vector(396, 492), s:size, d:'left' });
            this.list.push({ id: 2, v: new Vector(396, 204), s:size, d:'up' });
            this.list.push({ id: 3, v: new Vector(716, 204), s:size, d:'right' });
            this.list.push({ id: 4, v: new Vector(716, 300), s:size, d:'down' });
            this.list.push({ id: 5, v: new Vector(812, 300), s:size, d:'right' });
            this.list.push({ id: 6, v: new Vector(812, 108), s:size, d:'up' });
            this.list.push({ id: 7, v: new Vector(172, 108), s:size, d:'left' });
            this.list.push({ id: 8, v: new Vector(172, 396), s:size, d:'down' });
            this.list.push({ id: 9, v: new Vector(300, 396), s:size, d:'right' });
            this.list.push({ id: 10, v: new Vector(300, 492), s:size, d:'down' });
            this.list.push({ id: 11, v: new Vector(172, 492), s:size, d:'left' });
            this.list.push({ id: 12, v: new Vector(172, 664), s:size, d:'down' });
        }

    };

    return Waypoint;

});

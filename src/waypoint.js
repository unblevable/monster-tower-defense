define(function (require, exports, module) {

    var Waypoint = function (canvas, map) {
        var size = 40,
            fillStyle = 'rgba(0, 0, 255, 0.3)';

        this.list = [];

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

        this.list.push({ id: 0, x:780, y:492, s:size, d:'left' });
        this.list.push({ id: 1, x:396, y:492, s:size, d:'up' });
        this.list.push({ id: 2, x:396, y:204, s:size, d:'right' });
        this.list.push({ id: 3, x:716, y:204, s:size, d:'down' });
        this.list.push({ id: 4, x:716, y:300, s:size, d:'right' });
        this.list.push({ id: 5, x:812, y:300, s:size, d:'up' });
        this.list.push({ id: 6, x:812, y:108, s:size, d:'left' });
        this.list.push({ id: 7, x:172, y:108, s:size, d:'down' });
        this.list.push({ id: 8, x:172, y:396, s:size, d:'right' });
        this.list.push({ id: 9, x:300, y:396, s:size, d:'down' });
        this.list.push({ id: 10, x:300, y:492, s:size, d:'left' });
        this.list.push({ id: 11, x:172, y:492, s:size, d:'down' });

    };

    return Waypoint;

});

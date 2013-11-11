requirejs.config({

    paths: {
        // libraries
        domReady: '../lib/domReady',
        underscore: '../lib/underscore',

        canvas: 'canvas',
        pixels: 'pixels'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    urlArgs: 'bust=' + (new Date()).getTime()

});

require(['domReady', 'canvas', 'pixels'], function (domReady, Canvas, Pixels) {
    var hello = 'hello';

    domReady(function () {
        var canvas = new Canvas;
        var pixels = new Pixels(canvas);

        window.addEventListener('resize', canvas.resize, false);
    });

});

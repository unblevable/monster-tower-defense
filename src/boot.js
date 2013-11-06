requirejs.config({

    paths: {
        // libraries
        domReady: '../lib/domReady',
        underscore: '../lib/underscore',

        main: 'main'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    // urlArgs: 'bust=' + (new Date()).getTime()

});

require(['domReady!', 'main'], function (domReady, Main) {

    var canvasElement = document.getElementsByTagName('canvas')[0];
        canvas = canvasElement.getContext('2d');
        cw = canvasElement.offsetWidth;
        ch = canvasElement.offsetHeight;

        // scale canvas for retina displays
        if(window.devicePixelRatio === 2) {
            canvas.setAttribute('width', 1136);
            canvas.setAttribute('height', 640);
        }

        main = (new Main()).run()

});

requirejs.config({

    paths: {
        // libraries
        domReady: '../lib/domReady',
        underscore: '../lib/underscore',

        canvas: 'canvas',
        map: 'map',
        tile: 'tile',
        sprite: 'sprite',
        vector: 'utils/vector',
        astar: 'utils/astar',
        waypoint: 'waypoint'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    urlArgs: 'bust=' + (new Date()).getTime()

});

require(['domReady', 'canvas', 'map', 'astar', 'waypoint', 'sprite'], function (domReady, Canvas, Map, AStar, Waypoint, Sprite) {
    var config = {
        showWalkable: false
    };

    domReady(function () {
        var canvas = new Canvas,
            map = new Map(canvas, config),
            aStar = new AStar(map);

        setTimeout(function () {
            var waypoint = new Waypoint(canvas, map);
        }, 500);

        window.addEventListener('resize', canvas.resize, false);
        window.addEventListener('click', function (e) {
            e.preventDefault();
        });
        window.addEventListener('touchstart', function (e) {
            e.preventDefault();
        });
        window.addEventListener('touchend', function (e) {
            e.preventDefault();
        });
        // window.addEventListener('keydown', start);

    });

});

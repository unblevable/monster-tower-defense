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
        astar: 'utils/astar'

    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    urlArgs: 'bust=' + (new Date()).getTime()

});

require(['domReady', 'canvas', 'map', 'astar'], function (domReady, Canvas, Map, AStar) {
    var config = {
        showWalkable: false
    };

    domReady(function () {
        var canvas = new Canvas,
            map = new Map(canvas, config),
            aStar = new AStar(map);

        setTimeout(function () {
            var pathTile = aStar.find();
            canvas.context.fillStyle = 'rgba(0, 0, 255, 0.3)';
            for(var i = 0; i < pathTile.length; i++) {
                canvas.context.fillRect(pathTile[i].x, pathTile[i].y, map.tileSize, map.tileSize);
            }
        }, 1000);

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

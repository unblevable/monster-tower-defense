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
        waypoint: 'waypoint',
        reactor: 'utils/reactor',
        utils: 'utils/utils',
        enemy: 'enemy'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    // urlArgs: 'bust=' + (new Date()).getTime()

});

require(['domReady', 'canvas', 'map', 'astar', 'waypoint', 'sprite', 'utils', 'reactor', 'enemy', 'vector'], function (domReady, Canvas, Map, AStar, Waypoint, Sprite, Utils, Reactor, Enemy, Vector) {
    var config = {
        showWalkable: false
    },
    // id of game loop
        loop,
    // event hub for registering and firing events
        reactor = new Reactor(),
    // load resources [CLASS]
        tilesetMap = new Image(),
        tilesetSprites = new Image(),

        waypoints;

    // wave
    this.currentDelay = 0;;
    this.maxDelay = 0.25;
    this.next = 0;

    // keep track of number of images to load
    var IMAGES_TO_LOAD = 2,
        imagesLoaded = 0;

    tilesetMap.src = '../assets/tileset.png';
    tilesetSprites.src = '../assets/pokemon_kanto_alt.png';

    domReady(function () {
        var foreground = new Canvas('foreground'),
            buffer = new Canvas('buffer'),
            background = new Canvas('background');

        // set events
        reactor.load('imageload', preload);
        tilesetMap.onload = function () {
            reactor.fire('imageload');
        };
        tilesetSprites.onload = function () {
            reactor.fire('imageload');
        };

        // game loop id
        var loop,
            // time to show each frame in milliseconds
            MS_PER_FRAME = 200,
            // current delay count
            delay = 0,
            // keep track of the time of the last update
            lastUpdateTime = 0;

        // manage collections [CLASS]
        var enemies = [];

        function preload () {
            console.log(imagesLoaded);
            imagesLoaded++;
            if (imagesLoaded >= IMAGES_TO_LOAD) {
                var map = new Map(background, { 'map': tilesetMap }, config),
                    waypoint = new Waypoint(background, map);
                waypoints = [];

                // find waypoints
                waypoint.create();
                waypoints = waypoint.list;

                var pokemonOfTheDay = Math.floor(Math.random() * 8) + 1;
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, pokemonOfTheDay, new Vector(780, 632)), waypoints));

                window.addEventListener('resize', function () {
                    foreground.resize();
                    background.resize();
                }, false);
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

                map.render();

                // run();
                loop = requestAnimationFrame(run);
            }

        }

        var that = this;
        function update (position) {
            var delta = Date.now() - lastUpdateTime,
                enemy;

            var i;
            for(i = 0; i < enemies.length; i++) {
                enemy = enemies[i];

                if (enemy.isActive) {
                    enemy.sprite.update();
                    enemy.move();
                }
            }

            if (that.currentDelay > that.maxDelay) {
                that.currentDelay = 0;
                if (that.next < 9 ) {
                    enemies[that.next].isActive = true;
                    that.next++;
                }
            } else {
                that.currentDelay += 0.01;
            }

            lastUpdateTime = Date.now();
        }

        function run () {
            requestAnimationFrame(run);
            update();
            draw();
        }

        function draw () {
            var i;
            for (i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];

                if (enemy.isActive) {
                    enemy.sprite.draw();
                }
            }
        }
    });
});

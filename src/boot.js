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
        enemy: 'enemy',
        queue: 'utils/queue'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    // urlArgs: 'bust=' + (new Date()).getTime()

});

require([
    'domReady',
    'canvas',
    'map',
    'astar',
    'waypoint',
    'sprite',
    'utils',
    'reactor',
    'enemy',
    'vector',
    'queue',
    'monster',
    'tower',
    'menu'],
    function (domReady, Canvas, Map, AStar, Waypoint, Sprite, Utils, Reactor, Enemy, Vector, Queue, Monster, Tower, Menu) {
    var config = {
        showWalkable: false
    },
    // id of game loop
        loop,
    // event hub for registering and firing events
        reactor = new Reactor(),
    //  event queue
        queue = new Queue(),
    // load resources [CLASS]

        tilesetMap = new Image(),
        tilesetSprites = new Image(),
        menuWidgets = new Image(),
        tilesetIcons= new Image(),

        waypoints;

    // wave
    this.currentDelay = 0;
    this.maxDelay = 0.25;
    this.next = 0;

    // towers
    var towers = [];

    // keep track of number of images to load
    var IMAGES_TO_LOAD = 3,
        imagesLoaded = 0;

    tilesetMap.src = 'https://dl.dropboxusercontent.com/s/iu3ux6qs8u6cobr/tileset.png';
    tilesetSprites.src = 'https://dl.dropboxusercontent.com/s/rgz6dq3s0dxjwgo/pokemon-kanto.png';
    menuWidgets.src = 'https://dl.dropboxusercontent.com/s/37k21u74qsei5iz/menu-widgets.png';

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
        menuWidgets.onload = function () {
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
            imagesLoaded++;
            if (imagesLoaded >= IMAGES_TO_LOAD) {
                var map = new Map(background, { 'map': tilesetMap }, config),
                    menu = new Menu(background, menuWidgets),
                    waypoint = new Waypoint(background, map);
                waypoints = [];

                // find waypoints
                waypoint.create();
                waypoints = waypoint.list;

                var pokemonOfTheDay = Math.floor(Math.random() * (8 - 1)) + 1;
                var pokemonOfTheDay = 3;
                var monster = new Monster(pokemonOfTheDay);
                console.log(monster.speed);
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(780, 632), { id: pokemonOfTheDay }), new Monster(pokemonOfTheDay), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(780, 632), { id: pokemonOfTheDay }), new Monster(pokemonOfTheDay), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(780, 632), { id: pokemonOfTheDay }), new Monster(pokemonOfTheDay), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(780, 632), { id: pokemonOfTheDay }), new Monster(pokemonOfTheDay), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(780, 632), { id: pokemonOfTheDay }), new Monster(pokemonOfTheDay), waypoints));
                enemies.push(new Enemy(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(780, 632), { id: pokemonOfTheDay }), new Monster(pokemonOfTheDay), waypoints));

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
                window.addEventListener('dblclick', function (e) {
                    console.log('hi');
                    var posx = 0,
                        posy = 0;

                    if (!e) var e = window.event;
                    if (e.pageX || e.pageY) {
                        posx = e.pageX;
                        posy = e.pageY;
                    } else if (e.clientX || e.clientY) {
                        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    }

                    var someId = 4;
                    var someTower = new Tower(new Sprite(foreground, buffer, { 'sprites': tilesetSprites }, new Vector(posx - Sprite.size / 2, posy - Sprite.size / 2), { id: 4 }), new Monster(someId));
                    towers.push(someTower);
                });
                // window.addEventListener('keydown', start);

                map.render()

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
                if (that.next < enemies.length ) {
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

        var buffers = [foreground, buffer],
        currentBuffer = 0;
        function draw () {
            var i;
            buffers[1 - currentBuffer].canvas.style.visibility = 'hidden';
            buffers[currentBuffer].canvas.style.visibility = 'visible';
            buffers = [foreground, buffer]
            buffers[1 - currentBuffer].context.canvas.width = buffers[ 1 - currentBuffer].context.canvas.width;

            for (j = 0; j < enemies.length; j++) {
                var enemy = enemies[j];

                if (enemy.isActive) {
                    enemy.sprite.draw(buffers[currentBuffer]);
                }
            }

            for (i = 0; i < towers.length; i++) {
                var tower = towers[i];

                tower.sprite.draw(buffers[currentBuffer]);
                tower.drawRange(buffers[currentBuffer]);
            }

            currentBuffer = 1 - currentBuffer;
        }
    });
});

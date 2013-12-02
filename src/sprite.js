define(function (require, exports, module) {

    var Sprite = function (canvas, buffer, image, position, options) {

        this.orientation = Sprite.UP_ANIMATION_KEY;

        var Utils = require('utils'),
            Vector = require('vector'),

            // time to show each frame in milliseconds
            MS_PER_FRAME = 250,
            // current delay count
            delay = 0,
            // keep track of time of last update
            lastUpdateTime = 0,
            // current frame
            frame = 0,

            // 1000 milliseconds in a second
            SECOND = 1000,
            FPS = 30,

            // 40 x 40 collision box
            collisionSize = 40,
            // 32 x 32 max size of actual sprite
            size = 32,

            // tileset for all sprites
            tilesetSprites = image['sprites'],

            buffers = [canvas, buffer],

            currentBuffer = 0,

            // offset for variety
            offset = Math.floor(Math.random() * 8) - 4;

        this.position = position;

        // buffers.push(canvas);
        // buffers.push(buffer);

        this.update = function () {
        }.bind(this);

        this.draw = function () {
            var delta = Date.now() - lastUpdateTime;


            if (delay > MS_PER_FRAME) {
                delay = 0;
                frame++;
                if (frame >= 2) frame = 0;
            } else {
                delay += delta;
            }

            lastUpdateTime = Date.now();

            buffers[1 - currentBuffer].canvas.style.visibility = 'hidden';
            buffers[currentBuffer].canvas.style.visibility = 'visible';

            buffers[1 - currentBuffer].context.clearRect(this.position.x - 8, this.position.y - 8, size + 16, size + 16);
            buffers[currentBuffer].context.drawImage(tilesetSprites, this.orientation * size + frame * size, options.id * size, size, size, this.position.x + offset, this.position.y + offset, size, size);

            currentBuffer = 1 - currentBuffer;
        }.bind(this);
    };

    // set of animations for sprite facing up
    Sprite.UP_ANIMATION_KEY = 0;
    // set of animations for sprite facing down
    Sprite.DOWN_ANIMATION_KEY = 2;
    // set of animations for sprite facing left
    Sprite.LEFT_ANIMATION_KEY = 4;
    // set of animations for sprite facing right
    Sprite.RIGHT_ANIMATION_KEY = 6;

    Sprite.ANIMATIONS_KEYS = 8;

    return Sprite;

});

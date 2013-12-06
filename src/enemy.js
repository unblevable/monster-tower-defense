define(function (require, exports, module) {

    var Enemy = function (sprite, monster, waypoints) {
        var Vector = require('vector'),
            Sprite = require('sprite');

        // min
        EPSILON = 0.005;
        // on-screen graphic; sprite object
        this.sprite = sprite;

        this.monster = monster;
        this.currentHp = this.monster.hp;
        this.currentSpeed = this.monster.speed;
        console.log(this.currentSpeed);
        this.status = 'normal';

        // list of waypoints to guide unit through map
        this.waypoints = waypoints;
        // current waypoint
        this.waypoint = 0;
        this.isActive = false;

        this.move = function () {
            var currentWaypoint = this.waypoints[this.waypoint];
            if (this.waypoint < this.waypoints.length && this.isActive) {
                var difference = currentWaypoint.v.subtract(sprite.position);
                if (difference.magnitude() < this.currentSpeed ) currentWaypoint = this.waypoints[this.waypoint++];

                direction = currentWaypoint.v.subtract(sprite.position).unit();

                sprite.position = sprite.position.add(direction.multiply(this.currentSpeed));

                switch(currentWaypoint.d) {
                    case 'up':
                        sprite.orientation = Sprite.UP_ANIMATION_KEY;
                        break;
                    case 'down':
                        sprite.orientation = Sprite.DOWN_ANIMATION_KEY;
                        break;
                    case 'left':
                        sprite.orientation = Sprite.LEFT_ANIMATION_KEY;
                        break;
                    case 'right':
                        sprite.orientation = Sprite.RIGHT_ANIMATION_KEY;
                        break;
                }
            } else {
                this.faint;
            }

            return sprite.position;
        }.bind(this);

        this.faint = function () {
            this.isActive = false;
        };

    };

    return Enemy;

});

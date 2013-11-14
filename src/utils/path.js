define(function (require, exports, module) {

    var Path = function (canvas, map) {
        // for testing
        var opacityDelta = 0.005;

            // findFunction = options.findFunction || findPathForRoad;

        /*  traverse the road, incrementing a cost a long the road's length, and
            and dropping waypoints at turns */
        this.findPathForRoad = function (direction) {

            // for testing
            var opacity;

            // current direction to search
            var direction = map.road.startDirection;

            // amount to move in specified direction
                movement = 32

            // start location
                start = map.road.start,

            // end location
                end = map.road.end,

            // current location
                current = start,

            // search location
                search = current,

            // length of step area dependent on direction
                tallness = 32,
            // width of step area dependent on direction
                wideness = 64

                path = [];


            while (current !== end && path.length < 50) {
                console.log(direction);
                // find neighbors
                var halfWideness = wideness / 2,
                    halfTallness = tallness / 2,
                    topTile = map.pointToTile({ x:search.y, y:search.x - movement }),
                    bottomTile = map.pointToTile({ x:search.y, y:search.x + movement }),
                    leftTile = map.pointToTile({ x:search.y - movement, y:search.x }),
                    rightTile = map.pointToTile({ x:search.y + movement, y:search.x });

                    canvas.context.fillStyle = 'rgba(255, 255, 0, 0.3';
                    canvas.context.fillRect(topTile.x, topTile.y, map.tileSize, map.tileSize);


                switch (direction) {
                    case 'up':
                        if (topTile.isCollidable) {
                            if (leftTile.isCollidable) {
                                search.x += movement;
                                direction = 'right';
                            } else {
                                console.log('yes');
                                search.x -= movement;
                                direction = 'left';
                            }
                        } else {
                            search.y -= movement;
                        }
                        break;
                    case 'down':
                        if (bottomTile.isCollidable) {
                            if (leftTile.isCollidable) {
                                search.x -= movement;
                                direction = 'left';
                            } else {
                                search.x += movement;
                                direction = 'right';
                            }
                        } else {
                            search.y += movement
                        }
                        break;
                    case 'left':
                        if (leftTile.isCollidable) {
                            if (topTile.isCollidable) {
                                search.y += movement;
                                direction = 'down';
                            } else {
                                search.y -= movement;
                                direction = 'up'
                            }
                        } else {
                            search.x -= movement;
                        }
                        break;
                    case 'right':
                        if (rightTile.isCollidable) {
                            if (topTile.isCollidable) {
                                search.y -= movement;
                                direction = 'up'
                            } else {
                                search.y += movement;
                                direction = 'down';
                            }
                        } else {
                            search.x += movement;
                        }
                        break;
                }

                var coloredTile = map.pointToTile({ x: search.x, y:search.y });
                canvas.context.fillStyle = 'rgba(255, 0, 255, 0.3)';
                canvas.context.fillRect(coloredTile.x, coloredTile.y, map.tileSize, map.tileSize);
                path.push({ x: search.x, y:search.y });
                current = search;
            };

            return path;
        }

        function findPathforRoad ( ) {
        }
    };

    return Path;

});

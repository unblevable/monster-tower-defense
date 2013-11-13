define(function (require, exports, module) {

    var AStar = function (map) {

        var abs = Math.abs,
            max = Math.max,
            pow = Math.pow,
            sqrt = Math.sqrt,

            maxWalkableCost = 0,

            mapW = map.tileSize * map.tilesInRow,
            mapH = map.tileSize * map.tilesInCol,

            mapSize = map.tilesInRow * map.tilesInCol,

            distanceFunction = findManhattanDistance,
            neighborsFunction = findManhattanNeighbors;


        this.currentPath = [];

        function findManhattanDistance (point, goal) {
            // linear movement
            return abs(point.x - goal.x) + abs(point.y - goal.y);
        };

        function findManhattanNeighbors (point) {
            var x = point.x,
                y = point.y,

                n = y - 32,
                s = y + 32,
                w = x - 32,
                e = x + 32,

                moveN = n > -1 && isWalkable({ x:x, y:n }),
                moveS = s < mapH && isWalkable({ x:x, y:s }),
                moveW = w > -1 && isWalkable({ x:w, y:y }),
                moveE = e < mapW && isWalkable({ x:e, y:y }),

                neighbors = [];

                if (moveN) neighbors.push({ x:x, y:n });
                if (moveS) neighbors.push({ x:x, y:s });
                if (moveW) neighbors.push({ x:w, y:y });
                if (moveE) neighbors.push({ x:e, y:y });

                return neighbors;
        };

        function isWalkable(point) {
            var tilePosition = map.pointToTile(point),
                x = tilePosition.x,
                y = tilePosition.y;

            if(map.tiles[x][y]) return !(map.tiles[x][y].isCollidable) && map.tiles[x] !== null && map.tiles[x][y] !== null;
        };

        function Node(point, parent) {
            this.parent = parent;

            this.index = point.x + point.y * mapW;

            this.x = point.x;
            this.y = point.y;

            this.f = 0;
            this.g = 0;
        };

        this.find = function () {
            console.log(map.tiles[23].length);
            console.log(map.tiles[23]);
            var start = new Node({ x:map.pathStart.x, y:map.pathStart.y }, null),
                end = new Node({ x:map.pathEnd.x, y:map.pathEnd.y }, null),
                searched = new Array(mapSize),
                open = [start],
                closed = [],
                path = [],
                neighbors,
                currentNode,
                currentPath,
                max,
                min,
                length;

            while(length = open.length) {
                max = mapSize;
                min = -1;
                for(var i = 0; i < length; i++) {
                    if(open[i].f < max) {
                        max = open[i].f;
                        min = i;
                    }
                }

                currentNode = open.splice(min, 1)[0];
                if(currentNode.index === end.index) {
                    currentPath = closed[closed.push(currentNode) - 1]
                    do {
                        path.push({ x:currentPath.x, y:currentPath.y });
                    } while (currentPath = currentPath.parent);

                    searched = closed = open = [];
                    path.reverse();
                } else {
                    neighbors = neighborsFunction({ x:currentNode.x, y:currentNode.y });

                    for (i = 0, j = neighbors.length; i < j; i++) {
                        currentPath = new Node(neighbors[i], currentNode);
                        if (!searched[path.index]) {
                            // cost of the route from the source
                            currentPath.g = currentNode.g + distanceFunction(neighbors[i], currentNode);
                            // estimated cost of route to the destination
                            currentPath.f = currentPath.g + distanceFunction(neighbors[i], end);
                            open.push(currentPath);
                            searched[currentPath.index] = true;
                        }
                    }

                    closed.push(currentNode);
                }
            };

            return path;
        };
    };

    return AStar;

});

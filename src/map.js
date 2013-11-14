define(function (require,exports, module) {

    var Map = function (canvas, config) {
        var Tile = require('tile');

        this.background = [
        [12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13],
        [10, 11, 10, 11, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 10, 11],
        [12, 13, 12, 71, g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), 70, 13],
        [8, 9, 8, 9, g(), 33, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 34, g(), 10, 11],
        [g(), g(), g(), g(), g(), 43, 37, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 38, 44, g(), 70, 13],
        [31, 29, 25, 23, g(), 43, 44, g(), 5, g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), 43, 44, g(), 10, 11],
        [32, 30, 28, 27, g(), 43, 44, 5, g(), g(), g(), g(), 33, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 34, g(), 43, 44, g(), 70, 13],
        [28, 28, 28, 27, g(), 43, 44, g(), 5, g(), g(), g(), 43, 37, 42, 42, 42, 42, 42, 42, 42, 42, 38, 44, g(), 43, 44, g(), 10, 11],
        [28, 28, 28, 27, g(), 43, 44, 5, g(), g(), g(), g(), 43, 44, g(), g(), g(), g(), g(), g(), g(), g(), 43, 44,  g(), 43, 44, g(), 70, 13],
        [28, 28, 28, 27, g(), 43, 44, g(), g(), 61, 62, 63, 43, 44, g(), g(), g(), g(), g(), g(), g(), g(), 43, 39, 41, 40, 44, g(), 10, 11],
        [28, 28, 28, 27, g(), 43, 44, g(), g(), 67, 68, 69, 43, 44, g(), g(), g(), g(), g(), g(), g(), g(), 35, 42, 42, 42, 36, g(), 70, 13],
        [26, 26, 26, 24, g(), 43, 44, g(), g(), 64, 65, 66, 43, 44, g(), 5, g(), g(), g(), g(), g(), g(), g(), g(), g(), 5, g(), 5, 10, 11],
        [g(), g(), g(), g(), g(), 43, 39, 41, 41, 41, 34, g(), 43, 44, 5, g(), g(), g(), g(), g(), g(), g(), g(), g(), 5, g(), 5, g(), 70, 13],
        [6, 7, 6, 7, g(), 35, 42, 42, 42, 38, 44, g(), 43, 44, g(), 5, g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), 10, 11],
        [12, 13, 12, 71, g(), g(), g(), g(), g(), 43, 44, g(), 43, 44, 5, g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), 18, 70, 13],
        [10, 11, 10, 11, g(), 33, 41, 41, 41, 40, 44, g(), 43, 39, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 34, g(), 21, 8, 9],
        [12, 13, 12, 71, g(), 43, 37, 42, 42, 42, 36, g(), 35, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 38, 44, g(), 21, 4, 4],
        [10, 11, 10, 11, g(), 43, 44, g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), g(), 43, 44, g(), 21, 4, 4],
        [12, 13, 12, 71, 19, 43, 44, 18, 20, 20, 20, 20, 19, 15, 14, 17, 17, 17, 17, 17, 17, 17, 17, 16, 43, 44, g(), 21, 4, 4],
        [10, 11, 10, 11, 22, 43, 44, 21, 6, 7, 6, 7, 22, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 43, 44, g(), 21, 4, 4]];

        var foreground = [
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,, 45, 47, 47, 47, 46,,,,,,,,],
            [,,,,,,,,,,,,,,,, 48, 50, 50, 50, 49,,,,,,,,],
            [,,,,,,,,,,,,,,,, 51, 52, 53, 54, 55,,,,,,,,],
            [,,,,,,,,,,,,,,,, 56, 57, 58, 59, 60,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
            [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]]


        this.tileSize = 32;
        this.tilesInRow = 30;
        this.tilesInCol = 20;
        this.tilesInRowImage = 30;

        this.tiles = []; while(this.tiles.push([]) < this.tilesInRow);

        var tilesetImage = new Image();

        tilesetImage.src = '../assets/tileset.png';

        tilesetImage.onload = function () {
            for (var x = 0; x < this.tilesInRow; x++) {
                for (var y = 0; y < this.tilesInCol; y++) {
                    var tile = this.background[y][x],
                        foregroundTile = foreground[y][x],
                        tileRow = Math.floor(tile / this.tilesInRowImage),
                        foregroundTileRow = Math.floor(foregroundTile / this.tilesInRowImage),
                        tileCol = Math.floor(tile % this.tilesInRowImage),
                        foregroundTileCol = Math.floor(foregroundTile % this.tilesInRowImage);

                    canvas.context.drawImage(tilesetImage, tileCol * this.tileSize, tileRow * this.tileSize, this.tileSize, this.tileSize, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                    canvas.context.drawImage(tilesetImage, foregroundTileCol * this.tileSize, foregroundTileRow * this.tileSize, this.tileSize, this.tileSize, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);

                    var tileEntity = new Tile(this.background[y][x]);
                    tileEntity.x = x * this.tileSize;
                    tileEntity.y = y * this.tileSize;

                    this.tiles[x][y] = tileEntity;

                    if (config.showWalkable && tileEntity.walkableBox !== { x:0, y:0, w:0, h:0 }) {
                        canvas.context.fillStyle = "rgba(" + Math.floor(Math.random() * 255) + ", 0, 0, 0.3)"
                        canvas.context.fillRect(x * this.tileSize + tileEntity.walkableBox.x, y * this.tileSize + tileEntity.walkableBox.y, tileEntity.walkableBox.w, tileEntity.walkableBox.h);
                    }
                }
            }
        }.bind(this)

        function g() {
            return Math.floor(Math.random() * 4);
        };

        // road data
        // todo: make into inner prototype
        this.road = {
            startDirection: 'up',
            start: { x: 5 * this.tileSize + this.tileSize, y:19 * this.tileSize },
            end: { x: 24 * this.tileSize + this.tileSize, y:19 * this.tileSize }
        };

        this.pointToTile = function (point) {
            var tile = this.tiles[Math.floor(point.x / this.tileSize)][Math.floor(point.y / this.tileSize)];
            return tile;
        }.bind(this);

        // center point of tile
        this.tileToPoint = function (tile) {
            return { x: tile.x * this.tileSize, y: tile.y * this.tileSize };
        }.bind(this);
    }

    return Map;

});

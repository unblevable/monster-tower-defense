define(function (require, exports, module) {

    var Pixels = function (canvas) {
        // grass                            0
        // grass                            1
        // grass                            2
        // grass                            3
        // tall grass                       4
        // grass with flower                5
        // top left plain tree              6
        // top right plain tree             7
        // bottom left plain tree           8
        // bottom right plain tree          9
        // top/bottom left grouped tree     10
        // top/bottom right grouped tree    11
        // left middle grouped tree         12
        // right middle grouped tree        13
        // small tree                       14
        // left ledge corner                15
        // right ledge corner               16
        // horizontal ledge                 17
        // top left fence corner            18
        // top right fence corner           19
        // horizontal fence                 20
        // vertical fence left              21
        // vertical fence right             22
        // top right lake corner            23
        // bottom right lake corner         24
        // horizontal top lake edge         25
        // horizontal bottom lake edge      26
        // vertical lake edge               27
        // water                            28
        // top right dock corner            29
        // bottom right dock corner         30
        // top middle dock                  31
        // bottom middle dock               32
        // top left road corner             33
        // top right road corner            34
        // bottom left road corner          35
        // bottom right road corner         36
        // top left inner road corner       37
        // top right inner road corner      38
        // bottom left inner road corner    39
        // bottom right inner road corner   40
        // horizontal road top              41
        // horizontal road bottom           42
        // vertical road left               43
        // vertical road right              44

        // foreground
        // ----------
        // top left roof                    47
        // top right roof                   46
        // top middle roof                  47
        // middle left roof                 48
        // middle right roof                49
        // middle roof                      50
        // bottom left roof                 51
        // bottom door roof                 52
        // bottom empty roof                53
        // bottom left window roof          54
        // bottom right window roof         55
        // bottom left house                56
        // bottom door house                57
        // bottom empty house               58
        // bottom left window house         59
        // bottom right window house        60
        // top left rock                    61
        // top right rock                   62
        // top middle rock                  63
        // middle left rock                 64
        // middle right rock                65
        // middle middle rock               66
        // bottom left rock                 67
        // bottom right rock                68
        // bottom middle rock               69
        // middle left plain tree           70
        // middle right plain tree          71

        // generate grass tile
        var g = function () {
            return Math.floor(Math.random() * 4)
        }

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

        this.tileSize = 32;
        this.tilesInRow = 30;
        this.tilesInCol = 20;
        this.tilesInRowImage = 30;

        this.tilesetBackgroundImage = new Image();
        this.tilesetForegroundImage = new Image();

        this.tilesetBackgroundImage.src = '../assets/tileset.png';
        this.tilesetForegroundImage.src = '../assets/tileset.png';
        // this.tilesetBackgroundImage = document.getElementById('background');

        // canvas.context.drawImage(this.tilesetBackgroundImage, 50, 50);

        this.tilesetBackgroundImage.onload = function () {
            for (var r = 0; r < this.tilesInRow; r++) {
                for (var c = 0; c < this.tilesInCol; c++) {
                    var tile = this.background[c][r],
                    tileRow = Math.floor(tile / this.tilesInRowImage),
                    tileCol = Math.floor(tile % this.tilesInRowImage);
                    // canvas.context.drawImage(this.tilesetBackgroundImage, (tileCol * this.tileSize), (tileRow * this.tileSize), this.tileSize, this.tileSize, (c * this.tileSize), (r * this.tileSize), this.tileSize, this.tileSize);
                    canvas.context.drawImage(this.tilesetBackgroundImage, (tileCol * this.tileSize), (tileRow * this.tileSize), this.tileSize, this.tileSize, (r * this.tileSize), (c * this.tileSize), this.tileSize, this.tileSize);
                }
            }
        }.bind(this)
        this.color = function () {
            canvas.context.fillStyle = 'red'
            canvas.context.fillRect(50, 50, 50, 50);
        }
    }

    return Pixels;
});

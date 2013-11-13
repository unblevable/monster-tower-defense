define(function (require, exports, module) {
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
    // -----------------------------------
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

    var Tile = function (id, properties) {
        this.id = id || 0;
        this.isCollidable = true || properties.isCollidable;
        this.placeableBox = { x:0, y:0, w:0, h:0 } || properties.placeableBox;
        this.walkableBox = { x:0, y:0, w:0, h:0 } || properties.walkableBox;

        this.init = function (id) {
            switch (id) {
                case 0:
                    // grass
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 1:
                    // grass
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 2:
                    // grass
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 3:
                    // grass
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 5:
                    // grass with flower
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 15:
                    // left ledge corner
                    this.placeableBox = { x:0, y:0, w:32, h:16 };
                    break;
                case 16:
                    // right ledge corner
                    this.placeableBox = { x:0, y:0, w:32, h:16 };
                    break;
                case 17:
                    // horizontal ledge
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 29:
                    // top right dock corner
                    this.placeableBox = { x:0, y:0, w:30, h:32 };
                    break;
                case 31:
                    // top middle dock
                    this.placeableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 33:
                    // top left road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:12, y:12, w:22, h:22 };
                    break;
                case 34:
                    // top right road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:12, w:22, h:22 };
                    break;
                case 35:
                    // bottom left road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:12, y:0, w:22, h:22 };
                    break;
                case 36:
                    // bottom right road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:22, h:22 };
                    break;
                case 37:
                    // top left inner road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 38:
                    // top right inner road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 39:
                    // bottom left inner road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 40:
                    // bottom right inner road corner
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:32, h:32 };
                    break;
                case 41:
                    // horizontal road top
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:12, w:32, h:20 };
                    break;
                case 42:
                    // horizontal road bottom
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:32, h:20 };
                    break;
                case 43:
                    // vertical road left
                    this.isCollidable = false;
                    this.walkableBox = { x:12, y:0, w:20, h:32 };
                   break;
                case 44:
                    // vertical road right
                    this.isCollidable = false;
                    this.walkableBox = { x:0, y:0, w:20, h:32 };
                    break;
                default:
                    this.isCollidable = true;
                    this.placeableBox = { x:0, y:0, w:0, h:0 };
                    this.walkableBox = { x:0, y:0, w:0, h:0 };
                    break;
            }
        }.bind(this);

        // init
        this.init(id);
    };

    return Tile;

});

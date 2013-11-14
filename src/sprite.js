define(function (require, exports, module) {

    var Sprite = function () {

        tilesetKanto = new Image();
        tilesetKanto.src = '../assets/pokemon_kanto.png';
        tilesetKanto.onload = function () {
            console.log('hey');
        };
    };

    return Sprite;

});

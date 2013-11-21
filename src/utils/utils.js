define(function(require, exports, module) {

    var Utils = function () {
    };

    Utils.SECOND = 1000;
    Utils.FPS = 30;

    // Utils.requestAnimationFrame = (function () {
    //     var fn = window.requestAnimationFrame ||
    //         window.webkitRequestAnimationFrame ||
    //         window.mozRequestAnimationFrame ||
    //         window.oRequestAnimationFrame ||
    //         window.msRequestAnimationFrame ||
    //         function (callback, element) {
    //             window.setTimeout(callback, Utils.SECOND / Utils.FPS);
    //         }

    //     return function (callback, element) {
    //         fn.apply(window, [callback, element]);
    //     };
    // })();

    Utils.requestAnimationFrame = window.requestAnimationFrame;

    return Utils;

});

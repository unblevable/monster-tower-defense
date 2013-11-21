define(function(require, exports, module) {

    var Reactor = function () {

        var events = {};

        function Event (name, callback) {
            this.name = name;
            this.callback = callback;
        }

        this.load = function (eventName, callback) {
            events[eventName] = new Event(eventName, callback);
        }.bind(this);

        this.fire = function (eventName, arguments) {
            events[eventName].callback(arguments);
        }.bind(this);

    };

    return Reactor;

});

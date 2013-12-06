define(function (require, exports, module) {

    var Queue = function () {
        var items;

        this.enqueue = function (item) {
            if (typeof(items) === 'undefined') {
                items = [];
            }

            items.push(item);
        };

        this.dequeue = function (item) {
            return items.shift();
        };
    };

    return Queue;

});

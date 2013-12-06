define(function (require, exports, module) {

    var Move = function (attributes) {
        this.baseDamage = attributes.baseDamage;
        this.type = attributes.type;
        this.attribute = attributes.attribute;
    };

    return Move;
});

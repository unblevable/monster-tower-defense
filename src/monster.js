define(function (require, module, exports) {

    var Monster = function (id) {
        this.id = id;

        this.hp;
        this.speed;
        this.attack;
        this.specialAttack;
        this.defense;
        this.specialDefense;
        this.primaryType;
        this.secondaryType;
        this.range;

        var setStats = function (hp, attack, defense, specialAttack, specialDefense, speed) {
            this.hp = hp;
            this.attack = attack;
            this.attackSpeed = speed
            this.defense = defense;
            this.specialAttack = specialAttack;
            this.specialDefense = specialDefense;
            this.speed = speed;
            this.range = speed * specialAttack;
        }.bind(this);

        var setTypes = function (primaryType, secondaryType) {
            this.primaryType = primaryType;
            this.secondaryType = secondaryType;
        }.bind(this);

        var init = (function () {
            switch (this.id) {
                case 1:
                    setStats(45, 49, 43, 65, 65, 1);
                    setTypes(Monster.types.GRASS, Monster.types.POISON);
                    break;
                case 2:
                    setStats(60, 62, 63, 80, 80, 1);
                    setTypes(Monster.types.GRASS, Monster.types.POISON);
                    break;
                case 3:
                    setStats(80, 82, 83, 100, 100, 1);
                    setTypes(Monster.types.GRASS, Monster.types.POISON);
                    break;
                case 4:
                    setStats(39, 52, 43, 60, 50, 1);
                    setTypes(Monster.types.FIRE, Monster.types.NONE);
                    break;
                case 5:
                    setStats(58, 64, 58, 80, 65, 1);
                    setTypes(Monster.types.FIRE, Monster.types.NONE);
                    break;
                case 6:
                    setStats(78, 84, 78, 109, 85, 1);
                    setTypes(Monster.types.FIRE, Monster.types.FLYING);
                    break;
                case 7:
                    setStats(44, 48, 65, 50, 64, 1);
                    setTypes(Monster.types.WATER, Monster.types,NONE);
                    break;
                case 8:
                    setStats(59, 63, 80, 65, 80, 1);
                    setTypes(Monster.types.WATER, Monster.types,NONE);
                    break;
                case 9:
                    setStats(79, 83, 100, 85, 105, 1);
                    setTypes(Monster.types.WATER, Monster.types,NONE);
                    break;
                default:
                    // glitch
                    setStats(1, 1, 1, 1, 1, 1);
                    break;
            }
        }.bind(this))();
    };

    var BUG = 0,
        DARK = 1,
        DRAGON = 2,
        ELECTRIC = 3,
        FAIRY = 4,
        FIGHT = 5,
        FIRE = 6,
        FLYING = 7,
        GHOST = 8,
        GRASS = 9,
        GROUND = 10,
        ICE = 11,
        NORMAL = 12,
        POISON = 13,
        PSYCHIC = 14,
        ROCK = 15,
        STEEL = 16,
        WATER = 17,
        NONE = -1;

    Monster.types = [BUG, DARK, DRAGON, ELECTRIC, FAIRY, FIGHT, FIRE, FLYING, GHOST, GRASS, GROUND, ICE, NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER];

    return Monster;

});

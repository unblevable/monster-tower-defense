define(function (require, exports, module) {

    var Tower = function (sprite, monster) {

        this.sprite = sprite;

        this.monster = monster;

        this.calculateDamage = function (move, target) {
            var attackStat,
                defenseStat,
                modifier,
                stab,
                critical,
                field,
                random;

            if (this.move.attribute === Move.PHYSICAL) {
                attackStat = this.monster.attack;
                defenseStat = target.defense;
            } else {
                attackStat = this.monster.specialAttack;
                defenseStat = target.specialDefense;
            }

            if (this.move.type === this.monster.primaryType || this.move.type === this.monster.secondaryType) {
                stab = 1.5;
            } else {
                stab = 1;
            }

            // tmp
            critical = 1;
            field = 1;

            random = Math.random() * (1 - 0.85) + 0.85;

            modifier = stab * critical * field * random;

            return (((2 * 1 + 10) / 250) * attackStat / defenseStat * move.baseDamage + 2) * modifier;
        };

        this.drawRange = function (canvas) {
            canvas.context.beginPath();
            canvas.context.arc(this.sprite.position.x + this.sprite.size / 2 , this.sprite.position.y + this.sprite.size / 2, this.monster.range, 0, 2 * Math.PI, false);
            canvas.context.fillStyle = 'rgba(255, 0, 0, 0.2)';
            canvas.context.fill();
            canvas.context.strokeStyle = 'rgba(255, 0, 0, 0.3)';
            canvas.context.stroke();
        }.bind(this);
    };

    return Tower;
});

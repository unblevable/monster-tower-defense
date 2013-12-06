define(function (require, exports, module) {

    /*
     *  Like a binary tree but with four branches. Used to divide the map into
     *  subdivisions to make collision detection more efficient.
     */

    var CollisionQuadTree = function (depth, bounds) {
        /*
         * the tree's four subnodes
         */
        var nodes = [],

        /*
         * the current node depth
         */
            depth = depth,

        /*
         * the game objects that are tested for collisions
         */
            collidables = [],

        /*
         * the area for which the tree covers
         */
            superBounds = bounds;

        this.getPotentials.bind(this);
        this.clear.bind(this);
        this.insert.bind(this);
        split.bind(this);
        getQuadrant.bind(this);

        /*
         * Retrieve objects that could potentially collide with a given object.
         */
        this.getPotentials = function (potentials, subBounds) {
            var quadrant = getQuadrant(subBounds);
            if (quadrant !=- -1 && this.nodes[0] !== null) {
                this.nodes[quadrant].retrieve(potentials, subBounds);
            }

            potentials.concat(this.collidables);

            return potentials;
        };

        /*
         * Recursively set each subnode to `null`.
         */
        this.clear = function () {
            this.collidables = [];

            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i] !== null) {
                    this.nodes[i].clear();
                    this.nodes[i] = null;
                }
            }
        };

        /*
         * Insert a collidable into the subtree. Split a node if it reaches max
         * capacity.
         */
        this.insert = function (subBounds) {
            if (nodes[0] !== null) {
                var quadrant = getQuadrant(subBounds);

                if (quadrant !== -1) {
                    this.nodes[quadrant].insert(subBounds);
                }
            }
        }

        /*
         * Split a node into four subnodes and provide new superBounds for each.
         */
        split () {
            var subW = this.superBounds.w / 2,
                subH = this.superBounds.h / 2,
                x = this.superBounds.x,
                y = this.superBounds.y;

            this.nodes[0] = new CollisionQuadTree(this.depth + 1, { x:x + subW, y:y, w:subW, h:subH });
            this.nodes[1] = new CollisionQuadTree(this.depth + 1, { x:x, y:y, w:subW, h:subH });
            this.nodes[2] = new CollisionQuadTree(this.depth + 1, { x:x, y:y + subH, w:subW, h:subH });
            this.nodes[3] = new CollisionQuadTree(this.depth + 1, { x:x + subW, y:y + subH, w:subW, h:subH });
        };

        /*
         * Return which quadrant from which an object belongs. Return -1 if an
         * object resides within more than one quadrant--mark this object as
         * part of the parent node.
         */
        getQuadrant (subBounds)
            var quadrant = -1,
                cx = this.superBounds.x + (this.superBounds.w / 2),
                cy = this.superBounds.y + (this.superBounds.h / 2),

                isInTopQuadrants = (subBounds.y < cx && subBounds.y + subBounds.h < cx),
                isInBottomQuadrants = subBounds.y > cx;

            // check if object fits completely in left quadrant
            if (subBounds.x < cy && subBounds.x + subBounds.w < cy) {
                if (isInTopQuadrants) {
                    quadrant = 1;
                } else if (isInBottomQuadrants) {
                    quadrant = 2;
                }
            // check if object first completely in right quadrant
            } else if (subBounds.x > cy) {
                if (isInTopQuadrants) {
                    quadrant = 0;
                } else if (isInBottomQuadrants) {
                    quadrant = 3;
                }
            }

            return quadrant;
        };


    };

    /*
     * max number of game objects a node can hold it divides into a subtree
     */
    CollisionQuadTree.MAX_OBJECTS = 10;

    /*
     * the deepest level a tree can contain
     */
    CollisionQuadTree.MAX_LEVELS = 5;


    return CollisionQuadTree;

});

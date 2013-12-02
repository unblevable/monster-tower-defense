define(function (require, exports, module) {

    var Menu = function (canvas, image) {

        var Widget = function (canvas, image, sourcePosition, dimensions, destinationPosition) {

            this.x = destinationPosition.x;
            this.y = destinationPosition.y;
            this.w = dimensions.w;
            this.h = dimensions.h;

            this.isActive = false;

            this.next;
            this.previous;

            canvas.context.drawImage(image, sourcePosition.x, sourcePosition.y, this.w, this.h, this.x, this.y, this.w, this.h);

            this.label = function (text, attributes) {
                var fontFamily = attributes.fontFamily || 'Georgia'
                    size = attributes.size || '16',
                    color = attributes.color || '#000000',


                canvas.context.font = attributes.size + 'px ' + fontFamily;
                canvas.context.fillStyle = options.color
                canvas.context.stroke;
            };

            this.customize = function (fn) {
                fn.apply(this);
            }.bind(this);
        };

        this.fastForwardButton = new Widget(canvas, image, { x:0, y:0 }, { w:176, h:96 }, { x:960, y:0 });
        this.playPauseButton = new Widget(canvas, image, { x:0, y:544 }, { w:176, h:96 }, { x:960, y:544 });

        var fontSize = 24;
        canvas.context.font = fontSize + 'px DisposableDroidBold';
        canvas.context.textAlign = 'center';
        canvas.context.textBaseline = 'middle';
        canvas.context.fillStyle = '#ffffff';

        var fastForwardButtonString = '4X',
            playPauseButtonString = 'Battle!',
            textDimensions1 = canvas.context.measureText(fastForwardButtonString),
            textDimensions2 = canvas.context.measureText(playPauseButtonString);

        canvas.context.fillText(fastForwardButtonString, this.fastForwardButton.x + this.fastForwardButton.w / 2 - textDimensions1.width / 2, this.fastForwardButton.y + this.fastForwardButton.h / 2);
        canvas.context.fillText(playPauseButtonString, this.playPauseButton.x + this.playPauseButton.w / 2 - textDimensions2.width / 2 + 24, this.playPauseButton.y + this.playPauseButton.h / 2);

        this.units = new Widget(canvas, image, { x:0, y:96 }, { w:176, h:448 }, { x:960, y:96 });

        // slide
        // icons
            // offset y + x
        // display info

    };

    return Menu;

});

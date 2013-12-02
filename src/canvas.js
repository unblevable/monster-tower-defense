define(function (require, exports, module) {
    var _ = require('underscore');

    function Canvas (id) {
        this.userAgent = navigator.userAgent.toLowerCase();
        this.android = this.userAgent.indexOf('android') > -1 ? true : false;
        this.ios = (this.userAgent.indexOf('iphone') > -1 || this.userAgent.indexOf('ipad') > -1) ? true : false;

        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');

        this.iw = 1136;
        this.ih = 640;
        this.cw = this.iw;
        this.ch = this.ih;
        this.ratio = this.iw / this.ih;

        if (window.devicePixelRatio === 2) {
            this.cw * 2;
            this.ch * 3;
        }

        this.canvas.width = this.iw;
        this.canvas.height = this.ih;

        this.resize = function () {
            console.log(id);
            this.ch = window.innerHeight;
            this.cw = this.ch * this.ratio;

            if (this.android || this.ios) {
                document.body.style.height = (window.innerHeight + 50) + 'px';
                // document.body.style.height = (window.innerHeight) + 'px';
            }

            this.canvas.style.width = this.cw + 'px';
            this.canvas.style.height = this.ch + 'px';

            window.setTimeout(function () {
                window.scrollTo(0, 1);
            }, 2);
        }.bind(this);
    }

    return Canvas;

});

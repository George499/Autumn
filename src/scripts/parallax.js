var parallax = (function () {
    var bg = document.querySelectorAll(".main")
    var layers = bg.children
   

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe + ', 0)';

            var style = block.style;

            style.transform = tranformString;
            style.webkitTransform = tranformString;
        },
        init:function (wScroll) {
            this.move(layers, wScroll, 45)
        }
    }
})



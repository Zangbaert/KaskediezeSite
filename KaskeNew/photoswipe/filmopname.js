// Script voor Filmopname foto's

var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../Fotos/2014/foto-tyde.jpg',
            w: 1000,
            h: 668
        },
        {
            src: '../Fotos/2014/fotohaven.jpg',
            w: 1000,
            h: 563
        },
        {
            src: '../Fotos/2014/fotostaal.jpg',
            w: 1000,
            h: 563
        },
        {
            src: '../Fotos/2014/fotostrand1.jpg',
            w: 1000,
            h: 563
        },
        {
            src: '../Fotos/2014/fotostrand2.jpg',
            w: 1000,
            h: 563
        },
        {
            src: '../Fotos/2014/fotostrand3.jpg',
            w: 1000,
            h: 563
        },
        {
            src: '../Fotos/2014/fotostrand4.jpg',
            w: 1000,
            h: 541
        },
        {
            src: '../Fotos/2014/fotostrand5.jpg',
            w: 1000,
            h: 561
        },
        {
            src: '../Fotos/2014/fotozbos.jpg',
            w: 1000,
            h: 562
        }
    ];

    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

//openPhotoSwipe();

//document.getElementById('btn').onclick = openPhotoSwipe;

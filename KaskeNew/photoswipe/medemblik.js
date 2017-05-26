// Script voor Medemblik foto's

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
            src: 'fotohaven.jpg',
            w: 1000,
            h: 563
        }
        {
            src: 'fotostaal.jpg',
            w: 1000,
            h: 563
        }
        {
            src: 'fotostrand1.jpg',
            w: 1000,
            h: 563
        }
        {
            src: 'fotostrand2.jpg',
            w: 1000,
            h: 563
        }
        {
            src: 'fotostrand3.jpg',
            w: 1000,
            h: 563
        }
        {
            src: 'fotostrand4.jpg',
            w: 1000
            h: 541
        }
        {
            src: 'fotostrand5.jpg',
            w: 1000,
            h: 561
        }
        {
            src: 'fotozbos.jpg',
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

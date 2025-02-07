let i = 0;
let images = [];
let time = 2500;

images[0] = 'IMG_0469.jpg';
images[1] = 'IMG_0473.jpg';
images[2] = 'IMG_0924.jpg';
images[3] = 'IMG_6770.jpg';
images[4] = 'IMG_0469.jpg';
images[5] = 'IMG_6865.jpg';
images[6] = 'IMG_6854.jpg';
images[7] = 'ferris.jpg';
images[8] = 'greg.jpg';
images[9] = 'loveykiss.jpg';
images[10] = 'loveymirror.jpg';
images[11] = 'setlist.jpg';

function changeImg() {
    document.carousel.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.querySelector('audio');
    audio.removeAttribute('controls');
});
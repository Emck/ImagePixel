// eslint-disable-next-line no-undef
var canvas = document.createElement('canvas');

function ImagePixelData(image) {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}

function ImagePixel(src, callback) {
    // eslint-disable-next-line no-undef
    if (src instanceof HTMLImageElement == true) callback(data(src));
    else {
        // eslint-disable-next-line no-undef
        var image = new Image();
        if (!/^data/.test(src)) image.crossOrigin = '';
        image.onerror = callback;
        image.onload = function() {
            callback(ImagePixelData(image));
        };
        image.src = src;
    }
}

module.exports = ImagePixel;
var jimp = require('jimp');

function ImagePixelData(image) {
    return {
        // eslint-disable-next-line no-undef
        data: new Uint8ClampedArray(image.bitmap.data),
        height: image.bitmap.height,
        width: image.bitmap.width
    };
}

function ImagePixel(src, callback) {
    jimp.read(src).then(function(image) {
        callback(ImagePixelData(image));
    }, callback);
}

module.exports = ImagePixel;
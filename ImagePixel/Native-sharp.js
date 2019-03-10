var sharp = require('sharp');

function ImagePixelData(image) {
    return {
        // eslint-disable-next-line no-undef
        data: new Uint8ClampedArray(image.data),
        height: image.info.height,
        width: image.info.width
    };
}

function ImagePixel(src, callback) {
    sharp(src)
        .raw()
        .ensureAlpha()
        .toBuffer({ resolveWithObject: true })
        .then(function(image) {
            callback(ImagePixelData(image));
        }, callback);
}

module.exports = ImagePixel;
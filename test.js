var ImagePixelJimp = require('./ImagePixel/Node-jimp');
var ImagePixelSharp = require('./ImagePixel/Native-sharp');
var ImagePixelDefault = require('./ImagePixel');

// ImagePixelDefault is Native-jimp

var imagefile = 'test.png';

ImagePixelDefault(imagefile, function(data) {
    console.log(data);
});

ImagePixelJimp(imagefile, function(data) {
    console.log(data);
});

ImagePixelSharp(imagefile, function(data) {
    console.log(data);
});

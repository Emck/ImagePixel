(function() {
    'use strict';

    function ImagePixel() {
        // this.testfunction = function(data, callback, options) {
        //     console.log('testfunction');
        // }; // End of testfunction()
        // this.testdata = []];
    } // End of ImagePixel object

    // eslint-disable-next-line no-undef
    var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

    // export as = [Node module or Browser module ; AMD module ; worker variable self; worker variable window]
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        //  Node module or Browser module
        if (isNode) {
            module.exports = require('./ImagePixel/Node-jimp');
        } else if (isBrowser) {
            module.exports = require('./ImagePixel/Browser');
        } else console.log('Module undefined');
        // eslint-disable-next-line no-undef
    } else if (typeof define === 'function' && define.amd) {
        console.log('AMD module');
        // eslint-disable-next-line no-undef
        define([], function() {
            return new ImagePixel();
        });
    } else if (typeof self !== 'undefined') {
        console.log('self.XX....');
        // eslint-disable-next-line no-undef
        self.ImagePixel = new ImagePixel();
    } else {
        console.log('window.XX....');
        // eslint-disable-next-line no-undef
        window.ImagePixel = new ImagePixel();
    }
})();

/* globals module */

module.exports = function () {
    'use strict';
    
    return {
        //all: ['<%= paths.dist.dir %>'],
        js: ['<%= paths.js.dest %>'],
        css: ['<%= paths.css.dest %>'],
        //fonts: ['<%= paths.fonts.dest %>'],
        //images: ['<%= paths.img.dest %>']
    };
};
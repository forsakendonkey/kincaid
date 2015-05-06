/* globals module */

module.exports = function () {
    'use strict';

    return {
        js: {
            files: [
                '<%= paths.js.src %>**/*.js'
            ],
            task: ['dev:js'],
            options:{
                livereload: true
            }
        },

        less: {
            files: [
                '<%= paths.css.src %>**/*.less'
            ],
            tasks: ['dev:css'],
            options:{
                livereload: true
            }
        }
    };
};

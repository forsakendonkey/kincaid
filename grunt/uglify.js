/* globals module */

module.exports = function () {
    'use strict';

    return {

        /**
         * Development Target
         */

        dev: {
            options:{
                sourceMap: false,
                preserveComments: true,
                compress: {
                    drop_console: false
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.js.dest %>',
                    src: ['*.js', '!*.min.js'],
                    dest: '<%= paths.js.dest %>',
                    ext: '.min.js',
                    extDot: 'first'
                }
            ]
        },

        /**
         * Production Target
         */

        prod: {
            options:{
                sourceMap: false,
                preserveComments: false,
                compress: {
                    drop_console: true
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.js.dest %>',
                    src: ['*.js', '!*.min.js'],
                    dest: '<%= paths.js.dest %>',
                    ext: '.min.js',
                    extDot: 'first'
                }
            ]
        }
    };
};

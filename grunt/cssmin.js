/* globals module */

module.exports = function () {
    'use strict';

    return {

        /**
         * Development Target
         */

        dev: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.css.dest %>',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: '<%= paths.css.dest %>',
                    ext: '.min.css'
                }
            ]
        },

        /**
         * Production Target
         */

        prod: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.css.dest %>',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: '<%= paths.css.dest %>',
                    ext: '.min.css'
                }
            ]
        }
    };
};
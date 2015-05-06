/* globals module */

module.exports = function () {
    'use strict';

    return {
        options: {
            paths: ['<%= paths.css.src %>'],
            relativeUrls: false
        },

        /**
         * Development Target
         */

        dev: {
            options: {
                sourceMap: true
            },
            files: [
                {
                    dest: '<%= paths.css.dest %>app.css',
                    src:  ['<%= paths.less.src %>/app.less']
                }
                /*{
                    dest: '<%= paths.css.dest %>pages.css',
                    src:  ['<%= paths.less.src %>pages/pages.less']
                },
                {
                    dest: '<%= paths.css.dest %>rtl.css',
                    src:  ['<%= paths.less.src %>rtl/rtl.less']
                },

                // Themes

                {
                    dest: '<%= paths.css.dest %>themes/iron-patriot.css',
                    src:  ['<%= paths.less.src %>themes/iron-patriot/iron-patriot.less']
                },
                {
                    dest: '<%= paths.css.dest %>themes/southpaw.css',
                    src:  ['<%= paths.less.src %>themes/southpaw/southpaw.less']
                } */
            ]
        },

        /**
         * Production Target
         */

        prod: {
            options: {
                sourceMap: false
            },
            files: [
                {
                    dest: '<%= paths.css.dest %>widgets.css',
                    src:  ['<%= paths.less.src %>widgets/widgets.less']
                },
                {
                    dest: '<%= paths.css.dest %>pages.css',
                    src:  ['<%= paths.less.src %>pages/pages.less']
                },
                {
                    dest: '<%= paths.css.dest %>rtl.css',
                    src:  ['<%= paths.less.src %>rtl/rtl.less']
                },

                // Themes

                {
                    dest: '<%= paths.css.dest %>themes/iron-patriot.css',
                    src:  ['<%= paths.less.src %>themes/iron-patriot/iron-patriot.less']
                },
                {
                    dest: '<%= paths.css.dest %>themes/southpaw.css',
                    src:  ['<%= paths.less.src %>themes/southpaw/southpaw.less']
                }
            ]
        }
    };
};

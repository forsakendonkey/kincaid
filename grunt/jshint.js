/* globals module */

module.exports = function() {
    'use strict';

    return {

        options:{
            jshintrc: true
        },

        /**
         * Development Target
         */

        dev: {
            options: {
                force: true,    // don't fail a development build if there are jshint errors
                debug: true,
                devel: true
            },
            src: ['<%= paths.js.src %>**/*.js']
        },

        /**
         * Production Target
         */

        prod: {
            options: {
                force: false    // fail a production build if there are jshint errors
            },
            src: ['<%= paths.js.src %>**/*.js']
        }
    };
};
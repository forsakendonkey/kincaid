/* globals module */

module.exports = function () {
    'use strict';
    return {
        build: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'head-script-disabled': true,
                'src-not-empty': true,
                'doctype-html5': true,
                'id-class-value': true
            },
            src: ['<%= paths.html.dir %>*.html']
        }
    };
};
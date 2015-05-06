/* globals module */

module.exports = function (css_src, css_dest) {
    'use strict';

    var theme_dest = css_dest + 'themes/',
        theme_src = css_src + 'scss/themes/',
        themes_names = [
            'adminflare',
            'asphalt',
            'clean',
            'default',
            'dust',
            'fresh',
            'frost',
            'purple-hills',
            'silver',
            'white'
        ];

    function themeFile(name){
        return {
            dest: theme_dest + name + '.css',
            src: theme_src + name + '/' + name + '.scss'
        };
    }

    function themeFiles(themes){
        var rval = [];
        for(var i = 0; i < themes.length; i++) rval.push(themeFile(themes[i]));
        return rval;
    }

    return {
        build: {
            files: [
                /*{
                 dest: css_dest + 'bootstrap.css',
                 src:  [css_src + 'bootstrap.scss']
                 },*/
                /*{
                 dest: css_dest + 'hex.css',
                 src:  [css_src + 'hex.scss']
                 },*/
                {
                    dest: css_dest + 'widgets.css',
                    src:  [css_src + 'scss/widgets/widgets.scss']
                },
                {
                    dest: css_dest + 'pages.css',
                    src:  [css_src + 'scss/pages/pages.scss']
                },
                {
                    dest: css_dest + 'rtl.css',
                    src:  [css_src + 'scss/rtl/rtl.scss']
                }
            ].concat(themeFiles(themes_names))
        }
    };
};

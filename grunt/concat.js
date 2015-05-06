/* globals module */

module.exports = function () {
    'use strict';

    return {
        options: {
            separator: ';\n'
        },
        hang:{
            files:[
                {
                    dest:'<%= paths.js.dest %>hang.js',
                    src:[
                        '<%= paths.bower.dir %>/angular/angular.js',
                        '<%= paths.bower.dir %>/angular-ui-router/release/angular-ui-router.js',
                        '<%= paths.bower.dir %>/angular-hex/dist/js/angular-hex.js'
                    ]}
            ]
        },
        app:{
            files:[
                {
                    dest:'<%= paths.js.dest %>app.js',
                    src:[
                        '<%= paths.js.src %>app.module.js',
                        '<%= paths.js.src %>app.route.js',
                        '<%= paths.features.dir %>/*/filters/**.js',
                        '<%= paths.features.dir %>/*/services/**.js',
                        '<%= paths.features.dir %>/*/controllers/**.js'
                ]}
            ]
        }

    };
};
/* globals module */

module.exports = function(){
    'use strict';

    return {
        images: {
            files: [
                {
                    src: '<%= paths.bower.dir %>jquery-minicolors/jquery.minicolors.png',
                    dest: '<%= paths.img.dest %>plugins/jquery.minicolors.png'
                },
                {
                    src: '<%= paths.bower.dir %>x-editable/dist/bootstrap3-editable/img/loading.gif',
                    dest: '<%= paths.img.dest %>plugins/bootstrap-editable/loading.gif'
                }
            ]
        },

        fonts: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['<%= paths.bower.dir %>matterhorn/fonts/*'],
                    dest: '<%= paths.fonts.dest %>matterhorn/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    flatten: true,
                    src: ['<%= paths.bower.dir %>font-awesome/fonts/*'],
                    dest: '<%= paths.fonts.dest %>font-awesome/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    flatten: true,
                    src: ['<%= paths.bower.dir %>bootstrap/fonts/*'],
                    dest: '<%= paths.fonts.dest %>glyphicons/',
                    filter: 'isFile'
                }
            ]
        }
    };
};
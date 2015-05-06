/* globals require, module */

module.exports = function(grunt) {

    'use strict';

    /*  Load tasks  */

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    /*  Configure project  */

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            html: {
                dir: '/'
            },
            features:{
                dir:'app/features/'
            },
            js: {
                src: 'app/',
                dest:'app/dist/js/'
            },
            less: {
                src: 'app/less/'
            },
            css: {
                dest: 'app/dist/css/'
            },
            fonts: {
                dest: 'app/dist/fonts/'
            },
            bower: {
                dir: 'bower_components/'
            },
            dist: {
                dir: 'app/dist/'
            }
        },

        // Setup tasks
        htmlhint: require('./grunt/htmlhint')(),
        concat:   require('./grunt/concat')(),
        uglify:   require('./grunt/uglify')(),
        less:     require('./grunt/less')(),
        cssmin:   require('./grunt/cssmin')(),
        watch:    require('./grunt/watch')(),
        copy:     require('./grunt/copy')(),
        clean:    require('./grunt/clean')(),
        connect:  require('./grunt/connect')(),
        jshint:   require('./grunt/jshint')()
    });

    /*  Register tasks  */

    /**
     * @name: dev
     * @description: Main task that builds the Hex framework for development purposes
     */
    grunt.registerTask('dev',[
        'dev:js',
        'dev:css'
        //'dev:fonts'
    ]);

        /**
         * @name: dev:js
         * @description: Task that compiles the JS files for development purposes
         */
        grunt.registerTask('dev:js',[
            //'jshint:dev',
            'clean:js',
            'concat',
            'uglify:dev'
        ]);

        /**
         * @name: dev:css
         * @description: Task that compiles the css from LESS files for development purposes
         */
        grunt.registerTask('dev:css', [
            'clean:css',
            'less:dev',
            'cssmin:dev'
        ]);

        /**
         * @name: dev:fonts
         * @description: Task that compiles the fonts for development purposes
         */
        grunt.registerTask('dev:fonts', ['clean:fonts', 'copy:fonts']);

        /**
         * @name: dev:watch
         * @description: Task that starts a web server at localhost:8080 configured for livereload.
         */
        grunt.registerTask('dev:watch', ['connect:server', 'watch']);



    /**
     * @name: prod
     * @description: Main task that builds the Hex framework for development purposes
     */
    grunt.registerTask('prod', ['prod:js', 'prod:css', 'prod:images', 'prod:fonts']);

    /**
     * @name: prod:js
     * @description: Task that compiles the JS files for development purposes
     */
    grunt.registerTask('prod:js', ['jshint:prod', 'clean:js', 'concat', 'uglify:prod']);

    /**
     * @name: prod:css
     * @description: Task that compiles the css from LESS files for development purposes
     */
    grunt.registerTask('prod:css', ['clean:css', 'less:prod', 'cssmin:prod']);

    /**
     * @name: prod:images
     * @description: Task that compiles the images for development purposes
     */
    grunt.registerTask('prod:images', ['dev:images']);

    /**
     * @name: prod:fonts
     * @description: Task that compiles the fonts for development purposes
     */
    grunt.registerTask('prod:fonts', ['dev:fonts']);



    /**
     * @name: copy
     * @description: Utility task that copies files from one location to another
     */
    grunt.registerMultiTask('copy', function(){
        for(var i in this.files) grunt.file.copy(this.files[i].src[0], this.files[i].dest);
    });

    /**
     * @name: default
     * @description: Simple task that displays some build information for Hex
     */
    grunt.registerTask('default', function(){
        grunt.log.subhead('Welcome to ' + grunt.config.get('pkg.name'));
        grunt.log.writelns('This is version ' + grunt.config.get('pkg.version') + '.');
        grunt.log.writelns();
        grunt.log.writelns('To build ' + grunt.config.get('pkg.name') + ' for development, run:');
        grunt.log.writelns('grunt dev');
        grunt.log.writelns();
        grunt.log.writelns('To build ' + grunt.config.get('pkg.name') + ' for production, run:');
        grunt.log.writelns('grunt prod');
        grunt.log.writelns();
        grunt.log.writelns('Open the Gruntfile.js file to see all of the build tasks available to you.');
    });
};

/**
* `tasks/config/copy`
*
* ---------------------------------------------------------------
*
* Copy files and/or folders from your `assets/` directory into
* the web root (`.tmp/public`) so they can be served via HTTP,
* and also for further pre-processing by other Grunt tasks.
*
* For more information, see:
*   https://sailsjs.com/anatomy/tasks/config/copy.js
*
*/
module.exports = function(grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [{
                expand: true,
                cwd: './assets',
                src: ['**/*.!(coffee|less)'],
                dest: '.tmp/public'
            },
            //  {
            //     expand: true,
            //     cwd: './bower_components/adminbsb-materialdesign',
            //     src: ['**/*.!(coffee|less)'],
            //     dest: '.tmp/public'
            // },
             {
                expand: true,
                cwd: './bower_components/adminbsb-materialdesign',
                src: ['**/*.css'],
                dest: '.tmp/public'
            }, {
                expand: true,
                cwd: './bower_components/adminbsb-materialdesign',
                src: ['**/*.js'],
                dest: '.tmp/public'
            }, {
                expand: true,
                cwd: './bower_components/adminbsb-materialdesign/plugins/bootstrap/fonts',
                src: ['**/*'],
                dest: '.tmp/public/plugins/bootstrap/fonts'
            }, {
                expand: true,
                cwd: './bower_components/adminbsb-materialdesign/plugins/font-awesome/fonts',
                src: ['**/*'],
                dest: '.tmp/public/plugins/font-awesome/fonts'
            }, {
                expand: true,
                cwd: './node_modules/requirejs',
                src: ['**/*.js'],
                dest: '.tmp/public/js'
            }
            // , {
            //     expand: true,
            //     cwd: './bower_components/bootstrap/fonts',
            //     src: ['**/*.!(coffee|less)'],
            //     dest: '.tmp/public/bootstrap/fonts'
            // }, {
            //     expand: true,
            //     cwd: './bower_components/font-awesome/fonts',
            //     src: ['**/*.!(coffee|less)'],
            //     dest: '.tmp/public/font-awesome/fonts'
            // }]
            ]
        },
        build: {
            files: [{
                expand: true,
                cwd: '.tmp/public',
                src: ['**/*'],
                dest: 'www'
            }]
        }
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // This Grunt plugin is part of the default asset pipeline in Sails,
    // so it's already been automatically loaded for you at this point.
    //
    // Of course, you can always remove this Grunt plugin altogether by
    // deleting this file.  But check this out: you can also use your
    // _own_ custom version of this Grunt plugin.
    //
    // Here's how:
    //
    // 1. Install it as a local dependency of your Sails app:
    //    ```
    //    $ npm install grunt-contrib-copy --save-dev --save-exact
    //    ```
    //
    //
    // 2. Then uncomment the following code:
    //
    // ```
    // // Load Grunt plugin from the node_modules/ folder.
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // ```
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};

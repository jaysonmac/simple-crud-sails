module.exports = function(grunt) {
  grunt.config.set('bower', {
    dev: {
      dest: '.tmp/public',
      js_dest: '.tmp/public',
      css_dest: '.tmp/public',
      fonts_dest: '.tmp/public',
      options: {
        expand: true,
        packageSpecific: {
          expand: true,
          'font-awesome': {
            files: [
              'fonts/fontawesome-webfont.eot',
              'fonts/fontawesome-webfont.svg',
              'fonts/fontawesome-webfont.ttf',
              'fonts/fontawesome-webfont.woff',
              'fonts/fontawesome-webfont.woff2',
              'fonts/FontAwesome.otf'
            ]
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};

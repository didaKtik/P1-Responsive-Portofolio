module.exports = function(grunt) {

  grunt.initConfig({
    webp: {
      files: {
        expand: true,
        cwd: 'images/',
        src: '*.{png,jpg}',
        dest: 'images/'
      },
      options: {
        quality: 20
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: '960',
            quality: 30
          },{
            width: '640',
            quality: 30
          },{
            width: '380',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{webp,jpg,png}',
          '!*_small*',
          '!*_medium*',
          '!*_large*',
          '!*logo*'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },

    cssmin: {
      merge: {
        files: {
          'css/merged.css': ['css/style.css',
                             'css/responsive.css']
        }
      },
      minify: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css', '!bootstrap*'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }

  });

grunt.loadNpmTasks('grunt-webp');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-cssmin');

};
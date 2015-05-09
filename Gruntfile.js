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
        preset: 'default',
        verbose: true,
        quality: 80,
        alphaQuality: 80,
        compressionMethod: 6,
        segments: 4,
        psnr: 42,
        sns: 50,
        filterStrength: 40,
        filterSharpness: 3,
        simpleFilter: true,
        partitionLimit: 50,
        analysisPass: 6,
        multiThreading: true,
        lowMemory: false,
        alphaMethod: 0,
        alphaFilter: 'best',
        alphaCleanup: true,
        noAlpha: false,
        lossless: true
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: '960',
            suffix: '_large'
          },{
            width: '500',
            suffix: '_medium'
          },{
            width: '300',
            suffix: '_small'
          },{
            width: '1920',
            suffix: "_large_x2",
            quality: 60
          }
          ,{
            width: '1000',
            suffix: "_medium_x2",
            quality: 60
          }
          ,{
            width: '600',
            suffix: "_small_x2",
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['*.{webp,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },

    cssmin: {
      target: {
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
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', [
  'webp',
  'responsive_images',
  'imagemin',
  'cssmin']
);

};
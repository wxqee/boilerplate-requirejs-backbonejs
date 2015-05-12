module.exports = function(grunt) {

  var extend = require('extend');

  var requireJsConfig = require('./src/_config.js').requireJsConfig;
  requireJsConfig = extend(requireJsConfig, {
      baseUrl: './src',
      dir: './dist',
      modules: [
         {
             name: '_config',
             include: [
                 'jquery',
                 'underscore',
                 'backbone',
                 'backbone.layoutmanager'
             ]
         },
         {
             name: 'main',
             include: [
                 'app', 'router'
             ],
             exclude: [
                 '_config'
             ]
         }
      ]
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: requireJsConfig  // options
      }
    },  // requirejs

    qunit: {
        all: {
            options: {
                timeout: 8000,
                urls: [
                    'http://localhost:8000/test/test.html'
                ]
            }
        }
    },  // qunit

    connect: {
        server: {
            options: {
                port: 8000,
                base: '.',
                keepalive: true
            }
        }  // server
    }  // connect

  });

  grunt.registerTask('default', ['requirejs']);
  grunt.registerTask('server', ['connect']);

};

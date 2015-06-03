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
            // TODO: add more libs
            'jquery',
            'underscore',
            'backbone',
            'backbone.layoutmanager',
            'backbone.stickit',
            'backbone.localStorage'
          ]
        },
        {
          name: 'main',
          include: [
            // TODO: add more modules exists in src/main.js
            'router', 'common', 'views/todos-view'
          ],
          exclude: [
            '_config'
          ]
        }
      ]
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
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

    jshint: {
      files: {
        src: [
          'src/nls/**/*.js',
          'src/views/**/*.js',
          'src/collections/**/*.js',
          'src/models/**/*.js',
          'src/*.js'
        ],
        tests: [
          'tests/testcase/**/*.js',
          'tests/*.js'
        ]
      },
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          QUnit: true,
          define: true,
          require: true,
          _: true,
          $: true,
          jQuery: true,
          Backbone: true,
          module: true,  // node.js grunt tool
          requirejs: true
        }
      }
    },

    qunit: {
        all: ['tests/**/*.html']
//        all: {
//            options: {
//                timeout: 8000,
//                urls: [
//                    'http://localhost:8000/test/test.html'
//                ]
//            }
//        }
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

  grunt.registerTask('default', ['jshint', 'requirejs']);
  grunt.registerTask('server', ['connect']);
  grunt.registerTask('test', ['jshint', 'qunit']);

};

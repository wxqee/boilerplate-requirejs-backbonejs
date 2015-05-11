module.exports = function(grunt) {

  var extend = require('extend');

  var requireJsConfig = require('./app/_config.js').requireJsConfig;
  requireJsConfig = extend(requireJsConfig, {
      baseUrl: './app',
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


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: requireJsConfig  // options
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', 'requirejs');

};

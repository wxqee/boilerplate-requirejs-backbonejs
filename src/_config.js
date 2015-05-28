
var requireJsConfig = {

    shim: {
        "backbone": {
            deps: ['underscore', 'jquery']
        },
        "backbone.layoutmanager": {
            deps: ['backbone']
        },
        "backbone.stickit": {
            deps: ['backbone']
        },
        "backbone.localStorage": {
            deps: ['backbone'],
            exports: 'Backbone'
        },
        "bootstrap": {
            deps: ['jquery']
        }
    },

    paths: {
        "i18n": 'libs/require-2.1/i18n',
        "text": 'libs/require-2.1/text',
        "css": 'libs/require-2.1/css',
        "bootstrap": 'libs/bootstrap-3.3.4-dist/js/bootstrap',
        "bootstrap-css": 'libs/bootstrap-3.3.4-dist/css/bootstrap',
        "bootstrap-schema": 'libs/bootstrap-3.3.4-dist/css/bootstrap-theme',
        "handlebars": 'libs/handlebars-3.0.3/handlebars-v3.0.3',
        "backbone": 'libs/backbone-1.1.2/backbone',
        "underscore": 'libs/underscore-1.8.3/underscore',
        "jquery": 'libs/jquery-1.11/jquery-1.11.2',
        "backbone.layoutmanager": 'libs/backbone-1.1.2/backbone.layoutmanager',
        "backbone.stickit": "libs/backbone-1.1.2/backbone.stickit",
        "backbone.localStorage": 'libs/backbone-1.1.2/backbone.localStorage'
    }
};

if (typeof exports !== "undefined") {

    // Node.js context
    module.exports.requireJsConfig = requireJsConfig;

} else if (typeof define !== "undefined") {

    // Require.js context
    define(function(require) {
        requirejs.config(requireJsConfig);
    });

} else if (this === window) {

    // window context
    this.requirejs = requireJsConfig;

}


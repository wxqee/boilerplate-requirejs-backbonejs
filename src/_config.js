
var requireJsConfig = {
    urlArgs: "bust=" +  (new Date()).getTime(),

    shim: {
        backbone: {
            deps: ['underscore', 'jquery']
        },
        'backbone.layoutmanager': {
            deps: ['backbone']
        }
    },

    paths: {
        i18n: 'libs/require-2.1/i18n',
        text: 'libs/require-2.1/text',
        backbone: 'libs/backbone-1.1.2/backbone',
        underscore: 'libs/underscore-1.8.3/underscore',
        jquery: 'libs/jquery-1.11/jquery-1.11.2',
        'backbone.layoutmanager': 'libs/backbone-1.1.2/backbone.layoutmanager'
    }
};

if (typeof exports != "undefined") {

    // Node.js context
    module.exports.requireJsConfig = requireJsConfig;

} else if (typeof define != "undefined") {

    // Require.js context
    define(function(require) {
        requirejs.config(requireJsConfig);
    });

} else if (this === window) {

    // window context
    requirejs = requireJsConfig;
    this.requirejs = requirejs;

}


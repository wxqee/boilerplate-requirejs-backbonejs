
requirejs.config({
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
        text: 'libs/require-2.1/text',
        backbone: 'libs/backbone-1.1.2/backbone',
        underscore: 'libs/underscore-1.8.3/underscore',
        jquery: 'libs/jquery-1.11/jquery-1.11.2',
        'backbone.layoutmanager': 'libs/backbone-1.1.2/backbone.layoutmanager'
    }
});


require.config({
    baseUrl: '../src',

    paths: {
        'md5': 'libs/md5/md5'
    }
});

var testModules = [
    // TODO: More tests here.
    'tests/MD5Test.js',
    'tests/TestCaseBoilerplate.js',
];


require(['_config'], function () {
    require(testModules, function () {
        QUnit.load();
        QUnit.start();
    });
});


//require(['_config'], function () {
//    require(['underscore', 'jquery', 'backbone', 'backbone.layoutmanager'], function (_, $, Backbone) {
//        require(testModules, function () {
//            // Tests run.
//            QUnit.load();
//            QUnit.start();
//        });
//    });
//});

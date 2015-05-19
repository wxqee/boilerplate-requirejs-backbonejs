

require.config({
    baseUrl: '../src',

    paths: {
        // TODO: More libs to be tested defining paths here.
        'md5': 'libs/md5/md5'
    }
});

var testModules = [
    // TODO: More tests here.
    'testcase/MD5Test.js',
    'testcase/TestCaseBoilerplate.js',
    //'testcase/nls/todosTest.js',
];

require(['_config'], function () {
    require(testModules, function () {
        QUnit.load();
        QUnit.start();
    });
});

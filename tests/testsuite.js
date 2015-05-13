

require.config({
    baseUrl: '../src',

    paths: {
        'md5': 'libs/md5/md5'
    }
});

var testModules = [
    // TODO: More tests here.
    'testcase/MD5Test.js',
    'testcase/TestCaseBoilerplate.js',
];

require(['_config'], function () {
    require(testModules, function () {
        QUnit.load();
        QUnit.start();
    });
});

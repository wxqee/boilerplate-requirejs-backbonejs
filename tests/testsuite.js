require.config({
    baseUrl: '../src'
});

var testModules = [
    // TODO: More tests here.
    'testcase/MD5Test.js',
    'testcase/TestCaseBoilerplate.js'
    //'testcase/nls/todosTest.js',
];

require(['_config'], function () {
    require(testModules, function () {
        QUnit.load();
        QUnit.start();
    });
});

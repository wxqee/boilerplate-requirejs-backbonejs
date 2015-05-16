
// TODO: copy this file into another as a TestCase group.
define(function (require, exports, module) {

    // TODO: modules to test.
    var md5 = require('md5');

    QUnit.module('TestCases/TestCaseBoilerplate', {
        setup: function () {
            // TODO: initialize each TestCase
        },
        teardown: function () {
            // TODO: finalize each TestCase
        }
    });

    // TODO: A Async TestCase
    QUnit.test("Async is good", function (assert) {
        var done = assert.async();  // Get a promise.
        var expect = "1";
        setTimeout(function () {
            assert.ok(1 == expect, "Passed in async!");
            done();  // Don't forget to call promise.
        }, 500);
    });

    // TODO: A Sync TestCase
    QUnit.test("Always good", function (assert) {
        assert.ok(1 == "1", "Passed!");
    });

});


define(function (require, exports, module) {
    QUnit.module('TestCaseBoilerplate');

    QUnit.test("Always good", function(assert) {
        assert.ok(1 == "1", "Passed!");
    })
});

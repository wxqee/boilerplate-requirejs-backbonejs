
define(function (require) {
    var md5 = require('md5');

    QUnit.module('libs/md5');

    QUnit.test('MD5 exists', function (assert) {
        assert.equal(typeof md5, 'function', 'md5 is a function and can be loaded by requirejs.');
        assert.equal(typeof window.md5, 'undefined', 'md5 is not global in requirejs.')
    });

    QUnit.test('MD5 makes a md5 key', function (assert) {
        var helloMD5 = md5('hello');
        assert.equal(helloMD5, '5d41402abc4b2a76b9719d911017c592', 'md5(hello) = 5d41402abc4b2a76b9719d911017c592')
    });
});

define(function (require) {

    QUnit.module('nls/layout', {
        setup: function () {
        },
        teardown: function () {
        }
    });

    var i18n = require('i18n!nls/layout');
    var i18nZh = require('i18n!nls/zh/layout');

    /* Note:
     *  Once globally configured: config.i18n.locale = 'zh', then
     *  the best match to 'zh', then 'zh-xx', finally 'root'.
     *
     *  These i18n configs can be found in PROJECT/src/nls/ files.
     */

    QUnit.test("I18N loading test", function (assert) {
        assert.equal(typeof i18nZh.welcomeMessage, 'string', 'i18n item\'s content is string.');
        assert.equal(i18nZh.welcomeMessage, "你好，世界！！", "Chinese I18N.");
    });

    QUnit.test("I18N loading test", function (assert) {
        assert.equal(typeof i18n.welcomeMessage, 'string', 'i18n item\'s content is string.');
        assert.equal(i18n.welcomeMessage, "HELLO, WORLD!!", "English I18N.");
    });

});



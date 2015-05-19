define(function (require) {

    QUnit.module('nls/todos', {
        setup: function () {
        },
        teardown: function () {
        }
    });

    var i18n = require('i18n!nls/todos');
    var i18nZh = require('i18n!nls/zh/todos');

    /* Note:
     *  Once globally configured: config.i18n.locale = 'zh', then
     *  the best match to 'zh', then 'zh-xx', finally 'root'.
     *
     *  These i18n configs can be found in PROJECT/src/nls/ files.
     */

    QUnit.test("I18N loading test", function (assert) {
        assert.equal(typeof i18nZh.title, 'string', 'i18n item\'s content is string.');
        assert.equal(i18nZh.title, "任务列表", "Chinese I18N.");
    });

    QUnit.test("I18N loading test", function (assert) {
        assert.equal(typeof i18n.title, 'string', 'i18n item\'s content is string.');
        assert.equal(i18n.title, "Todo List", "English I18N.");
    });

});



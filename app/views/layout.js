/**
 * Created by Xiaoqiang on 2015/5/5.
 */

define(function (require) {
    var template = require('text!templates/layout.html');
    var i18n = require('i18n!nls/layout');

    var Layout = Backbone.Layout.extend({
        template: _.template(template),

        serialize: function () {
            return {
                i18n: i18n
            };
        }
    });

    return new Layout();
});

/**
 * Created by Xiaoqiang on 2015/5/5.
 */

define(function (require) {
    var template = require('text!templates/layout.html');

    var Layout = Backbone.Layout.extend({
        template: _.template(template),

        serialize: function () {
            return {
                hello: 'HELLO, WORLD!! I am from Layout template.'
            };
        }
    });

    return new Layout();
});

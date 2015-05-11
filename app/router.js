/**
 * Created by Xiaoqiang on 2015/5/5.
 */

define(function (require) {
    var layout = require('views/layout');

    var Workspace = Backbone.Router.extend({
        routes: {
            '': 'index',
            'index': 'index'
        },

        index: function () {
            layout.render().$el.appendTo('body');
        }
    });

    return new Workspace();
});

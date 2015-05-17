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
            $('#app').empty();
            layout.render().$el.appendTo('#app');
        }
    });

    return new Workspace();
});

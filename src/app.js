/**
 * Created by Xiaoqiang on 2015/5/5.
 */

define(function (require) {
    var Workspace = require('router');

    return {
        initialize: function () {
            Backbone.history.start();
        }
    };
});

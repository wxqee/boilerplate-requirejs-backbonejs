/**
 * Created by Xiaoqiang on 2015/5/5.
 */

require(['_config'], function () {
    require(['underscore', 'jquery', 'backbone', 'backbone.layoutmanager'], function (_, $, Backbone) {
        require(['app'], function (app) {
            app.initialize();
        });
    });
});

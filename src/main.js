/**
* Created by Xiaoqiang on 2015/5/5.
*/

require(['_config'], function () {
    require([
        'underscore', 'jquery', 'backbone',
        'bootstrap', 'css!bootstrap-css', 'css!bootstrap-schema',
        'backbone.layoutmanager', 'backbone.stickit', 'backbone.localStorage'
    ], function (_, $, Backbone) {
        require([
            'common', 'router', 'views/layout'
        ], function (common, Workspace, Layout) {
            common.Workspace = new Workspace();
            Backbone.history.start();

            new Layout();
        });
    });
});

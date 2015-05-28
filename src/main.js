/**
 * Created by Xiaoqiang on 2015/5/5.
 */

require(['common', '_config'], function (common) {

    /* require.js has issue of loading order to css files, resolved this as below manually. */
    // common.loadCss(require.toUrl('libs/bootstrap-3.3.4-dist/css/bootstrap.css'));
    // common.loadCss(require.toUrl('libs/bootstrap-3.3.4-dist/css/bootstrap-theme.css'));
    common.loadCss(require.toUrl('templates/todos.css'));

    require([
        'underscore', 'jquery', 'backbone', 'bootstrap',
        'backbone.layoutmanager', 'backbone.localStorage'
    ], function (_, $, Backbone) {
        _.templateSettings = {
          interpolate: /\{\{(.+?)\}\}/g,
          evaluate: /<%(.+?)%>/g
        };

        require([
            'common', 'router', 'views/todos-view', 'helpers/underscore-helper'
        ], function (common, Workspace, TodosView) {
            common.Workspace = new Workspace();
            Backbone.history.start();

            var todosView = new TodosView({
                el: 'body'
            }).render();
        });
    });
});

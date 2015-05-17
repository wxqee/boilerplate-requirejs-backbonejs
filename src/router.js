/**
 * Created by Xiaoqiang on 2015/5/5.
 */

define(function (require) {
    var common      = require('common'),
        contacts    = require('collections/contacts');

    var Workspace = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function (param) {
            common.ContactFilter = param || '';
            contacts.trigger('filter');
        }
    });

    return Workspace;
});

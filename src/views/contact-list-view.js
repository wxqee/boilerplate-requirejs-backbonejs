/**
 * Created by Xiaoqiang on 2015/5/17.
 */

define(function (require) {
    var template    = require('text!templates/contact-list-view.html'),
        i18n        = require('i18n!nls/contact-list'),
        contacts    = require('collections/contacts');

    var ContactListView = Backbone.Layout.extend({
        template: _.template(template),

        serialize: function () {
            return {
                i18n: i18n,
                contacts: contacts.toJSON()
            };
        },

        events: {
        },

        initialize: function () {
        }
    });

    return ContactListView;
});

/**
 * Created by Xiaoqiang on 2015/5/5.
 */

define(function (require) {
    var common          = require('common'),
        template        = require('text!templates/layout.html'),
        i18n            = require('i18n!nls/layout'),
        contacts        = require('collections/contacts'),
        Contact         = require('models/contact'),
        ContactListView     = require('views/contact-list-view'),
        ContactDetailView   = require('views/contact-detail-view');

    var Layout = Backbone.Layout.extend({
        template: _.template(template),

        serialize: function () {
            return {
                i18n: i18n
            };
        },

        views: {
            '#contact-main': new ContactListView(),
            '#contact-details': new ContactDetailView({
                model: contacts.at(0) || new Contact() // TODO: add one should sync with collection
            })
        },

        initialize: function () {
            this.listenTo(common.Workspace, 'route:create', this.getView('#contact-details').render);

            contacts.fetch({reset: true});

            $('#app').empty();
            this.render().$el.appendTo('#app');
        }
    });

    return Layout;
});

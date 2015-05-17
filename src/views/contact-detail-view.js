/**
 * Created by Xiaoqiang on 2015/5/17.
 */

define(function (require) {
    var template    = require('text!templates/contact-detail-view.html'),
        i18n        = require('i18n!nls/contact-detail'),
        Contact     = require('models/contact'),
        ContactDetailView;

    ContactDetailView = Backbone.Layout.extend({
        template: _.template(template),

        serialize: function () {
            return {
                i18n: i18n,
                contact: this.model.toJSON()
            };
        },

        initialize: function () {
            this.listenTo(this.model, 'change destroy', this.render);
        },

        afterRender: function () {
            this.$id = this.$('[name=id]');
            this.$name = this.$('[name=name]');
            this.$mobile = this.$('[name=mobile]');
        },

        events: {
            'click #createOrUpdate': 'createOrUpdate',
            'click #delete': 'deleteOne'
        },

        createOrUpdate: function () {
            var self = this;
            this.model.set({
                name: this.$name.val(),
                mobile: this.$mobile.val()
            });
            this.model.save();
        },

        deleteOne: function () {
            this.model.destroy();
        }
    });

    return ContactDetailView;
});

/**
 * Created by Xiaoqiang on 2015/5/17.
 */

define(function (require) {

    var Contact = require('models/contact'),
        Contacts;

    Contacts = Backbone.Collection.extend({
        model: Contact,
        localStorage: new Backbone.LocalStorage("contacts-backbone")
    });

    return new Contacts();
});

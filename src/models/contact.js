/**
 * Created by Xiaoqiang on 2015/5/17.
 */

define(function (require) {
    var Contact = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("contacts-backbone")
    });

    return Contact;
});

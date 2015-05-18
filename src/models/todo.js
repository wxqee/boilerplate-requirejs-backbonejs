
define([], function () {
    var Todo = Backbone.Model.extend({
        defaults: {
            text: '',
            createdAt: new Date()
        },
//        localStorage: new Backbone.LocalStorage('todos-backbone')
    });
    return Todo;
});

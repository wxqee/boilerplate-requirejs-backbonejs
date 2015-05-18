
define([], function () {
    var Todo = Backbone.Model.extend({
        defaults: {
            checked: false,
            text: '',
            createdAt: new Date()
        }
    });
    return Todo;
});

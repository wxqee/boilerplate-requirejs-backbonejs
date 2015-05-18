
define([
    'models/todo'
], function (Todo) {
    var Todos = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage('todos-backbone')
    });
    return new Todos();
});

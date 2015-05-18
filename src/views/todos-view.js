
define([
    'helpers/template-helper',
    'text!templates/todos.html',
    'css!templates/todos'
], function (tplHelper, template) {

    var TodosView = Backbone.Layout.extend({
        template: tplHelper.compile(tplHelper.process(template)),

        serialize: function () {
            return {
                tasks: [
                    { text: 'Hello1' },
                    { text: 'Hello2' }
                ]
            };
        },

        afterRender: function () {
        }
    });

    return TodosView;
});
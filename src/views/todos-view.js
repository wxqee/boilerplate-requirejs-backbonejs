
define([
    'helpers/template-helper',
    'text!templates/todos.html',
    'collections/todos',
    'models/todo',
    'css!templates/todos'
], function (tplHelper, template, todos, Todo) {

    var TodosView = Backbone.Layout.extend({
        template: tplHelper.compile(tplHelper.process(template)),

        events: {
            "submit .new-task": "addOne"
        },

        serialize: function () {
            return {
                tasks: todos.toJSON()
            };
        },


        afterRender: function () {
            this.$newTask = this.$('.new-task');
            this.$newTaskText = this.$('.new-task [name=text]');
        },

        initialize: function () {
            this.listenTo(todos, 'reset change add', this.render);
            todos.fetch({reset: true});
        },

        addOne: function (e) {
            e.preventDefault();
            todos.create({
                text: this.$newTaskText.val()
            });
            this.$newTaskText.val("");
        }
    });

    return TodosView;
});

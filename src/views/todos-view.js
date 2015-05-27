
define([
    'i18n!nls/todos',
    'text!templates/todos.html',
    'collections/todos',
    'models/todo',
    'views/locale-view'
], function (i18n, template, todos, Todo, LocaleView) {

    var TodosView = Backbone.Layout.extend({
        template: _.template(template),

        events: {
            "submit .new-task": "addOne",
            "click .toggle-checked": "toggleChecked",
            "click .delete": "deleteOne"
        },

        serialize: function () {
            return {
                i18n: i18n,
                tasks: todos.toJSON()
            };
        },

        views: {
            '#locale-container': new LocaleView()
        },

        afterRender: function () {
            this.$newTask = this.$('.new-task');
            this.$newTaskText = this.$('.new-task [name=text]');

            // Always focus on input
            this.$newTaskText.focus();
        },

        initialize: function () {
            this.listenTo(todos, 'reset change add destroy', this.render);
            todos.fetch({reset: true});
        },

        addOne: function (e) {
            e.preventDefault();
            var todo = new Todo({
                text: this.$newTaskText.val()
            });
            todos.create(todo.attributes);
            this.$newTaskText.val("");
        },

        toggleChecked: function (e) {
            var id = $(e.currentTarget).closest('li').data('id');
            var todo = todos.get(id);
            todo.set('checked', !todo.get('checked'));
            todo.save();
        },

        deleteOne: function (e) {
            var id = $(e.currentTarget).closest('li').data('id');
            todos.get(id).destroy();
        }
    });

    return TodosView;
});

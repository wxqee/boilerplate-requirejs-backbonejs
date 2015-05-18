
define([
    'handlebars',
    'text!templates/todos.html',
    'css!templates/todos'
], function (Handlebars, template) {

    // Use <template> tags as template partials.
    $('<nothing>').html(template).find('template').each(function () {
        Handlebars.registerPartial(this.id, this.innerHTML);
    });

    // Remove <template> tags.
    template = template.replace(/<(template)[^>]*>(.|[\r\n])*<\/\1>/, '');

    var TodosView = Backbone.Layout.extend({
        template: Handlebars.compile(template),

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
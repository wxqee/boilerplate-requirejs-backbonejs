
define('helpers/template-helper', [
    'handlebars'
], function (Handlebars) {
    var helper = {};

    helper.process = function (template) {
        // Use <template> tags as template partials.
        $('<nothing>').html(template).find('template').each(function () {
            Handlebars.registerPartial(this.id, this.innerHTML);
        }).remove();

        // Remove <template> tags.
        return template.replace(/<(template)[^>]*>(.|[\r\n])*<\/\1>/, '');
    }

    helper.compile = function (template) {
        return Handlebars.compile(template);
    }

    helper.addHelper = function (name, fn) {
        return Handlebars.registerHelper(name, fn);
    }

    return helper;
});
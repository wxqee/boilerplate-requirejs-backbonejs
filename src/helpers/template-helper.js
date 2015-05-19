
define('helpers/template-helper', [
    'handlebars'
], function (Handlebars) {
    var helper = {};

    var preProcess = function (template) {
        // Use <template> tags as template partials.
        $('<nothing>').html(template).find('script[type=template]').each(function () {
            Handlebars.registerPartial(this.id, this.innerHTML);
        }).remove();

        // Remove <template> tags.
        return template.replace(/<(template)[^>]*>(.|[\r\n])*<\/\1>/, '');
    }

    helper.compile = function (template) {
        return Handlebars.compile(preProcess(template));
    }

    helper.addHelper = function (name, fn) {
        return Handlebars.registerHelper(name, fn);
    }

    return helper;
});

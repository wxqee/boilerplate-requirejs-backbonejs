
define([
    'handlebars',
    'common'
], function (Handlebars, common) {
    var helper = {};

    /* TODO: register helpers here. */
    Handlebars.registerHelper('formatInt', function (val) {
        return new Handlebars.SafeString(common.formatIntWithComma(
            Handlebars.Utils.escapeExpression(val)
        ));
    });

    Handlebars.registerHelper('ifEqual', function (l, r, options) {
        if (l == r) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    /* Do NOT change this codes */
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
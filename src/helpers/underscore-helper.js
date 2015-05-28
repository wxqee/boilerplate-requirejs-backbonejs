define([
    'underscore',
], function (_) {
    function formatIntWithComma(intValue) {
        var val;
        switch (typeof intValue) {
            case "function": val = val(intValue); break;
            case "number": val = intValue.toString(); break;
            case "string": val = intValue; break;
            case "undefined": val = "0"; break; /* fix handlebars last item is undefined issue. */
            default: throw "Unknown type of <"+ typeof intValue +">, it should be function|number|string.";
        }
        var r = val.slice(-3), l = val.slice(0, -3);
        return l.length > 0 ? formatIntWithComma(l) + ',' + r : r;
    }

    function toUpperCase(text) {
        return text.toUpperCase();
    }

    var methods = {
        formatIntWithComma: formatIntWithComma,
        toUpperCase: toUpperCase
    };

    /* extends underscore */
    _.Helpers = _.Helpers || {};
    _.extendOwn(_.Helpers, methods);
});

/**
 * init.js, some initial works happening here, for example,
 * initializing require.js for your app.
 */
var App;

+(function (root) {

/* global container for none require.js modules */
App = root.App || {
    env: 'dev'
};

function loadDocRequireScript(src, main) {
    document.write('<scr' + 'ipt src="' + src + '" data-main="'+ main +'"></scr'+ 'ipt>');
}

function loadDocScript(src) {
    document.write('<scr' + 'ipt src=' + src + '></scr' + 'ipt>');
}

function getEntranceScriptDOM() {
    var bootstrapMatcher = /bootstrap.js$/g;
    var scriptTags = document.getElementsByTagName('script');
    var dom = null;
    [].forEach.call(scriptTags, function (sc) {
        if (sc.src) {
            var result = sc.src.split(bootstrapMatcher);
            if (result.length === 2) {
                dom = sc;
                dom.setAttribute('data-baseUrl', result[0]);
            }
        }
    });
    return dom;
}

function getBaseUrl() {
    return getEntranceScriptDOM().getAttribute('data-baseUrl').toString() || '';
}

function getLocale() {
    var locale = localStorage.getItem('locale') || (
        String.prototype.toLowerCase.call(navigator.language || navigator.userLanguage)
    );

    // make sure localStorage knows it, when <views/locale-view> using it later.
    localStorage.setItem('locale', locale);
    return locale;
}

var bootstrapDOM = getEntranceScriptDOM();
var requirejs = bootstrapDOM.getAttribute('data-requirejs');
var main = bootstrapDOM.getAttribute('data-main');

// initialize require.js on first step.
root.requirejs = {
    urlArgs: "bust=" +  (new Date()).getTime(),
    config: { i18n: { locale: getLocale() } }
};

// make sure prod environment will cache resources in browser by default.
if (App.env === 'prod') {
    delete root.requirejs.urlArgs;
}

loadDocRequireScript(requirejs, main);

root.App = App;

})(this);

/**
 * init.js, some initial works happening here, for example,
 * initializing require.js for your app.
 */
+(function (root) {

/* global container for none require.js modules */
var App = root.App || {
    env: 'dev'
};


function getLocale() {
    var locale = localStorage.getItem('locale') || (
        String.prototype.toLowerCase.call(navigator.language || navigator.userLanguage)
    );

    // make sure localStorage knows it, when <views/locale-view> using it later.
    localStorage.setItem('locale', locale);
    return locale;
}


// initialize require.js on first step.
root.requirejs = {
    urlArgs: "bust=" +  (new Date()).getTime(),
    config: { i18n: { locale: getLocale() } }
};

// make sure prod environment will cache resources in browser by default.
if (App.env === 'prod') {
    delete root.requirejs.urlArgs;
}

root.App = App;

})(this);

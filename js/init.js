/**
 * init.js, some initial works happening here, for example,
 * initializing require.js for your app.
 */
+(function (root) {


/* global container for none require.js modules */
root.App = root.App || {
    env: 'dev'
};
var App = root.App;


/* i18n works with module <views/locale-view> */
(function() {
    // get locale in localStorage
    var localeRuntime = localStorage.getItem('locale') || (
        String.prototype.toLowerCase.call(navigator.language || navigator.userLanguage)
    );

    // make sure localStorage knows it, when <views/locale-view> using it later.
    localStorage.setItem('locale', localeRuntime );

    // initialize require.js on first step.
    root.requirejs = {
        urlArgs: "bust=" +  (new Date()).getTime(),
        config: { i18n: { locale: localeRuntime } }
    };

    // make sure prod environment will cache resources in browser by default.
    if (App.env === 'prod') {
        delete root.requirejs.urlArgs;
    }
})();

})(this);

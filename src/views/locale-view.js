define([
    'text!templates/locale.html'
], function(template) {
    var LocaleView = Backbone.Layout.extend({
        template: _.template(template),
        serialize: function () {
            return {
                locale: this.getLocale(),
                languages: [
                    {name: 'zh-cn', displayName: '中文'},
                    {name: 'en-us', displayName: 'English'},
                ]
            };
        },  // serialize

        events: {
            'change [name=language]': 'changeLanguage'
        },

        changeLanguage: function (e) {
            var o = this.getLocale(),
                n = e.currentTarget.value;
            if (o === n) {
                return ;
            }
            this.setLocale(n);
            window.location.reload();
        },

        setLocale: function (lang) {
            localStorage.setItem('locale', lang);
        },
        getLocale: function () {
            return localStorage.getItem('locale');
        }
    });
    return LocaleView;
});

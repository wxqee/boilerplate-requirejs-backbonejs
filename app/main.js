/**
 * Created by Xiaoqiang on 2015/5/5.
 */

requirejs.config({
    paths: {
        text: 'libs/require-2.1/text'
    }
});

require([], function () {
    document.querySelector('body').innerHTML = '<h1>Hello, world.</h1>';
});

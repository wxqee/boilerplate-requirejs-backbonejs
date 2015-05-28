define(function() {
    /* TODO: add other common function here */

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    return {
        /* methods */
        loadCss: loadCss,

        /* variables */
        Workspace: null,
    };
});

// We chose to use requirejs for it's ability to modularize the app.
// The drawback is that require uses "AMD", and backbone does not support that.
// Requirejs released 'shims' to work around this issue.

requirejs.config({
    baseUrl: 'js/libs',
    // waitSeconds used to fix load timeout error
    waitSeconds: 200,
    paths: {
        app: '../app',
        router: '../app/router',
        jquery: 'jquery/jquery-2.1.4.min',
        text: 'text/text',
        underscore: 'underscore/underscore-min',
        backbone: 'backbone/backbone-min',
    },

    shim: {
        backbone: {
            deps: ["underscore", "jquery","text","router"],
            exports: "backbone"
        },

        underscore: {
            exports: '_'
        }
    }
});

// start by loading the router which directs which views to load.
// requirejs(['router'], function(AppRouter) {
//     // var initialize = function(){
//         console.log("requirejs initialize");
//         // Router.initialize();
//     // };

//     // return {
//     //     initialize: initialize
//     // };
// });


requirejs(['app/router']);



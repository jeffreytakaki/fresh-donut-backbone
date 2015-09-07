(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{}]},{},[1])
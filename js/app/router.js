// Filename: router.js
// define([
//    'backbone',
//    '../app/views/home-view'
// ], function(Backbone, HomeView){

//     var AppRouter = Backbone.Router.extend({
//         routes: {
//             '': 'index'
//         }
//     });

//     var initialize = function(){
//         var app_router = new AppRouter();

//         // Index Route
//         app_router.on('index', function(){

//             // var homeview = new HomeView();
//             console.log('test');
//             // homeview.initialize();
//         });

//         // Default Route
//         app_router.on('defaultAction', function(actions){
//             console.log('No Route', actions);
//         });

//         Backbone.history.start();

//         return app_router;
//     };

//     return {
//         initialize: initialize
//     };
// });


// Filename: router.js
define([
   'backbone',
   // '../app/views/home-view'
// ], function(Backbone, HomeView){
], function(Backbone){

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            console.log('running index function from router');
        }
    });

});
var app = angular.module('edawebdesign', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "app/views/home.html"
        })

        .state("contact", {
          url: "/contact",
          templateUrl: "app/views/contact.html",
          controller: "emailControl"
        })

    $urlRouterProvider.otherwise("/");
})
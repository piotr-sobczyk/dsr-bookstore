angular.module("bookstore").config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when("/about", {
            templateUrl: "pages/about.html"
        })
        .when("/bookDetails/:bookId", {
            controller: "BookDetailsCtrl",
            controllerAs: "bookDetailsCtrl",
            templateUrl: "pages/bookDetails.html"
        })
        .when("/", {
            templateUrl: "pages/main.html",
            controller: "BookListCtrl",
            controllerAs: "booksCtrl"
        })
        .otherwise({
            templateUrl: "pages/404.html"
        });
});
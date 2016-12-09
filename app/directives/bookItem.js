angular.module("bookstore").directive("bookItem", function(){
   return {
       restrict: "E",
       scope: {
            bookToDisplay: "=",
            showDelete: "=",
            deleteBook: "&"
       },
       templateUrl: "directives/templates/book-item.html"
   }
});
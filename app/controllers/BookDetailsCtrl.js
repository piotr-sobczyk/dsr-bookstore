angular.module("bookstore").controller("BookDetailsCtrl", function($routeParams, Books){
    var bookId = $routeParams.bookId;
    Books.findById(bookId).then((result) => {
        this.book = result.data;
    });
});
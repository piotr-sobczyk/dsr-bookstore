angular.module("bookstore").filter("bookItem", function(){
    return function(book){
        return (book.author || "") + (book.author && book.title ? " - " : "") + (book.title || "");
    }
});
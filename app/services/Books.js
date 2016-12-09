angular.module("bookstore").factory("Books", function($http){
    return {
        getAll: function(){
            return $http({method:"GET", url:"/books"});
        },
        addBook: function(newBook){
            return $http.post("/books", newBook);
        },
        deleteBook: function(bookToDelete){
            return $http.delete("/books/" + bookToDelete.id)
        },
        findById: function(bookId){
            return $http.get("/books/" + bookId);
        }
    }
});
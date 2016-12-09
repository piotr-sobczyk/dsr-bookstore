angular.module("bookstore").controller("BookListCtrl", function (Books, $location,
    $translate, $scope) {

    this.newBook = {
        author: "",
        title: ""
    };

    this.filters = {
        general: "",
        author: "",
        titles: ""
    };

    this.goToFirstBook = () => {
        $location.path("/bookDetails/1");
    };

    this.books = [];
    Books.getAll().then((result) => {
        this.books = result.data;
    });

    this.getLastBook = () => {
        this.books[this.books.length-1];
    };

    this.addBook = () => {
        if($scope.newBookForm.$invalid){
            alert("Incorrect data");
            return;
        }

        Books.addBook(this.newBook).then(() => {
            Books.getAll().then((result) => {
                this.books = result.data;
            });
        });

        $translate("booksList.bookAddedMessage").then(function(translation){
           alert(translation)
        });



    };

    this.deleteBook = (bookToDelete) => {
        Books.deleteBook(bookToDelete).then(() => {
            Books.getAll().then((result) => {
                this.books = result.data;
            });
        });
    }
});
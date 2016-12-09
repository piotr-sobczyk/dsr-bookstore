angular.module("bookstore").controller("BookListCtrl", function (/*$scope,*/ $timeout, Books, $location,
    $translate) {

    this.newBook = {
        author: "",
        title: "",
        pubDate: "2016-05-05"
    };

    this.filters = {
        general: "",
        author: "",
        titles: ""
    };

    this.open = false;
    this.openCalendar = () => {
        this.open = true;
    };

    this.goToFirstBook = () => {
        $location.path("/bookDetails/1");
    };

    this.books = [];
    Books.getAll().then((result) => {
        this.books = result.data;
    });

    this.lastBook = {author: "test", title: "test"};
    //$scope.$watchCollection("booksCtrl.books", (newValue, oldValue) => {
    //    this.lastBook = newValue[newValue.length-1];
    //});

    this.addBook = () => {
        //if($scope.newBookForm.$invalid){
        //    alert("Incorrect data");
        //    return;
        //}

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
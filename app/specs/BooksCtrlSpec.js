describe("BookListCtrl", function () {
    var createController;
    var $httpBackend;
    var getResponse;

    beforeEach(module("bookstore"));

    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
            var scope = $rootScope.$new();

            createController = function () {
                return $controller("BookListCtrl", {});
            };

            getResponse = $httpBackend.whenGET("/books").respond(200, [{
                id: 1,
                author: "Sienkiewicz",
                title: "Pan Wolodyjowkski"
            }]);

        })
    );

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it("adds a new book and receives updated book list", function () {
        var ctrl = createController();
        expect(ctrl.books.length).toBe(0);
        $httpBackend.flush();
        expect(ctrl.books.length).toBe(1);

        //getResponse.respond(200, [{
        //    author: "Sienkiewicz",
        //    title: "Pan Wolodyjowkski"
        //}, {
        //    author: "Tolkien",
        //    title: "Lotr"
        //}]);

        $httpBackend.expectPOST("/books", {
            author: "Tolkien",
            title: "Lotr"
        }).respond(200);

        $httpBackend.expectGET("/books").respond(200, [{
            author: "Sienkiewicz",
            title: "Pan Wolodyjowkski"
        }, {
            author: "Tolkien",
            title: "Lotr"
        }]);

        ctrl.newBook = {
            author: "Tolkien",
            title: "Lotr"
        };
        ctrl.addBook();
        $httpBackend.flush();
        expect(ctrl.books.length).toBe(2);


    });

    it("deletes a book", function () {
        $httpBackend.expectDELETE("/books/1").respond(200);

        var ctrl = createController();
        ctrl.deleteBook({id: 1});
        $httpBackend.flush();
    });


//it("adds new book", function(){
//    scope.ctrl.newBook = {
//        author: "Sienkiewicz",
//        title: "Pan Wolodyjowkski"
//    };
//    scope.ctrl.addBook();
//    expect(scope.ctrl.books.length).toBe()
//});

})
;
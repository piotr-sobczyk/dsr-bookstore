describe("bookItemFilter", function () {
    var $filter;

    beforeEach(module("bookstore"));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it("correctly displays book item", function () {
        var result = $filter("bookItem")({
            author: "Tolkien",
            title: "Lord of The Rings"
        });

        expect(result).toBe("Tolkien - Lord of The Rings");
    });

    it("correctly handles unknown author", function () {
        var result = $filter("bookItem")({
            title: "Lord of The Rings"
        });

        expect(result).toBe("Lord of The Rings");
    });

    it("correctly handles unknown title", function () {
        var result = $filter("bookItem")({
            author: "Tolkien"
        });

        expect(result).toBe("Tolkien");
    });

});
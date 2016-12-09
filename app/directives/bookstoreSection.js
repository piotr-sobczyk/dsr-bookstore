angular.module("bookstore").component("bookstoreSection", {
    transclude: true,
    template: "<div style='border: 2px dashed burlywood'><ng-transclude/></div>"
});
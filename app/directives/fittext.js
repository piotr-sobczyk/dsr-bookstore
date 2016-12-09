angular.module("bookstore").directive("fitText", function(){
    return {
        restrict: 'EA',

        link: function(scope, element){
            window.fitText(element);


            scope.$on(
                "$destroy",
                function handleDestroyEvent() {
                    window.fitText.destroy(element);
            })
        }
    }
});
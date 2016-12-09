angular.module("bookstore").controller("DateCtrl", function($scope){
    $scope.open = false;
    $scope.openCalendar = () => {
        $scope.open = true;
    };
});
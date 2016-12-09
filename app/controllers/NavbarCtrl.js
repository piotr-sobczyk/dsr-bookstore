angular.module("bookstore").controller("NavbarCtrl", function($translate){
   this.changeLanguageToPl = () => {
       $translate.use("pl");
   }

    this.changeLanguageToEn = () => {
        $translate.use("en");
    }
});
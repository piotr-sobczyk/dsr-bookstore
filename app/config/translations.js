var translationsEn = {
    "navbar": {
        "bookstoreTitle" : "Bookstore"
    },
  "booksList": {
      "bookListLabel": "Books list",
      "lastBookAdded": "Last book added",
      "bookAddedMessage": "A new book has been added!"
  },
  aboutPage: {
    "text": "This is awesome bookstore app created by DSR team!"
  }
};

var translationsPl = {
    "navbar": {
      "bookstoreTitle" : "Ksiegarnia"
    },
    "booksList": {
        "bookListLabel": "Lista ksiazek",
        "lastBookAdded": "Ostatnia dodana ksiazka",
        "bookAddedMessage": "Dodano ksiazke!"
    },
    aboutPage: {
        "text": "To jest wystrzalowa appka stworzona przez DSR team!"
    }
};


angular.module("bookstore").config(function($translateProvider){
    $translateProvider
        .translations('en', translationsEn)
        .translations('pl', translationsPl)
        .preferredLanguage('en');
});
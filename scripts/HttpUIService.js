app.service('HttpUiService', HttpUiService);
HttpUiService.$injector = ['$http', '$q', '$log'];

function HttpUiService($http, $q, $log) {
    var service = this;
    service.getBooksList = getBooksList;
    service.apiUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&q=inauthor:';
    function getBooksList(query) {

        var deferred = $q.defer();
        $http.get(service.apiUrl + query)
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (msg, code) {
            deferred.reject(msg);
            $log.error(msg, code);
        });
        return deferred.promise;

    }
}

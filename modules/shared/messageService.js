app.factory('messageService', ['$http', 'Backand',function($http,Backand){

    var messageService = {};
    messageService.endpoint  = Backand.getApiUrl() + "/1/objects/chat";

    messageService.getMessages = function(){
        return $http ({
            method: 'GET',
            url: messageService.endpoint ,
            params: {
                pageSize: 50,
                pageNumber: 1,
                filter: null,
                sort: '[{fieldName:\'id\', order:\'desc\'}]'
            }
        }).then(function(response) {
            return response.data.data;
        });
    };

    messageService.sendMessage = function(message){
        return $http({
            method: 'POST',
            url : messageService.endpoint,
            data: message,
            params: {
                returnObject: true
            }
        }).then(function(response) {
            return response.data;
        });
    };

    return messageService;

}]);
var index = angular.module('index',[]);

index.controller('indexController', ['$scope', 'Backand','messageService',function($scope,Backand,messageService){

    $scope.author = "guest-" + new Date().getTime();

    $scope.messages = [];

    Backand.on('message_added', function (data) {
        var newMessage = {
            "author" : data[2].Value,
            "text" : data[1].Value,
            "time" : data[3].Value
        };
        $scope.messages.unshift(newMessage);
        $scope.playNotification();
    });

    $scope.getMessages = function(){
        messageService.getMessages()
            .then(function(messages){
               $scope.messages = messages;
            });
    };

    $scope.sendMessage = function(){

        $scope.messageData = {
          "author" : $scope.author,
            "text" : $scope.text
        };

        messageService.sendMessage($scope.messageData)
            .then(function(messages){

            });
    };

    $scope.playNotification = function(){
        $scope.audio = new Audio();
        $scope.audio.src = "vendor/button_tiny.mp3";
        $scope.audio.volume = 1;
        $scope.audio.play();
    };


}]);
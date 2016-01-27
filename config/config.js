app.config(['BackandProvider',function(BackandProvider){
    BackandProvider.setAppName('backandchat')
        .setAnonymousToken('d6439ad7-2704-401f-8e0b-f948568721cf')
        .runSocket(true);
}]);
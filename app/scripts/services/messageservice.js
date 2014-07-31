'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http) {
    this.getMessages = function(){
    	return $http({
    		method: 'GET',
    		url: 'http://localhost:8080'
    	});
    };

    this.postMessage = function(message){
    	var messageObject = {
    		message: message,
    		timeStamp: new Date ()
    	};
    	return $http({
    		method: 'POST',
    		url: 'http://localhost:8080',
    		data: JSON.stringify(messageObject)
    	});
    };
  });

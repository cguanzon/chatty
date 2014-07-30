'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http) {
    this.getMessages = function(){
    	return $http({
    		method: 'GET',
    		url: 'http://localhost:8888'
    	});
    };
  });

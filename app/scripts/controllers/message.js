'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {

    $scope.getMessages = function(){
    	MessageService.getMessages().then(function(res) {
	  		$scope.messages = res.data;
		});
    };

    $scope.addMessage = function(){
    	MessageService.postMessage($scope.newMessage)
    		.then(function(){
    			$scope.getMessages();
    			debugger;
    			$scope.newMessage = '';
    		});
    };
    $scope.getMessages();

  });

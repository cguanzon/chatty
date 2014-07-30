'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope) {

    MessageService.getMessages().then(function(data) {
	  $scope.messages = data;
	});


  });

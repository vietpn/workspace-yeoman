'use strict';

/**
 * @ngdoc function
 * @name workspaceYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceYeomanApp
 */
angular.module('workspaceYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = "";
    }

    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    }
  });

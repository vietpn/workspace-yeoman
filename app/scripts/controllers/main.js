'use strict';

/**
 * @ngdoc function
 * @name workspaceYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceYeomanApp
 */
angular.module('workspaceYeomanApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    // load from storage service
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = "";
    }

    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    }
  });

'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Authors) {


      $scope.blogPosts = Blog.getPosts();
      $scope.blogAuthors = Authors.getAuthors();
      $scope.filters = {};
   
  });

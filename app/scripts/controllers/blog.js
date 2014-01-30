'use strict';

angular.module('bloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Author) {
    $scope.blogPosts = Blog.getPosts();
    $scope.authors = Author.getAuthors();
    $scope.authorFilter = {};
    $scope.changeAuthorFilter = function(author) {
      if (author === 'all') {
        $scope.authorFilter = {};
        return;
      }
      $scope.authorFilter.author = author;
    };
  });

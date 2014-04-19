'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Authors) {


      $scope.blogPosts = Blog.getPosts();
      $scope.blogAuthors = Authors.getAuthors();
      $scope.theFilter = {};


      $scope.allFilterClicked = function() {
      	$scope.theFilter.author = " ";
      }

      $scope.submitNewPost = function() {
      	var newPost = {};
      	newPost.title = $scope.newPostTitle + " says...";
      	newPost.body = $scope.newPostBody;
      	newPost.author = $scope.newPostAuthor;
      	$scope.blogPosts.push(newPost);
      }
   
  });

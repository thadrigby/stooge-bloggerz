'use strict';

angular.module('bloggerzApp')
  .service('Author', function Author() {
    return {
        getAuthors: function() {
            return ['Larry', 'Curly', 'Moe']
        }
    }
  });

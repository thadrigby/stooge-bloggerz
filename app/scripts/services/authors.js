'use strict';

angular.module('stoogeBloggerzApp')
  .service('Authors', function Authors() {
 	return {
    	getAuthors: function () {
    		return ['Moe', 'Curly', 'Larry']
    	}
    }
  });

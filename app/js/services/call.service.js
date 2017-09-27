(function() {
	'use strict';

	angular.module('angular-ac').service('CallService', ['$http',
		function($http) {
			var _calls = [];

			return {
				fetchAll: function fetchAll() {
					return $http.get('http://dev.archronos.com/activities').then(function success(resp) {
						// TODO: how about using the model?

						return _calls = resp.data;
					});
				},

				get: function get() {
					return _calls;
				}
			}
		}
	]);
})();
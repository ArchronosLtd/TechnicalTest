(function() {
	'use strict';

	angular.module('angular-ac').controller('ActivitiesController', ['CallService',
		function(CallService) {
			this.init = function init() {
				// TODO: can this be done better - any ideas?
				CallService.fetchAll();
			};

			this.getCalls = function getCalls() {
				return CallService.get();
			};
		}
	]);
})();
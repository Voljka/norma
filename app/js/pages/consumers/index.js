// var userService = require('..services/userService');

// var consumerController = require('./consumer-ctrl');

// angular.module('normaConsumersModule', [])
// 	.config('$httpProvider', function($httpProvider) {
// 		$httpProvider.defaults.withCredentials = true;
// 	})
// 	.controller('ConsumerCtrl', ['$scope', consumerController]);
// // 	// .factory('userService', ['$http', userService])


// module.exports = {
// 	template: require('./consumer.tpl'),
// 	controller: 'ConsumerCtrl',
// 	// controller: 'ConsumerCtrl',
// 	controllerAs: 'consumer'
// };

var controller = require('./consumer-ctrl.js');

module.exports = {
  template: require('./consumer.tpl'), 
  controller: ['$scope', controller]
};

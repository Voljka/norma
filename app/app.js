'use strict';

var angular = require('angular');

require('angular-route');
require('angular-ui-router');
require('angular-moment');

var normaConsumersPage = require('./js/pages/consumers/index'); //,
// 	// normaDeliveriesPage = require('./pages/deliveries'),
// 	// normaMediatorConditionsPage = require('./pages/mediator-conditions'),
// 	// normaMediatorsPage = require('./pages/mediators'),
// 	// normaPaymentsPage = require('./pages/payments'),
// 	// normaPositionsPage = require('./pages/positions'),
// 	// normaProducersPage = require('./pages/producers'),
// 	// normaProvidersPage = require('./pages/providers'),
// 	// normaSpecificationsPage = require('./pages/specifications');

console.log(normaConsumersPage);

// module.exports = angular
// 	.module('normaApp', [
// 		'angularMoment',
// 		'ngRoute'//,
// 		// 'ngEnter',
// 		// 'normaContractsPage',
// 		// 'normaDelivariesPage',
// 		// 'normaMediatorConsitionsPage',
// 		// 'normaMediatorsPage',
// 		// 'normaPaymentsPage',
// 		// 'normaPositionsPage',
// 		// 'normaProducersPage',
// 		// 'normaProvidersPage',
// 		// 'normaSpecificationsPage'
// 	])

// 	.controller('StageCtrl', function() {})

// 	.config('$routeProvider', function ($routeProvider) {
// 		$routeProvider
// 			.when('/', normaConsumersPage)
// 	})

// 	// .config(['$httpProvider', function ($httpProvider) {
// 	// 	$httpProvider.defauls.withCredentials = true;
// 	// }])

module.exports = angular
	.module('normaApp', [
		'ui.router',
		'ngRoute',
		'angularMoment'
		// 'normaConsumersModule',
	])
	.controller('StageCtrl', function() {})

	.config('$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', normaConsumersPage)
	})

	.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defauls.withCredentials = true;
	}]);

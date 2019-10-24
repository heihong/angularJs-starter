export default class HomeController {
	constructor($log) {
		'ngInject';
	}

	$onInit = () => {
		this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
	};
}

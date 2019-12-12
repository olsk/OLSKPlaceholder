import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKDetailPlaceholder_Misc', function () {

	it('classes OLSKLayoutElementTextVisual', function () {
		browser.assert.hasClass(OLSKDetailPlaceholder, 'OLSKLayoutElementTextVisual');
	});

});

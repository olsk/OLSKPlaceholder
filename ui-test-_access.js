import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKDetailPlaceholder: '.OLSKDetailPlaceholder',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKDetailPlaceholder_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKDetailPlaceholder', function () {
		browser.assert.elements(OLSKDetailPlaceholder, 1);
	});

});

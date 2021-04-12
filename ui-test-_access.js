const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKPlaceholder: '.OLSKPlaceholder',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKPlaceholder_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKPlaceholder', function () {
		browser.assert.elements(OLSKPlaceholder, 1);
	});

});

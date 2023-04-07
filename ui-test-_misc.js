const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKPlaceholder_Misc', function () {

	const OLSKPlaceholderHTML = '<b>' + Math.random().toString() + '</b>';

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKPlaceholderHTML,
		});
	});

	it('classes OLSKDecorTextVisual', function () {
		return browser.assert.hasClass(OLSKPlaceholder, 'OLSKDecorTextVisual');
	});

	it('binds OLSKPlaceholderHTML', function () {
		return browser.assert.OLSKInnerHTML(OLSKPlaceholder, OLSKPlaceholderHTML);
	});

});

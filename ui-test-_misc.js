const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKDetailPlaceholder_Misc', function () {

	const OLSKDetailPlaceholderHTML = '<b>' + Math.random().toString() + '</b>';

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKDetailPlaceholderHTML,
		});
	});

	it('classes OLSKDecorTextVisual', function () {
		browser.assert.hasClass(OLSKDetailPlaceholder, 'OLSKDecorTextVisual');
	});

	it('binds OLSKDetailPlaceholderHTML', function () {
		browser.assert.OLSKInnerHTML(OLSKDetailPlaceholder, OLSKDetailPlaceholderHTML);
	});

});

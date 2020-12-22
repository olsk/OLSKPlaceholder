const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKDetailPlaceholder_Misc', function () {

	it('classes OLSKDecorTextVisual', function () {
		browser.assert.hasClass(OLSKDetailPlaceholder, 'OLSKDecorTextVisual');
	});

});

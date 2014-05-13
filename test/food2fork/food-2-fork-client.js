var should = require('should'),
	Food2Fork = require('../../lib/food-2-fork');

describe('Food2Fork Client Tests: ', function () {

	describe('Initializing Module Tests:', function () {
		it('should not throw an exception', function (done) {
			(function () {
				var f = new Food2Fork();
			}).should.not.throw();
			done();
		});
	});

});

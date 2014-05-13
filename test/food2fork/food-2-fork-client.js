var should = require('should'),
	Food2Fork = require('../../lib/food-2-fork'),
	Errors = require('../../lib/errors'),
	F2Fconfig = require('../../config/food2fork.json');

describe('Food2Fork Client Tests: ', function () {

	describe('Initializing Module Tests:', function () {
		it('should throw an exepection when we do not pass a config file', function (done) {
			(function () {
				var f = new Food2Fork();
			}).should.throw();
			done();
		});
		it('should throw an "Configuration data is missing" exception', function (done) {
			var emptyConfig = {};
			(function () {
				var f = new Food2Fork(emptyConfig);
			}).should.not.throw('Configuration data is missing');
			done();
		});
		it('should throw an "API Key property is missing in the configuration data" expection', function (done) {
			var missingKeyConfig = {};
			(function () {
				var f = new Food2Fork(missingKeyConfig);
			}).should.throw('API Key property is missing in the configuration data');
			done();
		});
		it('should throw an "Host property is missing in the configuration data" expection', function (done) {
			var missingHostConfig = {
				key: 'empty'
			};
			(function () {
				var f = new Food2Fork(missingHostConfig);
			}).should.throw('Host property is missing in the configuration data');
			done();
		});
	});

});

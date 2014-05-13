var requests = require('request'),
	events = require("events"),
	util = require("util");

// http://food2fork.com/about/api

function Food2Fork(config) {
	var _self = this;
	this.config = config;
	if (this.config === undefined) {
		throw new Error('Configuration data is missing');
	}
	if (this.config.key === undefined) {
		throw new Error('API Key property is missing in the configuration data');
	}
	if (this.config.host === undefined) {
		throw new Error('Host property is missing in the configuration data');
	}

	this._cache_search = function () {
		return require('./data/food2fork/food2fork-search-chichen.json');
	};

	this._cache_get = function () {
		return require('./data/food2fork/food2fork-search-chichen.json');
	};

	this.search = function (params) {
		console.log("making search request");
		var options = {
				url : this.root_url + '/search',
				qs: {
					key: this.config.key,
					search: params.search
				}
			};
		var r = requests.get(options, function (err, res, body) {
			if (err) {
				_self.emit("food2fork:error", err);
			} else {
				clearInterval(i);
				_self.emit("food2fork:success", res, body);
			}
		});
	};

	this.get = function (params) {
		var options = {
				url : this.root_url + '/get',
				qs: {
					key: this.config.key,
					rId: params.id
				}
			};
		var r = requests.get(options, function (err, res, body) {
			if (err) {
				_self.emit("food2fork:error", err);
			} else {
				_self.emit("food2fork:success", res, body);
			}
		});
	};

	this.on("food2fork:error", _serviceErrorHandler);
	this.on("food2fork:success", _serviceSuccessHandler);

	function _serviceErrorHandler(error) {
		console.log(error);
		console.log(error.trace);
		process.exit(0);
	}

	function _serviceSuccessHandler(res, body) {
		console.dir(res);
		console.log(body);
	}

}

util.inherits(Food2Fork, events.EventEmitter);
module.exports = Food2Fork;

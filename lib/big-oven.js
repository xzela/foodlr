var requests = require('request'),
	events = require("events"),
	config = require('../config/bigoven.json'),
	util = require("util");

// http://api.bigoven.com/documentation

function BigOven(options) {

}

util.inherits(BigOven, events.EventEmitter);
module.exports = BigOven;

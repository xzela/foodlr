var requests = require('request'),
	events = require("events"),
	util = require("util");


function BigOven(options) {

}

util.inherits(BigOven, events.EventEmitter);
module.exports = BigOven;

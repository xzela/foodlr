var requests = require('request'),
	events = require("events"),
	config = require('../config/food2fork.json'),
	util = require("util");

// http://food2fork.com/about/api

function Food2Fork(options) {

}

util.inherits(Food2Fork, events.EventEmitter);
module.exports = Food2Fork;

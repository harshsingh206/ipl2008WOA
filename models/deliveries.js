var mongoose = require("mongoose");

// delivery Schema

var deliverySchema = mongoose.Schema({
	match_id:{
		type: Number,
		required: true
	},
	inning:{
		type: Number,
		required: true
	},
    batting_team:{
		type: String,
	    required: true
	},
	bowling_team:{
		type: String,
		required: true
	},
	over:{
		type: Number,
		required: true
	},
    ball:{
		type: Number,
		required: true
	},
    batsman:{
		type: String,
		required: true
	},
    non_striker:{
		type: String,
		required: true
	},
    bowler:{
		type: String,
		required: true
	},
    is_super_over:{
		type: Boolean,
		required: true
	},
    wide_runs:{
		type: Number,
		required: true
	},
    bye_runs:{
		type: Number,
		required: true
	},
    legbye_runs:{
		type: Number,
		required: true
	},
    noball_runs:{
		type: Number,
		required: true
	},
    penalty_runs:{
		type: Number,
		required: true
	},
    batsman_runs:{
		type: Number,
		required: true
	},
    extra_runs:{
		type: Number,
		required: true
	},
    total_runs:{
		type: Number,
		required: true
	},
    player_dismissed:{
		type: String,
		required: true
	},
    dismissal_kind:{
		type: String,
		required: true
	},
    fielder:{
		type: String,
		required: true
	},

});

var delivery = module.exports = mongoose.model('Delivery', deliverySchema);

// GET Books
module.exports.getDeliveries = function(callback, limit){
	Delivery.find(callback).limit(limit);
}

// GET Books by Id

// module.exports.getDeliveriesById = function(match_id, callback){
// 	Delivery.findOne({match_id : match_id}, callback);
// }

// module.exports.getDeliveriesById = function(match_id, callback){
// 	Delivery.findById({match_id : match_id}, callback);
// }

module.exports.getDeliveriesById = function(match_id, callback){
	Delivery.find({"match_id" : match_id }, callback);
}





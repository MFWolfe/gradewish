var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var classSchema = new Schema({
	className : String,
	email : String,
	desiredGrade : Number,
	currentGrade : Number,
	assignmentGoal : Number
});

module.exports = mongoose.model('Class', classSchema);
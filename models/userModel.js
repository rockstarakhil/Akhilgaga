var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  name:{
  	type:String,
  	required:[true,'User Must have a user name'],
  	unique:true
  }, 
  location: {
  	type:String,
  required:[true,'User must have a location']
}
});

const User  = mongoose.model('User',userSchema);

module.exports = User

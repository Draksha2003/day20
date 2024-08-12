const mongoose=require('mongoose')
const schema= mongoose.Schema // create a schema
const passportLocalMongoose=require('passport-local-mongoose');
var emp= new schema({
	username:{
		type:String
	},
	password:{
		type:String
	},
	DOB:{
		type:String
	},
	address:{
		type:String
	}
})
emp.plugin(passportLocalMongoose);
module.exports=mongoose.model('employee',emp)
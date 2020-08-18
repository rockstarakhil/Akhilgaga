const User = require('./../models/userModel');


exports.getAllUsers =async (req,res)=>{
	try{
		const queryObj = {...req.query};
		const query = User.find(queryObj);
		const users  = await query;
		res.status(201).json({
			status:'Sucess',
			results:users.length,
			data:{
				users
			}
		});
	}catch (err){
		res.status(400).json({
			status:'Fail',
			msg:err
		});
	}
}

exports.createUser = async(req,res)=>{
	try{
		const newUser = await User.create(req.body)
		res.status(201).json({
		status:'Sucess',
		data:{
			user:newUser
		}
	});
} catch(err) {
	res.status(400).json({
		status:'Fail',
		message:err
	});
}
};
exports.getUser = async(req,res)=>{
	try{
		const user = await User.findById(req.params.id)
		res.status(201).json({
			status:'Sucess',
			data:{
				user
			}
		});
	}catch (err){
		res.status(400).json({
			status:'Fail',
			message:err
		});
	}
};



const jwt = require('jsonwebtoken');
const	User = require('../models/User.js');
const	{ JWT_SECRET } = process.env;

// crea tokens
function signToken(user) {
	const userData = user.toObject()
	delete userData.password
	return jwt.sign(userData, JWT_SECRET)
}

// verificar token
function verifyToken(req, res, next) {
	const token = req.get('token') || req.body.token || req.query.token
	if(!token) return res.json({success: false, message: "No token provided"})
	jwt.verify(token, JWT_SECRET, (err, decodedData) => {
		if(err) return res.json({success: false, message: "Invalid token."})
		User.findById(decodedData._id, (err, user) => {
			if(!user) return res.json({success: false, message: "Invalid token."})
			req.user = user
			next()
		})
	})
}

module.exports = {
	signToken,
	verifyToken
};

const User = require('../models/User.js')
const signToken = require('../config/auth.js').signToken

module.exports = {
	// listar usuarios
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	// obtener usuario
	show: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	},

	// crear usuario
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({success: false, code: err.code})
			const token = signToken(user)
			res.json({success: true, message: "Usuario creado. Token añadido!", token})
		})
	},

	// actualizar usuario
	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "Usuario actualizado.", user})
			})
		})
	},

	// eliminar usuario
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "Usuario eliminado.", user})
		})
	},

	// route login
	authenticate: (req, res) => {
		User.findOne({email: req.body.email}, (err, user) => {
			if(!user || !user.validPassword(req.body.password)) {
				return res.json({success: false, message: "Credenciales incorrectas."})
			}
			const token = signToken(user)
			res.json({success: true, message: "Token añadido.", token})
		})
	}
};

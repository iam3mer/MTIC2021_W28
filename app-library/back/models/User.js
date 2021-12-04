const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const	userSchema = new mongoose.Schema({
		name: String,
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	})

// crear password hashed
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// chequear password
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
	}
	next()
})

module.exports = mongoose.model('User', userSchema);

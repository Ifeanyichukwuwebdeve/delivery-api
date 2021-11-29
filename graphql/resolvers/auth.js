const bcrypt = require('bcryptjs')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const { checkEmail } = require('./merge')

const secret = process.env.JWT_SECRET_KET

module.exports = {
	users: async (args, req) => {
		if (!req.isAuth) throw new Error('Not authorized')
		const users = await User.find()
		return users
	},
	createUser: async (args) => {
		try {
			// const foundUser = await User.findOne({ email: args.userInput.email })
			// if (foundUser) {
			// 	throw new Error('User exits already')
			// }
			checkEmail(args.userInput.email)
			const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
			const user = new User({
				name: args.userInput.name,
				email: args.userInput.email,
				password: hashedPassword
			})
			const result = await user.save()
			return { ...result._doc, password: null }
		} catch (error) {
			console.log(error)
			throw error
		}
	},
	login: async ({ email, password }) => {
		try {
			const user = await User.findOne({ email: email })
			if (!user) throw new Error("User with email dosen't exist")
			const isEqual = await bcrypt.compare(password, user.password)
			if (!isEqual) throw new Error('Invalid password')
			const token = jwt.sign({ userId: user._id, email: user.email }, secret, {
				expiresIn: '30d'
			})

			return {
				userId: user._id,
				token: token,
				tokenExpiration: 30
			}
		} catch (error) {
			throw error
		}
	}
}

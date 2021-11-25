const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KET

const faildedAuth = (req, next) => {
	req.isAuth = false
	return next()
}
// if (!req.isAuth) throw new Error('Unauthenticated')
module.exports = async (req, res, next) => {
	const authHeader = req.get('Authorization')
	if (!authHeader) {
		return faildedAuth(req, next)
	}
	const token = authHeader.split(' ')[1]
	if (!token) {
		return faildedAuth(req, next)
	}
	let decodedToken
	try {
		decodedToken = jwt.verify(token, secret)
	} catch (error) {
		return faildedAuth(req, next)
	}
	if (!decodedToken) {
		return faildedAuth(req, next)
	}
	// console.log(decodedToken)
	if(decodedToken.admin) req.isAdmin = true
	if(decodedToken.operator) req.isOperator = true
	req.isAuth = true
	req.userId = decodedToken.userId
	next()
}

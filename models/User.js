const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  password: String,
  bank: {
    accountName: String,
    accountNum: String,
    bank: String
  },
  state: String,
  city: String,
  address: String,
  location: String,
  rider: {
    type: Boolean,
    default: false
  },
  org: {
    type: Boolean,
    default: false
  },
  isOperator: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

const user = mongoose.model('User', userSchema)
module.exports = user
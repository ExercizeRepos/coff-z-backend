const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  aboutMe: { type: String },
  address: addressSchema,
  birthdate: { type: Date },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
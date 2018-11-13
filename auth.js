const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authenticate = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Get user by email
      const user = await User.findOne({ email });
      // Match Password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          // Password matched
          resolve(user);
        } else {
          // Password didn't match
          reject('Incorrect Password. Authentication Failed.');
        }
      });
    } catch (err) {
      // Email not found
      reject('Email not found. Authentication Failed');
    }
  });
};

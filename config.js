require('dotenv').config();

module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || 'http://localhost:3000',
  MONGODB_URI:
    process.env.MONGODB_URI ||
    `mongodb://${process.env.MONGODB_USER}:${
      process.env.MONGODB_PASS
    }@ds013162.mlab.com:13162/customer_api`
};

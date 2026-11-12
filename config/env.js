require('dotenv').config();

module.exports = {
  APP_NAME: process.env.APP_NAME || '',
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  SMS_API_KEY: process.env.SMS_API_KEY || '',
};

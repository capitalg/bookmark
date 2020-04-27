const dotenv = require('dotenv')

dotenv.config()
module.exports = {
  MONGODB_CXN_URL: process.env.MONGODB_CXN_URL,
}
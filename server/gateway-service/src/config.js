const dotenv = require('dotenv')

dotenv.config()
module.exports = {
  GOOD_READS_API_KEY: process.env.GOOD_READS_API_KEY,
  GOOD_READS_API_SECRET: process.env.GOOD_READS_API_SECRET,
  MONGODB_CXN_URL: process.env.MONGODB_CXN_URL,
}
const dotenv = require('dotenv')

dotenv.config()
module.exports = {
  BOOKS_SERVICE_NAME: process.env.BOOKS_SERVICE_NAME,
  BOOKS_SERVICE_ENDPOINT: process.env.BOOKS_SERVICE_ENDPOINT,
}
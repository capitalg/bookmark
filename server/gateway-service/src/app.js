const app = require('express')()
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const { MONGODB_CXN_URL } = require('./config')

app.use(require('cors')())

mongoose.connect(MONGODB_CXN_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening on port 4000...')
})
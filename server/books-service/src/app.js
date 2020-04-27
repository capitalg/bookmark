const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server')
const { buildFederatedSchema } = require('@apollo/federation')

const BooksDataSource = require('./models/book')
const BookNotesDataSource = require('./models/book-note')
const { typeDefs, resolvers } = require('./schema.js')

const {
  MONGODB_CXN_URL,
} = require('./config')

mongoose.connect(MONGODB_CXN_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources: () => ({
    books: new BooksDataSource(),
    bookNotes: new BookNotesDataSource(),
  })
})

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})

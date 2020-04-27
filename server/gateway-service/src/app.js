const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')
const {
  BOOKS_SERVICE_NAME,
  BOOKS_SERVICE_ENDPOINT,
} = require('./config')

const gateway = new ApolloGateway({
  serviceList: [
    { name: BOOKS_SERVICE_NAME, url: BOOKS_SERVICE_ENDPOINT },
  ],
})

const server = new ApolloServer({
  gateway,
  subscriptions: false,
})

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

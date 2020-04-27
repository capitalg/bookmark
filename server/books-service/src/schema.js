const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    books: [Book],
    book(_id: ID!): Book,
    bookNotes(bookId: ID!): [BookNote],
  }

  type Mutation {
    addBook(authorId: ID!, name: String!, genre: String!): Book
    addBookNote(bookId: ID!, pageNumber: Int!, text: String!): BookNote
  }

  type Book {
    _id: ID!,
    genre: String!,
    name: String!,
  }

  type BookNote {
    _id: ID!,
    bookId: ID!,
    pageNumber: Int,
    text: String,
    createdAt: String,
    updatedAt: String,
  }
`

const resolvers = {
  Query: {
    books: async (_source, _args, { dataSources: { books } }) => books.getBooks(),
    book: async (_source, { _id }, { dataSources: { books } }) => books.getBook(_id),
    bookNotes: async (_source, { bookId }, { dataSources: { bookNotes } }) => bookNotes.getByBookId(bookId),
  },
  Mutation: {
    addBook: async (
      _source,
      { name, genre, authorId },
      { dataSources: { books } }
    ) =>
      books.addBook({ name, genre, authorId }),
  }
  // TODO Add resolvers for federation queries
}


module.exports = { typeDefs, resolvers }

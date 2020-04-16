import { gql } from 'apollo-boost'

const addAuthorMutation = gql`
  mutation AddAuthor($name: String!){
    addAuthor(name: $name){
      id
      name
    }
  }
`

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      id
      name
    }
  }
`

const addBookNoteMutation = gql`
  mutation AddBookNote($bookId: ID!, $pageNumber: Number!, $text: String!){
    addBookNote(bookId: $bookId, pageNumber: $pageNumber, text: $text){
      id
      text
    }
  }
`

export { addAuthorMutation, addBookMutation, addBookNoteMutation }

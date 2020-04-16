import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`

const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        id
        name
      }
    }
  }
`

const getBookQuery = gql`
  query GetBook($id: ID){
    book(id: $id) {
      id
      name
      notes {
        id
        pageNumber
        text
      }
      author {
        id
        name
        books {
          id
          name
        }
      }
    }
  }
`

export { getAuthorsQuery, getBooksQuery, getBookQuery }

import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from 'graphql/queries'


import BookList from './book-list/BookList'
import BookNotes from './book-notes/BookNotes'
import {
  BooksContainer,
  BookListContainer,
  BookNotesContainer,
} from './BooksStyles'

const Books = ({ data: { books } }) => {
  const [selected, setSelected] = useState(null)
  const onClickBook = book => ev => setSelected(book.id)

  return (
    <BooksContainer>
      <BookListContainer>
        <BookList books={books} onClickBook={onClickBook} />
      </BookListContainer>
      <BookNotesContainer>
        <BookNotes bookId={selected} />
      </BookNotesContainer>
    </BooksContainer>
  )
}

export default graphql(getBooksQuery)(Books)

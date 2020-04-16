import React from 'react'

import Loading from 'components/elements/Loading'
import Card from 'components/elements/Card'

import {
  BookName,
  AuthorName,
} from './BookListStyles'

const BookList = ({ books, onClickBook }) =>
  <Loading loading={!books}>
    <>
      {books && books.map(book =>
        <Card key={book.id} onClick={onClickBook(book)}>
          <div>
            <BookName>{book.name}</BookName>
            <AuthorName>{book.author.name}</AuthorName>
          </div>
        </Card>
      )}
    </>
  </Loading>

export default BookList
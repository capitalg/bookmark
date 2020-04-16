import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from 'graphql/queries'

import {
  BookNotesContainer,
  BookName,
  AuthorName,
  GenreName,
} from './BookNotesStyles'

const NotesList = ({ notes }) =>
  <div>
    <h3>Your Notes</h3>
    <ul>
      {notes.map(note =>
        <li key={note.id}>{note.pageNumber}: {note.text}</li>
      )}
    </ul>
  </div>

const OtherBooksList = ({ books }) =>
  <div>
    <h3>Other books by this author</h3>
    <ul>
      {books.map(book =>
        <li key={book.id}>{book.name}</li>
      )}
    </ul>
  </div>

const BookNotes = ({ data: { book } }) =>
  <BookNotesContainer>
    {!book && <span>Select a book to see your notes</span>}
    {book &&
      <div>
        <div>
          <BookName>{book.name}</BookName>
          <GenreName>{book.genre}</GenreName>
        </div>
        <AuthorName>{book.author.name}</AuthorName>
        <NotesList notes={book.notes} />
        <OtherBooksList books={book.author.books} />
      </div>
    }
  </BookNotesContainer>

export default graphql(getBookQuery, {
  options: ({ bookId: id }) => ({
    variables: { id },
  }),
})(BookNotes)
import styled from 'styled-components'

const BookNotesContainer = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 10px;
  height: 80vh;
`

const BookName = styled.span`
  color: #B05A5A;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
`

const AuthorName = styled.span`
  font-size: 1em;
`

const GenreName = styled.div`
  font-size: 0.9em;
`

export { BookNotesContainer, BookName, AuthorName, GenreName }
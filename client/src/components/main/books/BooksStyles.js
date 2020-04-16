import styled from 'styled-components'

const BooksContainer = styled.div`
  grid-area: main;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: stretch;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
  }
`

const BookListContainer = styled.div`
  width: 25%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const BookNotesContainer = styled.div`
  margin-left: 40px;
  width: 75%;

  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
  }
`

export { BooksContainer, BookListContainer, BookNotesContainer }
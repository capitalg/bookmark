import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    background: #F5F5F5;
    font-family: 'Playfair Display', serif;
    font-size: 1em;
    margin: 0;
    padding: 0 5%;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    text-align: center;
    color: #484848;
  }

  div, p, span {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const RootContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "main";
  column-gap: 20px;
`

export { GlobalStyle, RootContainer }
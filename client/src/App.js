import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { GlobalStyle, RootContainer } from './AppStyles'
import Books from 'components/main/books/Books'
import Header from 'components/main/Header'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default () =>
  <RootContainer>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <>
        <Header />
        <Books />
      </>
    </ApolloProvider>
  </RootContainer>

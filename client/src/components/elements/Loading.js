import React from 'react'

export default ({ loading, children }) =>
  loading
    ? <div>Loading...</div>
    : children
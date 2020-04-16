import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from 'assets/logo/bookmark-logo.svg'

const Header = ({ className }) =>
  <div className={className} >
    <Logo title='BookMark Logo' />
  </div>

export default styled(Header)`
    grid-area: header;

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
`
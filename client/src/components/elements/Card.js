import React from 'react'
import styled from 'styled-components'

const Card = ({ className, onClick = () => { }, children }) =>
  <div className={className} onClick={onClick}>
    {children}
  </div>

export default styled(Card)`
  background: #FFFFFF;
  width: 95%;
  border-radius: 20px;
  margin: 0 0 10px 0;
  padding: 10px;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
`
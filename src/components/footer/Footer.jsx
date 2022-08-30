import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: black;
  color: ${props => props.color || "white"};
  padding: 0.5rem;
  margin-top: 2rem;
`

const StyledParagraph = styled.p`
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter className="footer" color="yellow">
      <StyledParagraph>&copy; MCP Sports 2022. All rights reserved.</StyledParagraph>
    </StyledFooter>
  )
}

export default Footer
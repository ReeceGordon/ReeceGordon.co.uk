/** @jsx jsx */
import { Styled, jsx, ThemeProvider } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'
import theme from "../gatsby-plugin-theme-ui/index"
import {css} from '@emotion/core'


const navBeforeA = css({
    marginRight: '10px',
    content: '{',
    transform: 'translateX(20px)',
    transition: 'transform 0.3s, opacity 0.2s',
    display: 'inline-block',
    opacity: '0',
  })
  
  const navBeforeAHover = css({
    opacity: '1',
    transform: 'translateX(0px)',
  })

const StyledLink = styled(Link)`
position: relative;
display: flex;
color: ${props => props.theme.colors.text};
text-transform: uppercase;
font-size: 1.5em;
text-decoration: none;
cursor: pointer;
transition: color 0.3s;
&: before{
  margin-right: 10px;
  content: '{';
  transform: translateX(20px);
  transition: transform 0.3s, opacity 0.2s;
  display: inline-block;
  box-sizing: border-box;
  opacity: 0;
}
&: hover:before {
    opacity: 1;
    transform: translateX(0px);
}
&: after{
  margin-left: 10px;
  content: '}';
  transform: translateX(-20px);
  transition: transform 0.3s, opacity 0.2s;
  display: inline-block;
  box-sizing: border-box;
  opacity: 0;
}
&: hover:after {
    opacity: 1;
    transform: translateX(0px);
}
&: hover {
    opacity: 0.8;
    color: ${props => props.theme.colors.blue[5]};
}
`

const testDiv = styled.div(
    {
        backgroundColor: 'black'
    },
    props => ({
        color: props.theme.colors.red[4]
    })
)

const NavLink = (props) => {
    return(
        <ThemeProvider theme={theme}>
            <StyledLink to={props.To}>{props.children}</StyledLink>
        </ThemeProvider>
    )
}

export default NavLink
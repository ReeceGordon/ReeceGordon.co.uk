/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import {css, keyframes} from '@emotion/core'

import AniLink from "gatsby-plugin-transition-link/AniLink"

import NavLink from "./navlink"
import NavLinkA from "./navLinkExternal"


const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

/*
https://css-tricks.com/intro-to-react-hooks/#article-header-id-0
https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
Mobile NAV
*/

const Nav =() => {
    return(
      <nav css={css`animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3s both;`} sx={{alignSelf: 'flex-end', display: ['none', 'none','block', 'block']}}>
        <ul sx={{display: 'flex', listStyle: 'none', justifyContent: 'flex-end', variant: 'nav.ul'}}>
          <li sx={{variant: 'nav.li'}}><NavLink To="/">Home</NavLink></li>
          <li sx={{variant: 'nav.li'}}><NavLink To="/about/">About</NavLink></li>
          <li sx={{variant: 'nav.li'}}><NavLinkA To="https://github.com/ReeceGordon?tab=repositories" Target="_blank" >GitHub</NavLinkA></li>
        </ul>
      </nav>
    )
}

export default Nav
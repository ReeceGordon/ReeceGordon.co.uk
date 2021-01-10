/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import NavLink from "./navlink"
import NavLinkA from "./navLinkExternal"

const NavNoAnim =() => {
    return(
      <nav sx={{alignSelf: 'flex-end', display: ['none', 'none','block', 'block']}}>
        <ul sx={{display: 'flex', listStyle: 'none', justifyContent: 'flex-end', variant: 'nav.ul'}}>
          <li sx={{variant: 'nav.li'}}><NavLink To="/">Home</NavLink></li>
          <li sx={{variant: 'nav.li'}}><NavLink To="/about/">About</NavLink></li>
          <li sx={{variant: 'nav.li'}}><NavLinkA To="https://github.com/ReeceGordon?tab=repositories" Target="_blank" >GitHub</NavLinkA></li>
        </ul>
      </nav>
    )
}

export default NavNoAnim
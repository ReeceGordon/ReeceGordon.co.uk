/** @jsx jsx */
import {  jsx,  ThemeProvider, Button } from "theme-ui"
import {  navigate } from "gatsby"
import React, { useState } from "react"
import {css} from '@emotion/core'
import theme from "../gatsby-plugin-theme-ui/index"

import NavLink from "./navlink"
import NavLinkA from "./navLinkExternal"

const NavMobile = (props) => {
    const [display, setDisplay] = useState(false);
    const [displayHome, setHome] = useState(false);
    const [displayAbout, setAbout] = useState(false);

    const currentRoute = props.Pathname;

    const toggle = React.useCallback(
      () => setDisplay(state => !state),[setDisplay],
    )

    const homeClickVisual = React.useCallback(
      () => setHome(state => !state),[setHome],
    )

    const aboutClickVisual = React.useCallback(
      () => setAbout(state => !state), [setAbout],
    )

    const homeClick = () => {

      console.log(props.Pathname);
      if(props.Pathname == '/'){
        setHome(true);
      }else{
        homeClickVisual();
      }
      navigate('/');
    }

    const aboutClick = () => {

      console.log(props.Pathname);
      if(props.Pathname == '/about'){
        setAbout(true);
      }else{
        aboutClickVisual();
      }
      navigate('/about');
    }

    const gitClick = () => {
      window.open("https://github.com/ReeceGordon?tab=repositories", "_blank");
    }

    return(
      <ThemeProvider theme={theme}>
      <nav sx={{alignSelf: 'flex-end', display: ['flex', 'flex','none', 'none'], flexDirection: 'column', alignItems:'flex-end'}}>
        <Button css={css`background-color: ${display ? '#1a1a1a' : 'transparent'};`} variant='mobileNav' title="Menu" sx={{justifyContent: 'center', padding: '0.25rem', width: '4rem', height: '4rem'}} onClick={toggle} aria-label='Toggle Menu'>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentcolor" viewBox="0 0 24 24" class="css-ipc245"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </Button>
        <ul css={css`display: ${display ? 'flex' : 'none'}; background-color: #404040; `}
         sx={{width: ['500px', '800px','0', '0'], flexDirection:'column', listStyle: 'none', justifyContent: 'center', padding: '0', alignItems: 'flex-end', variant: 'nav.ul', margin: '0'}}>
          <li onClick={homeClick} css={css`background-color: ${displayHome||currentRoute==='/' ? '#1a1a1a' : 'transparent'};`} sx={{py:'5%', paddingLeft: ['500px', '800px','0', '0']}}><NavLink To="/">Home</NavLink></li>
          <li onClick={aboutClick} css={css`background-color: ${displayAbout||currentRoute==='/about' ? '#1a1a1a' : 'transparent'};`} sx={{py:'5%', paddingLeft: ['500px', '800px','0', '0']}}><NavLink To="/about/">About</NavLink></li>
          <li onClick={gitClick} css={css`background-color: 'transparent';`} sx={{py:'5%', paddingLeft: ['500px', '800px','0', '0']}}><NavLinkA To="https://github.com/ReeceGordon?tab=repositories" Target="_blank" >GitHub</NavLinkA></li>
        </ul>
      </nav>
      </ThemeProvider>
    )
}

export default NavMobile
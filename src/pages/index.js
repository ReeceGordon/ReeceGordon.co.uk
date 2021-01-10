/** @jsx jsx */
import React from "react"
import {  navigate } from "gatsby"
import { Styled, jsx, Flex, Button, ThemeProvider } from "theme-ui"
import styled from '@emotion/styled'
import {css, keyframes} from '@emotion/core'
import theme from "../gatsby-plugin-theme-ui/index"

import SEO from "../components/seo"
import Nav from "../components/nav"
import NavMobileFade from "../components/navMobileFade"

/*  //Old Index
<Layout>
    <SEO title="Home" />
    <Styled.h1>Hi people</Styled.h1>
    <Styled.p>Welcome to your new Gatsby site.</Styled.p>
    <Styled.p>Now go build something great.</Styled.p>
    <div sx={{ maxWidth: 300, marginBottom: [3] }}>
      <Image />
    </div>
    <Styled.p>
      <Link to="/page-2/">Go to page 2</Link>
    </Styled.p>
  </Layout>

*/



function jelloVertical(props) {
  return keyframes`
  0% {
    transform: scale3d(1, 1, 1);
    color: ${props.theme.colors.text};
}
7.5% {
    transform: scale3d(0.75, 1.25, 1);
}
10% {
    transform: scale3d(1.25, 0.75, 1);
}
12.5% {
    transform: scale3d(0.85, 1.15, 1);
    color: ${props.theme.colors.blue[5]};
}
16.25% {
    transform: scale3d(1.05, 0.95, 1);
}
18.75% {
    transform: scale3d(0.95, 1.05, 1);
}
25% {
    transform: scale3d(1, 1, 1);
}
75% {
  color: ${props.theme.colors.text};
}
  `
}

const StyledJelloVSpan = styled.span`
display: inline-block;
position: relative;
animation: ${jelloVertical} 4s infinite both 5s;
`

function jelloHorizontal(props){
  return keyframes`
  0% {
    transform: scale3d(1, 1, 1);
    color: ${props.theme.colors.text};
  }
  7.5% {
    transform: scale3d(1.25, 0.75, 1);
  }
  10% {
    transform: scale3d(0.75, 1.25, 1);
  }
  12.5% {
    transform: scale3d(1.15, 0.85, 1);
    color: ${props.theme.colors.blue[5]};
  }
  16.25% {
    transform: scale3d(0.95, 1.05, 1);
  }
  18.75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  25% {
    transform: scale3d(1, 1, 1);
  }
  75% {
    color: ${props.theme.colors.text};
  }
  `
}

const StyledJelloHSpan = styled.span`
display: inline-block;
position: relative;
animation: ${jelloHorizontal} 4s infinite both 3.5s;
`

const slideIn = keyframes`
0% {
  transform: translateY(-600px) rotateX(-30deg) scale(0);
  transform-origin: 50% 100%;
  opacity: 0;
}
100% {
  transform: translateY(0) rotateX(0) scale(1);
  transform-origin: 50% 1400px;
  opacity: 1;
}
`
const slideInBlurred = keyframes`
0% {
  transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
  transform-origin: 50% 100%;
  filter: blur(40px);
  opacity: 0;
}
100% {
  transform: translateY(0) scaleY(1) scaleX(1);
  transform-origin: 50% 50%;
  filter: blur(0);
  opacity: 1;
}
`

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const trackingIn = keyframes`
0% {
  letter-spacing: -0.5em;
  transform: translateZ(-700px);
  opacity: 0;
}
40% {
  opacity: 0.6;
}
100% {
  transform: translateZ(0);
  opacity: 1;
}
`


const IndexPage = (props) => {
  const pathname = props.location.pathname;

  return(
  <ThemeProvider theme={theme}>
  <Flex sx={{minHeight: '100%', height: '100%', flexDirection: 'column'}}>
    <Flex sx={{bg: 'background', flexDirection: 'column', justifyContent: 'space-between', flex: '1', alignItems: 'center'}}>
    <SEO title="Home" />
    <Nav></Nav>
    <NavMobileFade Pathname={pathname}></NavMobileFade>
    <Flex sx={{flexDirection: 'column', justifyContent: 'center', flex: '1', alignItems: 'center', height: '100%'}} >
    
    <h1 css={css`animation: ${slideIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;`} sx={{textTransform: 'uppercase', fontSize: ['4em', '8em', '12em'], fontFamily: 'Big Shoulders Inline Text', fontWeight: '100', my: '0', textAlign: 'center'}}><StyledJelloHSpan>H</StyledJelloHSpan>i, I'm <StyledJelloVSpan>R</StyledJelloVSpan>eece</h1>

      <Styled.h3 css={css`animation: ${trackingIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 2s both;`} sx={{fontFamily: 'Montserrat', fontSize: ['0.875em','1.3125em','1.75em'], textAlign: 'center', fontWeight: '100'}}>I'm a software developer currently seeking new opportunities</Styled.h3>
      <Button onClick={event => {
      event.preventDefault()
      // TODO: do something with form values
      navigate("/about/")
    }} variant='secondary' css={css`animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3s both;`} sx={{marginTop: '2%'}}>LEARN MORE</Button>
    </Flex>

      <div></div>
    </Flex>
  </Flex>
  </ThemeProvider>
)
}

export default IndexPage

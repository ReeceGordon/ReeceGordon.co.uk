/** @jsx jsx */
import React from "react"
import SEO from "../components/seo"

import { Styled, jsx, Flex, Button, ThemeProvider } from "theme-ui"
import {css, keyframes} from '@emotion/core'
import theme from "../gatsby-plugin-theme-ui/index"
import ImageReece from "../components/picReece"
import ImageHarvin from "../components/picHarvin"
import ImageGit from "../components/picGit"
import ImageLinkedin from "../components/picLinkedin"
import ImageCV from "../components/picCV"

import NavNoAnim from "../components/navNoAnimation"
import NavMobile from "../components/navMobile"

const slideInRight = keyframes`
0% {
    transform: translateX(1000px);
    opacity: 0;
}
100% {
    transform: translateX(0);
    opacity: 1;
}
`

const AboutPage = (props) => {
    const pathname = props.location.pathname;

    return(
    <ThemeProvider theme={theme}>
        <Flex sx={{minHeight: '100%', height: '100%', flexDirection: 'column'}}>
            <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', flex: '1', alignItems: 'center'}}>
                <SEO title="About" />
                <NavNoAnim></NavNoAnim>
                <NavMobile Pathname={pathname}></NavMobile>
                <Flex css={css`animation: ${slideInRight} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`} sx={{mx:'1%', marginBottom: '1%'}}>
                <Flex css={{backgroundImage: 'url(../../wesinspired.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', }}
                 sx={{flexDirection: 'row', justifyContent: 'center', flex: '1', alignItems: 'flex-start', marginTop: '1%', mx: '1%'}} > 
                    <Flex sx={{flexDirection: 'column', flex:'2', alignItems: 'center', mx: ['0%','10%', '15%', '25%'], my: '3%'}}>
                        <Styled.h4 sx={{ my: '0' , fontSize: ['3.5em','4.5em','4.5em','4.5em'], textAlign: 'center'}}>About</Styled.h4>
                        <Styled.p sx={{fontSize: ['1em','2em','2em','2em']}}>Hi, I'm Reece Gordon.</Styled.p>
                        <div sx={{ minWidth: [330,530,630,930], marginBottom: [3] }}>
                            <ImageReece />
                        </div>  
                        <Styled.h4 sx={{ my: '0', fontSize: ['3.5em','4.5em','4.5em','4.5em'], textAlign: 'center'}}>The Brief</Styled.h4>
                        <Styled.p sx={{alignSelf: 'start',fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>I'm a Software Developer and recent MSc graduate from Coventry University, United Kingdom. I'm 24 years old and I've been a technology enthusiast for most of my life.</Styled.p>
                        <Styled.p sx={{alignSelf: 'start',fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>I use HTML, CSS, JavaScript, C#, C++, .Net Core, SQL, NoSQL, MVC, Python, Java among other Front-end/Back-end frameworks and languages.</Styled.p>
                        <Styled.p sx={{alignSelf: 'start',fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>Right now my focus is on React.js, Node, Gatsby and Next.js</Styled.p>
                        <Styled.h4 sx={{ my: '0', fontSize: ['3.5em','4.5em','4.5em','4.5em'], textAlign: 'center'}}>A Little More</Styled.h4>
                        <Styled.p sx={{alignSelf: 'start',fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>
                            I've been in love with Technology for most of my life and it all started due to pique in interest with computer hardware to learn how to build my own computer in my teenage years.
                            Since then my enthusiasm has grown exponentially and this initial spark has spiralled into my studying of Game Development as a Bachelor at Coventry University in which after much sacrifice and hard work I achieved a <i>First Class</i> degree.
                        </Styled.p>
                        <Styled.p sx={{alignSelf: 'start',fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>
                        Following my studies as a Bachelor, I decided to take my education further with a Masters degree in Software Development.
                             I took this level of education with the seriousness it deserved and I achieved a <i>Distinction</i> and had the pleasure of receiving the <i>Top Graduate Award</i> for excellent academic achievement amongst my peers.
                        </Styled.p>
                        <Styled.p sx={{alignSelf: 'start',fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>
                            During my time at University equally as important as my studies were the bonds and connections forged with many people whom I consider a great endowment to my life and hope continue to be so in the future.
                        </Styled.p>
                        <div sx={{ minWidth: [330,530,630,930], marginBottom: [3] }}>
                            <ImageHarvin />
                        </div> 
                        <Styled.p sx={{alignSelf: 'start',paddingBottom:['15%','10%','10%','10%'],fontSize: ['1em','1.3em','1.3em','1.3em'], mx: '1%'}}>
                            Outside of my interest in technology I make a hobby of reading varying books in different fields of expertise ranging from psychology to physics.
                            I also keep a habit of staying fit and healthy for my own sake.
                        </Styled.p>
                    </Flex>
                </Flex>
                </Flex>

                <Flex sx={{ flexDirection: 'column'}}>
                    <Flex sx={{ flexDirection: ['column', 'column','column', 'row'], alignItems:'center', justifyContent: 'center', marginBottom: '5%'}}>
                        <Flex sx={{backgroundColor: 'white', mx: '1%', my: ['3%', '3%', '3%', '0%'], minHeight: ['0%','0%','0%','100%'], minWidth: ['350px','400px','400px','400px'], flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Styled.h4 sx={{fontSize: ['3.5em','2.5em','2.5em','2.5em'],textAlign: 'center', my:'5%'}}>LinkedIn</Styled.h4>
                            <div sx={{ minWidth: [230,330,330,330], marginBottom: [3], mx:'5%' }}>
                                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/reece-gordon-0b551414b/">  
                                <ImageLinkedin />
                                </a>
                            </div> 
                            <Styled.p sx={{paddingBottom:'2%', mx:'5%'}}>
                            <Button sx={{fontSize: ['4.5em','2.5em','1.5em','1.5em']}} onClick={()=> window.open("https://www.linkedin.com/in/reece-gordon-0b551414b/", "_blank")}>Connect</Button>
                            </Styled.p>
                        </Flex>
                        <Flex sx={{backgroundColor: 'white', mx: '1%', my: ['3%', '3%', '3%', '0%'], minHeight: ['0%','0%','0%','100%'], minWidth: ['350px','400px','400px','400px'], flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Styled.h4 sx={{fontSize: ['3.5em','2.5em','2.5em','2.5em'],textAlign: 'center', my:'5%'}}>CV</Styled.h4>
                            <div sx={{ minWidth: [230,330,330,330], marginBottom: [3], mx:'5%' }}>
                                <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/15DVUGa70lZv360s1OziG5HRdX2iBu-HF/view">
                                <ImageCV />
                                </a>
                            </div> 
                            <Styled.p sx={{paddingBottom:'2%', mx:'5%'}}>
                            <Button sx={{fontSize: ['4.5em','2.5em','1.5em','1.5em']}} onClick={()=> window.open("https://drive.google.com/file/d/15DVUGa70lZv360s1OziG5HRdX2iBu-HF/view", "_blank")}>Download</Button>
                            </Styled.p>
                        </Flex>
                        <Flex sx={{backgroundColor: 'white', mx: '1%', my: ['3%', '3%', '3%', '0%'], minHeight: ['0%','0%','0%','100%'], minWidth: ['350px','400px','400px','400px'], flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Styled.h4 sx={{fontSize: ['3.5em','2.5em','2.5em','2.5em'], textAlign: 'center', my:'5%'}}>GitHub</Styled.h4>
                            <div sx={{ minWidth: [230,330,330,330], marginBottom: [3], mx:'5%' }}>
                                <a rel="noreferrer" target="_blank" href="https://github.com/ReeceGordon?tab=repositories">
                                <ImageGit />
                                </a>
                            </div> 
                            <Styled.p sx={{paddingBottom:'2%', mx:'5%'}}>
                            <Button sx={{fontSize: ['4.5em','2.5em','1.5em','1.5em']}} onClick={()=> window.open("https://github.com/ReeceGordon?tab=repositories", "_blank")}>Repositories</Button>
                            </Styled.p>
                        </Flex>
                    </Flex>
                </Flex>
                
            </Flex>
        </Flex>
    </ThemeProvider>
    )
}

export default AboutPage
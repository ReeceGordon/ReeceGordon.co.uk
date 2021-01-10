/** @jsx jsx */
import React from "react"

import SEO from "../components/seo"
import {  jsx, Flex } from "theme-ui"
import NavLink from "../components/navlink"

const NotFoundPage = () => (
  <Flex sx={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <SEO title="404: Not found" />
    <h1 sx={{fontSize: '12em',fontFamily: 'Big Shoulders Inline Text', fontWeight: '100', my:'5%'}}>404...</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness. There's always a way back:</p>
    <NavLink To="/">Home</NavLink>

  </Flex>
)

export default NotFoundPage

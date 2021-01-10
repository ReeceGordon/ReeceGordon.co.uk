/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import { Styled, jsx, Flex, Box, Button, ThemeProvider } from "theme-ui"
import {css, keyframes} from '@emotion/core'


const WesFlexCSS = props => css`
    background-size: auto;
`

const WesFlex =({ children }) => {
    return(
      <Flex css={{WesFlexCSS}}>
          {children}
      </Flex>
    )
}


export default WesFlex

import { tailwind as baseTheme } from "@theme-ui/presets"


export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#333333',
    text: '#fff'
  },
  nav: {
    li: {
      mx: '5%',
    },
    ul: {
      mx: '5%',
    }
  },
  buttons: {
    primary:{
      outline: 'none',
      '&:hover': {
        backgroundColor: 'background',
        cursor: 'pointer'
      }
    },
    secondary:{
      outline: 'none',
      fontSize: '1.5em',
      '&:hover': {
        color: 'background',
        backgroundColor: 'text',
        cursor: 'pointer'
      }
    },
    mobileNav:{
      outline: 'none',
      backgroundColor: 'transparent',
    },
  },
  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.root,
      fontFamily: 'body',
      height: '100%',
    },
    h1: {
      height: '100%',
    },
    h4: {
      color: '#333333',
      textTransform: '',
      fontSize: ['1em', '2em', '3em'],
      fontFamily: 'Montserrat',
      fontWeight: '80',
    },
    p: {
      fontFamily: 'Montserrat',
      color: '#333333',
      fontSize: ['0.4em', '0.8em', '1.2em'],
    }
  }
}
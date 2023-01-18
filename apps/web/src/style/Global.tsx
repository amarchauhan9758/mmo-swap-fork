import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: myFirstFont;
  src: url("/fonts/madetommyfont.otf");
}
@font-face {
  font-family: myHeadingFont;
  src: url("/fonts/fontbold.otf");
}
  * {
    font-family: 'myFirstFont', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle


import React from "react"
import GlobalStyle  from "../theme/GlobalStyle"
import themeSettings from "../theme/GlobalTheme"
import {ThemeProvider} from "styled-components"
function MyApp({ Component, pageProps }) {
  return (
    (
      <>
      <GlobalStyle />
      <ThemeProvider theme={themeSettings}>
        <Component {...pageProps} />
      </ThemeProvider>
      </>
    )
  )
}

export default MyApp


import React from "react"
import GlobalStyle  from "../components/theme/GlobalStyle"
import ThemeProvider from "styled-components"
function MyApp({ Component, pageProps }) {
  return (
    (
      <>
        <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      </>
    )
  )
}

export default MyApp

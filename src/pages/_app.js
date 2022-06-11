
import React, {useState} from "react"
import GlobalStyle  from "../theme/GlobalStyle"
import themeSettings from "../theme/GlobalTheme"
import {ThemeProvider} from "styled-components"
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    (
      <>
      <GlobalStyle />
      <ThemeProvider theme={themeSettings[theme]}>
        <Component {...pageProps} />
      </ThemeProvider>
      </>
    )
  )
}

export default MyApp

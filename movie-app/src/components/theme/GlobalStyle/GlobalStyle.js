import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    body {
        font-family: 'Poppins', sans-serif;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
export default GlobalStyle;
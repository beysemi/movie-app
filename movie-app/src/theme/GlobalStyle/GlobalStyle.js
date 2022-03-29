import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing:0%;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
export default GlobalStyle;
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing:0%;
        background-image: url('/bg.png');
        background-color: #121829;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    h1{
        font-size: 64px;
        line-height: 80px;
        font-weight: 600;
        letter-spacing: -2%;
    }
    h2{
        font-size: 48px;
        line-height: 56px;
        font-weight: 600;
        letter-spacing: -2%;
    }
    h3{
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
        letter-spacing: -2%;
    }
    h4{
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
        letter-spacing: -1.5%;
    }
    h5{
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        letter-spacing: -1.5%;
    }
    h6{
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        letter-spacing: -1.5%;
    }
    i{
        font-style: normal !important;
    }
`;
export default GlobalStyle;


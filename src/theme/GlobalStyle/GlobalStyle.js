import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
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
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
        @media screen and (min-width: 992px) {
            font-size: 64px;
            line-height: 80px;
        }
        
    }
    h2{
        font-size: 24px;
        line-height: 28px;
        line-height: 56px;
        font-weight: 600;
        letter-spacing: -2%;
        @media screen and (min-width: 992px) {
            font-size: 48px;
            line-height: 56px;
        }
    }
    h3{
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        letter-spacing: -2%;
        @media screen and (min-width: 992px) {
            font-size: 32px;
            line-height: 40px;
        }
    }
    h4{
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: -1.5%;
        @media screen and (min-width: 992px) {
            font-size: 24px;
            line-height: 32px;
        }
    }
    h5{
        font-size: 10px;
        line-height: 12px;
        font-weight: 700;
        letter-spacing: -1.5%;
        @media screen and (min-width: 992px) {
            font-size: 20px;
            line-height: 24px;
        }
        
    }
    h6{
        font-size: 8px;
        line-height: 12px;
        font-weight: 700;
        letter-spacing: -1.5%;
        @media screen and (min-width: 992px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    i{
        font-style: normal !important;
    }
    .no-scroll {
        overflow: hidden;
    }
`;
export default GlobalStyle;


import { createGlobalStyle} from 'styled-components';

// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif}') format('woff2');
        font-weight: 400;
        font-style: normal
    }
    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif_bold}') format('woff2');
        font-weight: bold;
        font-style: normal
    }
    body {
        font-family: 'ms_sans_serif';
        background: rgb(64, 71, 55);
        overflow-x: hidden;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
`;

export default GlobalStyle;

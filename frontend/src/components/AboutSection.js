import React from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import {
    Anchor,
    Panel,
    Button,
    Window,
    WindowHeader,
    WindowContent,
    styleReset,
    List,
    ListItem,
    Divider,
    Cutout,
    Toolbar
} from 'react95';

// pick a theme of your choice
import counterStrike from "react95/dist/themes/counterStrike";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";


const AboutSection = () => {
    return(
        <div>
            <GlobalStyles />
            <ThemeProvider theme={counterStrike}>

                <Panel>Wilder Siqueira Medeiros</Panel>
                <h2>Desenvolvedor de jogos</h2>

                <p> Junior Game Designer with experience in Unity and C#. I have the ability to work with an engine or tools or system to trigger events. I'm able to create the rules, tune the game and to implement some gameplay features. Taking Computer Science at Universidade Tecnológica Federal do Paraná (UTFPR).</p>

                <Button>Contact Me</Button>

            <img src="http://lorempixel.com.br/500/400/?1"></img>
            
            </ThemeProvider>
        </div>
    )
}

const GlobalStyles = createGlobalStyle`
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
  }
  ${styleReset}
`;

export default AboutSection
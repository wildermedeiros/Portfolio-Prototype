import React from "react";

import { About, Description, Image } from "../styles";

import { Button } from 'react-bootstrap'


const AboutSection = () => {
    return(
        <About>
          <Description>
              <h2>Wilder Siqueira Medeiros</h2>
              <h2>Desenvolvedor de jogos</h2>

              <p> Junior Game Designer with experience in Unity and C#. I have the ability to work with an engine or tools or system to trigger events. I'm able to create the rules, tune the game and to implement some gameplay features. Taking Computer Science at Universidade Tecnológica Federal do Paraná (UTFPR).</p>

                <Button variant="dark">Contact me</Button>
          </Description>
            <Image>
          <img src=""></img>
            </Image>
        </About>
    )
}

export default AboutSection

//http://lorempixel.com.br/500/400/?2
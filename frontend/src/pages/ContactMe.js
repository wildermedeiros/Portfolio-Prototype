import React from 'react'

import styled from 'styled-components'

import SocialNetworkSection from '../components/SocialNetworkSection'
import ContactForm from '../components/ContactForm'

const ContactMe = () => {
    return (
        <ContactStyled>
            <Title>
                Hellou
            </Title>
            <Areas>
                <FormArea>
                    <ContactForm />
                </FormArea>
                <SocialNetworkSection />
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`;

const Hide = styled.div`
  overflow: hidden;
`

const Areas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FormArea = styled.div`
  min-width: 80vh;
`

// Frame Animation
const Frame1 = styled.div`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default ContactMe

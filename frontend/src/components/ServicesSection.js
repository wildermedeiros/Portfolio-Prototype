import React from 'react'
import styled from 'styled-components'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faGraduationCap, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { About, Description } from '../styles'

const ServicesSection = () => {
    return (
        <Services>
            <Description>
            <h2>
                Things I <span>do</span>
            </h2>
            <Cards>
                <Card>
                    <div className='icon'>
                        <FontAwesomeIcon icon="fa-solid fa-book-heart" size='2x' />                        <h3>Portfolio</h3>
                    </div>
                    <p>Check my work on my Portfolio.</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <FontAwesomeIcon icon="fa-brands fa-google-play" size='2x' />                        <h3>Play Store</h3>
                    </div>
                <p>My indie game.</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faGraduationCap} size='2x' /> 
                        <h3>My Graduation</h3>
                    </div>
                    <p>Taking Computer Science at UTFPR.</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faGithub} size='2x' /> 
                        <h3>My code</h3>
                    </div>
                    <p>Check my Github Page.</p>
                </Card>
            </Cards>
        </Description>
    </Services>
    )
}

const IconContainer = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4;
  min-width: 150px;
  border: none;
  background-color: transparent;

  i,
  :hover {
    cursor: pointer;
  }

  i {
    margin-bottom: 8;
  }

  :hover {
    box-shadow: out;
  }
`;

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        img{
        fill: blue;
        }
        h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
        }
    }
`

const Video = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
`
export default ServicesSection

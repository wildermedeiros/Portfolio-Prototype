import React from 'react'

import styled from 'styled-components'

import { Folder, Wab321018 } from '@react95/icons';


const SocialNetworkSection = () => {
    return (
        <Network>
            <Hide>
                <Social href="http://github.com/wildermedeiros" target='_blank'>
                    <Folder />                  
                    <h3>github.com/wildermedeiros</h3>
                </Social>
            </Hide>
            <Hide>
                <Social href="http://linkedin.com/in/wildermedeiros" target='_blank'>
                    <Wab321018 />                  
                    <h3>LinkedIn</h3>
                </Social>
            </Hide>
        </Network>
    )
}

const Network = styled.div`
    padding: 1rem 5rem;
`;

const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2rem;
    text-decoration: none;
    &:hover{
        background: #7C6F2F;
        cursor: pointer;
    }
    h3 {
        margin: 1rem;
    }
`;

const Hide = styled.div`
  overflow: hidden;
`

export default SocialNetworkSection

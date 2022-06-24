import React from 'react'

//Styled Components
import styled from 'styled-components'

import {
    List,
    ListItem
} from 'react95';


//Navigation
import { Link } from 'react-router-dom'

const Nav = () => {
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    return (
        <StyledNav>
            <h1><Link to='/'>Wilder Medeiros</Link></h1>
            <List>    
                <ListItem>
                    <Link to='/' >{menuOptions.about}</Link>
                </ListItem>

                <ListItem>
                    <Link to='/portfolio'>{menuOptions.portfolio}</Link>
                </ListItem>

                <ListItem>
                    <Link to='/contact'>{menuOptions.contact}</Link>
                </ListItem>
            </List>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 2rem;
    }
    li {
        padding-left: 10rem;
        position: relative;
        a{
        font-size: 1.2rem;
        }
    }
`;

export default Nav

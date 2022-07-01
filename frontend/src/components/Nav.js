import React from 'react'

//Styled Components
import styled from 'styled-components'

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
            <ul>    
                <li>
                    <Link to='/' >{menuOptions.about}</Link>
                </li>

                <li>
                    <Link to='/portfolio'>{menuOptions.portfolio}</Link>
                </li>

                <li>
                    <Link to='/contact'>{menuOptions.contact}</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
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
        font-family: "Indie Flower", cursive;
    }
    li {
        padding-left: 10rem;
        position: relative;
        font-family: "Jura", sans-serif;
        a{
        font-size: 1.2rem;
        }
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
        display: inline-block;
        margin: 1rem;
        }
        ul {
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li {
            padding: 0;
        }
        }
    }
`;

export default Nav

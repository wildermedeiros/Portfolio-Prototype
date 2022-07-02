import React from 'react'

import styled from 'styled-components'

import Userfront from "@userfront/react";

import { Link, useNavigate } from 'react-router-dom'
import { LogoutButton } from './auth/Authentication'

Userfront.init("jb7v5wzn");

const Nav = () => {
    const navigate = useNavigate()
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    const exitDetailHandler = (e) => {
            navigate('/portfolio')
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

                {
                    !Userfront.accessToken() && (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Signup</Link>
                            </li>
                        </>
                    )
                }
                
                {Userfront.accessToken() && <li><LogoutButton/></li>}
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
        padding-left: 5rem;
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

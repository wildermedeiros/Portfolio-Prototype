import {React, useState} from 'react'

import {Tabs, Tab, Container } from 'react-bootstrap'

import PortfolioList from '../components/admin/PortfolioList'
import WelcomeTab from '../components/admin/WelcomeTab'

import { useNavigate } from 'react-router-dom'
import Userfront from "@userfront/react";

import jwt_decode from 'jwt-decode'

Userfront.init("jb7v5wzn");

const Admin = (location) => {
    const navigate = useNavigate()
    const projectId = 'jb7v5wzn'

    if (!Userfront.accessToken()) {
        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: location },
            }}
            />
        )
    }
    const accessData = jwt_decode(Userfront.accessToken())
    const userData = jwt_decode(Userfront.idToken())

    const roles = accessData.authorization[projectId].roles
    const isAdmin = roles.includes('admin')

    if (!isAdmin) {
        return (
            <Redirect to={{
                pathname: '/portfolio',
            }}
            />
        )
    }

    console.log("Access", accessData)
    console.log("user", userData)

    const access = JSON.stringify(accessData)
    const user = JSON.stringify(userData)

    return (
        <Container>
            <div>
                <h1>Admin Panel</h1>
            </div>

            <Tabs transition={false} defaultActiveKey="home" id="tab-navigation">
                <Tab eventKey="home" title="Home">
                    <WelcomeTab />
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                    <PortfolioList />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Admin

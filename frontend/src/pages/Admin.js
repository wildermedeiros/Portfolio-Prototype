import {React, useState} from 'react'

import { Jumbotron, Tabs, Tab, Container } from 'react-bootstrap'

import PortfolioList from '../components/admin/PortfolioList'
import WelcomeTab from '../components/admin/WelcomeTab'

const Admin = () => {
    return (
        <Container>
            <Jumbotron>
                <h1>Admin Panel</h1>
            </Jumbotron>

            <Tabs transition={false} defaultActiveKey="home" id="tab-navigation">
                <Tab eventKey="home" title="Home">
                    <WelcomeTab />
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                    <PortfolioList />
                </Tab>
                <Tab eventKey="user" title="User">
                    <p>User</p>
                    <p>{access}</p>
                    <p>{user}</p>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Admin

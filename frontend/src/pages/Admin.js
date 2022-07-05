import {React} from 'react'

import { Tabs, Tab, Container, Jumbotron } from 'react-bootstrap'

import PortfolioList from '../components/admin/PortfolioList'
import WelcomeTab from '../components/admin/WelcomeTab'

import { Navigate } from 'react-router-dom'
import Userfront from "@userfront/react";

import jwt_decode from 'jwt-decode'


Userfront.init("jb7v5wzn");

const Admin = (location) => {
    const projectID = 'jb7v5wzn'
    
    if (!Userfront.accessToken()) {
        return (
            <Navigate to={{
                pathname: '/login',
                state: { from: location },
            }}
            />
        )
    }
    const accessData = jwt_decode(Userfront.accessToken())
    const userData = jwt_decode(Userfront.idToken())

    const roles = accessData.authorization[projectID].roles
    const isAdmin = roles.includes('admin')

    if (!isAdmin) {
        return (
            <Navigate to={{
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
                <Jumbotron><h1>Admin Panel</h1></Jumbotron>
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

// TODO
/*
//  • dar rollback na versão do bootstrap para tentar utilizar o cardscolum
    • Dar refresh na página de admin após inserir, editar ou excluir algum portfolio
    • Verificar usuarios que não possuem role, possibilidade da aplicação não dar erro e redirecionar para pagina de login
//  • Portfolio: melhorar página de details
//  • Verificar requisitos do trabalho
    • Userfront: Utilizar versão antiga
    • Portfolio: Cards: Melhorar
    • Montar apresentação
    • Docker: desenvolver
*/
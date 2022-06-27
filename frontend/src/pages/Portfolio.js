import React from 'react'

import styled from 'styled-components'
import {useLocation} from 'react-router-dom'

import Card from '../components/Card'
import PortfolioDetail from '../components/PortfolioDetail'
import {useApi} from '../hooks/useApi'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const {data} = useApi('/portfolio')

    return (
        <PortfolioList>

            {slug && <PortfolioDetail slug={slug} />}
            
                <CardList>
                    {data?.data?.map(project => {
                        return( <Card key={project.slug} project={project}/> )
                    })}
                </CardList>
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
    padding: 2rem 2rem;
    }
    h2 {
        padding: 1rem 0rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const CardList = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Portfolio

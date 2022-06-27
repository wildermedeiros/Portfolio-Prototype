import React from 'react'

import styled from 'styled-components'

import {
    Panel,
    Divider
} from 'react95';

import moment from 'moment'
import {Link} from 'react-router-dom'

const Card =  ({project}) => {
    return (
        <StyledCard
                variant='outside'
                shadow>
            <Link to={`/portfolio/${project.slug}`}>
                <Content>
                    <InfoImage>
                        <img
                            layoutid={`image ${project.slug}`}
                            src={project.image}
                            alt={project.title}
                        />
                    </InfoImage>
                    <Info>
                    <Title layoutid={`title ${project.slug}`}>{project.title}</Title>
                        <h4>{moment(project.createdAt).format('MMM YYYY')}</h4>
                        <p layoutid={`descr ${project.slug}`}>{project.description}</p>
                    </Info>
                </Content>
            </Link>
        </StyledCard>
    )
}

const StyledCard = styled(Panel)`
    min-height: 30vh;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

const InfoImage = styled.div`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
`;

const Title = styled.h3`
    display: flex;
    justify-content: space-between;
`

export default Card

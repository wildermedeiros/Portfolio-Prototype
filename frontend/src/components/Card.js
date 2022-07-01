import React from 'react'

import styled from 'styled-components'

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

const StyledCard = styled.div`
    min-height: 30vh;
    box-shadow: 0px 5px 10px rgba(240, 255, 0, 0.3);
    border-color: #416CD5;
    border-style: outset;
    text-align: center;
    border-radius: 1rem;
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
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
`
export default Card

import React from 'react'
import styled from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';
import { Like, VideoTick, Star } from '../Icons';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(80px);
    border-radius: 12px;
    padding: 8px;
`;
const CardHead = styled.div`
    position: relative;
    img{
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        ${down('md')}{
            width: 100%;
        }
    }
`;
const CardBody = styled.div`
    margin-top: 8px ;
`;
const CardActions = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
`;
const CardAction = styled.button`
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
`;
const CardTitle = styled.h4`
    color: white;
    font-size: 18px;
`;
const CardRating = styled.div`
    position: absolute;
    top:8px;
    left: 8px;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    color: #FFAD49;
    svg{
        margin-right: 4px;
    }
`;

const Card = ({ cardTitle, CardImageURL, cardRatingScore }) => {
    return (
        <CardContainer>
            <CardHead>
                <img src={CardImageURL} alt={cardTitle} />
                <CardRating>
                    <Star stroke="#FFAD49" viewBox="0 0 24 24" width="16" height="16" />
                    {cardRatingScore}
                </CardRating>
            </CardHead>
            <CardBody>
                <CardTitle>{cardTitle}</CardTitle>
                <CardActions>
                    <CardAction>
                        <Like />
                    </CardAction>
                    <CardAction>
                        <VideoTick />
                    </CardAction>
                </CardActions>
            </CardBody>
        </CardContainer>
    )
}

export default Card;
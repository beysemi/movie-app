import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { up, down, between, only } from 'styled-breakpoints';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "../Card/Card";


const SliderTitle = styled.h2`
    color: ${({ theme }) => theme.slider.titleColor};
    font-size: 32px;
    margin-bottom: 16px;
    ${up('lg')} {
        margin-bottom:24px;
    }
`;
const SliderItem = styled.div`
    padding: 0 15px;
   ;
`;
const Section = styled.section`
    padding: 48px 0;
    ${up('lg')} {
        padding: 96px 0;
    }
`;
const MovieSlider = ({ sliderTitle, data }) => {
    const settings = {
        infinite: false,
        slidesToShow: 5.2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }

        ],
    };
    return (
        <Section>
            <Container fluid className="p-0">
                <Row className="m-0">
                    <Col xs={12} md={12} lg={12}>
                        <SliderTitle>{sliderTitle}</SliderTitle>
                    </Col>
                    <Col xs={12} md={12} lg={12} className="pe-0">
                        <Slider {...settings}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <SliderItem key={index} >
                                            <Card cardTitle={item.title} CardImageURL={item.image} cardRatingScore={item.rating} />
                                        </SliderItem>
                                    )
                                })
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Section >
    )
}
export default MovieSlider;


import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "react-bootstrap";
import speedometer from "../assets/speedometer.jpg"
import styled from "styled-components";
import paralaxImages from "../assets/parallaxImage.jpg";


const StyledContainer = styled.div`
    .myCard {
        position: relative;
        border: none;
        border-radius: 0;
    }
    
    .myImage {
        border-radius: 0;
        filter: brightness(0.5);
    }
    .myText{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
    }
`;

export const ImageWithOverlayContact = () => {
    return (
        <>
            <StyledContainer>
                <Card className="myCard">
                    <CardImg
                        src={speedometer}
                        alt="Описание изображения"
                        className="myImage"
                    />
                    <CardBody className="myText">
                        <CardTitle>Мы там где наши машины</CardTitle>
                        <CardText>
                            Не ищите нас на картах. Мы кочуем по дорогам, <br/> собирая самые свежие и честные отзывы об автомобилях.
                        </CardText>
                    </CardBody>
                </Card>
            </StyledContainer>
        </>
    )
}
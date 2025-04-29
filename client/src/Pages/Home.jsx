import React from "react";
import {Slider} from "../Components/Slider.jsx";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import image from '../assets/image.jpg'
import CardBmw from "../Components/CardBmw.jsx";
import Jumbotrone from "../Components/Jumbotrone.jsx";
import {AccordionQuestions} from "../Components/AccordionQuestions.jsx";
import {TypesOfCars} from "../Components/TypesOfCars.jsx";
import {About} from "../Components/About.jsx";

export const Home = () => {
    function handleClickCardBmw(model) {
        alert(`top ${model}`);
    }


    return (
        <>
            <Slider/>
            <TypesOfCars/>
            <div className="bg-dark">
                <Container className="d-flex justify-content-center align-items-center p-3">
                    <Row>
                        <Col className="m-2">
                            <CardBmw
                                image={image}
                                title="Bmw 1"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                        </Col>
                        <Col className="m-2">
                            <CardBmw
                                image={image}
                                title="Bmw 2"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                        </Col>
                        <Col className="m-2">
                            <CardBmw
                                image={image}
                                title="Bmw 3"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                        </Col>
                        <Col className="m-2">
                            <CardBmw
                                image={image}
                                title="Bmw 4"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Jumbotrone/>
            <AccordionQuestions/>
            <About></About>
        </>
    )
}
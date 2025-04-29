import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import car1 from '../assets/imageVert.jpg';
import '../css/About.css'

export const About = () => {
    return (
        <Container fluid className="bg-black bg-opacity-75 text-white py-5"> {/* Added padding for visual separation */}
            <Container className="my-component">
                <Row className="align-items-center"> {/* Vertically center content */}
                    <Col md={6} className="image-container">
                        <img src={car1} alt="car" className="component-image"/>
                    </Col>
                    <Col md={6} className="text-container">
                        <h2>Мы команда</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti enim error,
                            et fuga hic incidunt ipsum iusto magnam pariatur placeat repellat sed,
                            veniam voluptas voluptatum! Atque eius eos minus!</p>
                        <Row className="advantages">
                            <Col md={4} className="advantage-item">
                                <strong>300+</strong> Клиентов
                            </Col>
                            <Col md={4} className="advantage-item">
                                <strong>500+</strong> Инициаторов
                            </Col>
                            <Col md={4} className="advantage-item">
                                <strong>1000+</strong> Видео
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
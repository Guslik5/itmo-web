import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import iconGermanyCar from "../assets/Icons/Germany.jpg";
import iconJDMCar from "../assets/Icons/JDM.png";
import iconAmericanCar from "../assets/Icons/American.jpg";
import iconRussianCar from "../assets/Icons/Russian.png";

export const TypesOfCars = () => (
    <>
        <Container fluid className="bg-black text-white p-5">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center pb-5"><h3>А за кого ты?</h3></Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <img src={iconGermanyCar} alt="icon sport Car" width="140px"/>
                        <p className="p-2">Немцы</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <img src={iconJDMCar} alt="icon sport Car" width="140px"/>

                        <p className="p-2">Японцы</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <img src={iconAmericanCar} alt="icon sport Car" width="120px"/>

                        <p className="p-2">Американцы</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <img src={iconRussianCar} alt="icon sport Car" width="140px"/>

                        <p className="p-2">Отечественные</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
)
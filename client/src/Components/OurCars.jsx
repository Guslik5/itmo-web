import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import image from '../assets/image.jpg';
import '../css/OurCars.css';

export const OurCars = () => (
    <>
        <Container fluid className={"bg-black pb-5"}>
            <Container>
                <Row className="mx-5">
                    <Col>
                        <Card className="card-responsive">
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="bottom" src={image} width={"100%"}  />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="d-flex flex-column justify-content-between p-4" style={{minHeight: "271px"}}>
                                        <Card.Title>Марка модель</Card.Title>
                                        <Card.Text>
                                                <p>куцикуцуиуц куцпук екцуп цукп куп куцп цукп цкуп gurehguw reuhroghewr ggiregohwreoighrewiog grewg</p>
                                        </Card.Text>
                                        <Button variant="dark" className="learn-more-button">Learn more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="m-5">
                    <Col>
                        <Card className="card-responsive">
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="bottom" src={image} width={"100%"}  />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="d-flex flex-column justify-content-between p-4" style={{minHeight: "271px"}}>
                                        <Card.Title>Марка модель</Card.Title>
                                        <Card.Text>
                                            <p>куцикуцуиуц куцпук екцуп цукп куп куцп цукп цкуп gurehguw reuhroghewr ggiregohwreoighrewiog grewg</p>
                                        </Card.Text>
                                        <Button variant="dark" className="learn-more-button">Learn more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="m-5">
                    <Col>
                        <Card className="card-responsive">
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="bottom" src={image} width={"100%"}  />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="d-flex flex-column justify-content-between p-4" style={{minHeight: "271px"}}>
                                        <Card.Title>Марка модель</Card.Title>
                                        <Card.Text>
                                            <p>куцикуцуиуц куцпук екцуп цукп куп куцп цукп цкуп gurehguw reuhroghewr ggiregohwreoighrewiog grewg</p>
                                        </Card.Text>
                                        <Button variant="dark" className="learn-more-button">Learn more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="mx-5">
                    <Col>
                        <Card className="card-responsive">
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="bottom" src={image} width={"100%"}  />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="d-flex flex-column justify-content-between p-4" style={{minHeight: "271px"}}>
                                        <Card.Title>Марка модель</Card.Title>
                                        <Card.Text>
                                            <p>куцикуцуиуц куцпук екцуп цукп куп куцп цукп цкуп gurehguw reuhroghewr ggiregohwreoighrewiog grewg</p>
                                        </Card.Text>
                                        <Button variant="dark" className="learn-more-button">Learn more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
)
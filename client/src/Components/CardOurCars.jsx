import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import '../css/OurCars.css';

export function CardOurCars(props) {
    return (
        <Card className="card-responsive">
            <Row>
                <Col md={6}>
                    <Card.Img variant="bottom" src={props.image} width={"100%"}/>
                </Col>
                <Col md={6}>
                    <Card.Body className="d-flex flex-column justify-content-between p-4"
                               style={{minHeight: "271px"}}>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            <p>{props.description}</p>
                        </Card.Text>
                        <Button variant="dark" className="learn-more-button">Learn more</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}
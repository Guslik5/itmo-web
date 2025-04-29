import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import good from "../assets/Icons/good.png"

export const HeaderOwners = () => {

    return (
        <>
            <Container className="text-white pb-5">
                <p className="text-lg-center pt-5">Мастера руля</p>
                <h2 className="text-lg-center pb-5 m-0">Страстные владельцы автомобилей</h2>
                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                        <img src={good} alt="" width="60px"/>
                        <h4 className="pt-3">Заголовок</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi distinctio dolor ipsa iste,
                            maxime minima minus natus nesciunt nulla optio perspiciatis placeat possimus quam quas quia, sit, unde!</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                        <img src={good} alt="" width="60px"/>
                        <h4 className="pt-3">Заголовок</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi distinctio dolor ipsa iste,
                            maxime minima minus natus nesciunt nulla optio perspiciatis placeat possimus quam quas quia, sit, unde!</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                        <img src={good} alt="" width="60px"/>
                        <h4 className="pt-3">Заголовок</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi distinctio dolor ipsa iste,
                            maxime minima minus natus nesciunt nulla optio perspiciatis placeat possimus quam quas quia, sit, unde!</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
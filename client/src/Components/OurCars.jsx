import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import '../css/OurCars.css';
import {CardOurCars} from './CardOurCars.jsx'

// временный вариант, потом создам в useEffect ассинхронный динамический импорт, когда сделаю бек
import car1 from '../assets/image.jpg';

const images = {
    'bmw1.jpg': car1,
};

const data = [
    {
        name: "bmw 1 series",
        description: "top car with top motor",
        image: "bmw1.jpg",
    },
    {
        name: "bmw 2 series",
        description: "top car with top motor",
        image: "bmw1.jpg",
    },
    {
        name: "bmw 3 series",
        description: "top car with top motor",
        image: "bmw1.jpg",
    },
    {
        name: "bmw 4 series",
        description: "top car with top motor",
        image: "bmw1.jpg",
    }
]

export const OurCars = () => {
    function fetchCars() {
        // ЗАПРОС К БД НА ПОЛУЧЕНИЕ ДАННЫХ
    }

    return (
        <>
            <Container fluid className={"bg-black pb-5"}>
                <Container>

                    {data.map((car,index) => (
                        <Row className={`mx-5 ${index !== 0 ? 'm-5' : ''}`} key={index}>
                            <Col>
                                <CardOurCars
                                    image={images[car.image]}
                                    name={car.name}
                                    description={car.description}
                                />
                            </Col>
                        </Row>
                    ))}
                </Container>
            </Container>
        </>
    )
}
import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {HeaderOwners} from "../Components/HeaderOwners.jsx";
import owner1 from "../assets/image.jpg";
import {CardOurCars} from "../Components/CardOurCars.jsx";
import CardOwners from "../Components/CardOwners.jsx";

const images = {
    'owner1.jpg': owner1,
};

const data = [
    {
        name: "Dima",
        description: "top car with top motor",
        image: "owner1.jpg",
    },
    {
        name: "Oleg",
        description: "top car with top motor",
        image: "owner1.jpg",
    },
    {
        name: "Pasha",
        description: "top car with top motor",
        image: "owner1.jpg",
    },
    {
        name: "Anton",
        description: "top car with top motor",
        image: "owner1.jpg",
    },
    {
        name: "Anton",
        description: "top car with top motor",
        image: "owner1.jpg",
    },
    {
        name: "Anton",
        description: "top car with top motor",
        image: "owner1.jpg",
    },
    {
        name: "Anton",
        description: "top car with top motor",
        image: "owner1.jpg",
    }
]

export const Owners = () => {

    function chunkArray(array, chunkSize) {
        const results = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            results.push(array.slice(i, i + chunkSize));
        }
        return results;
    }

    return (
        <Container fluid className="bg-black">
            <HeaderOwners />

            <Container>
                {chunkArray(data, 3).map((row, rowIndex) => (
                    <Row key={rowIndex} className="pb-5">
                        {row.map((owner) => (
                            <Col md={4}>
                                <CardOwners
                                    image={images[owner.image]}
                                    title={owner.name}
                                    description={owner.description}
                                />
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>

        </Container>
    )
}
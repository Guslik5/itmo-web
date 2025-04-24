import React from 'react';

import {Container} from 'react-bootstrap';

export const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: 'white'}}>
        <Container className="d-flex justify-content-center p-1">
            <p>Bmw shop</p>
        </Container>
        <Container className="d-flex justify-content-center p-1">
            <p>2025</p>
        </Container>
    </Container>
)
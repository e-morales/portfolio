import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import typingbit from '../assets/typing-bit.png';

class Projects extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <img src={typingbit} />
                    </Col>
                    <Col>
                        <h1>This is where the projects will be.</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;
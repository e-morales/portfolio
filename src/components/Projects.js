import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import typingbit from '../assets/typing-bit.png';
import styled from 'styled-components';
import '../css/Projects.css';




class Projects extends Component {
    render() {
        return(
            <div className='black'>
            <Container>
                <Row>
                    <Col>
                        <img className="corners" src={typingbit} />
                    </Col>
                    <Col>
                        <h1>This is where the projects will be.</h1>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Projects;
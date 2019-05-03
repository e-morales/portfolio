import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ai from '../assets/ai.png';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import mongod from '../assets/mongodb.png';
import postman from '../assets/postman.png';
import ps from '../assets/ps.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import sketch from '../assets/sketch.jpeg';
import node from '../assets/node.png';
import lordbit from '../assets/lord-bit.png';




import '../css/Skills.css';



class Skills extends Component {
    render() {
        return (
            <Container className="view">
                <Row className="space">
                    <Col className='center'>
                        <Row className="hovering center">
                            <Col><img src={css} width='50' /></Col>
                            <Col><img src={html} width='50' /></Col>
                            <Col><img src={sass} width='50'/></Col>
                            <Col><img src={postman} width='50' /></Col>
                        </Row>
                        <Row className="hovering space center">
                            <Col><img src={mongod} width='50' /></Col>
                            <Col><img src={node} width='50' /></Col>
                            <Col><img src={python} width='50' /></Col>
                            <Col><img src={react} width='50' /></Col>
                        </Row>
                    </Col>
                    <Col  className="center">
                        <img src={lordbit} className="fluid" />
                    </Col>
                    <Col  className="center">
                    <Row className="hovering center">
                            <Col><img src={ai} width='50' /></Col>
                            <Col><img src={ps} width='50' /></Col>
                            <Col><img src={sketch} width='50' /></Col>
                            <Col><img src={bootstrap} width='50' /></Col>
                        </Row>
                    </Col>
                </Row>    
            </Container>
        );
    }
}

export default Skills
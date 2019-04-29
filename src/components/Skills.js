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


import '../css/Skills.css';



class Skills extends Component {
    render() {
        return (
            <Container className='hovering'>
                <Row>
                    <Col><img src={ai} width='50' /></Col>
                    <Col><img src={ps} width='50' /></Col>
                    <Col><img src={sketch} width='50' /></Col>
                    <Col><img src={bootstrap} width='50' /></Col>
                    <Col><img src={css} width='50' /></Col>
                    <Col><img src={html} width='50' /></Col>
                    <Col><img src={mongod} width='50'/></Col>
                </Row>
                <Row className='hovering'>
                    <Col><img src={postman} width='50' /></Col>
                    <Col><img src={sass} width='50' /></Col>
                    <Col><img src={ps} width='50' /></Col>
                    <Col><img src={python} width='50' /></Col>
                    <Col><img src={react} width='50' /></Col>
                </Row>
            </Container>
        );
    }
}

export default Skills
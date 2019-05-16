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
                            <Col><img src={css} alt="" width='50' /></Col>
                            <Col><img src={html} alt="" width='50' /></Col>
                            <Col><img src={sass} alt="" width='50'/></Col>
                            <Col><img src={postman} alt="" width='50' /></Col>
                        </Row>
                        <Row>
                            
                        </Row>
                        <Row className="hovering space center">
                            <Col><img src={mongod} alt="" width='50' /></Col>
                            <Col><img src={node} alt="" width='50' /></Col>
                            <Col><img src={python} alt="" width='50' /></Col>
                            <Col><img src={react} alt="" width='50' /></Col>
                        </Row>
                    </Col>
                    <Col  className="center">
                        <img src={lordbit} alt="" className="fluid" />
                    </Col>
                    <Col  className="center">
                    <Row className="hovering center">
                            <Col><img src={ai} alt="" width='50' /></Col>
                            <Col><img src={ps} alt="" width='50' /></Col>
                            <Col><img src={sketch} alt="" width='50' /></Col>
                            <Col><img src={bootstrap} alt="" width='50' /></Col>
                        </Row>
                    </Col>
                </Row>    
            </Container>
        );
    }
}

export default Skills
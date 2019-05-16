import React, { Component } from 'react';
import '../css/About.css';
import hibit from '../assets/hi-bit.png';
import { Row, Col } from 'react-bootstrap';



class About extends Component {
    render(){
        return(
            <Row>
                <Col sm={4}>
                    <img src={hibit} alt="Happy Bitmoji" />
                </Col>
                <Col className="center" sm={8}>
                    <h1>Enrique Morales</h1>
                    <h4>Web Developer | UI UX Designer</h4>
                    <h4>Hello, my name is Enrique Morales and I am from Watsonville, California. I first began my journey in tech as a designer and my curiosity led me into coding. I wanted to know exactly how one can create an application from scratch. </h4>
                    <Row className="middle">
                        <a href="https://github.com/e-morales" target="_blank">
                            <i class="fab fa-github-square"/>
                        </a>
                        <a href="https://www.linkedin.com/in/e-morales93/" target="_blank">
                            <i class="fab fa-linkedin" />
                        </a>
                        <a href="https://github.com/e-morales" target="_blank">
                            <i class="fab fa-slack" />
                        </a>
                        <a href="https://github.com/e-morales" target="_blank">
                            <i class="fab fa-google" />
                        </a>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default About
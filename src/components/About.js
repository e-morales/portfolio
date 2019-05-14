import React, { Component } from 'react';
import '../css/About.css';
import hibit from '../assets/hi-bit.png';
import { Row, Col } from 'react-bootstrap';



class About extends Component {
    render(){
        return(
            <Row>
                <Col sm={3}>
                    <img src={hibit} alt="Happy Bitmoji" />
                </Col>
                <Col className="center" sm={9}>
                    <h1> Hi, my name is Enrique</h1>
                    <h4>Web Developer | UI UX Designer</h4>
                    <div>
                        <a href="https://github.com/e-morales">
                            <i class="fab fa-github-square"/>
                        </a>
                        <a href="https://www.linkedin.com/in/e-morales93/">
                            <i class="fab fa-linkedin" />
                        </a>
                        <a href="https://github.com/e-morales">
                            <i class="fab fa-slack" />
                        </a>
                        <a href="https://github.com/e-morales">
                            <i class="fab fa-google" />
                        </a>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default About
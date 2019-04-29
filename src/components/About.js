import React, { Component } from 'react';
import '../css/About.css';
import hibit from '../assets/hi-bit.png';
import { Row, Col } from 'react-bootstrap';



class About extends Component {
    render(){
        return(
            <Row>
                <Col sm={3}>
                    <img src={hibit} />
                </Col>
                <Col className="center" sm={8}>
                    <h1> Hi, my name is Enrique</h1>
                </Col>
            </Row>
        )
    }
}

export default About
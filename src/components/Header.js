import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import onionsbit from '../onions-bit.png';
import typingbit from '../typing-bit.png';
import '../index.css';
import {Navbar} from 'react-bootstrap';


class Header extends Component {
    render() {
        return(
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={ typingbit }
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />
                        {' React Bootstrap'}
                    </Navbar.Brand>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/main'}>Main</Link>
                </Navbar>
                <h1>Welcome</h1>
            </header>
        )
    }
}

export default Header
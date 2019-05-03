import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';




const Styles = styled.div`
    
    a {     
        display: block;     
        padding: .25em;
        text-decoration: none;
        color: black;     
     }
    
    .nav-tabs .nav-link.active{
        border: 2px solid black; 
        border-color: black black transparent;
    }

    .nav-link {
        border-bottom: 2px solid black;
    }
    
    .nav-tabs.active {
        border-bottom: 2px solid black;
    }

    .nav-tab:hover, .nav-link:hover {
        border-top: 2px solid lightgray;
        border-right: 2px solid lightgray;
        border-bottom: 2px solid white;
        border-left: 2px solid lightgray;

    }
    
    .nav {
        margin-bottom: 4em;
    }

`;


class NavigationBar extends Component{
    render() {
        return(
            <Styles>
                <Nav fill className="justify-content-center" variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="/home"><Link to='/about'>About</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/skills"><Link to='/skills'>Skills</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/projects"><Link to='/projects'>Projects</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/contact"><Link to='/contact'>Contact</Link></Nav.Link>
                    </Nav.Item>

                </Nav>
                <Switch>
        <Route exact path='/' component={ About } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/skills' component={ Skills } />
        <Route path='/projects' component={ Projects } />
        <Route path='/contact' component={ Contact } />
    </Switch>
            </Styles>
        )
    }
}
    
export default NavigationBar;



    // <Styles>
    //     {/* <Navbar expand="lg">
    //         <Navbar.Brand href="/">
    //             <img
    //                 alt=""
    //                 src={ praybit }
    //                 width="60"
    //                 height="60"
    //                 className="d-inline-block align-top"
    //             />
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
                
    //         </Navbar.Collapse>
    //     </Navbar> */}
    // </Styles>
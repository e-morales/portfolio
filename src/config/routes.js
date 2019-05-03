import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


export default (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={ About } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/skills' component={ Skills } />
        <Route path='/projects' component={ Projects } />
        <Route path='/contact' component={ Contact } />
    </Switch>
    </BrowserRouter>
)
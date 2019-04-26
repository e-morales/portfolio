import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import MainContainer from '../containers/MainContainer';

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/main' component={ MainContainer } />
    </Switch>
)
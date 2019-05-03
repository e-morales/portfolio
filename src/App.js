import React, {Component} from 'react';
import myRoutes from './config/routes';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
      
    );
  }
}

export default App;
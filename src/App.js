import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavigationBar from './components/NavigationBar';



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
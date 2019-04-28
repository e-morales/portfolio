import React, {Component} from 'react';
import myRoutes from './config/routes';
import './css/App.css';
import { Layout } from './components/Layout';
import Bitmoji from './components/Bitmoji';
import { NavigationBar } from './components/NavigationBar';
import About from './components/About';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <About />
          <div className="App">
            { myRoutes }
            <Bitmoji />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
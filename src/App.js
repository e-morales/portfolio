import React, {Component} from 'react';
import myRoutes from './config/routes';
import './App.css';
import { Layout } from './components/Layout';
import Bitmoji from './Bitmoji';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
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
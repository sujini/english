import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {HashRouter} from 'react-router-dom';
import './App.css';

import DelayRoute from './components/DelayRoute';

class App extends Component {
  
  render() {
    return (      
      <HashRouter>
        <div className="wrap">
          <Navbar/>
          <DelayRoute/>
          
        </div>
      </HashRouter>
    

    );
  }
}

export default App;

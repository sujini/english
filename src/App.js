import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {HashRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Homework from './components/Homework';


class App extends Component {
  
  render() {
    return (      
      <HashRouter>
        <div className="wrap">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/homework/:id" component={Homework} />            
            <Route exact path="/homework/:id/:id2" component={Homework} />           
            <Route exact path="/homework/:id/:id2/:id3" component={Homework} />          
          </Switch>
        </div>
      </HashRouter>
    

    );
  }
}

export default App;

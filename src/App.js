import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import EnList from './components/EnList';


class App extends Component {
  
  render() {
    return (
      <div className="App">
      
        <HashRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/homwork/:id" component={EnList} />            
           
            </Switch>
          </div>
        </HashRouter>
    
      </div>
    );
  }
}

export default App;

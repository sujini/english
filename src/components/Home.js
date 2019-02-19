import React,{Component} from 'react';

import {Link} from 'react-router-dom';
class Home extends Component{

  
    render(){
  
        return (
            <div children="container home">
                <h2 className="center">Home</h2>    
                <ul>
            
                    <li className="card"><Link className="card-content card-title red-text" to="/homwork/1">homwork 1</Link></li>
                    <li className="card"><Link className="card-content card-title red-text" to="/homwork/2">homwork 2</Link></li>
                    <li className="card"><Link className="card-content card-title red-text" to="/homwork/3">homwork 3</Link></li>
                </ul>
            </div>
        )
    }
}



export default Home;


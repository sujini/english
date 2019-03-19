import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component{

  
    render(){
  
        return (
            <div className="container home">
                <div className="inner">
                   
                    <p className="center"><img src="./img/desc.png" alt="나의 영어사춘기"/></p>    
                    <ul>
                
                        <li className="card"><Link className="card-content card-title red-text" to="/homework/1"><img src="./img/text_homework_main.png" alt="과제"/><span className="numL num1">1</span></Link></li>
                        <li className="card"><Link className="card-content card-title red-text" to="/homework/2"><img src="./img/text_homework_main.png" alt="과제"/><span className="numL num2">2</span></Link></li>
                        
                        <li className="card"><Link className="card-content card-title red-text" to="/homework/3"><img src="./img/text_homework_main.png" alt="과제"/><span className="numL num3">3</span></Link></li>
                        <li className="card"><Link className="card-content card-title red-text" to="/homework/4"><img src="./img/text_homework_main.png" alt="과제"/><span className="numL num4">4</span></Link></li>
                        <li className="card"><Link className="card-content card-title red-text" to="/homework/3/4"><img src="./img/text_homework_main.png" alt="과제"/><span className="numL numR">R</span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default Home;


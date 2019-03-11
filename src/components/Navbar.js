import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends Component {
    state={
        subNaviOn:false
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.setState({subNaviOn:!this.state.subNaviOn});

    }
  
    render() {
        console.log(this.state.subNaviOn);
        return (      
            <nav className="nav-wrapper">
                <div className="nav-inner">
                    <h1 className="center"><img src="./img/title.png" alt="나의 영어사춘기"/></h1>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink exact activeClassName="active" to="/"><img src="./img/btn_home.png" alt="호-옴으로"/></NavLink></li>
                        <li><NavLink className={this.state.subNaviOn?'on':''} activeClassName="active"  to="/homework" onClick={this.handleClick}>
                            <img src="./img/btn_homework.png" alt="츄-즈 과제"/>
                            <ul className="sub-nav">
                                <li><NavLink activeClassName="active" exact to="/homework/1"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS num1">1</span></NavLink></li>
                                <li><NavLink activeClassName="active" exact to="/homework/2"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS num2">2</span></NavLink></li>
                                <li><NavLink activeClassName="active" exact to="/homework/3"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS num3">3</span></NavLink></li>
                                <li><NavLink activeClassName="active" exact to="/homework/1/2"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS numR">R</span></NavLink></li>
                            </ul>
                            </NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        

        );
    }
}

export default Navbar;
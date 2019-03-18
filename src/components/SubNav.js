import React from 'react';
import {NavLink} from 'react-router-dom';

const SubNav = (props) =>{
   
    return(
        <ul className="sub-nav">
            <li><NavLink activeClassName="active" exact to="/homework/1"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS num1">1</span></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/homework/2"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS num2">2</span></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/homework/3"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS num3">3</span></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/homework/1/2"><img src="./img/text_homework_navi.png" alt="과제"/> <span className="numS numR">R</span></NavLink></li>
        </ul>
    )
}

export default SubNav;
import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

const Navbar = (props) =>{
   
    setTimeout(()=>{
       // props.history.push('/about')
    },2000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">나의 영춘기 과제</a>
                <ul className="right">
                 
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
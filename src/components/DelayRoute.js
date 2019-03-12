import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './Home';
import Homework from './Homework';
import {TweenMax} from 'gsap';

class DelayRoute extends Component {    
   
    state={
        shouldRender:false
    }

    componentWillReceiveProps(nextProps) {
      
        this.setState({ shouldRender: false })
     
        if (this.props.location.pathname!==nextProps.location.pathname) {
           

            this.pageAni(1000,"promise_V_").then((v)=>{
                this.setState({ shouldRender: true })
              
            });

           

        }

    }
 
  
    pageAni(_time,_v){  
        return new Promise(function(resolve) {

            TweenMax.to('.container',0.6,{height:0,minHeight:0,ease:"Cubic.easeOut",onComplete:function() {        
                    resolve.call(null, _v);
                    document.getElementsByClassName('container')[0].removeAttribute('style')
                   
                }
            });

        });
        
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.shouldRender;

    }
    componentDidMount(){
        

        
  
    }

    render() {
        return(
           <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/homework/:id" component={Homework} />            
            <Route exact path="/homework/:id/:id2" component={Homework} />           
            <Route exact path="/homework/:id/:id2/:id3" component={Homework} />          
          </Switch>
        )





    }

};
export default withRouter(DelayRoute);

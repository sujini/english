import React,{Component} from 'react';
import Swiper from 'swiper';

class EnListItem extends Component {

    state = {
        open:false,
        active:false,
        text:''
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.setState({
            open:!this.state.open
        })
      
    }
    handleKeyUp = (e) =>{
        var bool = this.props.text[1].toLowerCase().replace(/ /gi, "") ===e.target.value.toLowerCase().replace(/ /gi, "");
        this.setState({
            open:bool,
            active:bool,
            text:e.target.value
        })
    }
    componentWillReceiveProps(props) {
        this.setState({ open: props.drawerOpen,active: props.drawerOpen,text:'' })
        

      }
      componentDidMount(){
        
      }
    render() {
        var {text} = this.props;
        return (
            <div className="swiper-slide card">                       
                <div className="card-content" >
                    <a href="/" onClick={this.handleClick} className="black-text" style={{display:'block',width:'100%'}}>{text[0]}</a>
                    <input type="text" onChange={this.handleKeyUp} placeholder="Fill in the answer." className={this.state.active? 'blue-text': ''} value={this.state.text}/>
                    <p className="blue-text">{this.state.open?text[1]:null}</p>
                
                
                </div>
            </div>
        );
    }
}

export default EnListItem;
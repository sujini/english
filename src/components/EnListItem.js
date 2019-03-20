import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addCheck,removeCheck} from '../store/actions';

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
        var bool = this.props.text['en'].toLowerCase().replace(/ /gi, "") ===e.target.value.toLowerCase().replace(/ /gi, "");
        this.setState({
            open:bool,
            active:bool,
            text:e.target.value
        })
    }
    handleCheck = (e)=>{
        let key = e.target.parentNode.dataset.key;
        if(e.target.checked ){
            console.log('aa')
            this.props.addCheck(key);
        }else{
            console.log('dd')
            this.props.removeCheck(key);
        }
       
        
       
      

    }
    componentWillReceiveProps(nextProps) {
        
        this.setState({ 
            open: nextProps.drawerOpen,active: nextProps.drawerOpen,text:''
        })

    }
    componentDidMount(){
        //console.log(this.props)
        
    }
    render() {
       
        var {text,index,checked} = this.props;
      
        
        return (
            <div className="swiper-slide card">                       
                <div className="card-content" >
                    <div className="card-inner" data-key = {text.key}>
                        <span className="num">{index}</span>
                        <a href="/" onClick={this.handleClick} className="black-text" style={{display:'block',width:'100%'}}>{text['kr']}</a>
                        <p className="">{this.state.open?text['en']:null}</p>
                        <input type="text" onChange={this.handleKeyUp} placeholder="FILL IN THE ANSWER." className={this.state.active? 'blue-text': ''} value={this.state.text}/>
                        
                        <input type="checkbox" onChange={this.handleCheck.bind(this)} defaultChecked={checked}/>
                       
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        addCheck: (num) => { dispatch(addCheck(num))},
        removeCheck: (num) => { dispatch(removeCheck(num))}
     
    } 
}

export default connect(undefined,mapDispatchToProps)(EnListItem);


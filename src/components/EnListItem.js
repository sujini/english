import React,{Component} from 'react';


class EnListItem extends Component {

    state = {
        open:false
     
    }
    handleClick = () =>{
        this.setState({
            open:!this.state.open
        })
      
    }
    componentWillReceiveProps(props) {
        this.setState({ open: props.drawerOpen })
      }
  
    render() {
        var {text} = this.props;
        return (
            <div className="post card">                       
                <div className="card-content"  onClick={this.handleClick}>
                    <span>{text[0]}</span>
                    <p className="blue-text">{this.state.open?text[1]:null}</p>
                
                
                </div>
            </div>
        );
    }
}

export default EnListItem;
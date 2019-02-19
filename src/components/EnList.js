import React,{Component} from 'react';
import axios from 'axios';
import EnListItem from './EnListItem';

class EnList extends Component{
    
     
    state = {
      
        lists:[],
        suffleLists:[],
        drawerOpen: false
    }
    shuffle(){
       
        var suffleLists=[];
        for (var j=0; j<999; j++) {
            var randomNum = Math.floor(Math.random() * 100);
            if(suffleLists.indexOf(randomNum) === -1) {
                suffleLists.push(randomNum);
            
                if (suffleLists.length === 30) {
                    break;
                }
            }
        }

        
        var dd = this.state.lists.filter((post,index)=>{return (suffleLists.indexOf(index) !== -1)})
        this.setState({
            suffleLists:dd,
            drawerOpen: false
        })
   
       
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
      
        axios.get('../homework'+this.props.match.params.id+'.csv')
        .then(res=>{
              
          
            var arys = res.data.split(/\r?\n|\r/);
          
            
        
            this.setState({
                lists:arys
            })
            this.setState({
                suffleLists:arys
            })
        })
    }
   
  
    render(){
      
        const {suffleLists} = this.state;
        
       
        const englishList = suffleLists.length?(
            suffleLists.map((post,index)=>{
                let text = post.split('$');
              
                return (
                    <EnListItem text={text} key={index} drawerOpen={this.state.drawerOpen}/>         
                    
                )
            
            })
        ):(
            <div className="center">No lists yet</div>
        );
        return(
            <div className="container homework">
                <h4 className="center">과제</h4>                  
                <button  onClick={this.shuffle.bind(this)}>shuffle 30</button>         
                {englishList}
            </div>
        )
    }
}



export default EnList;


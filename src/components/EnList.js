import React,{Component} from 'react';
import axios from 'axios';
import EnListItem from './EnListItem';


class EnList extends Component{
    
     
    state = {
      
        lists:[],
        suffleLists:[],
        drawerOpen: false,
        step:''
    }
    shuffle(){
       
        var suffleLists=[];
        for (var j=0; j<999; j++) {
            var randomNum = Math.floor(Math.random() * this.state.lists.length);
            if(suffleLists.indexOf(randomNum) === -1) {
                suffleLists.push(randomNum);
            
                if (suffleLists.length === 30) {
                    break;
                }
            }
        }

        this.setState({
            suffleLists:this.state.lists.filter((post,index)=>{return (suffleLists.indexOf(index) !== -1)}),
            drawerOpen: false
        })
   
       
    }
    componentDidMount(){
        let arys = [],i=0,titlestep='';


        Object.keys(this.props.match.params).map((key) =>{
            let step = this.props.match.params[key];
            
           
            axios.get('./homework'+step+'.csv')
            .then(res=>{
                                 
                let ary = res.data.split(/\r?\n|\r/);
                        
                arys=arys.concat(ary)        
                titlestep += (i!==0?'&':'')+step;
                i++;
             
                this.setState({
                    lists:arys,
                    step:titlestep,
                    suffleLists:arys
                })
                
               
            })
            return step;

        })

        
        
       
      
       
    }
    scrollTop(e){
        window.scrollTo(0, 0);

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
                <h4 className="center">과제{this.state.step}</h4>                  
                <button  onClick={this.shuffle.bind(this)}>shuffle 30</button>         
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {englishList}
                    </div>
                </div>
                <div className="fixed-action-btn direction-top" style={{bottom: '25px', right: '24px'}} onClick={this.scrollTop}>
                    <button className="btn-floating btn-large red">
                        <i className="material-icons">top</i>
                    </button>
                
                </div>
                         
            </div>
        )
    }
}



export default EnList;


import React,{Component,Fragment} from 'react';
import axios from 'axios';
import EnListItem from './EnListItem';
import Grammar from './Grammar';

class EnList extends Component{
    
     
    state = {
      
        lists:[],
        suffleLists:[],
        drawerOpen: false,
        showGrammar:false,
        step:''
    }
    setNum(_num){
        return _num<10?'0'+_num:_num;
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
            drawerOpen: false,
            showGrammar:false
        })
   
       
    }
    grammarClick=(e)=>{
        e.preventDefault();
      
        this.setState({
            showGrammar: true
        })

    }
    componentDidMount(){
           
        this.setList(this.props.urlParams)

    }
    setList(_params){
        let arys = [],i=0,titlestep='';
      
        Object.keys(_params).map((key) =>{
            
            let step = _params[key];

           
            axios.get('/homework'+step+'.csv')
            .then(res=>{
                                 
                let ary = res.data.split(/\r?\n|\r/);
                        
                arys=arys.concat(ary)        
                titlestep += (i!==0?'&':'')+step;
                i++;
             
                this.setState({
                    lists:arys,
                    step:titlestep,
                    suffleLists:arys,
                    showGrammar:false
                })
                
               
            })
            return step;

        })
    }

      
    componentWillReceiveProps(nextProps) {
        if(nextProps.urlParams!==this.props.urlParams){
            this.setList(nextProps.urlParams)
        }
     
       
    }
    
     
    
    
    scrollTop(e){
        window.scrollTo(0, 0);

    }
  
    render(){
      
        const {suffleLists,drawerOpen,showGrammar} = this.state;
        
       
        const englishList = suffleLists.length?(
            suffleLists.map((post,index)=>{
                let text = post.split('$');
               
                return (
                    <EnListItem text={text} key={index} index={this.setNum(index+1)} drawerOpen={drawerOpen}/>         
                    
                )
            
            })
        ):(
            <div className="center">No lists yet</div>
        );
        return(          
            <div className="container homework">
                <div className="inner">
                    <h1 className="center"><img src="./img/title.png" alt="나의 영어사춘기"/></h1>
                    <h3 className="center"><img src="./img/text_homework.png" alt="과제"/><span className={`numL num${this.state.step}`}>{this.state.step}</span></h3>
                    <Grammar showGrammar={showGrammar}/>   
                    <div className="btn-area">
                        <button  onClick={this.shuffle.bind(this)}><img src="./img/btn_random.png" alt="나의 영어사춘기"/></button>
                        <button  onClick={this.grammarClick}><img src="./img/btn_grammar.png" alt="문법"/></button>   
                    </div>        
                    <div className="swiper-container">
                        <div className="swiper-wrapper card-list">
                        {englishList}
                        </div>
                    </div>
                    <div className="fixed-action-btn direction-top" style={{bottom: '25px', right: '24px'}} onClick={this.scrollTop}>
                        <button className="btn-floating btn-large red">
                            <i className="material-icons">top</i>
                        </button>
                    
                    </div>
                </div>   
            </div>
      

        )
    }
}



export default EnList;


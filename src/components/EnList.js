import React,{Component} from 'react';
import EnListItem from './EnListItem';
import Grammar from './Grammar';
import {connect} from 'react-redux';
import {listRequest,suffle} from '../store/actions';
let arys = [];
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

        this.props.suffle(30);
       
    

        this.setState({
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
        arys = [];
        Object.keys(_params).map((key) =>{
            
            let step = _params[key];
            
        
            this.props.listRequest(step)

            this.setState({
                showGrammar:false
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
      
        const {suffleLists,titlestep} = this.props;

        const {drawerOpen,showGrammar} = this.state;

        
       
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
                   
                    <h3 className="center"><img src="./img/text_homework.png" alt="과제"/><span className={`numL num${titlestep}`}>{this.state.step}</span></h3>
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

const getRand = (_ary,_len)=>{
	var num = Math.floor(Math.random() * _len)	
	if(_ary.indexOf(num) !== -1) {
		return getRand(_ary,_len)
    }else{
		return num;
    }
}
    



   

const mapStateToProps = (state,ownProps) =>{
   
  
    let res = state.enlist.data,num = state.enlist.num; 
    let ary = res?String(res).split(/\r?\n|\r/):[];  
    let i=0,titlestep='';

    arys=arys.concat(ary);

    
    Object.keys(ownProps.urlParams).map(key => {
        
        let step = ownProps.urlParams[key];
        titlestep += (i!==0?'&':'')+step;
        i++;
        return step;

    })
    let suffleLists=[];
  
    if(num){       
        for (var j=0; j<num; j++) {
            var randomNum = getRand(suffleLists,arys.length);
            suffleLists.push(randomNum);
            
        }  
    
    }


    
    
   
    

    return {
        suffleLists:num?arys.filter((post,index)=>{return (suffleLists.indexOf(index) !== -1)}):arys,
        titlestep:titlestep
    }
 
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        listRequest: (step) => { dispatch(listRequest(step))},
        suffle: (num) => { dispatch(suffle(num))}
     
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(EnList);
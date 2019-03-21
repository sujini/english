import React,{Component} from 'react';
import EnListItem from './EnListItem';
import Grammar from './Grammar';
import {connect} from 'react-redux';
import {listRequest,suffle} from '../store/actions';
let arys = [];
class EnList extends Component{
    
     
    state = {
        drawerOpen: false,
        showGrammar:false,
        step:''
    }
    myCallback = (dataFromChild) => {
        console.log(dataFromChild)
        this.setState({ showGrammar: dataFromChild });
    }
    setNum(_num){
        return _num<10?'0'+_num:_num;
    }
    shuffle(){
        arys=[];

        this.props.suffle(30);
       
    

        this.setState({
            drawerOpen: false
        })
   
       
    }
    grammarClick=(e)=>{
        e.preventDefault();
      
        this.setState({
            showGrammar: true
        })

    }
    componentDidMount(){
        
        this.setList(this.props.urlParams);

        

    }
    setList(_params){
       
        arys = [];
        Object.keys(_params).map((key) =>{
            
            let step = _params[key];
            
        
            this.props.listRequest(step)

            

            return step;

        })
    }

      
    componentWillReceiveProps(nextProps) {
        console.log(nextProps,this.props)
       
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
            suffleLists.map((text,index)=>{

                return (
                    <EnListItem text={text} key={text.key} checked={text.isChecked} index={this.setNum(index+1)} drawerOpen={drawerOpen}/>         
                    
                )
            
            })
        ):(
            <div className="center">No lists yet</div>
        );
        return(          
            <div className="container homework">
                <div className="inner">
                   
                    <h3 className="center"><img src="./img/text_homework.png" alt="과제"/><span className={`numL num${titlestep}`}>{this.state.step}</span></h3>
                    <Grammar callbackFromParent={this.myCallback} showGrammar={showGrammar}/>   
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
	let num = Math.floor(Math.random() * _len)	
	if(_ary.indexOf(num) !== -1) {
		return getRand(_ary,_len)
    }else{
		return num;
    }
}
    
const shuffleAry = (_ary,_num,_len)=>{
    for (var j=0; j<_num; j++) {
        var randomNum = getRand(_ary,_len);
        _ary.push(randomNum);
        
    }  
}


   

const mapStateToProps = (state,ownProps) =>{
    //console.log(state,ownProps)
  
    let res = state.enlist.data,num = state.enlist.num; 
    let ary = res?String(res).split(/\r?\n|\r/):[];  
    let i=0,titlestep='',step='';
    if(i===0){
        arys = [];
    }

    arys=arys.concat(ary);
   
   
    Object.keys(ownProps.urlParams).map(key => {
        
        step = ownProps.urlParams[key];
        titlestep += (i!==0?'&':'')+step;
        i++;
        return step;

    })

    let reformattedArray = arys.map(function(obj,i){ 
      
        var aryText = obj.split('$');
    
        var rObj = {};
        rObj.kr = aryText[0];
        rObj.en = aryText[1];
        rObj.key = step+'_'+i;
        rObj.isChecked = state.enlist.isChecked.indexOf(rObj.key)>-1;
        return rObj;
     });


    let suffleLists=[];
  
    if(num){       
        
        suffleLists=state.enlist.numAry;
    }

    

    return {
        suffleLists:num?reformattedArray.filter((post,index)=>{return (suffleLists.indexOf(index) !== -1)}):reformattedArray,
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
import React,{Component} from 'react';
import EnListItem from './EnListItem';
import Grammar from './Grammar';
import {connect} from 'react-redux';
import {listRequest,suffle} from '../store/actions';
let arys = {step:[],data:[]};
class EnList extends Component{
    
     
    state = {
        drawerOpen: false,
        showGrammar:false,
        step:'',
        suffleAry:[]
    }
    myCallback = (dataFromChild) => {
        this.setState({ showGrammar: dataFromChild });
    }
    setNum(_num){
        return _num<10?'0'+_num:_num;
    }
    shuffle(){
        arys = {step:[],data:[]};

        //this.props.suffle(30);
       
    

        this.setState({
            drawerOpen: false,
            suffleAry:shuffleAry(30,this.props.enList.length)
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
        console.log('setList',arys)
       
        this.setState({
            suffleAry:[]
        })
        
        Object.keys(_params).map((key) =>{
            
            let step = _params[key];
            
        
            this.props.listRequest(step)

            

            return step;

        })
    }

      
    componentWillReceiveProps(nextProps) {
        console.log(" componentWillReceiveProps");
       if(nextProps.urlParams.id2===undefined ||
         (nextProps.urlParams.id2&&this.props.urlParams.id2===undefined)){
            arys = {step:[],data:[]};
       }
       
        if(nextProps.urlParams!==this.props.urlParams){
         
            this.setList(nextProps.urlParams)
        }
     
        
    }
    
     
    
    
    scrollTop(e){
        window.scrollTo(0, 0);

    }
  
    render(){
      
        const {enList,titlestep,checkedAry} = this.props;

        const {drawerOpen,showGrammar,suffleAry} = this.state;
      
        const enList2=suffleAry.length?enList.filter((post,index)=>{return (suffleAry.indexOf(index) !== -1)}):enList;
    
        const englishList = enList2.length?(
         
            enList2.map((text,index)=>{

                let isChecked = checkedAry.indexOf(text.id)>-1;

                return (
                    <EnListItem text={text} key={text.id} id={text.id} checked={isChecked} index={this.setNum(index+1)} drawerOpen={drawerOpen}/>         
                    
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
    
const shuffleAry = (_num,_len)=>{
  var ary=[];
    for (var j=0; j<_num; j++) {
        var randomNum = getRand(ary,_len);
        ary.push(randomNum);
        
    }  
    return ary;
}
   

const mapStateToProps = (state,ownProps) =>{
    let ary = state.enlist.data2, step=[];


    Object.keys(ownProps.urlParams).map(key => {
        
        step = step.concat(ownProps.urlParams[key]);
      
        return step;

    })
   
    if(ary && step.indexOf(state.enlist.step) !== -1 && arys['step'].indexOf(state.enlist.step) === -1){
     
        arys['step']=arys['step'].concat(state.enlist.step);        
        arys['data']=arys['data'].concat(ary);
        
     }
   

    return {
        enList:arys['data'],
        titlestep:step.join('&'),
        checkedAry:state.checkList.checkedAry
    }
 
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        listRequest: (step) => { dispatch(listRequest(step))},
        suffle: (num) => { dispatch(suffle(num))}
     
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(EnList);
import React,{Component} from 'react';


class Grammar extends Component{
    state={
        showGrammar:false
    }
    closePop = (e) =>{
   
        e.preventDefault();
        this.setState({
            showGrammar:false
        })
        
        this.props.callbackFromParent(false);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.showGrammar!==this.props.showGrammar){
            this.setState({ showGrammar: nextProps.showGrammar })
        }       
        
    } 
  
    render(){
  
        return (

            <div className={`popup grammar ${this.state.showGrammar?'active':''}`}>
                <div className="pop_inner_wrap">
                <div className="pop_inner">
                    <a href="/" onClick={this.closePop} className="btn_close"><img src="./img/btn_close.png" alt="닫기"/></a>
                    <h4 className=""><img src="./img/title_grammar.png" alt="봐도봐도 모르겠는 문-법"/></h4>
                    <ul>                           
                        <li><span className="red-text en">I like -ing.</span></li>
                        <li><span className="red-text en">put somthing on/in/off.</span></li>
                        <li><span className="red-text en">take somthing off/out/down.</span></li>


                        <li><span className="red-text en">I had</span><span className="red-text"> + 목적어 + 목적격보어/</span><span className="red-text en">on.</span> :<br/> 사역동사/수동형/나는 [목적어]를 [목적격보어]해놨어.</li>
                        <li><span className="red-text en">I have pp -  </span>: <br/> 
                        현재완료/<br/>
                        [완료] 과거에 시작한 일이 현재 완료가 되었다는 뜻(이제막)/<br/>
                        [결과] 과거에 시작한 일이 끝난 후의 결과가 현재도 그결과/<br/>
                        [경험]현재에서 과거 경험의 유무/<br/>
                        [계속] 과거로부터 현재까지의 계속되는 일(아직)
                        </li>
                        <li><span className="red-text en">I will be back with somthing</span> : somthing을 바로 갖다 드릴게요.</li>
                        <li><span className="red-text en">I</span><span className="red-text"> 동사 - ,</span><span className="red-text en">but</span><span className="red-text"> 주어 동사 -.</span> : 나는 [동사]했지만, [주어]는 [동사]했다.</li>
                        <li><span className="red-text en">Have/Keep</span><span className="red-text"> + 목적어 + 목적격보어/</span><span className="red-text en">on</span> : [목적어]를 [목적격보어]해놔.</li>
                        <li><span className="red-text en">Can you -/ Could you</span><span className="red-text">(좀더 정중하게) - </span>: -해주실수 있어요?</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}



export default Grammar;


(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(77)},48:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),s=(a(48),a(6)),m=a(7),o=a(10),i=a(8),u=a(9),p=a(78),h=a(81),E=Object(h.a)(function(e){return r.a.createElement("ul",{className:"sub-nav"},r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/1"},r.a.createElement("img",{src:"./img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS num1"},"1"))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/2"},r.a.createElement("img",{src:"./img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS num2"},"2"))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/3"},r.a.createElement("img",{src:"./img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS num3"},"3"))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/1/2"},r.a.createElement("img",{src:"./img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS numR"},"R"))))}),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={subNaviOn:!1},a.handleClick=function(e){e.preventDefault(),a.setState({subNaviOn:!a.state.subNaviOn})},a.getNavLinkClass=function(e){return("/"==e?a.props.location.pathname==e:-1!=a.props.location.pathname.indexOf(e))?"active":""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"nav-inner"},r.a.createElement("h1",{className:"center"},r.a.createElement("img",{src:"./img/title.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",{exact:"true",className:this.getNavLinkClass("/")},r.a.createElement(p.a,{exact:!0,activeClassName:"active",to:"/"},r.a.createElement("img",{src:"./img/btn_home.png",alt:"\ud638-\uc634\uc73c\ub85c"}))),r.a.createElement("li",{className:this.getNavLinkClass("/homework")},r.a.createElement(p.a,{className:this.state.subNaviOn?"on":"",activeClassName:"active",to:"/homework",onClick:this.handleClick},r.a.createElement("img",{src:"./img/btn_homework.png",alt:"\uce04-\uc988 \uacfc\uc81c"})),r.a.createElement(E,null)))))}}]),t}(n.Component),v=Object(h.a)(d),f=a(79),g=(a(54),a(80)),N=a(37),b=a(25),w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container home"},r.a.createElement("div",{className:"inner"},r.a.createElement("p",{className:"center"},r.a.createElement("img",{src:"./img/desc.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("ul",null,r.a.createElement("li",{className:"card"},r.a.createElement(b.a,{className:"card-content card-title red-text",to:"/homework/1"},r.a.createElement("img",{src:"./img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num1"},"1"))),r.a.createElement("li",{className:"card"},r.a.createElement(b.a,{className:"card-content card-title red-text",to:"/homework/2"},r.a.createElement("img",{src:"./img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num2"},"2"))),r.a.createElement("li",{className:"card"},r.a.createElement(b.a,{className:"card-content card-title red-text",to:"/homework/1/2"},r.a.createElement("img",{src:"./img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL numR"},"R"))),r.a.createElement("li",{className:"card"},r.a.createElement(b.a,{className:"card-content card-title red-text",to:"/homework/3"},r.a.createElement("img",{src:"./img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num3"},"3"))))))}}]),t}(n.Component),k=a(23),O=a.n(k),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,active:!1,text:""},a.handleClick=function(e){e.preventDefault(),a.setState({open:!a.state.open})},a.handleKeyUp=function(e){var t=a.props.text[1].toLowerCase().replace(/ /gi,"")===e.target.value.toLowerCase().replace(/ /gi,"");a.setState({open:t,active:t,text:e.target.value})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.drawerOpen,active:e.drawerOpen,text:""})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.index;return r.a.createElement("div",{className:"swiper-slide card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("span",{className:"num"},a),r.a.createElement("a",{href:"/",onClick:this.handleClick,className:"black-text",style:{display:"block",width:"100%"}},t[0]),r.a.createElement("p",{className:""},this.state.open?t[1]:null),r.a.createElement("input",{type:"text",onChange:this.handleKeyUp,placeholder:"FILL IN THE ANSWER.",className:this.state.active?"blue-text":"",value:this.state.text}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={showGrammar:!1},a.closePop=function(e){e.preventDefault(),a.setState({showGrammar:!1})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.showGrammar!==this.state.showGrammar&&this.setState({showGrammar:e.showGrammar})}},{key:"render",value:function(){return r.a.createElement("div",{className:"popup grammar ".concat(this.state.showGrammar?"active":"")},r.a.createElement("div",{className:"pop_inner_wrap"},r.a.createElement("div",{className:"pop_inner"},r.a.createElement("a",{href:"/",onClick:this.closePop,className:"btn_close"},r.a.createElement("img",{src:"./img/btn_close.png",alt:"\ub2eb\uae30"})),r.a.createElement("h4",{className:""},r.a.createElement("img",{src:"./img/title_grammar.png",alt:"\ubd10\ub3c4\ubd10\ub3c4 \ubaa8\ub974\uaca0\ub294 \ubb38-\ubc95"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I like -ing.")),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"put somthing on/in/off.")),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"take somthing off/out/down.")),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I had"),r.a.createElement("span",{className:"red-text"}," + \ubaa9\uc801\uc5b4 + \ubaa9\uc801\uaca9\ubcf4\uc5b4/"),r.a.createElement("span",{className:"red-text en"},"on.")," :",r.a.createElement("br",null)," \uc0ac\uc5ed\ub3d9\uc0ac/\uc218\ub3d9\ud615/\ub098\ub294 [\ubaa9\uc801\uc5b4]\ub97c [\ubaa9\uc801\uaca9\ubcf4\uc5b4]\ud574\ub1a8\uc5b4."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I have pp -  "),": ",r.a.createElement("br",null),"\ud604\uc7ac\uc644\ub8cc/",r.a.createElement("br",null),"[\uc644\ub8cc] \uacfc\uac70\uc5d0 \uc2dc\uc791\ud55c \uc77c\uc774 \ud604\uc7ac \uc644\ub8cc\uac00 \ub418\uc5c8\ub2e4\ub294 \ub73b(\uc774\uc81c\ub9c9)/",r.a.createElement("br",null),"[\uacb0\uacfc] \uacfc\uac70\uc5d0 \uc2dc\uc791\ud55c \uc77c\uc774 \ub05d\ub09c \ud6c4\uc758 \uacb0\uacfc\uac00 \ud604\uc7ac\ub3c4 \uadf8\uacb0\uacfc/",r.a.createElement("br",null),"[\uacbd\ud5d8]\ud604\uc7ac\uc5d0\uc11c \uacfc\uac70 \uacbd\ud5d8\uc758 \uc720\ubb34/",r.a.createElement("br",null),"[\uacc4\uc18d] \uacfc\uac70\ub85c\ubd80\ud130 \ud604\uc7ac\uae4c\uc9c0\uc758 \uacc4\uc18d\ub418\ub294 \uc77c(\uc544\uc9c1)"),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I will be back with somthing")," : somthing\uc744 \ubc14\ub85c \uac16\ub2e4 \ub4dc\ub9b4\uac8c\uc694."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I"),r.a.createElement("span",{className:"red-text"}," \ub3d9\uc0ac - ,"),r.a.createElement("span",{className:"red-text en"},"but"),r.a.createElement("span",{className:"red-text"}," \uc8fc\uc5b4 \ub3d9\uc0ac -.")," : \ub098\ub294 [\ub3d9\uc0ac]\ud588\uc9c0\ub9cc, [\uc8fc\uc5b4]\ub294 [\ub3d9\uc0ac]\ud588\ub2e4."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"Have/Keep"),r.a.createElement("span",{className:"red-text"}," + \ubaa9\uc801\uc5b4 + \ubaa9\uc801\uaca9\ubcf4\uc5b4/"),r.a.createElement("span",{className:"red-text en"},"on")," : [\ubaa9\uc801\uc5b4]\ub97c [\ubaa9\uc801\uaca9\ubcf4\uc5b4]\ud574\ub194."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"Can you -/ Could you"),r.a.createElement("span",{className:"red-text"},"(\uc880\ub354 \uc815\uc911\ud558\uac8c) - "),": -\ud574\uc8fc\uc2e4\uc218 \uc788\uc5b4\uc694?")))))}}]),t}(n.Component),j=a(19);var C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={lists:[],suffleLists:[],drawerOpen:!1,showGrammar:!1,step:""},a.grammarClick=function(e){e.preventDefault(),a.setState({showGrammar:!0})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"setNum",value:function(e){return e<10?"0"+e:e}},{key:"shuffle",value:function(){this.props.suffle(30),this.setState({drawerOpen:!1,showGrammar:!1})}},{key:"componentDidMount",value:function(){this.setList(this.props.urlParams)}},{key:"setList",value:function(e){var t=this;Object.keys(e).map(function(a){var n=e[a];return t.props.listRequest(n),t.setState({showGrammar:!1}),n})}},{key:"componentWillReceiveProps",value:function(e){e.urlParams!==this.props.urlParams&&(S=[],this.setList(e.urlParams))}},{key:"scrollTop",value:function(e){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.suffleLists,n=t.titlestep,l=this.state,c=l.drawerOpen,s=l.showGrammar,m=a.length?a.map(function(t,a){var n=t.split("$");return r.a.createElement(x,{text:n,key:a,index:e.setNum(a+1),drawerOpen:c})}):r.a.createElement("div",{className:"center"},"No lists yet");return r.a.createElement("div",{className:"container homework"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",{className:"center"},r.a.createElement("img",{src:"./img/text_homework.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num".concat(n)},this.state.step)),r.a.createElement(y,{showGrammar:s}),r.a.createElement("div",{className:"btn-area"},r.a.createElement("button",{onClick:this.shuffle.bind(this)},r.a.createElement("img",{src:"./img/btn_random.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("button",{onClick:this.grammarClick},r.a.createElement("img",{src:"./img/btn_grammar.png",alt:"\ubb38\ubc95"}))),r.a.createElement("div",{className:"swiper-container"},r.a.createElement("div",{className:"swiper-wrapper card-list"},m)),r.a.createElement("div",{className:"fixed-action-btn direction-top",style:{bottom:"25px",right:"24px"},onClick:this.scrollTop},r.a.createElement("button",{className:"btn-floating btn-large red"},r.a.createElement("i",{className:"material-icons"},"top")))))}}]),t}(n.Component),S=[],_=Object(j.b)(function(e,t){var a=e.enlist.data,n=e.enlist.num,r=a?String(a).split(/\r?\n|\r/):[],l=0,c="";S=S.concat(r),Object.keys(t.urlParams).map(function(e){var a=t.urlParams[e];return c+=(0!==l?"&":"")+a,l++,a});var s=[];if(n)for(var m=0;m<999;m++){var o=Math.floor(Math.random()*S.length);if(-1===s.indexOf(o)&&(s.push(o),s.length===n))break}return{suffleLists:n?S.filter(function(e,t){return-1!==s.indexOf(t)}):S,titlestep:c}},function(e){return{listRequest:function(t){e(function(e){return{type:"LIST_REQUEST",payload:{request:{method:"get",type:"csv",url:"./homework"+e+".csv",onComplete:function(){console.log("complete")},onSuccess:function(){console.log("success")},onError:function(){console.log("error")}}}}}(t))},suffle:function(t){e(function(e){return{type:"SUFFLE",payload:{num:e}}}(t))}}})(C),L=Object(h.a)(function(e){return r.a.createElement(_,{urlParams:e.match.params||{id:1}})}),R=a(42),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={shouldRender:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState({shouldRender:!1}),this.props.location.pathname!==e.location.pathname&&this.pageAni(1e3,"promise_V_").then(function(e){t.setState({shouldRender:!0})})}},{key:"pageAni",value:function(e,t){return new Promise(function(e){R.a.to(".container",.6,{height:0,minHeight:0,ease:"Cubic.easeOut",onComplete:function(){e.call(null,t),document.getElementsByClassName("container")[0].removeAttribute("style")}})})}},{key:"shouldComponentUpdate",value:function(e,t){return t.shouldRender}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(N.a,{exact:!0,path:"/",component:w}),r.a.createElement(N.a,{exact:!0,path:"/homework/:id",component:L}),r.a.createElement(N.a,{exact:!0,path:"/homework/:id/:id2",component:L}),r.a.createElement(N.a,{exact:!0,path:"/homework/:id/:id2/:id3",component:L}))}}]),t}(n.Component),T=Object(h.a)(P),G=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"wrap"},r.a.createElement(v,null),r.a.createElement(T,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(13),U=a(28),A=Object(I.c)({enlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_REQUEST":return console.log("LIST_REQUEST "),e;case"LIST_REQUEST_SUCCESS":return console.log("LIST_REQUEST_SUCCESS"),Object(U.a)({},e,{pending:!1,data:t.payload.data,num:void 0});case"SUFFLE":return console.log("SUFFLE"),Object(U.a)({},e,{pending:!1,num:t.payload.num});default:return e}}}),D=a(41),F=a.n(D),W=Object(I.d)(A,Object(I.a)(F()(O.a)));c.a.render(r.a.createElement(j.a,{store:W},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.10a7d50b.chunk.js.map
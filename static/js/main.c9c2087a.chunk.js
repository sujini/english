(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(62)},36:function(e,a,t){},42:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),m=(t(36),t(4)),s=t(6),i=t(5),o=t(10),u=t(11),p=t(64),E=t(67),h=function(e){e.preventDefault()},d=Object(E.a)(function(e){return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"nav-inner"},r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(p.a,{exact:!0,activeClassName:"active",to:"/"},r.a.createElement("img",{src:"/img/btn_home.png",alt:"\ud638-\uc634\uc73c\ub85c"}))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",to:"/homework",onClick:h},r.a.createElement("img",{src:"/img/btn_homework.png",alt:"\uce04-\uc988 \uacfc\uc81c"}),r.a.createElement("ul",{className:"sub-nav"},r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/1"},r.a.createElement("img",{src:"/img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS num1"},"1"))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/2"},r.a.createElement("img",{src:"/img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS num2"},"2"))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/3"},r.a.createElement("img",{src:"/img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS num3"},"3"))),r.a.createElement("li",null,r.a.createElement(p.a,{activeClassName:"active",exact:!0,to:"/homework/1/2"},r.a.createElement("img",{src:"/img/text_homework_navi.png",alt:"\uacfc\uc81c"})," ",r.a.createElement("span",{className:"numS numR"},"R")))))))))}),v=t(65),g=t(66),N=t(26),w=(t(42),t(18)),f=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container home"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"center"},r.a.createElement("img",{src:"/img/title.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("p",{className:"center"},r.a.createElement("img",{src:"/img/desc.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("ul",null,r.a.createElement("li",{className:"card"},r.a.createElement(w.a,{className:"card-content card-title red-text",to:"/homework/1"},r.a.createElement("img",{src:"/img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num1"},"1"))),r.a.createElement("li",{className:"card"},r.a.createElement(w.a,{className:"card-content card-title red-text",to:"/homework/2"},r.a.createElement("img",{src:"/img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num2"},"2"))),r.a.createElement("li",{className:"card"},r.a.createElement(w.a,{className:"card-content card-title red-text",to:"/homework/1/2"},r.a.createElement("img",{src:"/img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL numR"},"R"))),r.a.createElement("li",{className:"card"},r.a.createElement(w.a,{className:"card-content card-title red-text",to:"/homework/3"},r.a.createElement("img",{src:"/img/text_homework_main.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num3"},"3"))))))}}]),a}(n.Component),b=t(29),k=t.n(b),x=(t(63),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,active:!1,text:""},t.handleClick=function(e){e.preventDefault(),t.setState({open:!t.state.open})},t.handleKeyUp=function(e){var a=t.props.text[1].toLowerCase().replace(/ /gi,"")===e.target.value.toLowerCase().replace(/ /gi,"");t.setState({open:a,active:a,text:e.target.value})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.drawerOpen,active:e.drawerOpen,text:""})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,a=e.text,t=e.index;return r.a.createElement("div",{className:"swiper-slide card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("span",{className:"num"},t),r.a.createElement("a",{href:"/",onClick:this.handleClick,className:"black-text",style:{display:"block",width:"100%"}},a[0]),r.a.createElement("p",{className:""},this.state.open?a[1]:null),r.a.createElement("input",{type:"text",onChange:this.handleKeyUp,placeholder:"FILL IN THE ANSWER.",className:this.state.active?"blue-text":"",value:this.state.text}))))}}]),a}(n.Component)),O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={showGrammar:!1},t.closePop=function(e){e.preventDefault(),t.setState({showGrammar:!1})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.showGrammar!==this.state.showGrammar&&this.setState({showGrammar:e.showGrammar})}},{key:"render",value:function(){return r.a.createElement("div",{className:"popup grammar ".concat(this.state.showGrammar?"active":"")},r.a.createElement("div",{className:"pop_inner_wrap"},r.a.createElement("div",{className:"pop_inner"},r.a.createElement("a",{href:"/",onClick:this.closePop,className:"btn_close"},r.a.createElement("img",{src:"/img/btn_close.png",alt:"\ub2eb\uae30"})),r.a.createElement("h4",{className:""},r.a.createElement("img",{src:"/img/title_grammar.png",alt:"\ubd10\ub3c4\ubd10\ub3c4 \ubaa8\ub974\uaca0\ub294 \ubb38-\ubc95"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I like -ing.")),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"put somthing on/in/off.")),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"take somthing off/out/down.")),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I had"),r.a.createElement("span",{className:"red-text"}," + \ubaa9\uc801\uc5b4 + \ubaa9\uc801\uaca9\ubcf4\uc5b4/"),r.a.createElement("span",{className:"red-text en"},"on.")," :",r.a.createElement("br",null)," \uc0ac\uc5ed\ub3d9\uc0ac/\uc218\ub3d9\ud615/\ub098\ub294 [\ubaa9\uc801\uc5b4]\ub97c [\ubaa9\uc801\uaca9\ubcf4\uc5b4]\ud574\ub1a8\uc5b4."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I have pp -  "),": ",r.a.createElement("br",null),"\ud604\uc7ac\uc644\ub8cc/",r.a.createElement("br",null),"[\uc644\ub8cc] \uacfc\uac70\uc5d0 \uc2dc\uc791\ud55c \uc77c\uc774 \ud604\uc7ac \uc644\ub8cc\uac00 \ub418\uc5c8\ub2e4\ub294 \ub73b(\uc774\uc81c\ub9c9)/",r.a.createElement("br",null),"[\uacb0\uacfc] \uacfc\uac70\uc5d0 \uc2dc\uc791\ud55c \uc77c\uc774 \ub05d\ub09c \ud6c4\uc758 \uacb0\uacfc\uac00 \ud604\uc7ac\ub3c4 \uadf8\uacb0\uacfc/",r.a.createElement("br",null),"[\uacbd\ud5d8]\ud604\uc7ac\uc5d0\uc11c \uacfc\uac70 \uacbd\ud5d8\uc758 \uc720\ubb34/",r.a.createElement("br",null),"[\uacc4\uc18d] \uacfc\uac70\ub85c\ubd80\ud130 \ud604\uc7ac\uae4c\uc9c0\uc758 \uacc4\uc18d\ub418\ub294 \uc77c(\uc544\uc9c1)"),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I will be back with somthing")," : somthing\uc744 \ubc14\ub85c \uac16\ub2e4 \ub4dc\ub9b4\uac8c\uc694."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"I"),r.a.createElement("span",{className:"red-text"}," \ub3d9\uc0ac - ,"),r.a.createElement("span",{className:"red-text en"},"but"),r.a.createElement("span",{className:"red-text"}," \uc8fc\uc5b4 \ub3d9\uc0ac -.")," : \ub098\ub294 [\ub3d9\uc0ac]\ud588\uc9c0\ub9cc, [\uc8fc\uc5b4]\ub294 [\ub3d9\uc0ac]\ud588\ub2e4."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"Have/Keep"),r.a.createElement("span",{className:"red-text"}," + \ubaa9\uc801\uc5b4 + \ubaa9\uc801\uaca9\ubcf4\uc5b4/"),r.a.createElement("span",{className:"red-text en"},"on")," : [\ubaa9\uc801\uc5b4]\ub97c [\ubaa9\uc801\uaca9\ubcf4\uc5b4]\ud574\ub194."),r.a.createElement("li",null,r.a.createElement("span",{className:"red-text en"},"Can you -/ Could you"),r.a.createElement("span",{className:"red-text"},"(\uc880\ub354 \uc815\uc911\ud558\uac8c) - "),": -\ud574\uc8fc\uc2e4\uc218 \uc788\uc5b4\uc694?")))))}}]),a}(n.Component),y=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={lists:[],suffleLists:[],drawerOpen:!1,showGrammar:!1,step:""},t.grammarClick=function(e){e.preventDefault(),t.setState({showGrammar:!0})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"setNum",value:function(e){return e<10?"0"+e:e}},{key:"shuffle",value:function(){for(var e=[],a=0;a<999;a++){var t=Math.floor(Math.random()*this.state.lists.length);if(-1===e.indexOf(t)&&(e.push(t),30===e.length))break}this.setState({suffleLists:this.state.lists.filter(function(a,t){return-1!==e.indexOf(t)}),drawerOpen:!1,showGrammar:!1})}},{key:"componentDidMount",value:function(){this.setList(this.props.urlParams)}},{key:"setList",value:function(e){var a=this,t=[],n=0,r="";Object.keys(e).map(function(l){var c=e[l];return k.a.get("/homework"+c+".csv").then(function(e){var l=e.data.split(/\r?\n|\r/);t=t.concat(l),r+=(0!==n?"&":"")+c,n++,a.setState({lists:t,step:r,suffleLists:t,showGrammar:!1})}),c})}},{key:"componentWillReceiveProps",value:function(e){e.urlParams!==this.props.urlParams&&this.setList(e.urlParams)}},{key:"scrollTop",value:function(e){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.state,t=a.suffleLists,n=a.drawerOpen,l=a.showGrammar,c=t.length?t.map(function(a,t){var l=a.split("$");return r.a.createElement(x,{text:l,key:t,index:e.setNum(t+1),drawerOpen:n})}):r.a.createElement("div",{className:"center"},"No lists yet");return r.a.createElement("div",{className:"container homework"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"center"},r.a.createElement("img",{src:"/img/title.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("h3",{className:"center"},r.a.createElement("img",{src:"/img/text_homework.png",alt:"\uacfc\uc81c"}),r.a.createElement("span",{className:"numL num".concat(this.state.step)},this.state.step)),r.a.createElement(O,{showGrammar:l}),r.a.createElement("div",{className:"btn-area"},r.a.createElement("button",{onClick:this.shuffle.bind(this)},r.a.createElement("img",{src:"/img/btn_random.png",alt:"\ub098\uc758 \uc601\uc5b4\uc0ac\ucd98\uae30"})),r.a.createElement("button",{onClick:this.grammarClick},r.a.createElement("img",{src:"/img/btn_grammar.png",alt:"\ubb38\ubc95"}))),r.a.createElement("div",{className:"swiper-container"},r.a.createElement("div",{className:"swiper-wrapper card-list"},c)),r.a.createElement("div",{className:"fixed-action-btn direction-top",style:{bottom:"25px",right:"24px"},onClick:this.scrollTop},r.a.createElement("button",{className:"btn-floating btn-large red"},r.a.createElement("i",{className:"material-icons"},"top")))))}}]),a}(n.Component),j=Object(E.a)(function(e){return r.a.createElement(y,{urlParams:e.match.params||{id:1}})}),_=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",{className:"wrap"},r.a.createElement(d,null),r.a.createElement(g.a,null,r.a.createElement(N.a,{exact:!0,path:"/",component:f}),r.a.createElement(N.a,{exact:!0,path:"/homework/:id",component:j}),r.a.createElement(N.a,{exact:!0,path:"/homework/:id/:id2",component:j}),r.a.createElement(N.a,{exact:!0,path:"/homework/:id/:id2/:id3",component:j}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.c9c2087a.chunk.js.map
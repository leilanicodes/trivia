(this.webpackJsonptrivia=this.webpackJsonptrivia||[]).push([[0],{23:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(32),r=a.n(n),c=a(19),o=a(54),l=a(25),i=a.n(l);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRIVIA":return t.results;default:return e}}var u=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,l,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={geography:22,computers:18,history:23,games:15,tv:14,animals:27,music:12,books:10,sports:21}[e],t.prev=2,t.next=5,i.a.get("https://opentdb.com/api.php?amount=10&category=".concat(n,"&difficulty=medium&type=multiple"));case 5:o=t.sent,l=o.data,s=function(e){return e.sort((function(){return.5-Math.random()}))},l.results.forEach((function(e){var t=s([].concat(Object(c.a)(e.incorrect_answers),[e.correct_answer]));e.shuffledAnswers=t})),a({type:"SET_TRIVIA",results:l}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log("Error fetching geography trivia",t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}},35:function(e,t,a){"use strict";var n=a(14),r=a(23),c=Object(n.combineReducers)({results:r.a});t.a=c},47:function(e,t,a){},55:function(e,t,a){"use strict";(function(e){var n=a(19),r=a(14),c=a(25),o=a.n(c),l=a(35),i=a(56),s=a(57),u=[a(58).a.withExtraArgument({axios:o.a})];e.browser&&(u=[].concat(Object(n.a)(u),[Object(i.createLogger)({collapsed:!0})]));t.a=Object(r.createStore)((function(e,t){return"RESET_STORE"===t.type?(e=void 0,Object(l.a)(e,t)):Object(l.a)(e,t)}),Object(s.composeWithDevTools)(r.applyMiddleware.apply(void 0,Object(n.a)(u))))}).call(this,a(42))},60:function(e,t,a){e.exports=a(96)},65:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(65),a(21)),i=a(22),s=a(15),u=a(27),m=a(26),d=a(16),h=a(23),b=a(8),v=a(5),p=a(97),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleClick=e.handleClick.bind(Object(s.a)(e)),e}return Object(i.a)(a,[{key:"handleClick",value:function(e){console.log("event",e),this.props.getQuestions(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"trivia"},r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"Ready to test your trivia skills? Select a category to begin."),r.a.createElement("div",{id:"category"},r.a.createElement("div",null,r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{type:"button",color:"success",value:"geography",onClick:this.handleClick},"Geography")),r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{color:"danger",size:"large",value:"games",onClick:this.handleClick},"Games")),r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"animals",color:"primary",onClick:this.handleClick},"Animals"))),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"computers",color:"secondary",onClick:this.handleClick},"Computers")),r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"history",color:"warning",onClick:this.handleClick},"History")),r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"tv",color:"info",onClick:this.handleClick},"TV"))),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"music",className:"music",onClick:this.handleClick},"Music")),r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"books",className:"books",onClick:this.handleClick},"Books")),r.a.createElement(b.b,{to:"/questions"},r.a.createElement(p.a,{value:"sports",className:"sports",onClick:this.handleClick},"Sports"))))))}}]),a}(r.a.Component),g=Object(v.f)(Object(d.b)((function(e){return{results:e.results}}),(function(e){return{getQuestions:function(t){return e(Object(h.b)(t))}}}))(E));a(88),a(47),a(48);var f=a(101),k=a(59),y=a(102),C=a(98),w=a(99),O=a(100),j=function(e){var t=e.buttonLabel,a=e.className,c=e.score,o=Object(n.useState)(!1),l=Object(k.a)(o,2),i=l[0],s=l[1],u=function(){return s(!i)};return r.a.createElement("div",null,r.a.createElement(p.a,{color:"info",onClick:u},t),r.a.createElement(y.a,{isOpen:i,toggle:u,className:a},r.a.createElement(C.a,{toggle:u},"Trivia Score"),r.a.createElement(w.a,null,c<60?"Awww shucks, you got a ".concat(c||0,"%. Better luck next time!"):"You've got some mad trivia skills! You got a ".concat(c,"%"),"."," "),r.a.createElement(O.a,null,r.a.createElement(b.b,{to:"/"},r.a.createElement(p.a,{color:"primary",onClick:u},"Back to Categories")),r.a.createElement(p.a,{color:"secondary",onClick:u},"Cancel"))))},q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=function(){setTimeout((function(){e.setState({loading:!1})}),500)},e.state={numberCorrect:0,loading:!0},e.handleChoice=e.handleChoice.bind(Object(s.a)(e)),e}return Object(i.a)(a,[{key:"handleChoice",value:function(e,t,a){var n=document.getElementById(a);n&&e===t.correct_answer?(this.setState({numberCorrect:this.state.numberCorrect+1}),n.style.backgroundColor="green",n.style.color="white",n.disabled=!0):n.style.backgroundColor="red";for(var r=0;r<4;r++){var c=a[0]+"-"+r,o=document.getElementById(c);this.markCorrectAnswer(o,t.correct_answer),o.disabled=!0}}},{key:"markCorrectAnswer",value:function(e,t){e.innerHTML!==t&&e.getAttribute("choice")!==t||(e.style.backgroundColor="green")}},{key:"render",value:function(){var e=this,t=this.props.results.results;return r.a.createElement("div",{className:"questions-wrapper trivia",key:t},r.a.createElement("nav",null,r.a.createElement(b.b,{className:"nav-link",to:"/"},"X")),this.state.loading?r.a.createElement(f.a,{color:"dark",style:{width:"4rem",height:"4rem"}}):t&&t.length?t.map((function(t,a){return r.a.createElement("div",{className:"question",key:t.question},r.a.createElement("h2",null,a+1+". "+t.question.replace(/(&quot\;)/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">")),r.a.createElement("form",{id:"choice-form"},t.shuffledAnswers.map((function(n,c){return r.a.createElement("div",{key:n.incorrect_answers},r.a.createElement("button",{disabled:!1,type:"button",className:"choice",choice:n,dangerouslySetInnerHTML:{__html:n},id:a+"-"+c,onClick:function(){e.handleChoice(n,t,a+"-"+c)}}))}))))})):r.a.createElement("div",null,r.a.createElement("h2",null,"A category has not been selected yet.")),!this.state.loading&&t&&t.length&&r.a.createElement(j,{buttonLabel:"Check Your Score",score:10*this.state.numberCorrect}))}}]),a}(r.a.Component),S=Object(v.f)(Object(d.b)((function(e){return{results:e.results}}))(q)),T=function(){return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:g}),r.a.createElement(v.a,{exact:!0,path:"/questions",component:S})))))},A=a(55);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:A.a},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.f7e826b7.chunk.js.map
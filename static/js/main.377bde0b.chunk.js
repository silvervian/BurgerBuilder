(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(16),a(1)),s=a(2),o=a(4),u=a(3),d=a(5),m=function(e){return e.children},p=a(9),h=a.n(p),b=(a(17),function(e){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:h.a,alt:"MyBurger"}))}),E=(a(18),function(e){return r.a.createElement("li",{className:"navigation-item"},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children))}),f=(a(19),function(e){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"navigation-items"},r.a.createElement(E,{link:"/",active:!0},"Burger Builder"),r.a.createElement(E,{link:"/"},"Checkout")))}),g=(a(20),function(e){return r.a.createElement("div",{onClick:e.clicked,className:"drawer-toggle"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),v=(a(21),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement(g,{clicked:e.drowerToggleClicked}),r.a.createElement(b,null),r.a.createElement(f,null))}),y=(a(22),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),k=(a(23),function(e){return r.a.createElement(m,null,r.a.createElement(y,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:"side-drawer  ".concat(e.open?"open":"close")},r.a.createElement(b,null),r.a.createElement(f,null)))}),w=(a(24),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(v,{drowerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(k,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:"content"},this.props.children))}}]),t}(r.a.Component)),C=a(6),N=a(10),O=(a(25),function(e){switch(e.type){case"bread-bottom":return r.a.createElement("div",{className:"bread-bottom"});case"bread-top":return r.a.createElement("div",{className:"bread-top"},r.a.createElement("div",{className:"seeds1"}),r.a.createElement("div",{className:"seeds2"}));case"meat":return r.a.createElement("div",{className:"meat"});case"cheese":return r.a.createElement("div",{className:"cheese"});case"salad":return r.a.createElement("div",{className:"salad"});case"bacon":return r.a.createElement("div",{className:"bacon"});default:return null}}),j=(a(26),function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(N.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(O,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients :)")),r.a.createElement("div",{className:"burger"},r.a.createElement(O,{type:"bread-top"}),t,r.a.createElement(O,{type:"bread-bottom"}))}),S=(a(27),function(e){return r.a.createElement("div",{className:"build-control"},r.a.createElement("div",{className:"label"},e.label),r.a.createElement("button",{className:"less",onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"more",onClick:e.added},"More"))}),H=(a(28),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),P=function(e){return r.a.createElement("div",{className:"build-controls"},r.a.createElement("p",null,"Current Price ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),H.map((function(t){return r.a.createElement(S,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"order-button",disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},D=(a(29),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(y,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(r.a.Component)),T=(a(30),function(e){return r.a.createElement("button",{className:"button ".concat(e.btnType),onClick:e.clicked},e.children)}),A=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":"),e.props.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Burger"),r.a.createElement("p",null,"A delicious burger with following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2),"$")),r.a.createElement(T,{btnType:"danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(T,{btnType:"success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.a.Component),B={salad:.5,cheese:.4,meat:1.3,bacon:.7},W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You Continue")},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.addIngredientsHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(C.a)({},a.state.ingredients);n[e]=t;var r=B[e],c=a.state.totalPrice+r;a.setState({totalPrice:c,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientsHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(C.a)({},a.state.ingredients);r[e]=n;var c=B[e],l=a.state.totalPrice-c;a.setState({totalPrice:l,ingredients:r}),a.updatePurchaseState(r)}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(C.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(D,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(A,{price:this.state.totalPrice,ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(j,{ingredients:this.state.ingredients}),r.a.createElement(P,{ingredientAdded:this.addIngredientsHandler,ingredientRemoved:this.removeIngredientsHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),t}(r.a.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null,r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.377bde0b.chunk.js.map
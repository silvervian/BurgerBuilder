(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},40:function(e,t,n){e.exports=n(88)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),l=n(14),o=n(12),s=n(15),u=n(35),d=(n(49),n(1)),m=n(2),p=n(4),h=n(3),f=n(5),g=n(13),E=function(e){return e.children},b=n(36),v=n.n(b),y=(n(50),function(e){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:v.a,alt:"MyBurger"}))}),C=(n(51),function(e){return r.a.createElement("li",{className:"navigation-item"},r.a.createElement(l.b,{to:e.link,activeClassName:"active",exact:e.exact},e.children))}),O=(n(53),function(e){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"navigation-items"},r.a.createElement(C,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(C,{link:"/orders"},"Orders")))}),j=(n(54),function(e){return r.a.createElement("div",{onClick:e.clicked,className:"drawer-toggle"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),k=(n(55),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement(j,{clicked:e.drowerToggleClicked}),r.a.createElement(y,null),r.a.createElement(O,null))}),N=(n(56),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),w=(n(57),function(e){return r.a.createElement(E,null,r.a.createElement(N,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:"side-drawer  ".concat(e.open?"open":"close")},r.a.createElement(y,null),r.a.createElement(O,null)))}),I=(n(58),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(k,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(w,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:"content"},this.props.children))}}]),t}(r.a.Component)),T=n(6),S=n(39),D=(n(59),function(e){switch(e.type){case"bread-bottom":return r.a.createElement("div",{className:"bread-bottom"});case"bread-top":return r.a.createElement("div",{className:"bread-top"},r.a.createElement("div",{className:"seeds1"}),r.a.createElement("div",{className:"seeds2"}));case"meat":return r.a.createElement("div",{className:"meat"});case"cheese":return r.a.createElement("div",{className:"cheese"});case"salad":return r.a.createElement("div",{className:"salad"});case"bacon":return r.a.createElement("div",{className:"bacon"});default:return null}}),R=(n(60),function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(S.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(D,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients :)")),r.a.createElement("div",{className:"burger"},r.a.createElement(D,{type:"bread-top"}),t,r.a.createElement(D,{type:"bread-bottom"}))}),H=(n(61),function(e){return r.a.createElement("div",{className:"build-control"},r.a.createElement("div",{className:"label"},e.label),r.a.createElement("button",{className:"less",onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"more",onClick:e.added},"More"))}),_=(n(62),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),A=function(e){return r.a.createElement("div",{className:"build-controls"},r.a.createElement("p",null,"Current Price ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),_.map((function(t){return r.a.createElement(H,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"order-button",disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},x=(n(63),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(N,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(r.a.Component)),F=(n(64),function(e){return r.a.createElement("button",{className:"button ".concat(e.btnType),onClick:e.clicked,disabled:e.disabled},e.children)}),P=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.props.ingredients[t])}));return r.a.createElement(E,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(F,{btnType:"danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(F,{btnType:"success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.a.Component),U=(n(65),function(e){return r.a.createElement("div",{className:"loader"},"Loading...")}),L=function(e,t){return function(n){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(f.a)(a,n),Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(x,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(r.a.Component)},B=n(38),V=n.n(B).a.create({baseURL:"https://burger-builder-c0867.firebaseio.com/"}),z=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(T.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(U,null);return this.props.ings&&(a=r.a.createElement(E,null,r.a.createElement(R,{ingredients:this.props.ings}),r.a.createElement(A,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price})),n=r.a.createElement(P,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(E,null,r.a.createElement(x,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(r.a.Component),G=Object(o.b)((function(e){return{ings:e.ingredients,price:e.totalPrice,error:e.error}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){V.get("https://burger-builder-c0867.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))}}}))(L(z,V)),q=(n(83),function(e){var t=null,n=function(){return e.invalid&&e.shouldValidate&&e.touched?"invalid":""};switch(e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:"input-element ".concat(n())},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:"input-element ".concat(n())},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:"input-element ".concat(n()),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:"input-element"},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:"input"},r.a.createElement("label",{className:"label"},e.label),t)}),M=(n(84),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault(),console.log(n.props);var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ings,price:n.props.price,orderData:t};n.props.onOrderBurger(r)},n.inputChangedHandler=function(e,t){var a=Object(T.a)({},n.state.orderForm),r=Object(T.a)({},a[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),r.touched=!0,a[t]=r;var i=!0;for(var c in a)i=a[c].valid&&i;n.setState({orderForm:a,formIsValid:i})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(q,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(F,{btnType:"success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(a=r.a.createElement(U,null)),r.a.createElement("div",{className:"contact-data"},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),t}(r.a.Component)),W=Object(o.b)((function(e){return{ings:e.ingredients,price:e.totalPrice,loading:e.loading}}),(function(e){return{onOrderData:function(t){return e(function(e){return function(t){t({type:"PURCHASE_BURGER_START"}),V.post("/orders.json",e).then((function(n){console.log(n.data),t(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(n.data,e))})).catch((function(e){t(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t))}}}))(L(M,V)),$=(n(85),function(e){return r.a.createElement("div",{className:"checkout-summary"},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(R,{ingredients:e.ingredients}),r.a.createElement(F,{btnType:"danger",clicked:e.CheckoutCancelled},"CANCEL"),r.a.createElement(F,{btnType:"success",clicked:e.CheckoutContinue},"CONTINUE")))}),Y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinueHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(g.a,{to:"/"});return this.props.ings&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement($,{ingredients:this.props.ings,CheckoutCancelled:this.checkoutCancelledHandler,CheckoutContinue:this.checkoutContinueHandler}),r.a.createElement(g.b,{path:"".concat(this.props.match.path,"/contact-data"),component:W}))),e}}]),t}(r.a.Component),J=Object(o.b)((function(e){return{ings:e.ingredients}}))(Y),X=(n(86),function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:"order"},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))}),Z=(n(87),L(function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;V.get("/orders.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(T.a)({},t.data[a],{id:a}));console.log(t.data),e.setState({loading:!0,orders:n})})).catch((function(t){e.setState({loading:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(X,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),t}(r.a.Component),V)),K=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/checkout",component:J}),r.a.createElement(g.b,{path:"/orders",component:Z}),r.a.createElement(g.b,{path:"/",exact:!0,component:G}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(17),ee={ingredients:null,totalPrice:4,error:!1},te={salad:.5,cheese:.4,meat:1.3,bacon:.7},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(T.a)({},e,{ingredients:Object(T.a)({},e.ingredients,Object(Q.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+te[t.ingredientName]});case"REMOVE_INGREDIENT":return Object(T.a)({},e,{ingredients:Object(T.a)({},e.ingredients,Object(Q.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-te[t.ingredientName]});case"SET_INGREDIENTS":return Object(T.a)({},e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1});case"FETCH_INGREDIENTS_FAILED":return Object(T.a)({},e,{error:!0});default:return e}},ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,re=Object(s.d)(ne,ae(Object(s.a)(u.a)));c.a.render(r.a.createElement(o.a,{store:re},r.a.createElement(l.a,{basename:"/BurgerBuilder"},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f5c3565a.chunk.js.map
(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{90:function(e,t,a){"use strict";var n=a(0),i=a.n(n);a(91);t.a=function(e){var t=null,a=function(){return e.invalid&&e.shouldValidate&&e.touched?"invalid":""};switch(e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:"input-element ".concat(a())},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:"input-element ".concat(a())},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:"input-element ".concat(a()),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:"input-element"},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:"input"},i.a.createElement("label",{className:"label"},e.label),t)}},91:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(16),i=a(10),l=a(11),u=a(0),r=a.n(u),c=a(2),o=a(12),s=a(90),d=a(23),m=a(28),h=a(8);a(96);t.default=Object(c.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,building:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(h.b(t,a,n))},onSetAuthRedirectPath:function(){return e(h.j("/"))}}}))((function(e){var t=Object(u.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),a=Object(l.a)(t,2),c=a[0],h=a[1],g=Object(u.useState)(!0),v=Object(l.a)(g,2),f=v[0],p=v[1],b=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a},E=e.building,j=e.authRedirectPath,C=e.onSetAuthRedirectPath;Object(u.useEffect)((function(){!E&&j&&C()}),[j,E,C]);var O=[];for(var y in c)O.push({id:y,config:c[y]});var N=O.map((function(e){return r.a.createElement(s.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(i.a)({},c,Object(n.a)({},t,Object(i.a)({},c[t],{value:e.target.value,valid:b(e.target.value,c[t].validation),touched:!0})));h(a)}(t,e.id)}})}));e.loading&&(N=r.a.createElement(m.a,null));var T=null;e.error&&(T=r.a.createElement("p",null,e.error.message));var k=null;return e.isAuth&&(k=r.a.createElement(o.a,{to:e.authRedirectPath})),r.a.createElement("div",{className:"auth"},k,T,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAuth(c.email.value,c.password.value,f)}},N,r.a.createElement(d.a,{btnType:"success"},"SUBMIT")),r.a.createElement(d.a,{btnType:"danger",clicked:function(){p(!f)}},"SWITCH TO ",f?"SIGN IN":"SIGN UP"))}))}}]);
//# sourceMappingURL=4.08e546c1.chunk.js.map
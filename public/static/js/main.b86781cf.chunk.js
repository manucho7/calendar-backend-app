(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),u=a(63),i=a(4),m="[ui] Open Modal",d="[ui] Close Modal",f="[event] Set Active",p="[event] Add new",v="[event] Clear active event",b="[event] Event updated",E="[event] Event deleted",h="[event] Events Loaded",g="[event] Logout event",O="[auth] Finished checking state",j="[auth] Login",y="[auth] Logout",N={modalOpen:!1},w=a(54),k={events:[],activeEvent:null},x={checking:!0},S=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case p:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case v:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case b:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(i.a)(Object(i.a)({},e),{},{events:Object(w.a)(t.payload)});case g:return Object(i.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case O:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,D=Object(s.e)(S,C(Object(s.a)(u.a))),T=a(35),P=a(9),I=a(11),A=a.n(I),_=a(20),L="https://mern-calendar-manu.herokuapp.com/api",M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(L,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},R=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(L,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},G=a(17),F=a.n(G),V=a(15),H=a.n(V),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:H()(e.end).toDate(),start:H()(e.start).toDate()})}))},U=function(e){return{type:p,payload:e}},B=function(){return{type:v}},X=function(e){return{type:b,payload:e}},q=function(){return{type:E}},z=function(e){return{type:h,payload:e}},K=function(){return{type:O}},Q=function(e){return{type:j,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:g}),e(Y())}},Y=function(){return{type:y}},Z=a(13),$=a(24),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(Z.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object($.a)({},t.name,t.value)))};return[r,l,o]},te=(a(76),function(){var e=Object(l.b)(),t=ee({lEmail:"manuel@gmail.com",lPassword:"123456"}),a=Object(Z.a)(t,2),n=a[0],c=a[1],o=n.lEmail,s=n.lPassword,u=ee({rName:"Manuel",rEmail:"manuel7@gmail.com",rPassword:"123456",rPassword2:"123456"}),i=Object(Z.a)(u,2),m=i[0],d=i[1],f=m.rName,p=m.rEmail,v=m.rPassword,b=m.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=o,n=s,function(){var e=Object(_.a)(A.a.mark((function e(t){var r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:c.uid,name:c.name}))):F.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),v!==b)return F.a.fire("Error","Passwords must match","error");var a,n,r;e((a=p,n=v,r=f,function(){var e=Object(_.a)(A.a.mark((function e(t){var c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:o.uid,name:o.name}))):F.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),ae=a(53),ne=function(){return{type:m}},re=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e(W())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},ce={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},oe=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("span",null,"- ",n.name," "))},le=a(48),se=a.n(le),ue=a(49),ie=a.n(ue),me={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=H()().minutes(0).seconds(0).add(1,"hours"),fe=de.clone().add(1,"hours"),pe={title:"",notes:"",start:de.toDate(),end:fe.toDate()},ve=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(de.toDate()),o=Object(Z.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(fe.toDate()),f=Object(Z.a)(m,2),p=f[0],v=f[1],b=Object(n.useState)(!0),E=Object(Z.a)(b,2),h=E[0],g=E[1],O=Object(n.useState)(pe),j=Object(Z.a)(O,2),y=j[0],N=j[1],w=y.notes,k=y.title,x=y.start,S=y.end;Object(n.useEffect)((function(){N(t||pe)}),[t,N]);var C=function(e){var t=e.target;N(Object(i.a)(Object(i.a)({},y),{},Object($.a)({},t.name,t.value)))},D=function(){a({type:d}),a(B()),N(pe)};return r.a.createElement(se.a,{isOpen:e,onRequestClose:D,style:me,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=H()(x),c=H()(S);return r.isSameOrAfter(c)?F.a.fire("Error","La fecha de fin debe de ser mayor a la fecha de inicio","error"):k.trim().length<2?g(!1):(a(t?(n=y,function(){var e=Object(_.a)(A.a.mark((function e(t){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(X(n)):F.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(_.a)(A.a.mark((function t(a,n){var r,c,o,l,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,R("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.evento.id,e.user={_id:c,name:o},a(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),g(!0),void D())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ie.a,{onChange:function(e){u(e),N(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ie.a,{onChange:function(e){v(e),N(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:p,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},be=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(ne())}},r.a.createElement("i",{className:"fas fa-plus"}))},Ee=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t,a){var n,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,R("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(q()):F.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};a(111),a(112);H.a.locale("es");var he=Object(ae.b)(H.a),ge=function(e,t,a,c){var o=Object(l.b)(),s=Object(l.c)((function(e){return e.calendar})),u=s.events,i=s.activeEvent,m=Object(l.c)((function(e){return e.auth})).uid,d=Object(n.useState)(localStorage.getItem("lastView")||"month"),p=Object(Z.a)(d,2),v=p[0],b=p[1];Object(n.useEffect)((function(){o(function(){var e=Object(_.a)(A.a.mark((function e(t){var a,n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=J(n.eventos),console.log(r),t(z(r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(re,null),r.a.createElement(ae.a,{localizer:he,events:u,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:m===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){o(ne())},onSelectEvent:function(e){o(function(e){return{type:f,payload:e}}(e))},onView:function(e){b(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){o(B())},selectable:!0,view:v,components:{event:oe}}),r.a.createElement(be,null),i&&r.a.createElement(Ee,null),r.a.createElement(ve,null))},Oe=a(39),je=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Oe.a)(e,["isAuthenticated","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(P.a,{to:"/"}):r.a.createElement(a,e)}}))},ye=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Oe.a)(e,["isAuthenticated","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(P.a,{to:"/login"})}}))},Ne=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:n.uid,name:n.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere..."):r.a.createElement(T.a,null,r.a.createElement("div",null,r.a.createElement(P.d,null,r.a.createElement(je,{exact:!0,path:"/login",component:te,isAuthenticated:!!c}),r.a.createElement(ye,{exact:!0,path:"/",component:ge,isAuthenticated:!!c}),r.a.createElement(P.a,{to:"/"}))))},we=function(){return r.a.createElement(l.a,{store:D},r.a.createElement(Ne,null))};a(114);o.a.render(r.a.createElement(we,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(116)},76:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.b86781cf.chunk.js.map
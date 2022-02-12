(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{20:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(5),a=c.n(r),s=c(3),o=c(12),u=c(2),i=c(10),l="LOAD_TODOS",d="LOAD_USER",j="SET_USER",b="SET_TITLE_FILTER",p="SET_STATUS_FILTER",O="SET_ERROR",h=function(e){return{type:j,payload:e}},f=function(e){return{type:O,payload:e}},v={todos:[],currentUserId:0,titleFilter:"",statusFilter:"all",user:null,isError:!1},m=Object(i.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(o.a)(t.payload)});case j:return Object(u.a)(Object(u.a)({},e),{},{currentUserId:t.payload});case b:return Object(u.a)(Object(u.a)({},e),{},{titleFilter:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{statusFilter:t.payload});case d:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{isError:t.payload});default:return e}})),x=(c(20),c(6)),_=c(4),y=c.n(_);function T(e){return fetch("".concat("https://mate.academy/students-api/users/").concat(e)).then((function(e){return e.json()}))}var k=function(e){return e.todos},N=function(e){return e.currentUserId},E=function(e){return e.titleFilter},I=function(e){return e.statusFilter},C=function(e){return e.user},U=function(e){return e.isError},L=c(1),S=function(e){var t=Object(s.b)(),c=e.userId,r=Object(s.c)(C),a=Object(s.c)(U);Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(c);case 3:n=e.sent,t({type:d,payload:n}),t(f(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(f(!0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]);var o=Object(n.useCallback)((function(){t(h(0))}),[c]);return Object(L.jsx)(L.Fragment,{children:a?Object(L.jsx)("p",{children:"User Not Found"}):Object(L.jsxs)("div",{className:"CurrentUser",children:[Object(L.jsx)("h2",{className:"CurrentUser__title",children:Object(L.jsx)("span",{children:"Selected user: ".concat(null===r||void 0===r?void 0:r.id)})}),Object(L.jsx)("h3",{className:"CurrentUser__name",children:null===r||void 0===r?void 0:r.name}),Object(L.jsx)("p",{className:"CurrentUser__email",children:null===r||void 0===r?void 0:r.email}),Object(L.jsx)("p",{className:"CurrentUser__phone",children:null===r||void 0===r?void 0:r.phone}),Object(L.jsx)("button",{type:"button",className:"button",onClick:o,children:"Clear User"})]})})},F=c(11),w=c.n(F);c(23);var g=function(e){var t=Object(s.b)(),c=e.userId,r=Object(s.c)(k),a=Object(s.c)(E),o=Object(s.c)(I);Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(y.a.mark((function e(){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()}));case 2:c=e.sent,e.t0=o,e.next="completed"===e.t0?6:"not completed"===e.t0?8:10;break;case 6:return c=c.filter((function(e){return!0===e.completed})),e.abrupt("break",10);case 8:return c=c.filter((function(e){return!1===e.completed})),e.abrupt("break",10);case 10:t((n=c.filter((function(e){return e.title.includes(a)})),{type:l,payload:n}));case 11:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r.length,a,o]);var u=Object(n.useCallback)((function(e){var c=e.target.value;t({type:b,payload:c})}),[a]),i=Object(n.useCallback)((function(e){t(h(e))}),[c]),d=Object(n.useCallback)((function(e){var c=e.target.value;t({type:p,payload:c})}),[o]);return Object(L.jsxs)("div",{className:"TodoList",children:[Object(L.jsx)("input",{type:"text",placeholder:"Title",className:"TodoList__filter",value:a,onChange:u}),Object(L.jsxs)("select",{value:o,onChange:d,children:[Object(L.jsx)("option",{value:"all",children:"Show all"}),Object(L.jsx)("option",{value:"completed",children:"Show completed"}),Object(L.jsx)("option",{value:"not completed",children:"Show not completed"})]}),Object(L.jsx)("h2",{children:"Todos:"}),Object(L.jsx)("div",{className:"TodoList__list-container",children:Object(L.jsx)("ul",{className:"TodoList__list",children:r.map((function(e){return Object(L.jsxs)("li",{className:"TodoList__item TodoList__item--".concat(e.completed?"checked":"unchecked"),children:[Object(L.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(L.jsx)("input",{type:"checkbox",id:"".concat(e.id),checked:e.completed,readOnly:!0}),Object(L.jsx)("p",{children:e.title})]}),Object(L.jsx)("button",{onClick:function(){return i(e.userId)},className:w()("TodoList__user-button",{button:e.userId!==c},{"TodoList__user-button--selected":e.userId===c}),type:"button",children:"User ".concat(e.userId)})]},e.id)}))})})]})},A=(c(24),function(){var e=Object(s.c)(N);return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)("div",{className:"App__sidebar",children:Object(L.jsx)(g,{userId:e})}),Object(L.jsx)("div",{className:"App__content",children:Object(L.jsx)("div",{className:"App__content-container",children:e?Object(L.jsx)(S,{userId:e}):"No user selected"})})]})}),R=function(){return Object(L.jsx)(s.a,{store:m,children:Object(L.jsx)(A,{})})};a.a.render(Object(L.jsx)(R,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a528c3e0.chunk.js.map
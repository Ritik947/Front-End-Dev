(this["webpackJsonptha-index"]=this["webpackJsonptha-index"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(8),i=n.n(r),a=n(10),o=(n(15),n(20)),d=n(21),h=n(0),l=function(e){var t=e.number,n=e.text;return Object(h.jsx)(o.a,{className:"shadow p-3 mb-5",style:{padding:"0",width:"20rem",borderRadius:"1rem",backgroundColor:"#111",color:"white",textAlign:"center"},children:Object(h.jsxs)(o.a.Body,{children:[Object(h.jsxs)(o.a.Title,{style:{fontWeight:"600",fontSize:"2.5rem"},children:["Day ",t]}),Object(h.jsx)(o.a.Text,{children:n}),Object(h.jsx)(d.a,{onClick:function(){window.location.href="/Front-End-Dev/Day_"+"".concat(parseInt(t)<10?"0":"")+t+"".concat(parseInt(t)>=16?"/build":"")},children:"View"})]})})};var j=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("./thadata.json").then((function(e){return e.json()})).then((function(e){s(e),console.log(n)}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:"FrontEnd - THAs"}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("div",{className:"desc",children:["Welcome to the one who is viewing this deployment! ",Object(h.jsx)("br",{}),"Within here, I have deployed the take-home-assignments I completed as part of the Frontend Course provided by Devsnest."]}),Object(h.jsx)("div",{className:"grid-container",children:n?n.map((function(e,t){return Object(h.jsx)(l,{number:e.number,text:e.text},t)})):"Loading THAs"})]})]})};n(17);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.71aa4a5c.chunk.js.map
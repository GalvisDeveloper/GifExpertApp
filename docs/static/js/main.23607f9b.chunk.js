(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),i=t.n(c),u=(t(14),t(1)),l=t(7),m=t.n(l),o=t(9),s=function(e){var a=e.setCategories,t=Object(n.useState)(""),c=Object(u.a)(t,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2?(a((function(e){return[i].concat(Object(o.a)(e))})),l("")):alert("A\xf1ada una categoria con nombre m\xe1s largo","Alerta")}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)},placeholder:"Ingrese una categor\xeda para generar GIFs de \xe9sta"}))},p=t(4),d=t.n(p),f=t(8),g=function(){var e=Object(f.a)(d.a.mark((function e(a){var t,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(a),"&limit=30&api_key=kHA2LwEs6IlTUv66ibdSl7cc1CkB2VHD"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var a;return{id:e.id,title:e.title,url:null===(a=e.images)||void 0===a?void 0:a.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),_=function(e){var a=e.url,t=e.title;return r.a.createElement("div",{className:"card animate__animated animate__bounce animate__delay-3s"},r.a.createElement("p",null,"Gif: ",t),r.a.createElement("img",{src:a,alt:t}))},E=function(e){var a=e.category,t=function(e){var a=Object(n.useState)({data:[],loading:!0}),t=Object(u.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){g(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(a),c=t.data,i=t.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__bounce animate__rotateIn"},a),i&&r.a.createElement("p",{className:"animate__animated animate__bounce animate__flash"},"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(_,Object.assign({key:e.id},e))}))))},b=function(e){var a=e.mensaje,t=Object(n.useState)(["Fairy Tail"]),c=Object(u.a)(t,2),i=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"animate__animated animate__bounce animate__slideInDown"},a),r.a.createElement(s,{setCategories:l}),r.a.createElement("hr",null),r.a.createElement("ol",null,i.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};b.prototype={mensaje:m.a.string.isRequired};var v=b;i.a.render(r.a.createElement(v,{mensaje:"GifExpertApp with ReactJs"}),document.getElementById("app"))}},[[18,1,2]]]);
//# sourceMappingURL=main.23607f9b.chunk.js.map
(function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-17e0d336":"da77d1ca","chunk-274f384c":"f4ed7ced","chunk-aa9f219c":"250a8f6b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-17e0d336":1,"chunk-274f384c":1,"chunk-aa9f219c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-17e0d336":"742901aa","chunk-274f384c":"67655731","chunk-aa9f219c":"0e21849b"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://kolobok12309.github.io/My-auth_front/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19bf":function(e,t,n){"use strict";n("2837")},2837:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("65d1"),o=n.n(a),u=n("8459"),s=n.n(u),c=(n("f5df1"),n("41aa"),n("e1ae"),n("4121"),n("bddf"),n("cf05")),i=n.n(c),l=Object(r["createVNode"])("img",{alt:"logo",src:i.a,height:"30",class:"p-mr-2"},null,-1),f={class:"app-content p-mt-4"};function p(e,t,n,a,o,u){var s=Object(r["resolveComponent"])("Toast"),c=Object(r["resolveComponent"])("Menubar"),i=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(s),Object(r["createVNode"])(c,{model:e.navItems,class:"app-navbar"},{start:Object(r["withCtx"])((function(){return[l]})),_:1},8,["model"]),Object(r["createVNode"])("div",f,[Object(r["createVNode"])(i)])],64)}var d=n("3835"),m=(n("96cf"),n("1da1")),h=n("5530"),v=n("5502"),b=n("f31b"),g=n.n(b),k=n("6060"),O=n.n(k),j=n("a0cd"),w=n.n(j),y={components:{Toast:O.a,Menubar:w.a},data:function(){var e=this;return{navItems:[{label:"Главная",to:"/"},{label:"Задачи",visible:function(){return!e.isGuest},items:[{label:"Мои задачи"},{label:"Задачи отдела"}]},{label:"Настройки",visible:function(){return!e.isGuest}},{label:"Войти",to:"/signIn",visible:function(){return e.isGuest}},{label:"Выход",command:function(){return e.signOut()},visible:function(){return!e.isGuest}}]}},computed:Object(h["a"])({},Object(v["c"])("user",["isGuest"])),methods:Object(h["a"])(Object(h["a"])({},Object(v["b"])("user",["quit"])),{},{signOut:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g()(e.quit());case 2:n=t.sent,r=Object(d["a"])(n,1),a=r[0],a?e.$toast.add({severity:"error",summary:a.serverError||"Ошибка при выходе",life:5e3}):e.$router.push("/");case 6:case"end":return t.stop()}}),t)})))()}}),created:function(){this.$store.dispatch("user/init")}};n("19bf");y.render=p;var x=y,T=(n("d3b7"),n("6c02")),$=[{path:"/",name:"Index",component:function(){return n.e("chunk-274f384c").then(n.bind(null,"f75a"))}},{path:"/signIn",name:"SignIn",component:function(){return n.e("chunk-17e0d336").then(n.bind(null,"2b37"))}},{path:"/signUp",name:"SignUp",component:function(){return n.e("chunk-aa9f219c").then(n.bind(null,"08b2"))}}],I=Object(T["a"])({history:Object(T["b"])("/My-auth_front/"),routes:$}),U=I,C=function(){return{id:null,username:null,email:null,groupId:null,role:null,accessToken:null}},P={setToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.accessToken=t},setUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.id,r=void 0===n?null:n,a=t.username,o=void 0===a?null:a,u=t.email,s=void 0===u?null:u,c=t.groupId,i=void 0===c?null:c,l=t.role,f=void 0===l?null:l;e.id=r,e.username=o,e.email=s,e.groupId=i,e.role=f}},R={isAdmin:function(e){var t=e.role;return 0===t},isDirector:function(e){var t=e.role;return 1===t},isUser:function(e){var t=e.role;return 2===t},isGuest:function(e){var t=e.role;return null===t}},S=function(e,t){var n=e.$post;return n("/signIn",t)},_=function(e){var t=e.$get;return t("/user/self")},E=function(e,t){var n=e.$post;return n("/signUp",t)},A=function(e){var t=e.$post;return t("/signOut")},N="access_token",q={signUp:function(e,t){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var a,o,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,E(n.$axios,t);case 3:return o=r.sent,r.next=6,S(n.$axios,{login:t.email,passowrd:t.password});case 6:u=r.sent,s=u.accessToken,a("setToken",s),a("setUser",o);case 10:case"end":return r.stop()}}),r)})))()},signIn:function(e,t){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var a,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.dispatch,r.next=3,S(n.$axios,t);case 3:return o=r.sent,u=o.accessToken,a("setToken",u),r.next=8,a("loadUser");case 8:case"end":return r.stop()}}),r)})))()},setToken:function(e,t){var n=e.commit;n("setToken",t),window.localStorage.setItem(N,t||"")},loadUser:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,_(t.$axios);case 3:return a=n.sent,r("setUser",a),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))()},init:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.dispatch,a=window.localStorage.getItem(N),!a){t.next=6;break}return n("setToken",a),t.next=6,r("loadUser");case 6:case"end":return t.stop()}}),t)})))()},quit:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,n.next=3,A(t.$axios);case 3:r("setToken",null),a("setUser");case 5:case"end":return n.stop()}}),n)})))()}},M={namespaced:!0,state:C,mutations:P,getters:R,actions:q},B=Object(v["a"])({state:{},mutations:{},actions:{},modules:{user:M}}),G=(n("4160"),n("a15b"),n("bc3a")),L=n.n(G),V=function(e){var t=["request","delete","get","head","options","post","put","patch"];t.forEach((function(t){e["$".concat(t)]=function(){return e[t].apply(e,arguments).then((function(e){return e&&e.data}))}}))},D={install:function(e){var t=L.a.create({baseURL:"https://kolobok-auth-back.herokuapp.com"}),n=function(e){if(Object(G["isCancel"])(e))return e;var t=null,n=e.config||{},r=e.response||{},a=r.data||{};"string"===typeof a.message?t=a.message:Array.isArray(a.message)?t=a.message.join(", "):a.error&&(t=a.error);var o={path:n.url,method:n.method,requestData:n.data,statusCode:r.status,statusText:r.statusText,serverError:t,data:a};return Promise.reject(o)};V(t),t.interceptors.response.use(null,n),e.config.globalProperties.$axios=t;var r=e.config.globalProperties.$store;r&&(r.$axios=t,t.interceptors.request.use((function(e){var t=r.state.user.accessToken;return t&&(e.headers.Authorization="Bearer ".concat(t)),e})))}};Object(r["createApp"])(x).use(B).use(U).use(D).use(o.a,{ripple:!0}).use(s.a).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.422aee4d.js.map
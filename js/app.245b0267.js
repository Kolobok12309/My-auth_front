(function(e){function t(t){for(var r,o,s=t[0],c=t[1],i=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return c.p+"js/"+({guest:"guest"}[e]||e)+"."+{"chunk-0be469dc":"070dda98","chunk-1c00eb54":"516bdc2b",guest:"ed7746f5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0be469dc":1,"chunk-1c00eb54":1,guest:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({guest:"guest"}[e]||e)+"."+{"chunk-0be469dc":"d8c45c82","chunk-1c00eb54":"eb1841c9",guest:"6b04be63"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){i=p[s],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://kolobok12309.github.io/My-auth_front/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19bf":function(e,t,n){"use strict";n("2837")},2837:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("65d1"),a=n.n(o),u=n("8459"),s=n.n(u),c=(n("f5df1"),n("41aa"),n("e1ae"),n("4121"),n("bddf"),n("cf05")),i=n.n(c),l=Object(r["createVNode"])("img",{alt:"logo",src:i.a,height:"30",class:"p-mr-2"},null,-1),p={class:"app-content p-mt-4"};function d(e,t,n,o,a,u){var s=Object(r["resolveComponent"])("Toast"),c=Object(r["resolveComponent"])("Menubar"),i=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(s),Object(r["createVNode"])(c,{model:e.navItems,class:"app-navbar"},{start:Object(r["withCtx"])((function(){return[l]})),_:1},8,["model"]),Object(r["createVNode"])("div",p,[Object(r["createVNode"])(i)])],64)}var f=n("3835"),m=(n("96cf"),n("1da1")),h=n("5530"),b=n("5502"),v=n("f31b"),g=n.n(v),k=n("6060"),O=n.n(k),y=n("a0cd"),j=n.n(y),w={components:{Toast:O.a,Menubar:j.a},data:function(){var e=this;return{navItems:[{label:"Главная",to:"/"},{label:"Задачи",visible:function(){return!e.isGuest},items:[{label:"Мои задачи",to:"/task/my"},{label:"Задачи отдела",visible:function(){return e.hasGroup},to:"/task/group"},{label:"Все задачи",visible:function(){return!e.hasGroup},to:"/task/all"}]},{label:"Настройки",visible:function(){return!e.isGuest}},{label:"Войти",to:"/signIn",visible:function(){return e.isGuest}},{label:"Выход",command:function(){return e.signOut()},visible:function(){return!e.isGuest}}]}},computed:Object(h["a"])({},Object(b["c"])("user",["isGuest","hasGroup"])),methods:Object(h["a"])(Object(h["a"])({},Object(b["b"])("user",["quit"])),{},{signOut:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g()(e.quit());case 2:n=t.sent,r=Object(f["a"])(n,1),o=r[0],o?e.$toast.add({severity:"error",summary:o.serverError||"Ошибка при выходе",life:5e3}):e.$router.push("/");case 6:case"end":return t.stop()}}),t)})))()}}),beforeCreate:function(){this.$store.dispatch("user/init")}};n("19bf");w.render=d;var x=w,T=(n("d3b7"),n("6c02")),$=[{path:"/",name:"Index",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("guest")]).then(n.bind(null,"f75a"))},meta:{needAuth:!1}},{path:"/signIn",name:"SignIn",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("guest")]).then(n.bind(null,"2b37"))},meta:{needAuth:!1}},{path:"/signUp",name:"SignUp",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("guest")]).then(n.bind(null,"08b2"))},meta:{needAuth:!1}},{path:"/task",redirect:"/task/my",meta:{needAuth:!0}},{path:"/task/:type(my|group|all)",name:"Tasks",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("chunk-1c00eb54")]).then(n.bind(null,"e37d"))},meta:{needAuth:!0}}],A=function(e){var t=Object(T["a"])({history:Object(T["b"])("/My-auth_front/"),routes:$});return t.beforeEach((function(t,n,r){var o=e.getters["user/isGuest"];Object.prototype.hasOwnProperty.call(t.meta,"needAuth")?t.meta.needAuth!==o?r():r(o?"/":"/task"):r()})),t},P=function(){return{id:null,username:null,email:null,groupId:null,role:null,accessToken:null}},I={setToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.accessToken=t},setUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.id,r=void 0===n?null:n,o=t.username,a=void 0===o?null:o,u=t.email,s=void 0===u?null:u,c=t.groupId,i=void 0===c?null:c,l=t.role,p=void 0===l?null:l;e.id=r,e.username=a,e.email=s,e.groupId=i,e.role=p}},U={isAdmin:function(e){var t=e.role;return 0===t},isDirector:function(e){var t=e.role;return 1===t},isUser:function(e){var t=e.role;return 2===t},isGuest:function(e){var t=e.accessToken;return null===t},hasGroup:function(e){var t=e.groupId;return null!==t}},C=function(e,t){var n=e.$post;return n("/signIn",t)},E=function(e,t){var n=e.$post;return n("/signUp",t)},R=function(e){var t=e.$post;return t("/signOut")},S=function(e){var t=e.$get;return t("/user/self")},_="access_token",G={signUp:function(e,t){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var o,a,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=e.commit,r.next=3,E(n.$axios,t);case 3:return a=r.sent,r.next=6,C(n.$axios,{login:t.email,passowrd:t.password});case 6:u=r.sent,s=u.accessToken,o("setToken",s),o("setUser",a);case 10:case"end":return r.stop()}}),r)})))()},signIn:function(e,t){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var o,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=e.dispatch,r.next=3,C(n.$axios,t);case 3:return a=r.sent,u=a.accessToken,o("setToken",u),r.next=8,o("loadUser");case 8:case"end":return r.stop()}}),r)})))()},setToken:function(e,t){var n=e.commit;n("setToken",t),window.localStorage.setItem(_,t||"")},loadUser:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,S(t.$axios);case 3:return o=n.sent,r("setUser",o),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))()},init:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.dispatch,o=window.localStorage.getItem(_),!o){t.next=6;break}return n("setToken",o),t.next=6,r("loadUser");case 6:case"end":return t.stop()}}),t)})))()},quit:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,o=e.commit,n.next=3,R(t.$axios);case 3:r("setToken",null),o("setUser");case 5:case"end":return n.stop()}}),n)})))()}},N={namespaced:!0,state:P,mutations:I,getters:U,actions:G},q=Object(b["a"])({state:{},mutations:{},actions:{},modules:{user:N}}),M=(n("4160"),n("a15b"),n("bc3a")),B=n.n(M),L=function(e){var t=["request","delete","get","head","options","post","put","patch"];t.forEach((function(t){e["$".concat(t)]=function(){return e[t].apply(e,arguments).then((function(e){return e&&e.data}))}}))},V={install:function(e){var t=e.config.globalProperties,n=B.a.create({baseURL:"https://kolobok-auth-back.herokuapp.com"}),r=function(e){if(Object(M["isCancel"])(e))return e;var n=null,r=e.config||{},o=e.response||{},a=o.data||{};"string"===typeof a.message?n=a.message:Array.isArray(a.message)?n=a.message.join(", "):a.error&&(n=a.error),401===o.status&&(t.$store&&(t.$store.dispatch("user/setToken",null),t.$store.commit("user/setUser")),t.$router&&t.$router.push("/"));var u={path:r.url,method:r.method,requestData:r.data,statusCode:o.status,statusText:o.statusText,serverError:n,data:a};return Promise.reject(u)};L(n),n.interceptors.response.use(null,r),t.$axios=n;var o=t.$store;o&&(o.$axios=n,n.interceptors.request.use((function(e){var t=o.state.user.accessToken;return t&&(e.headers.Authorization="Bearer ".concat(t)),e})))}};Object(r["createApp"])(x).use(q).use(V).use(A(q)).use(a.a,{ripple:!0}).use(s.a).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.245b0267.js.map
(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},u={app:0},a={app:0},o=[];function c(e){return s.p+"js/"+({guest:"guest"}[e]||e)+"."+{"chunk-0be469dc":"070dda98","chunk-2b73dfa3":"bde7ffae","chunk-0d03fb02":"69be6d30","chunk-11c5469a":"2767b41b","chunk-302d8902":"db3a65ed",guest:"0342271c","chunk-79c47d46":"8779d20e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0be469dc":1,"chunk-2b73dfa3":1,"chunk-0d03fb02":1,"chunk-11c5469a":1,"chunk-302d8902":1,guest:1,"chunk-79c47d46":1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=new Promise((function(t,n){for(var r="css/"+({guest:"guest"}[e]||e)+"."+{"chunk-0be469dc":"d8c45c82","chunk-2b73dfa3":"69bc0e27","chunk-0d03fb02":"70c5593d","chunk-11c5469a":"aff8e3c1","chunk-302d8902":"ddb814a2",guest:"6b04be63","chunk-79c47d46":"74309d29"}[e]+".css",a=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete u[e],f.parentNode.removeChild(f),n(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){u[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",d.name="ChunkLoadError",d.type=r,d.request=u,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://kolobok12309.github.io/My-auth_front/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19bf":function(e,t,n){"use strict";n("2837")},2837:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),u=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f31b")),a=n.n(u),o=n("7a23"),c=n("65d1"),s=n.n(c),i=n("8459"),l=n.n(i),d=(n("f5df1"),n("41aa"),n("e1ae"),n("4121"),n("bddf"),n("cf05")),f=n.n(d),p=Object(o["createVNode"])("img",{alt:"logo",src:f.a,height:"30",class:"p-mr-2"},null,-1),h={class:"app-content p-mt-4"};function b(e,t,n,r,u,a){var c=Object(o["resolveComponent"])("Toast"),s=Object(o["resolveComponent"])("Menubar"),i=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(c),Object(o["createVNode"])(s,{model:e.navItems,class:"app-navbar"},{start:Object(o["withCtx"])((function(){return[p]})),_:1},8,["model"]),Object(o["createVNode"])("div",h,[Object(o["createVNode"])(i)])],64)}var m=n("3835"),g=n("5530"),v=n("5502"),k=n("6060"),O=n.n(k),j=n("a0cd"),w=n.n(j),y={components:{Toast:O.a,Menubar:w.a},data:function(){return{}},computed:Object(g["a"])(Object(g["a"])(Object(g["a"])({},Object(v["d"])("user",["id"])),Object(v["c"])("user",["isGuest"])),{},{navItems:function(){var e=this;return[{label:"Главная",to:"/"},{label:"Профиль",to:"/user/".concat(this.id,"/profile"),visible:function(){return!e.isGuest}},{label:"Настройки",to:"/user/".concat(this.id,"/settings"),visible:function(){return!e.isGuest}},{label:"Войти",to:"/signIn",visible:function(){return e.isGuest}},{label:"Выход",command:function(){return e.signOut()},visible:function(){return!e.isGuest}}]}}),methods:Object(g["a"])(Object(g["a"])({},Object(v["b"])("user",["quit"])),{},{signOut:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a()(e.quit());case 2:n=t.sent,r=Object(m["a"])(n,1),u=r[0],u?e.$toast.add({severity:"error",summary:u.serverError||"Ошибка при выходе",life:5e3}):e.$router.push("/");case 6:case"end":return t.stop()}}),t)})))()}})};n("19bf");y.render=b;var x=y,T=(n("a9e3"),n("d3b7"),n("6c02")),$=[{path:"/",name:"Index",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("guest")]).then(n.bind(null,"f75a"))},meta:{needAuth:!1}},{path:"/signIn",name:"SignIn",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("guest")]).then(n.bind(null,"2b37"))},meta:{needAuth:!1}},{path:"/signUp",name:"SignUp",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("guest")]).then(n.bind(null,"08b2"))},meta:{needAuth:!1}},{path:"/task/:type(my|group|all)",name:"Tasks",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("chunk-2b73dfa3"),n.e("chunk-0d03fb02")]).then(n.bind(null,"e37d"))},meta:{needAuth:!0}},{path:"/user/:id(\\d+)",component:function(){return n.e("chunk-79c47d46").then(n.bind(null,"1de2"))},meta:{needAuth:!0},props:function(e){var t=e.params;return{id:Number(t.id)}},children:[{path:"profile",alias:"",name:"Profile",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("chunk-2b73dfa3"),n.e("chunk-302d8902")]).then(n.bind(null,"ed22"))}},{path:"settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-0be469dc"),n.e("chunk-2b73dfa3"),n.e("chunk-11c5469a")]).then(n.bind(null,"9501"))}}]}],P=function(e){var t=Object(T["a"])({history:Object(T["b"])("/My-auth_front/"),routes:$});return t.beforeEach((function(t,n,r){var u=e.state.user,a=u.id,o=u.accessToken,c=null===o;Object.prototype.hasOwnProperty.call(t.meta,"needAuth")?t.meta.needAuth!==c?r():r(c||!a?"/":"/user/".concat(a,"/profile")):r()})),t},A=(n("3ca3"),n("ddb0"),function(){return{id:null,username:null,email:null,groupId:null,role:null,accessToken:null}}),R={setToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.accessToken=t},setUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.id,r=void 0===n?null:n,u=t.username,a=void 0===u?null:u,o=t.email,c=void 0===o?null:o,s=t.groupId,i=void 0===s?null:s,l=t.role,d=void 0===l?null:l;e.id=r,e.username=a,e.email=c,e.groupId=i,e.role=d}},I={isAdmin:function(e){var t=e.role;return 0===t},isDirector:function(e){var t=e.role;return 1===t},isUser:function(e){var t=e.role;return 2===t},isGuest:function(e){var t=e.accessToken;return null===t},hasGroup:function(e){var t=e.groupId;return null!==t}},U=n("c24f"),S="access_token",C={signUp:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var u,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=e.commit,r.next=3,Object(U["h"])(n.$axios,t);case 3:return a=r.sent,r.next=6,Object(U["f"])(n.$axios,{login:t.email,passowrd:t.password});case 6:o=r.sent,c=o.accessToken,u("setToken",c),u("setUser",a);case 10:case"end":return r.stop()}}),r)})))()},signIn:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var u,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=e.dispatch,r.next=3,Object(U["f"])(n.$axios,t);case 3:return a=r.sent,o=a.accessToken,u("setToken",o),r.abrupt("return",u("loadUser"));case 7:case"end":return r.stop()}}),r)})))()},setToken:function(e,t){var n=e.commit;n("setToken",t),window.localStorage.setItem(S,t||"")},loadUser:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Object(U["a"])(t.$axios);case 3:return u=n.sent,r("setUser",u),n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})))()},init:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.dispatch,u=window.localStorage.getItem(S),!u){t.next=6;break}return n("setToken",u),t.next=6,r("loadUser");case 6:case"end":return t.stop()}}),t)})))()},quit:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,u=e.commit,n.next=3,Object(U["g"])(t.$axios);case 3:r("setToken",null),u("setUser");case 5:case"end":return n.stop()}}),n)})))()}},E={namespaced:!0,state:A,mutations:R,getters:I,actions:C},_=Object(v["a"])({state:{},mutations:{},actions:{init:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.next=3,Promise.all([n("user/init",null,{root:!0})]);case 3:case"end":return t.stop()}}),t)})))()}},modules:{user:E}}),N=n("be3b"),q=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(o["createApp"])(x).use(_).use(N["b"]),e.next=3,a()(_.dispatch("init"));case 3:return e.abrupt("return",t.use(P(_)).use(s.a,{ripple:!0}).use(l.a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();q().then((function(e){window.app=e,e.mount("#app")}))},be3b:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("4160"),n("a15b"),n("d3b7");var r=n("bc3a"),u=n.n(r),a=function(e){var t=["request","delete","get","head","options","post","put","patch"];t.forEach((function(t){e["$".concat(t)]=function(){return e[t].apply(e,arguments).then((function(e){return e&&e.data}))}}))},o=u.a.create({baseURL:"https://kolobok-auth-back.herokuapp.com"});t["b"]={install:function(e){var t=e.config.globalProperties,n=function(e){if(Object(r["isCancel"])(e))return e;var n=null,u=e.config||{},a=e.response||{},o=a.data||{};"string"===typeof o.message?n=o.message:Array.isArray(o.message)?n=o.message.join(", "):o.error&&(n=o.error),401===a.status&&(t.$store&&(t.$store.dispatch("user/setToken",null),t.$store.commit("user/setUser")),t.$router&&t.$router.push("/"));var c={path:u.url,method:u.method,requestData:u.data,statusCode:a.status,statusText:a.statusText,serverError:n,data:o};return Promise.reject(c)};a(o),o.interceptors.response.use(null,n),t.$axios=o;var u=t.$store;u&&(u.$axios=o,o.interceptors.request.use((function(e){var t=u.state.user.accessToken;return t&&(e.headers.Authorization="Bearer ".concat(t)),e})))}}},c24f:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var r=function(e,t){var n=e.$post;return n("/signIn",t)},u=function(e,t){var n=e.$post;return n("/signUp",t)},a=function(e){var t=e.$post;return t("/signOut")},o=function(e){var t=e.$get;return t("/tokens")},c=function(e,t){var n=e.$get;return n("/tokens/".concat(t))},s=function(e){var t=e.$get,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t("/user/search",{params:{text:n}})},i=function(e){var t=e.$get;return t("/user/self")},l=function(e,t){var n=e.$get;return n("/user/".concat(t))}},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.fca0e167.js.map
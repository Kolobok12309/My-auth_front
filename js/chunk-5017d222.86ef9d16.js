(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5017d222"],{"0044":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={key:0,class:"p-divider-content"};function c(e,t,r,c,i,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:a.containerClass,role:"separator"},[e.$slots.default?(Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["renderSlot"])(e.$slots,"default")])):Object(n["createCommentVNode"])("",!0)],2)}var i={props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass:function(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align)},{"p-divider-center":"horizontal"===this.layout&&"center"===this.align},{"p-divider-right":"horizontal"===this.layout&&"right"===this.align},{"p-divider-top":"vertical"===this.layout&&"top"===this.align},{"p-divider-center":"vertical"===this.layout&&(!this.align||"center"===this.align)},{"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}]}}};r("e110");i.render=c;t["default"]=i},"0596":function(e,t,r){"use strict";e.exports=r("0044")},"0fbe":function(e,t,r){},1243:function(e,t,r){"use strict";r("0fbe")},"1de2":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o=Object(n["withScopeId"])("data-v-31577a30");Object(n["pushScopeId"])("data-v-31577a30");var c={class:"user-page p-grid p-mx-0"},i={class:"p-col-12 p-md-4 p-xl-2 p-offset-0 p-xl-offset-2"},a=Object(n["createTextVNode"])(" Информация "),s=Object(n["createTextVNode"])(" E-mail: "),l=Object(n["createTextVNode"])(" Отдел: "),u={class:"user-page__center p-col-12 p-md-8 p-xl-6"},d={class:"user-page__center__content"};Object(n["popScopeId"])();var p=o((function(e,t,r,p,b,f){var j=Object(n["resolveComponent"])("SkeletonHelper"),O=Object(n["resolveComponent"])("Divider"),v=Object(n["resolveComponent"])("Group"),g=Object(n["resolveComponent"])("Role"),m=Object(n["resolveComponent"])("Card"),h=Object(n["resolveComponent"])("Menubar"),k=Object(n["resolveComponent"])("router-view"),y=Object(n["resolveComponent"])("SpinnerHelper");return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(m,null,{title:o((function(){return[a]})),content:o((function(){return[Object(n["createVNode"])(j,{pending:e.pending},{default:o((function(){return[Object(n["createTextVNode"])(" Логин: "+Object(n["toDisplayString"])(e.user.username),1)]})),_:1},8,["pending"]),Object(n["createVNode"])(O),Object(n["createVNode"])(j,{pending:e.pending},{default:o((function(){return[s,Object(n["createVNode"])("a",{href:"mailto:"+e.user.email},Object(n["toDisplayString"])(e.user.email),9,["href"])]})),_:1},8,["pending"]),Object(n["createVNode"])(O),Object(n["createVNode"])(j,{pending:e.pending},{default:o((function(){return[e.user.group?(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:0},[l,Object(n["createVNode"])(v,{group:e.user.group},null,8,["group"])],64)):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["pending"]),e.pending||e.user.group?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(j,{pending:e.pending},{default:o((function(){return[Object(n["createVNode"])(g,{value:e.user.role},null,8,["value"])]})),_:1},8,["pending"])]})),_:1})]),Object(n["createVNode"])("div",u,[Object(n["createVNode"])(h,{model:e.toolbarItems,class:"p-mb-3"},null,8,["model"]),Object(n["createVNode"])("div",d,[Object(n["createVNode"])(y,{pending:e.pending,class:"p-mx-auto p-mt-6"},{default:o((function(){return[Object(n["createVNode"])(k,{user:e.user,isMe:e.isMe,pending:e.pending},{default:o((function(t){var r=t.Component;return[(Object(n["openBlock"])(),Object(n["createBlock"])(n["KeepAlive"],{max:"2"},[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(r),{key:e.$route.fullPath}))],1024))]})),_:1},8,["user","isMe","pending"])]})),_:1},8,["pending"])])])])})),b=(r("a9e3"),r("3835")),f=(r("96cf"),r("1da1")),j=r("5530"),O=r("f31b"),v=r.n(O),g=r("5502"),m=r("be3b"),h=r("c24f"),k=r("a7ca"),y=r.n(k),B=r("0596"),S=r.n(B),N=r("a0cd"),V=r.n(N);r("b0c0");function C(e,t,r,o,c,i){return Object(n["openBlock"])(),Object(n["createBlock"])("span",null,[Object(n["createVNode"])("i",{class:["pi","pi-".concat(e.role.icon)]},null,2),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.role.name),1)])}var x={0:{name:"Администратор",icon:"star"},1:{name:"Директор",icon:"tag"},2:{name:"Пользователь",icon:"user"}},w={props:{value:{type:Number,default:2,validator:function(e){return e>=0&&e<=2}}},computed:{role:function(){return x[this.value]}}};w.render=C;var $=w;function _(e,t,r,o,c,i){var a=Object(n["resolveComponent"])("Skeleton");return e.pending?(Object(n["openBlock"])(),Object(n["createBlock"])(a,Object(n["mergeProps"])({key:0},e.$attrs),null,16)):Object(n["renderSlot"])(e.$slots,"default",{key:1})}var R=r("845d"),D=r.n(R),z={inheritAttrs:!1,components:{Skeleton:D.a},props:{pending:{type:Boolean,default:!1}}};z.render=_;var I=z;function M(e,t,r,o,c,i){var a=Object(n["resolveComponent"])("Spinner");return e.pending?(Object(n["openBlock"])(),Object(n["createBlock"])(a,Object(n["mergeProps"])({key:0},e.$attrs),null,16)):Object(n["renderSlot"])(e.$slots,"default",{key:1})}var A=r("8d04"),T=r.n(A),E={inheritAttrs:!1,components:{Spinner:T.a},props:{pending:{type:Boolean,default:!1}}};E.render=M;var H=E,P=r("be88"),q={Card:y.a,Divider:S.a,Menubar:V.a,Role:$,SkeletonHelper:I,SpinnerHelper:H,Group:P["a"]},G={components:q,props:{id:{type:Number,required:!0}},data:function(){return{user:null,pending:!0}},computed:Object(j["a"])(Object(j["a"])(Object(j["a"])({},Object(g["d"])("user",{myId:"id"})),Object(g["c"])("user",["isAdmin"])),{},{isMe:function(){return this.id===this.myId},toolbarItems:function(){var e=this,t=this.id;return[{label:"Профиль",icon:"pi pi-user",to:"/user/".concat(t,"/profile")},{label:"Настройки",icon:"pi pi-cog",to:"/user/".concat(t,"/settings"),visible:function(){return e.isMe||e.isAdmin}}]}}),beforeRouteEnter:function(e,t,r){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o,c,i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.params.id,t.next=3,v()(Object(h["c"])(m["a"],o));case 3:if(c=t.sent,i=Object(b["a"])(c,2),a=i[0],s=i[1],!a){t.next=10;break}return n.$toast.add({severity:"error",summary:a.serverError||"Ошибка получения пользователя",life:5e3}),t.abrupt("return",r(!1));case 10:r((function(e){e.user=s,e.pending=!1}));case 11:case"end":return t.stop()}}),t)})))()},beforeRouteUpdate:function(e,t,r){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function o(){var c,i,a,s,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(c=e.params.id,c!==t.params.id){o.next=3;break}return o.abrupt("return",r());case 3:return n.pending=!0,o.next=6,v()(Object(h["c"])(m["a"],c));case 6:i=o.sent,a=Object(b["a"])(i,2),s=a[0],l=a[1],n.pending=!1,s?(n.$toast.add({severity:"error",summary:s.serverError||"Ошибка получения пользователя",life:5e3}),r(!1)):(n.user=l,r());case 12:case"end":return o.stop()}}),o)})))()}};r("43d2");G.render=p,G.__scopeId="data-v-31577a30";t["default"]=G},"22b8":function(e,t,r){"use strict";r("86e4")},"22ea":function(e,t,r){},"43d2":function(e,t,r){"use strict";r("6470")},6470:function(e,t,r){},"81d5":function(e,t,r){"use strict";var n=r("7b0b"),o=r("23cb"),c=r("50c4");e.exports=function(e){var t=n(this),r=c(t.length),i=arguments.length,a=o(i>1?arguments[1]:void 0,r),s=i>2?arguments[2]:void 0,l=void 0===s?r:o(s,r);while(l>a)t[a++]=e;return t}},"845d":function(e,t,r){"use strict";e.exports=r("8817")},"86e4":function(e,t,r){},8817:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,c,i){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{style:i.containerStyle,class:i.containerClass},null,6)}var c={props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},computed:{containerClass:function(){return["p-skeleton p-component",{"p-skeleton-circle":"circle"===this.shape,"p-skeleton-animation-none":"none"===this.animation}]},containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};r("c467");c.render=o;t["default"]=c},"8d04":function(e,t,r){"use strict";e.exports=r("e638")},a7ca:function(e,t,r){"use strict";e.exports=r("d6d9")},ae0b:function(e,t,r){},be88:function(e,t,r){"use strict";r("b0c0");var n=r("7a23");function o(e,t,r,o,c,i){var a=Object(n["resolveComponent"])("RouterLink");return Object(n["openBlock"])(),Object(n["createBlock"])(a,{to:"/group/"+e.group.id},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.group.name)+"#"+Object(n["toDisplayString"])(e.group.id),1)]})),_:1},8,["to"])}var c={props:{group:{type:Object,required:!0}}};c.render=o;t["a"]=c},c467:function(e,t,r){"use strict";r("ae0b")},cb29:function(e,t,r){var n=r("23e7"),o=r("81d5"),c=r("44d2");n({target:"Array",proto:!0},{fill:o}),c("fill")},d6d9:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={class:"p-card p-component"},c={key:0,class:"p-card-header"},i={class:"p-card-body"},a={key:0,class:"p-card-title"},s={key:1,class:"p-card-subtitle"},l={class:"p-card-content"},u={key:2,class:"p-card-footer"};function d(e,t,r,d,p,b){return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[e.$slots.header?(Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["renderSlot"])(e.$slots,"header")])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",i,[e.$slots.title?(Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["renderSlot"])(e.$slots,"title")])):Object(n["createCommentVNode"])("",!0),e.$slots.subtitle?(Object(n["openBlock"])(),Object(n["createBlock"])("div",s,[Object(n["renderSlot"])(e.$slots,"subtitle")])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",l,[Object(n["renderSlot"])(e.$slots,"content")]),e.$slots.footer?(Object(n["openBlock"])(),Object(n["createBlock"])("div",u,[Object(n["renderSlot"])(e.$slots,"footer")])):Object(n["createCommentVNode"])("",!0)])])}var p={};r("1243");p.render=d;t["default"]=p},e110:function(e,t,r){"use strict";r("22ea")},e638:function(e,t,r){"use strict";r.r(t);r("cb29");var n=r("7a23"),o={class:"p-progress-spinner",role:"alert","aria-busy":"true"};function c(e,t,r,c,i,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[(Object(n["openBlock"])(),Object(n["createBlock"])("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:a.svgStyle},[Object(n["createVNode"])("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:r.fill,"stroke-width":r.strokeWidth,strokeMiterlimit:"10"},null,8,["fill","stroke-width"])],4))])}var i={props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}};r("22b8");i.render=c;t["default"]=i}}]);
//# sourceMappingURL=chunk-5017d222.86ef9d16.js.map
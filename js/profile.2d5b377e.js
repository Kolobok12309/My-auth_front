(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"0202":function(e,t,n){"use strict";n("b5b2")},"17c0":function(e,t,n){"use strict";var r=n("7a23"),o=Object(r["withScopeId"])("data-v-e13a1f92");Object(r["pushScopeId"])("data-v-e13a1f92");var a={class:"date"};Object(r["popScopeId"])();var s=o((function(e,t,n,o,s,i){return Object(r["openBlock"])(),Object(r["createBlock"])("span",a,Object(r["toDisplayString"])(e.text),1)})),i=(n("a9e3"),{props:{value:{type:[Number,String,Date],default:null}},computed:{text:function(){if(!this.value)return"Не указана";var e=new Date(this.value);return e.toLocaleString()}}});n("3fd1");i.render=s,i.__scopeId="data-v-e13a1f92";t["a"]=i},"1de2":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["withScopeId"])("data-v-1a420bd3");Object(r["pushScopeId"])("data-v-1a420bd3");var a={class:"user-page p-grid p-mx-0"},s={class:"p-col-12 p-md-4 p-xl-2 p-offset-0 p-xl-offset-2"},i=Object(r["createTextVNode"])(" Информация "),c=Object(r["createTextVNode"])(" E-mail: "),l=Object(r["createTextVNode"])(" Отдел: "),u={class:"user-page__center p-col-12 p-md-8 p-xl-6"},d={class:"user-page__center__content"};Object(r["popScopeId"])();var p=o((function(e,t,n,p,b,m){var f=Object(r["resolveComponent"])("SkeletonHelper"),g=Object(r["resolveComponent"])("Divider"),O=Object(r["resolveComponent"])("GroupView"),v=Object(r["resolveComponent"])("RoleView"),j=Object(r["resolveComponent"])("Card"),h=Object(r["resolveComponent"])("Menubar"),k=Object(r["resolveComponent"])("router-view"),w=Object(r["resolveComponent"])("SpinnerHelper");return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("div",s,[Object(r["createVNode"])(j,null,{title:o((function(){return[i]})),content:o((function(){return[Object(r["createVNode"])(f,{pending:e.pending},{default:o((function(){return[Object(r["createTextVNode"])(" Логин: "+Object(r["toDisplayString"])(e.user.username),1)]})),_:1},8,["pending"]),Object(r["createVNode"])(g),Object(r["createVNode"])(f,{pending:e.pending},{default:o((function(){return[c,Object(r["createVNode"])("a",{href:"mailto:"+e.user.email},Object(r["toDisplayString"])(e.user.email),9,["href"])]})),_:1},8,["pending"]),Object(r["createVNode"])(g),Object(r["createVNode"])(f,{pending:e.pending},{default:o((function(){return[e.user.group?(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:0},[l,Object(r["createVNode"])(O,{group:e.user.group},null,8,["group"])],64)):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["pending"]),e.pending||e.user.group?(Object(r["openBlock"])(),Object(r["createBlock"])(g,{key:0})):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(f,{pending:e.pending},{default:o((function(){return[Object(r["createVNode"])(v,{value:e.user.role},null,8,["value"])]})),_:1},8,["pending"])]})),_:1})]),Object(r["createVNode"])("div",u,[Object(r["createVNode"])(h,{model:e.toolbarItems,class:"p-mb-3"},null,8,["model"]),Object(r["createVNode"])("div",d,[Object(r["createVNode"])(w,{pending:e.pending,class:"p-mx-auto p-mt-6"},{default:o((function(){return[Object(r["createVNode"])(k,{user:e.user,isMe:e.isMe,onUpdate:e.onUpdate},{default:o((function(t){var n=t.Component;return[(Object(r["openBlock"])(),Object(r["createBlock"])(r["KeepAlive"],{max:"2"},[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(n),{key:e.$route.fullPath}))],1024))]})),_:1},8,["user","isMe","onUpdate"])]})),_:1},8,["pending"])])])])})),b=(n("a9e3"),n("3835")),m=(n("96cf"),n("1da1")),f=n("5530"),g=n("f31b"),O=n.n(g),v=n("5502"),j=n("be3b"),h=n("c24f"),k=n("a7ca"),w=n.n(k),V=n("0596"),y=n.n(V),x=n("a0cd"),N=n.n(x),C=n("3635"),P=n("08bd"),S=n("4ecd"),B=n("be88"),$={Card:w.a,Divider:y.a,Menubar:N.a,RoleView:C["a"],SkeletonHelper:P["a"],SpinnerHelper:S["a"],GroupView:B["a"]},R={name:"UserPage",components:$,props:{id:{type:Number,required:!0}},data:function(){return{user:null,pending:!0}},computed:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(v["d"])("user",{myId:"id"})),Object(v["c"])("user",["isAdmin"])),{},{isMe:function(){return this.id===this.myId},toolbarItems:function(){var e=this,t=this.id;return[{label:"Профиль",icon:"pi pi-user",to:"/user/".concat(t,"/profile")},{label:"Настройки",icon:"pi pi-cog",to:"/user/".concat(t,"/settings"),visible:function(){return e.isMe||e.isAdmin}}]}}),methods:{onUpdate:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O()(Object(h["d"])(j["a"],e.id));case 2:if(n=t.sent,r=Object(b["a"])(n,2),o=r[0],a=r[1],!o){t.next=9;break}return e.$toast.add({severity:"error",summary:o.serverError||"Ошибка обновления информации о пользователе",life:5e3}),t.abrupt("return");case 9:e.user=a,e.isMe&&e.$store.commit("user/setUser",a);case 11:case"end":return t.stop()}}),t)})))()}},beforeRouteEnter:function(e,t,n){return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,o,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.params.id,t.next=3,O()(Object(h["d"])(j["a"],r));case 3:if(o=t.sent,a=Object(b["a"])(o,2),s=a[0],i=a[1],!s){t.next=10;break}return console.error(s),t.abrupt("return",n(!1));case 10:n((function(e){e.user=i,e.pending=!1}));case 11:case"end":return t.stop()}}),t)})))()},beforeRouteUpdate:function(e,t,n){var r=this;return Object(m["a"])(regeneratorRuntime.mark((function o(){var a,s,i,c,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=e.params.id,a!==t.params.id){o.next=3;break}return o.abrupt("return",n());case 3:return r.pending=!0,o.next=6,O()(Object(h["d"])(j["a"],a));case 6:s=o.sent,i=Object(b["a"])(s,2),c=i[0],l=i[1],r.pending=!1,c?(console.error(c),n(!1)):(r.user=l,n());case 12:case"end":return o.stop()}}),o)})))()}};n("ca95");R.render=p,R.__scopeId="data-v-1a420bd3";t["default"]=R},3001:function(e,t,n){},"3fd1":function(e,t,n){"use strict";n("a8f5")},"4c42":function(e,t,n){"use strict";n("955f")},"4ecd":function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,a,s){var i=Object(r["resolveComponent"])("Spinner");return e.pending?(Object(r["openBlock"])(),Object(r["createBlock"])(i,Object(r["mergeProps"])({key:0},e.$attrs),null,16)):Object(r["renderSlot"])(e.$slots,"default",{key:1})}var a=n("8d04"),s=n.n(a),i={inheritAttrs:!1,components:{Spinner:s.a},props:{pending:{type:Boolean,default:!1}}};i.render=o;t["a"]=i},9501:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,s){var i=Object(r["resolveComponent"])("SettingsForm"),c=Object(r["resolveComponent"])("PasswordBlock"),l=Object(r["resolveComponent"])("TokensTable");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(i,{user:e.user,isMe:e.isMe,pending:e.settingsPending,onSubmit:e.onSettingsUpdate},null,8,["user","isMe","pending","onSubmit"]),Object(r["createVNode"])(c,{ref:"password",pending:e.passwordPending,isMe:e.isMe,class:"p-mt-3",onSubmit:e.onPasswordUpdate},null,8,["pending","isMe","onSubmit"]),Object(r["createVNode"])(l,{tokens:e.tokens,pending:e.tokensPending,class:"p-mt-3",onDelete:e.onTokenDelete},null,8,["tokens","pending","onDelete"])])}n("a434");var a=n("3835"),s=(n("96cf"),n("1da1")),i=n("f31b"),c=n.n(i),l=n("c24f"),u=Object(r["withScopeId"])("data-v-7fa455a4");Object(r["pushScopeId"])("data-v-7fa455a4");var d=Object(r["createTextVNode"])(" Настройки "),p={class:"settings-form__grid"},b=Object(r["createVNode"])("label",{for:"email"}," Email: ",-1),m=Object(r["createVNode"])("label",{for:"group"}," Отдел: ",-1),f=Object(r["createVNode"])("label",{for:"role"}," Роль: ",-1),g={class:"p-grid p-mt-2"},O={class:"p-col-fixed"};Object(r["popScopeId"])();var v=u((function(e,t,n,o,a,s){var i=Object(r["resolveComponent"])("InputText"),c=Object(r["resolveComponent"])("GroupPicker"),l=Object(r["resolveComponent"])("RolePicker"),v=Object(r["resolveComponent"])("Button"),j=Object(r["resolveComponent"])("Card");return Object(r["openBlock"])(),Object(r["createBlock"])(j,null,{title:u((function(){return[d]})),content:u((function(){return[Object(r["createVNode"])("form",{class:"settings-form",onSubmit:t[4]||(t[4]=Object(r["withModifiers"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[Object(r["createVNode"])("div",p,[b,Object(r["createVNode"])("div",null,[Object(r["createVNode"])(i,{modelValue:e.userData.email,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.userData.email=t}),disabled:e.pending,id:"email",placeholder:"example@example.com",type:"text"},null,8,["modelValue","disabled"])]),m,Object(r["createVNode"])("div",null,[Object(r["createVNode"])(c,{modelValue:e.userData.groupId,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.userData.groupId=t}),disabled:e.pending,inputId:"group"},null,8,["modelValue","disabled"])]),e.showRoles?(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:0},[f,Object(r["createVNode"])("div",null,[Object(r["createVNode"])(l,{modelValue:e.userData.role,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.userData.role=t}),disabled:e.pending,inputId:"role"},null,8,["modelValue","disabled"])])],64)):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])("div",g,[Object(r["createVNode"])("div",O,[Object(r["createVNode"])(v,{disabled:e.pending,label:"Сохранить",icon:"pi pi-save",type:"submit"},null,8,["disabled"])])])],32)]})),_:1})})),j=n("5530"),h=n("5502"),k=n("a7ca"),w=n.n(k),V=n("a84a"),y=n.n(V),x=n("6549"),N=n.n(x),C=n("a871"),P=n("5c09"),S={Card:w.a,InputText:y.a,Button:N.a,GroupPicker:C["a"],RolePicker:P["a"]},B={components:S,props:{user:{type:Object,required:!0},isMe:{type:Boolean,default:!1},pending:{type:Boolean,default:!1}},emits:["submit"],data:function(){return{userData:null}},computed:Object(j["a"])(Object(j["a"])({},Object(h["c"])("user",["isAdmin"])),{},{userIsAdmin:function(){return 0===this.user.role},showRoles:function(){return this.isAdmin&&(this.isMe||!this.userIsAdmin)}}),watch:{user:{handler:"resetUserData",immediate:!0}},methods:{resetUserData:function(){var e=this.user,t=e.email,n=e.groupId,r=void 0===n?null:n,o=e.role,a=void 0===o?2:o;this.userData={email:t,groupId:r,role:a}},onSubmit:function(){var e=Object(j["a"])({},this.userData);this.showRoles||delete e.role,this.$emit("submit",e)}}};n("4c42");B.render=v,B.__scopeId="data-v-7fa455a4";var $=B,R=Object(r["createTextVNode"])(" Смена пароля "),I={class:"p-fluid p-formgrid p-grid"},T={key:0,class:"p-field p-col-12 p-sm-6 p-lg-4"},M=Object(r["createVNode"])("label",{for:"oldPassword"}," Старый пароль ",-1),L={key:0,class:"p-error"},D={class:"p-field p-col-12 p-sm-6 p-lg-4"},_=Object(r["createVNode"])("label",{for:"password"}," Новый пароль ",-1),U={key:0,class:"p-error"},E={class:"p-field p-col-12 p-sm-6 p-lg-4"},A=Object(r["createVNode"])("label",{for:"confirmPassword"}," Подтвердите новый пароль ",-1),z={key:0,class:"p-error"};function H(e,t,n,o,a,s){var i=Object(r["resolveComponent"])("Password"),c=Object(r["resolveComponent"])("SkeletonHelper"),l=Object(r["resolveComponent"])("Button"),u=Object(r["resolveComponent"])("Card");return Object(r["openBlock"])(),Object(r["createBlock"])(u,null,{title:Object(r["withCtx"])((function(){return[R]})),content:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("form",{onSubmit:t[4]||(t[4]=Object(r["withModifiers"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[Object(r["createVNode"])("div",I,[e.isMe?(Object(r["openBlock"])(),Object(r["createBlock"])("div",T,[M,Object(r["createVNode"])(c,{pending:e.pending,style:{height:"2.25rem"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:e.oldPassword,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.oldPassword=t}),id:"oldPassword",feedback:!1,toggleMask:"",class:{"p-invalid":e.v$.oldPassword.$error}},null,8,["modelValue","class"]),e.v$.oldPassword.$error?(Object(r["openBlock"])(),Object(r["createBlock"])("small",L,Object(r["toDisplayString"])(e.v$.oldPassword.$errors[0].$message),1)):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["pending"])])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",D,[_,Object(r["createVNode"])(c,{pending:e.pending,style:{height:"2.25rem"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),id:"password",feedback:!1,toggleMask:"",class:{"p-invalid":e.v$.password.$error}},null,8,["modelValue","class"]),e.v$.password.$error?(Object(r["openBlock"])(),Object(r["createBlock"])("small",U,Object(r["toDisplayString"])(e.v$.password.$errors[0].$message),1)):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["pending"])]),Object(r["createVNode"])("div",E,[A,Object(r["createVNode"])(c,{pending:e.pending,style:{height:"2.25rem"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:e.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.confirmPassword=t}),id:"confirmPassword",feedback:!1,toggleMask:"",class:{"p-invalid":e.v$.confirmPassword.$error}},null,8,["modelValue","class"]),e.v$.confirmPassword.$error?(Object(r["openBlock"])(),Object(r["createBlock"])("small",z,Object(r["toDisplayString"])(e.v$.confirmPassword.$errors[0].$message),1)):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["pending"])])]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])(l,{disabled:e.pending,label:"Подтвердить",icon:"pi pi-save",type:"submit"},null,8,["disabled"])])],32)]})),_:1})}var F=n("e3e1"),q=n("25a0"),G=n("b51d"),K=n.n(G),Z=n("08bd"),J={Card:w.a,Password:K.a,Button:N.a,SkeletonHelper:Z["a"]},W=10,Q={name:"ChangePasswordBlock",components:J,props:{pending:{type:Boolean,default:!1},isMe:{type:Boolean,default:!1}},emits:["submit"],data:function(){return{oldPassword:"",password:"",confirmPassword:""}},setup:function(){return{v$:Object(q["a"])()}},validations:function(){return{oldPassword:this.isMe?{required:F["a"].withMessage("Обязательное поле",F["c"]),minLength:F["a"].withMessage("Минимальная длина ".concat(W," символов"),Object(F["b"])(W))}:{},password:{required:F["a"].withMessage("Обязательное поле",F["c"]),minLength:F["a"].withMessage("Минимальная длина ".concat(W," символов"),Object(F["b"])(W)),sameAs:F["a"].withMessage("Пароли не совпадают",Object(F["d"])(this.confirmPassword))},confirmPassword:{required:F["a"].withMessage("Обязательное поле",F["c"]),minLength:F["a"].withMessage("Минимальная длина ".concat(W," символов"),Object(F["b"])(W)),sameAs:F["a"].withMessage("Пароли не совпадают",Object(F["d"])(this.password))}}},methods:{clear:function(){this.oldPassword="",this.password="",this.confirmPassword=""},onSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.v$.$validate();case 2:if(n=t.sent,n){t.next=5;break}return t.abrupt("return");case 5:e.v$.$reset(),r={password:e.password},e.isMe&&(r.oldPassword=e.oldPassword),e.$emit("submit",r);case 9:case"end":return t.stop()}}),t)})))()}}};Q.render=H;var X=Q,Y=Object(r["createVNode"])("div",{class:"p-text-center"}," Токены не найдены ",-1);function ee(e,t,n,o,a,s){var i=Object(r["resolveComponent"])("Column"),c=Object(r["resolveComponent"])("DateView"),l=Object(r["resolveComponent"])("DataTable");return Object(r["openBlock"])(),Object(r["createBlock"])(l,{title:"Список токенов доступа",items:e.tokens,pending:e.pending,paginator:!1,class:"tokens-table"},{empty:Object(r["withCtx"])((function(){return[Y]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{field:"id",header:"#",headerClass:"p-text-center",bodyClass:"p-text-center"}),Object(r["createVNode"])(i,{field:"userAgent",header:"UserAgent",bodyClass:"tokens-table__user-agent"}),Object(r["createVNode"])(i,{field:"ip",header:"Ip-адрес"}),Object(r["createVNode"])(i,{field:"createdAt",header:"Дата"},{body:Object(r["withCtx"])((function(e){var t=e.data;return[Object(r["createVNode"])(c,{value:t.createdAt},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{field:"actions",header:"#"},{body:Object(r["withCtx"])((function(t){var n=t.data;return[Object(r["createVNode"])("i",{class:"pi pi-trash",onClick:Object(r["withModifiers"])((function(t){return e.onDelete(n)}),["stop"])},null,8,["onClick"])]})),_:1})]})),_:1},8,["items","pending"])}var te=n("c524"),ne=n.n(te),re=n("0dd2"),oe=n("17c0"),ae={components:{Column:ne.a,DataTable:re["a"],DateView:oe["a"]},props:{tokens:{type:Array,default:function(){return[]}},pending:{type:Boolean,default:!1}},emits:["delete"],methods:{onDelete:function(e){this.$emit("delete",e)}}};n("0202");ae.render=ee;var se=ae,ie={components:{SettingsForm:$,PasswordBlock:X,TokensTable:se},props:{user:{type:Object,required:!0},isMe:{type:Boolean,required:!0}},emits:["update"],data:function(){return{tokens:[],tokensPending:!0,settingsPending:!1,passwordPending:!1}},methods:{loadTokens:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,o,s,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.isMe?l["c"]:l["e"],e.tokensPending=!0,t.next=4,c()(n(e.$axios,e.user.id));case 4:if(r=t.sent,o=Object(a["a"])(r,2),s=o[0],i=o[1],u=void 0===i?[]:i,!s){t.next=13;break}return e.$toast.add({severity:"error",summary:s.serverError||"Ошибка загрузки токенов",life:5e3}),e.tokensPending=!1,t.abrupt("return");case 13:e.tokens=u,e.tokensPending=!1;case 15:case"end":return t.stop()}}),t)})))()},onTokenDelete:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,s,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.id,t.tokensPending=!0,n.next=4,c()(Object(l["h"])(t.$axios,r));case 4:if(o=n.sent,s=Object(a["a"])(o,1),i=s[0],!i){n.next=11;break}return t.$toast.add({severity:"error",summary:i.serverError||"Ошибка при удалении токена",life:5e3}),t.tokensPending=!1,n.abrupt("return");case 11:u=t.tokens.indexOf(e),~u&&t.tokens.splice(u,1),t.$toast.add({severity:"success",summary:"Токен успешно удалён",life:5e3}),t.tokensPending=!1;case 15:case"end":return n.stop()}}),n)})))()},onSettingsUpdate:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.user.id,t.settingsPending=!0,n.next=4,c()(Object(l["m"])(t.$axios,r,e));case 4:if(o=n.sent,s=Object(a["a"])(o,1),i=s[0],!i){n.next=11;break}return t.$toast.add({severity:"error",summary:i.serverError||"Ошибка при изменении настроек",life:5e3}),t.settingsPending=!1,n.abrupt("return");case 11:t.$toast.add({severity:"success",summary:"Настройки успешно изменены",life:5e3}),t.$emit("update"),t.settingsPending=!1;case 14:case"end":return n.stop()}}),n)})))()},onPasswordUpdate:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,s,i,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.password,o=e.oldPassword,s=t.user.id,t.passwordPending=!0,n.next=5,c()(Object(l["a"])(t.$axios,s,r,o));case 5:if(i=n.sent,u=Object(a["a"])(i,1),d=u[0],!d){n.next=12;break}return t.$toast.add({severity:"error",summary:d.serverError||"Ошибка при изменении пароля",life:5e3}),t.passwordPending=!1,n.abrupt("return");case 12:t.$toast.add({severity:"success",summary:"Пароль успешно изменен",life:5e3}),t.passwordPending=!1,t.$refs.password.clear();case 15:case"end":return n.stop()}}),n)})))()}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadTokens();case 2:case"end":return t.stop()}}),t)})))()}};ie.render=o;t["default"]=ie},"955f":function(e,t,n){},a8f5:function(e,t,n){},b51d:function(e,t,n){"use strict";e.exports=n("ec22")},b5b2:function(e,t,n){},ca95:function(e,t,n){"use strict";n("3001")},ec22:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"p-password-info"};function a(e,t,n,a,s,i){return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("input",Object(r["mergeProps"])({ref:"input",type:"password",class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onFocus:t[2]||(t[2]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[3]||(t[3]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeyup:t[4]||(t[4]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)})},e.$attrs),null,16,["value"]),Object(r["createVNode"])(r["Transition"],{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onLeave:i.onOverlayLeave},{default:Object(r["withCtx"])((function(){return[s.overlayVisible?(Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:0,ref:i.overlayRef,class:"p-password-panel p-component"},[Object(r["createVNode"])("div",{class:"p-password-meter",style:{"background-position":s.meterPosition}},null,4),Object(r["createVNode"])("div",o,Object(r["toDisplayString"])(s.infoText),1)],512)):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["onEnter","onLeave"])],64)}n("d3b7"),n("4d63"),n("ac1f"),n("25f0");var s=n("e895"),i=n.n(s),c=n("3a94"),l=n.n(c),u={emits:["update:modelValue"],inheritAttrs:!1,props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0}},data:function(){return{overlayVisible:!1,meterPosition:"",infoText:this.promptLabel}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)},methods:{onOverlayEnter:function(){this.overlay.style.zIndex=String(l.a.generateZIndex()),this.overlay.style.minWidth=l.a.getOuterWidth(this.$refs.input)+"px",l.a.absolutePosition(this.overlay,this.$refs.input),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},testStrength:function(e){var t=0;return this.strongCheckRegExp.test(e)?t=3:this.mediumCheckRegExp.test(e)?t=2:e.length&&(t=1),t},onInput:function(e){this.$emit("update:modelValue",e.target.value)},onFocus:function(){this.feedback&&(this.overlayVisible=!0)},onBlur:function(){this.feedback&&(this.overlayVisible=!1)},onKeyUp:function(e){if(this.feedback){var t=e.target.value,n=null,r=null;switch(this.testStrength(t)){case 1:n=this.weakText,r="0px -10px";break;case 2:n=this.mediumText,r="0px -20px";break;case 3:n=this.strongText,r="0px -30px";break;default:n=this.promptText,r="0px 0px";break}this.meterPosition=r,this.infoText=n,this.overlayVisible||(this.overlayVisible=!0)}},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new i.a(this.$refs.input,(function(){e.overlayVisible&&(e.overlayVisible=!1)}))),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(e){this.overlay=e}},computed:{filled:function(){return null!=this.modelValue&&this.modelValue.toString().length>0},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt}}};u.render=a;t["default"]=u},ed22:function(e,t,n){"use strict";n.r(t);n("4de4");var r=n("7a23"),o={class:"profile"};function a(e,t,n,a,s,i){var c=Object(r["resolveComponent"])("TaskFilter"),l=Object(r["resolveComponent"])("TaskTable");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])(c,{pending:e.pending,title:e.filter.title,"onUpdate:title":t[1]||(t[1]=function(t){return e.filter.title=t}),status:e.filter.status,"onUpdate:status":t[2]||(t[2]=function(t){return e.filter.status=t}),groupId:e.filter.groupId,"onUpdate:groupId":t[3]||(t[3]=function(t){return e.filter.groupId=t}),hideGroup:e.hasGroup,hideUser:"",onSubmit:e.onFilter},null,8,["pending","title","status","groupId","hideGroup","onSubmit"]),Object(r["createVNode"])(l,{title:e.tableTitle,tasks:e.tasks,pending:e.pending,page:e.meta&&e.meta.page,perPage:e.meta&&e.meta.perPage,totalCount:e.meta&&e.meta.totalCount,class:"p-mt-3",onPage:e.onChangePage},null,8,["title","tasks","pending","page","perPage","totalCount","onPage"])])}var s=n("3835"),i=n("5530"),c=(n("96cf"),n("1da1")),l=n("f31b"),u=n.n(l),d=n("6925"),p=n("ca0e"),b=n("b199"),m={components:{TaskFilter:d["a"],TaskTable:p["a"]},props:{user:{type:Object,required:!0},isMe:{type:Boolean,required:!0}},data:function(){return{pending:!0,tasks:[],meta:null,filter:{title:"",status:null,userId:null,groupId:null}}},computed:{tableTitle:function(){return this.isMe?"Мои задачи":"Задачи"},hasGroup:function(){return null!==this.user.groupId}},watch:{user:{handler:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.id,o=e.groupId,t.filter.userId=r,o&&(t.filter.groupId=o),n.next=5,t.loadTasks();case 5:case"end":return n.stop()}}),n)})))()},immediate:!0}},methods:{onFilter:function(){this.loadTasks()},onChangePage:function(e){this.loadTasks(e.page+1,e.rows)},loadTasks:function(){var e=arguments,t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,a,c,l,d,p,m,f,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,o=e.length>1&&void 0!==e[1]?e[1]:20,a=Object(i["a"])(Object(i["a"])({},t.filter),{},{page:r,perPage:o}),t.pending=!0,n.next=6,u()(Object(b["e"])(t.$axios,a));case 6:if(c=n.sent,l=Object(s["a"])(c,2),d=l[0],p=l[1],p=void 0===p?{}:p,m=p.items,f=p.meta,g=void 0===f?null:f,!d){n.next=16;break}return t.$toast.add({severity:"error",summary:d.serverError||"Ошибка загрузки задач",life:5e3}),t.pending=!1,n.abrupt("return");case 16:t.tasks=m,t.meta=g,t.pending=!1;case 19:case"end":return n.stop()}}),n)})))()}}};m.render=a;t["default"]=m}}]);
//# sourceMappingURL=profile.2d5b377e.js.map
(function(){"use strict";var e={4135:function(e,t,r){r.d(t,{d:function(){return o},e:function(){return n}});const n=e=>{const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},o=(e,t,r={})=>{r={path:"/",...r},r.expires instanceof Date&&(r.expires=r.expires.toUTCString());let n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(const o in r){n+="; "+o;const e=r[o];!0!==e&&(n+="="+e)}document.cookie=n}},4402:function(e,t,r){r.d(t,{t:function(){return a}});var n=r(6154),o=r(4135);const a=n.Z.create({baseURL:"https://testkit.kz/"});a.interceptors.request.use((async e=>{const t=(0,o.e)("_token");return e.headers={Authorization:`Bearer ${t}`},e}),(e=>{Promise.reject(e)})),n.Z.interceptors.response.use((e=>e),(e=>{switch(console.log("kek"),e.response.status){case 401:break;case 500:break}return Promise.reject(e)}))},9020:function(e,t,r){var n=r(144),o=r(998),a=r(2928),s=function(){var e=this,t=e._self._c;return t(o.Z,[t(a.Z,[t("router-view")],1)],1)},i=[],c={name:"App",data:()=>({})},u=c,l=r(1001),d=(0,l.Z)(u,s,i,!1,null,null,null),p=d.exports,f=r(8345),m=r(629);n.ZP.use(m.ZP);var h=new m.ZP.Store({state:{templatesList:[],clientsList:[],userRole:"",userId:"",activeDashboard:"",activeDashboardCategory:"list",lastClickedDashboardCategory:"list"},mutations:{setTemplate(e,t){Array.isArray(t)?e.templatesList=t:"object"===typeof t&&e.templatesList.unshift(t)},deleteTemplate(e,t){e.templatesList=e.templatesList.filter((e=>e.template_id!==t))},setClient(e,t){Array.isArray(t)?e.clientsList=t:"object"===typeof t&&e.clientsList.unshift(t)},setActiveDashboard(e,t){e.activeDashboard=t},setActiveDashboardCategory(e,t){"user"!==t&&(e.lastClickedDashboardCategory=t),e.activeDashboardCategory=t},setMyRole(e,t){e.userRole=t},setUserId(e,t){e.userId=t},resetStore(e){e.templatesList=[],e.clientsList=[],e.userRole=""}},getters:{getTemplates:e=>e.templatesList,getClients:e=>e.clientsList,getActiveDashboard:e=>e.activeDashboard,getActiveDashboardCategory:e=>e.activeDashboardCategory,getLastClickedDashboardCategory:e=>e.lastClickedDashboardCategory,getUserId:e=>e.userId,getMyRole:e=>e.userRole}}),b=(r(7658),r(4402)),g=r(4135);function v({next:e}){const t=h.getters.getMyRole;if(t)return e();b.t.get("user/get/info").then((t=>{const r=t.data.user_role;return h.commit("setMyRole",r),this.isLoading=!1,e()})).catch((e=>{if("ERR_NETWORK"===e.code){const e=(0,g.e)("_token");e?R.push({name:"error",params:{code:500}}):R.push("/login")}}))}const{push:y}=f["default"].prototype,{isNavigationFailure:w,NavigationFailureType:C}=f["default"];f["default"].prototype.push=function(e){return y.call(this,e).catch((e=>{if(!w(e,C.duplicated))throw Error(e)}))},n.ZP.use(f["default"]);const k=[{path:"*",component:()=>r.e(596).then(r.bind(r,1348))},{path:"/",name:"Home",meta:{requiresAuth:!0,middleware:v},beforeEnter(e,t,r){const n=h.getters.getMyRole;"admin"===n?"/clients"!==e.path?r("/clients"):r():"user"===n&&("/templates"!==e.path?r("/templates"):r())},component:()=>r.e(177).then(r.bind(r,5616)),children:[{path:"/clients",name:"clients",props:!0,component:()=>r.e(951).then(r.bind(r,6773)),meta:{requiresAuth:!0,middleware:v},children:[{path:":userId/templates",name:"clientsTemplates",props:!0,component:()=>r.e(166).then(r.bind(r,4499)),meta:{requiresAuth:!0,middleware:v},beforeEnter(e,t,r){const n=h.getters.getMyRole;"admin"===n?r():r("/")}},{path:":userId/reports",name:"clientsReports",props:!0,component:()=>Promise.all([r.e(941),r.e(877),r.e(948),r.e(672),r.e(542)]).then(r.bind(r,7382)),meta:{requiresAuth:!0,middleware:v},beforeEnter(e,t,r){const n=h.getters.getMyRole;"admin"===n?r():r("/")}}]},{path:"/templates",name:"templates",component:()=>r.e(951).then(r.bind(r,6773)),meta:{requiresAuth:!0,middleware:v}},{path:"/reports",name:"reports",component:()=>r.e(951).then(r.bind(r,6773)),meta:{requiresAuth:!0,middleware:v}}]},{path:"/login",name:"Login",component:()=>Promise.all([r.e(941),r.e(397),r.e(535)]).then(r.bind(r,9103))},{path:"/error",name:"error",component:()=>r.e(872).then(r.bind(r,9872)),props:!0}],A=new f["default"]({mode:"hash",routes:k});A.beforeEach(((e,t,r)=>{if(e.meta.middleware){const n=Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware],o={from:t,next:r,router:A,to:e};return n[0]({...o})}return r()})),A.beforeEach(((e,t,r)=>{const n=h.getters.getMyRole;if("clients"===e.name){if("admin"!==n)return r("/templates");h.commit("setActiveDashboard","clients"),r()}"reports"===e.name&&h.commit("setActiveDashboard","reports"),"templates"===e.name&&("user"===n?(h.commit("setActiveDashboard","templates"),r()):r("/clients")),"clientsTemplates"!==e.name&&"clientsReports"!==e.name||(h.commit("setActiveDashboard","clients"),h.commit("setActiveDashboardCategory","user")),"clientsTemplates"!==t.name&&"clientsReports"!==t.name||h.commit("setActiveDashboardCategory",h.getters.getLastClickedDashboardCategory),r()}));var R=A,D=r(8864);n.ZP.use(D.Z);var L=new D.Z({lang:{current:"ru"}}),P=r(1151);const T={position:"bottom-right",timeout:5e3,closeOnClick:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!1,showCloseButtonOnHover:!0,hideProgressBar:!0,maxToasts:2,newestOnTop:!0,closeButton:"button",icon:!0,rtl:!1};n.ZP.use(P.ZP,T);var E=P.ZP,O=r(5251),Z=r.n(O),_=r(8704);n.ZP.config.productionTip=!1,n.ZP.use(_.Z),n.ZP.component("VueElementLoading",Z()),new n.ZP({router:R,vuetify:L,toast:E,store:h,render:e=>e(p)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+({166:"usersTemplates",177:"home",535:"login",542:"usersReports",596:"404",951:"clientsView"}[e]||e)+"."+{38:"5181a6c3",140:"7e3d6d9c",166:"7ca82d84",177:"19d73b19",322:"eb4f2783",397:"ec55e469",535:"14b560a1",542:"c070e92c",596:"35176224",672:"3b7b8548",708:"548be3e6",869:"17350696",872:"c0210cf1",877:"effb1bc2",941:"6bb6c0b4",948:"08ef5e10",951:"9469bc7f"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+({166:"usersTemplates",177:"home",535:"login",542:"usersReports",596:"404",951:"clientsView"}[e]||e)+"."+{140:"ec5ba939",166:"c1ce4db7",177:"957bc204",322:"d40e5be2",397:"67938a91",535:"49eb852f",542:"b58abcb9",596:"162bb2a8",708:"efabfc97",869:"9157fe05",872:"aedfa003",877:"7bf27050",951:"f1c56092"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="work_project_v3:";r.l=function(n,o,a,s){if(e[n])e[n].push(o);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[o];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/whatsapp-business-mailing-prod/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=s,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=function(n){return new Promise((function(o,a){var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return o();e(n,i,null,o,a)}))},o={143:0};r.f.miniCss=function(e,t){var r={140:1,166:1,177:1,322:1,397:1,535:1,542:1,596:1,708:1,869:1,872:1,877:1,951:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(877!=t){var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var s=r.p+r.u(t),i=new Error,c=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,c,"chunk-"+t,t)}else e[t]=0},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(t&&t(n);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9020)}));n=r.O(n)})();
//# sourceMappingURL=app.c0b58597.js.map
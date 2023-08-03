(function(){"use strict";var e={4135:function(e,t,n){n.d(t,{d:function(){return r},e:function(){return a}});const a=e=>{const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},r=(e,t,n={})=>{n={path:"/",...n},n.expires instanceof Date&&(n.expires=n.expires.toUTCString());let a=encodeURIComponent(e)+"="+encodeURIComponent(t);for(const r in n){a+="; "+r;const e=n[r];!0!==e&&(a+="="+e)}document.cookie=a}},4402:function(e,t,n){n.d(t,{t:function(){return s}});n(7658);var a=n(6154),r=n(4135),o=n(9629);const s=a.Z.create({baseURL:"https://testkit.kz/"});s.interceptors.request.use((async e=>{const t=(0,r.e)("_token");return t||o.Z.push("/login"),e.headers={Authorization:`Bearer ${t}`},e}),(e=>{Promise.reject(e)}))},6856:function(e,t,n){var a=n(144),r=n(998),o=n(2928),s=function(){var e=this,t=e._self._c;return t(r.Z,[t(o.Z,[t("router-view")],1)],1)},i=[],l={name:"App",data:()=>({})},c=l,u=n(1001),d=(0,u.Z)(c,s,i,!1,null,null,null),m=d.exports,p=n(9629),f=n(1705),h=n(1852);a["default"].use(f.Z);var b=new f.Z({lang:{locales:{ru:h.Z},current:"ru"}}),g=n(1151);const v={position:"bottom-right",timeout:5e3,closeOnClick:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!1,showCloseButtonOnHover:!0,hideProgressBar:!0,maxToasts:2,newestOnTop:!0,closeButton:"button",icon:!0,rtl:!1};a["default"].use(g.ZP,v);var y=g.ZP,T=n(7802),w=n(5251),C=n.n(w),A=n(8704),x=n(2954),D=n(4479);(0,x.jQ)({classes:{invalid:"is-invalid"}}),(0,x.l7)("spaces",{validate(e){return e.length>=3&&!/[A-ZА-Яа-я\s]/.test(e)},message:"Только латинские строчные буквы, цифры и знак подчеркивания."}),(0,x.l7)("url",{validate(e){return/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(e)},message:"Неправильный URL паттерн"}),(0,x.l7)("empty-array",{validate(e){return!!e.length},message:"Необходимо выбрать хотя бы 1 элемент",computesRequired:!0}),(0,x.l7)("required",{...D.C1,message:"Обязательно",computesRequired:!0}),(0,x.l7)("min",{validate(e,t){return e.length>=t.length||`Должно быть не менее ${t.length} символов`},params:["length"]}),(0,x.l7)("max",{validate(e,t){return e.length<t.length||`Должно быть не менее ${t.length} символов`},params:["length"]});var Z=n(9278);a["default"].config.productionTip=!1,a["default"].use(A.Z),a["default"].use(Z.ZP),a["default"].component("ValidationObserver",x._j),a["default"].component("ValidationProvider",x.d_),a["default"].component("VueElementLoading",C()),new a["default"]({router:p.Z,vuetify:b,toast:y,store:T.Z,render:e=>e(m)}).$mount("#app")},9629:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(144),r=n(8345),o=n(7802),s=n(4402);function i({next:e}){const t=o.Z.getters.getMyRole;if(t)return e();s.t.get("user/get/info").then((t=>{const n=t.data.user_role;return o.Z.commit("setMyRole",n),e()}))}const{push:l}=r["default"].prototype,{isNavigationFailure:c,NavigationFailureType:u}=r["default"];r["default"].prototype.push=function(e){return l.call(this,e).catch((e=>{if(!c(e,u.duplicated))throw Error(e)}))},a["default"].use(r["default"]);const d=[{path:"*",component:()=>n.e(596).then(n.bind(n,1348))},{path:"/",name:"Home",meta:{middleware:i},beforeEnter(e,t,n){const a=o.Z.getters.getMyRole;if("Home"===e.name){if("admin"===a)return"clients"!==e.name?n("/clients"):n();if("user"===a)return"templates"!==e.name?n("/templates"):n()}n()},component:()=>n.e(177).then(n.bind(n,3552)),children:[{path:"/clients",name:"clients",props:!0,component:()=>n.e(951).then(n.bind(n,3604)),meta:{middleware:i},beforeEnter(e,t,n){const a=o.Z.getters.getMyRole;if("clients"===e.name){if("admin"===a)return o.Z.commit("setActiveDashboard","clients"),n();if("user"===a)return n("/templates")}n()},children:[{path:":userId/templates",name:"clientsTemplates",props:!0,component:()=>n.e(166).then(n.bind(n,9463)),meta:{middleware:i},beforeEnter(e,t,n){const a=o.Z.getters.getMyRole;return"admin"===a?n():"user"===a?n("/"):void 0}},{path:":userId/reports",name:"clientsReports",props:!0,component:()=>Promise.all([n.e(941),n.e(339),n.e(893),n.e(110),n.e(611),n.e(138),n.e(542)]).then(n.bind(n,7382)),meta:{middleware:i},beforeEnter(e,t,n){const a=o.Z.getters.getMyRole;return"admin"===a?n():"user"===a?n("/"):void 0}}]},{path:"/templates",name:"templates",component:()=>n.e(951).then(n.bind(n,3604)),meta:{middleware:i}},{path:"/reports",name:"reports",component:()=>n.e(951).then(n.bind(n,3604)),meta:{middleware:i}},{path:"/new-template",name:"newTemplate",component:()=>Promise.all([n.e(941),n.e(36),n.e(339),n.e(893),n.e(98),n.e(793),n.e(771)]).then(n.bind(n,7643))}]},{path:"/login",name:"Login",component:()=>Promise.all([n.e(941),n.e(36),n.e(535)]).then(n.bind(n,2929))}],m=new r["default"]({routes:d});m.beforeEach(((e,t,n)=>{if(!e.meta.middleware)return n();const a=e.meta.middleware,r={to:e,from:t,next:n,store:o.Z};return a({...r})})),m.beforeEach(((e,t,n)=>{"clients"===e.name&&o.Z.commit("setActiveDashboard","clients"),"reports"===e.name&&o.Z.commit("setActiveDashboard","reports"),"templates"===e.name&&o.Z.commit("setActiveDashboard","templates"),"clientsTemplates"===e.name&&(o.Z.commit("setActiveDashboard","clients"),o.Z.commit("setActiveNestedDashboard","clientsTemplates")),"clientsReports"===e.name&&(o.Z.commit("setActiveDashboard","clients"),o.Z.commit("setActiveNestedDashboard","clientsReports")),n()}));var p=m},7802:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(144),r=n(629);const o={templatesList:[],clientsList:[],userRole:"",userId:"",activeDashboard:"",activeDashboardCategory:"list",activeNestedDashboard:"",activeNestedDashboardCategory:"list"},s={getTemplates:e=>e.templatesList,getClients:e=>e.clientsList,getActiveDashboard:e=>e.activeDashboard,getActiveDashboardCategory:e=>e.activeDashboardCategory,getActiveNestedDashboard:e=>e.activeNestedDashboard,getActiveNestedDashboardCategory:e=>e.activeNestedDashboardCategory,getUserId:e=>e.userId,getMyRole:e=>e.userRole},i={setTemplate(e,t){Array.isArray(t)?e.templatesList=t:"object"===typeof t&&e.templatesList.unshift(t)},deleteTemplate(e,t){e.templatesList=e.templatesList.filter((e=>e.template_id!==t))},setClient(e,t){Array.isArray(t)?e.clientsList=t:"object"===typeof t&&e.clientsList.unshift(t)},setActiveDashboard(e,t){e.activeDashboard=t},setActiveDashboardCategory(e,t){e.activeDashboardCategory=t},setActiveNestedDashboard(e,t){e.activeNestedDashboard=t},setActiveNestedDashboardCategory(e,t){e.activeNestedDashboardCategory=t},setMyRole(e,t){e.userRole=t},setUserId(e,t){e.userId=t},resetStore(e){e.templatesList=[],e.clientsList=[],e.userRole="",e.userId="",e.activeDashboard="",e.activeDashboardCategory="list",e.activeNestedDashboard="",e.activeNestedDashboardCategory="list"}},l={};var c={state:o,getters:s,mutations:i,actions:l};const u={subjectIds:[],template:{id:0,name:"",type:"OPERATOR",channelType:"WHATSAPP",content:{text:""},language:"",category:""},contentSchema:{headers:{text:{text:"",headerType:"TEXT",headerExampleTextParam:""},video:{headerType:"VIDEO",headerExampleMediaUrl:""},image:{headerType:"IMAGE",headerExampleMediaUrl:""},document:{headerType:"DOCUMENT",headerExampleMediaUrl:""}},keyboard:{rows:[{buttons:[]}]},button:{QUICK_REPLY:{text:"",buttonType:"QUICK_REPLY",payload:""},URL:{text:"",url:"",buttonType:"URL",urlTextExample:"",urlPostfix:""},PHONE:{text:"",buttonType:"PHONE",phone:""}},footer:{text:""}}},d={getSubjectIds:e=>e.subjectIds,getTemplate:e=>e.template,getContentSchema:e=>e.contentSchema},m={setSubjectIds(e,t){e.subjectIds=t},setTemplateId(e,t){e.template.id=t},setTemplateName(e,t){e.template.name=t},setTemplateType(e,t){e.template.type=t},setTemplateText(e,t){e.template.content.text=t},setTemplateCategory(e,t){e.template.category=t},setTemplateLanguage(e,t){e.template.language=t},setTemplateHeader(e,t){a["default"].set(e.template.content,"header",t)},removeTemplateHeader(e){a["default"]["delete"](e.template.content,"header")},setTemplateHeaderText(e,t){e.template.content.header.text=t},setTemplateFooter(e,t){a["default"].set(e.template.content,"footer",t)},removeTemplateFooter(e){a["default"]["delete"](e.template.content,"footer")},setTemplateFooterText(e,t){e.template.content.footer.text=t},setTemplateKeyboard(e,t){a["default"].set(e.template.content,"keyboard",t)},removeTemplateKeyboard(e){a["default"]["delete"](e.template.content,"keyboard")},setTemplateButtons(e,t){e.template.content.keyboard.rows[0].buttons=t},removeTemplateButton(e,t){e.template.content.keyboard.rows[0].buttons.splice(t,1)}},p={};var f={state:u,getters:d,mutations:m,actions:p};a["default"].use(r.ZP);var h=new r.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{template:f,general:c}})}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({166:"usersTemplates",177:"home",535:"login",542:"usersReports",596:"404",771:"newTemplate",951:"clientsView"}[e]||e)+"."+{36:"04ffb5bd",98:"551cf4ef",110:"5ed7f15c",138:"a7866671",166:"e2eb63fd",177:"560f8f58",339:"43a3728c",384:"1e52dc1d",535:"207c6fe8",542:"5fdda093",596:"35176224",611:"a2a03b4c",721:"1cd8cb5c",731:"304dd1e2",771:"4ec041ed",793:"d7944cb9",893:"1f3e6440",941:"b2af10d5",951:"31c33eb3",994:"30f01e31"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({166:"usersTemplates",177:"home",535:"login",542:"usersReports",596:"404",771:"newTemplate",951:"clientsView"}[e]||e)+"."+{36:"a1a61f85",138:"afaf4619",166:"e755b84d",177:"2ce4bde2",339:"9227a356",384:"fe6339ef",535:"9a38a4e3",542:"913915b6",596:"162bb2a8",721:"a4b19dff",731:"57efc37f",771:"57d0998d",951:"f351e093",994:"586fedf9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="work_project_v3:";n.l=function(a,r,o,s){if(e[a])e[a].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/whatsapp-business-mailing-prod/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,o.parentNode&&o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=s,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var s=n.miniCssF(a),i=n.p+s;if(t(s,i))return r();e(a,i,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={36:1,138:1,166:1,177:1,339:1,384:1,535:1,542:1,596:1,721:1,731:1,771:1,951:1,994:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(339!=t){var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var s=n.p+n.u(t),i=new Error,l=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}};n.l(s,l,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(a);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6856)}));a=n.O(a)})();
//# sourceMappingURL=app.2e5ec9bb.js.map
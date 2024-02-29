(function(){"use strict";var e={4135:function(e,t,a){a.d(t,{d:function(){return r},e:function(){return n}});const n=e=>{const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},r=(e,t,a={})=>{a={path:"/",...a},a.expires instanceof Date&&(a.expires=a.expires.toUTCString());let n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(const r in a){n+="; "+r;const e=a[r];!0!==e&&(n+="="+e)}document.cookie=n}},4402:function(e,t,a){a.d(t,{t:function(){return s}});a(7658);var n=a(6154),r=a(4135),o=a(9629);const s=n.Z.create({baseURL:"https://testkit.kz/"});s.interceptors.request.use((async e=>{const t=(0,r.e)("_token");return t||o.Z.push("/login"),e.headers={Authorization:`Bearer ${t}`},e}),(e=>{Promise.reject(e)}))},6856:function(e,t,a){var n=a(144),r=a(998),o=a(2928),s=function(){var e=this,t=e._self._c;return t(r.Z,[t(o.Z,[t("router-view")],1)],1)},i=[],l={name:"App",data:()=>({})},c=l,u=a(1001),d=(0,u.Z)(c,s,i,!1,null,null,null),m=d.exports,p=a(9629),f=a(1705),h=a(1852);n["default"].use(f.Z);var b=new f.Z({lang:{locales:{ru:h.Z},current:"ru"}}),g=a(1151);const v={position:"bottom-right",timeout:5e3,closeOnClick:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!1,showCloseButtonOnHover:!0,hideProgressBar:!0,maxToasts:2,newestOnTop:!0,closeButton:"button",icon:!0,rtl:!1};n["default"].use(g.ZP,v);var y=g.ZP,T=a(7802),x=a(5251),w=a.n(x),E=a(8704),C=a(2954),A=a(4479);(0,C.jQ)({classes:{invalid:"is-invalid"}}),(0,C.l7)("spaces",{validate(e){return e.length>=3&&!/[A-ZА-Яа-я\s]/.test(e)},message:"Только латинские строчные буквы, цифры и знак подчеркивания."}),(0,C.l7)("url",{validate(e){return/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(e)},message:"Неправильный URL паттерн"}),(0,C.l7)("empty-array",{validate(e){return!!e.length},message:"Необходимо выбрать хотя бы 1 элемент",computesRequired:!0}),(0,C.l7)("required",{...A.C1,message:"Обязательно",computesRequired:!0}),(0,C.l7)("min",{validate(e,t){return e.length>=t.length||`Должно быть не менее ${t.length} символов`},params:["length"]}),(0,C.l7)("max",{validate(e,t){return e.length<t.length||`Должно быть не менее ${t.length} символов`},params:["length"]});var D=a(9278);n["default"].config.productionTip=!1,n["default"].use(E.Z),n["default"].use(D.ZP),n["default"].component("ValidationObserver",C._j),n["default"].component("ValidationProvider",C.d_),n["default"].component("VueElementLoading",w()),new n["default"]({router:p.Z,vuetify:b,toast:y,store:T.Z,render:e=>e(m)}).$mount("#app")},9629:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(144),r=a(8345),o=a(7802),s=a(4402);function i({next:e}){const t=o.Z.getters.getMyRole;if(t)return e();s.t.get("user/get/info").then((t=>{const a=t.data.user_role;return o.Z.commit("setMyRole",a),e()}))}const{push:l}=r["default"].prototype,{isNavigationFailure:c,NavigationFailureType:u}=r["default"];r["default"].prototype.push=function(e){return l.call(this,e).catch((e=>{if(!c(e,u.duplicated))throw Error(e)}))},n["default"].use(r["default"]);const d=[{path:"*",component:()=>a.e(596).then(a.bind(a,1348))},{path:"/",name:"Home",meta:{middleware:i},beforeEnter(e,t,a){const n=o.Z.getters.getMyRole;if("Home"===e.name){if("admin"===n)return"clients"!==e.name?a("/clients"):a();if("user"===n)return"templates"!==e.name?a("/templates"):a()}a()},component:()=>a.e(177).then(a.bind(a,6506)),children:[{path:"/clients",name:"clients",props:!0,component:()=>a.e(951).then(a.bind(a,3604)),meta:{middleware:i},beforeEnter(e,t,a){const n=o.Z.getters.getMyRole;if("clients"===e.name){if("admin"===n)return o.Z.commit("setActiveDashboard","clients"),a();if("user"===n)return a("/templates")}a()},children:[{path:":userId/templates",name:"clientsTemplates",props:!0,component:()=>a.e(166).then(a.bind(a,9463)),meta:{middleware:i},beforeEnter(e,t,a){const n=o.Z.getters.getMyRole;return"admin"===n?a():"user"===n?a("/"):void 0}},{path:":userId/reports",name:"clientsReports",props:!0,component:()=>Promise.all([a.e(941),a.e(877),a.e(173),a.e(110),a.e(542)]).then(a.bind(a,7382)),meta:{middleware:i},beforeEnter(e,t,a){const n=o.Z.getters.getMyRole;return"admin"===n?a():"user"===n?a("/"):void 0}}]},{path:"/templates",name:"templates",component:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(173),a.e(110),a.e(646),a.e(449),a.e(265)]).then(a.bind(a,6449)),meta:{middleware:i}},{path:"/reports",name:"reports",component:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(173),a.e(110),a.e(646),a.e(449),a.e(265)]).then(a.bind(a,3604)),meta:{middleware:i}},{path:"/new-template",name:"newTemplate",component:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(173),a.e(646),a.e(138),a.e(771)]).then(a.bind(a,8972))}]},{path:"/login",name:"Login",component:()=>Promise.all([a.e(941),a.e(36),a.e(535)]).then(a.bind(a,2929))}],m=new r["default"]({routes:d});m.beforeEach(((e,t,a)=>{if(!e.meta.middleware)return a();const n=e.meta.middleware,r={to:e,from:t,next:a,store:o.Z};return n({...r})})),m.beforeEach(((e,t,a)=>{"clients"===e.name&&o.Z.commit("setActiveDashboard","clients"),"reports"===e.name&&o.Z.commit("setActiveDashboard","reports"),"templates"===e.name&&o.Z.commit("setActiveDashboard","templates"),"clientsTemplates"===e.name&&(o.Z.commit("setActiveDashboard","clients"),o.Z.commit("setActiveNestedDashboard","clientsTemplates")),"clientsReports"===e.name&&(o.Z.commit("setActiveDashboard","clients"),o.Z.commit("setActiveNestedDashboard","clientsReports")),a()}));var p=m},7802:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(144),r=a(629);const o={templatesList:[],clientsList:[],userRole:"",userId:"",activeDashboard:"",activeDashboardCategory:"list",activeNestedDashboard:"",activeNestedDashboardCategory:"list"},s={getTemplates:e=>e.templatesList,getClients:e=>e.clientsList,getActiveDashboard:e=>e.activeDashboard,getActiveDashboardCategory:e=>e.activeDashboardCategory,getActiveNestedDashboard:e=>e.activeNestedDashboard,getActiveNestedDashboardCategory:e=>e.activeNestedDashboardCategory,getUserId:e=>e.userId,getMyRole:e=>e.userRole},i={setTemplate(e,t){Array.isArray(t)?e.templatesList=t:"object"===typeof t&&e.templatesList.unshift(t)},deleteTemplate(e,t){e.templatesList=e.templatesList.filter((e=>e.template_id!==t))},setClient(e,t){Array.isArray(t)?e.clientsList=t:"object"===typeof t&&e.clientsList.unshift(t)},setActiveDashboard(e,t){e.activeDashboard=t},setActiveDashboardCategory(e,t){e.activeDashboardCategory=t},setActiveNestedDashboard(e,t){e.activeNestedDashboard=t},setActiveNestedDashboardCategory(e,t){e.activeNestedDashboardCategory=t},setMyRole(e,t){e.userRole=t},setUserId(e,t){e.userId=t},resetStore(e){e.templatesList=[],e.clientsList=[],e.userRole="",e.userId="",e.activeDashboard="",e.activeDashboardCategory="list",e.activeNestedDashboard="",e.activeNestedDashboardCategory="list"}},l={};var c={state:o,getters:s,mutations:i,actions:l};const u={subjectIds:[],template:{id:0,name:"",type:"OPERATOR",channelType:"WHATSAPP",content:{text:""},language:"",category:""},templateExamples:{headerExampleMediaUrl:"",urlPostfix:"",urlTextExample:"",textWithParams:"",textExampleParams:[]},contentSchema:{headers:{text:{text:"",headerType:"TEXT",headerExampleTextParam:""},video:{headerType:"VIDEO",headerExampleMediaUrl:""},image:{headerType:"IMAGE",headerExampleMediaUrl:""},document:{headerType:"DOCUMENT",headerExampleMediaUrl:""}},keyboard:{rows:[{buttons:[]}]},button:{QUICK_REPLY:{text:"",buttonType:"QUICK_REPLY",payload:""},URL:{text:"",url:"",buttonType:"URL",urlTextExample:"",urlPostfix:""},PHONE:{text:"",buttonType:"PHONE",phone:""}},footer:{text:""}}},d={getSubjectIds:e=>e.subjectIds,getTemplate:e=>e.template,getContentSchema:e=>e.contentSchema,getTemplateExamples:e=>e.templateExamples},m={setSubjectIds(e,t){e.subjectIds=t},setTemplateId(e,t){e.template.id=t},setTemplateName(e,t){e.template.name=t},setTemplateType(e,t){e.template.type=t},setTemplateText(e,t){e.template.content.text=t},setTemplateCategory(e,t){e.template.category=t},setTemplateLanguage(e,t){e.template.language=t},setTemplateHeader(e,t){n["default"].set(e.template.content,"header",t)},removeTemplateHeader(e){n["default"]["delete"](e.template.content,"header")},setTemplateHeaderText(e,t){e.template.content.header.text=t},setTemplateFooter(e,t){n["default"].set(e.template.content,"footer",t)},removeTemplateFooter(e){n["default"]["delete"](e.template.content,"footer")},setTemplateFooterText(e,t){e.template.content.footer.text=t},setTemplateKeyboard(e,t){n["default"].set(e.template.content,"keyboard",t)},removeTemplateKeyboard(e){n["default"]["delete"](e.template.content,"keyboard")},setTemplateButtons(e,t){e.template.content.keyboard.rows[0].buttons=t},removeTemplateButton(e,t){e.template.content.keyboard.rows[0].buttons.splice(t,1)},setTextWithParams(e,t){e.templateExamples.textWithParams=t}},p={};var f={state:u,getters:d,mutations:m,actions:p};n["default"].use(r.ZP);var h=new r.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{template:f,general:c}})}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+({166:"usersTemplates",177:"home",265:"templatesList",535:"login",542:"usersReports",596:"404",771:"newTemplate",951:"clientsView"}[e]||e)+"."+{36:"04ffb5bd",110:"5ed7f15c",138:"54f80370",166:"ee7c15df",173:"99226e16",177:"fb5c34e8",265:"46478e0d",320:"6efebadc",362:"8bedc62e",384:"5f339bea",393:"7dd8e94a",449:"258afeb2",493:"6aba3417",535:"207c6fe8",542:"eb08f819",596:"97b57f9e",646:"dfe4c723",771:"5a5e4064",877:"effb1bc2",941:"b2af10d5",951:"9cdedff0"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+({166:"usersTemplates",177:"home",265:"templatesList",535:"login",542:"usersReports",596:"404",771:"newTemplate",951:"clientsView"}[e]||e)+"."+{36:"67938a91",166:"1cff1bf5",177:"bc5894c0",265:"bed7e60a",320:"7ae87593",384:"fe6339ef",393:"c39f5415",493:"efabfc97",535:"9a38a4e3",542:"3bd26bbb",596:"6943bffe",646:"173cdab8",771:"9e7a0d44",877:"7bf27050",951:"5e915dd2"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="work_project_v3:";a.l=function(n,r,o,s){if(e[n])e[n].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/whatsapp-business-mailing-prod/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,o.parentNode&&o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=s,o.href=t,a?a.parentNode.insertBefore(o,a.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){r=s[n],o=r.getAttribute("data-href");if(o===e||o===t)return r}},n=function(n){return new Promise((function(r,o){var s=a.miniCssF(n),i=a.p+s;if(t(s,i))return r();e(n,i,null,r,o)}))},r={143:0};a.f.miniCss=function(e,t){var a={36:1,166:1,177:1,265:1,320:1,384:1,393:1,493:1,535:1,542:1,596:1,646:1,771:1,877:1,951:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(320|877)$/.test(t))e[t]=0;else{var o=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=o);var s=a.p+a.u(t),i=new Error,l=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(t&&t(n);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6856)}));n=a.O(n)})();
//# sourceMappingURL=app.1d9154e3.js.map
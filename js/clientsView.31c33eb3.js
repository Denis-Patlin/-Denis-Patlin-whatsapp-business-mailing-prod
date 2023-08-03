"use strict";(self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[]).push([[951],{646:function(t,e,a){a.d(e,{Z:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("button",t._g({staticClass:"button",class:[t.colors[t.color]],attrs:{active:t.active}},t.$listeners),[t._t("default")],2)},o=[],r={props:{active:{type:Boolean,default:!1},color:{type:String,default:"transparent"}},data(){return{colors:{transparent:"button__transparent",white:"button__white",gray:"button__gray"}}}},i=r,n=a(1001),c=(0,n.Z)(i,s,o,!1,null,"7e31bbaa",null),h=c.exports},3604:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"dashboard__header"},[e("div",{staticClass:"dashboard__title"},[t._v(" "+t._s(t.activeDashboardTitle)+" ")]),e("div",{staticClass:"dashboard__control"},[e("dashboard-control")],1)]),e("section",{staticClass:"dashboard__section"},[e("vue-element-loading",{attrs:{active:t.isLoading,"background-color":"rgba(255, 255, 255, .2)",color:"blue"}}),e("router-view"),e("keep-alive",[t.activeNestedDashboard?t._e():e(t.activeComponent,{tag:"component",staticClass:"animate__animated animate__fadeIn"})],1)],1)])},o=[],r=a(646),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("BaseButton",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{color:"white",active:"create"===t.activeDashboardCategory},on:{click:function(e){return t.switchDashboardCategory("create")}}},[t._v(" Создать ")]),e("BaseButton",{attrs:{color:"white",active:"list"===t.activeDashboardCategory},on:{click:function(e){return t.switchDashboardCategory("list")}}},[t._v(" Список ")])],1)},n=[],c=(a(7658),a(629)),h={components:{BaseButton:r.Z},data(){return{activeButton:"create"}},computed:{...(0,c.Se)(["getActiveDashboard","getActiveDashboardCategory"]),activeDashboard(){return this.getActiveDashboard},activeDashboardCategory(){return this.getActiveDashboardCategory},showButton(){return"reports"!==this.getActiveDashboard}},methods:{switchDashboardCategory(t){this.$router.push({name:this.activeDashboard}),this.$store.commit("setActiveDashboardCategory",t),this.$store.commit("setActiveNestedDashboard","")}}},d=h,l=a(1001),v=(0,l.Z)(d,i,n,!1,null,"4e8dbe64",null),u=v.exports,b=a(2467),p={components:{ButtonVue:r.Z,DashboardControl:u},mixins:[b.Z],data(){return{isLoading:!1}},watch:{activeDashboard(){"reports"===this.activeDashboard&&this.$store.commit("setActiveDashboardCategory","list"),this.setActiveComponent()},activeDashboardCategory(){this.setActiveComponent()}},created(){this.setActiveComponent()}},m=p,D=(0,l.Z)(m,s,o,!1,null,"4a68ea76",null),g=D.exports},2467:function(t,e,a){var s=a(629);e["Z"]={data(){return{activeComponent:null,activeDashboardTitle:"",componentsImports:{templates:{create:()=>Promise.all([a.e(941),a.e(36),a.e(339),a.e(793),a.e(731)]).then(a.bind(a,2477)),list:()=>Promise.all([a.e(941),a.e(36),a.e(339),a.e(893),a.e(110),a.e(611),a.e(98),a.e(721)]).then(a.bind(a,3179))},reports:{list:()=>Promise.all([a.e(941),a.e(339),a.e(893),a.e(110),a.e(611),a.e(138)]).then(a.bind(a,1009))},clients:{create:()=>Promise.all([a.e(941),a.e(36),a.e(339),a.e(994)]).then(a.bind(a,5994)),list:()=>Promise.all([a.e(941),a.e(36),a.e(110),a.e(384)]).then(a.bind(a,7384)),clientsTemplates:{create:()=>Promise.all([a.e(941),a.e(36),a.e(339),a.e(793),a.e(731)]).then(a.bind(a,2477)),list:()=>Promise.all([a.e(941),a.e(36),a.e(339),a.e(893),a.e(110),a.e(611),a.e(98),a.e(721)]).then(a.bind(a,3179))}}},componentsTitles:{templates:{create:"Создание шаблона",list:"Список шаблонов"},reports:{create:"Создание отчета",list:"Список отчетов"},clients:{create:"Создание клиента",list:"Список клиентов",clientsTemplates:{create:`Создание шаблона ${this.$route.params.userId}`,list:`Список шаблонов ${this.$route.params.userId}`}}}}},computed:{...(0,s.Se)(["getActiveDashboard","getActiveDashboardCategory","getActiveNestedDashboard","getActiveNestedDashboardCategory"]),activeDashboard(){return this.getActiveDashboard},activeDashboardCategory(){return this.getActiveDashboardCategory},activeNestedDashboard(){return this.getActiveNestedDashboard},activeNestedDashboardCategory(){return this.getActiveNestedDashboardCategory}},methods:{setActiveComponent(t=!1){if(!this.activeDashboard)return;this.isLoading=!0;let e=null;e=t?this.componentsImports[this.activeDashboard][this.activeNestedDashboard][this.activeNestedDashboardCategory]:this.componentsImports[this.activeDashboard][this.activeDashboardCategory],e().then((e=>{this.activeComponent=e.default||e,this.isLoading=!1,this.setActiveComponentTitle(t)}))},setActiveComponentTitle(t=!1){this.activeDashboardTitle=t?this.componentsTitles[this.activeDashboard][this.activeNestedDashboard][this.activeNestedDashboardCategory]:this.componentsTitles[this.activeDashboard][this.activeDashboardCategory]}}}}}]);
//# sourceMappingURL=clientsView.31c33eb3.js.map
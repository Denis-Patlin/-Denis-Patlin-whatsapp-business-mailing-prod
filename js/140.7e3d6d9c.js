"use strict";(self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[]).push([[140],{2271:function(t,e,s){s.d(e,{Z:function(){return d}});var i=s(1280),a=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{"prepend-icon":"fa-solid fa-magnifying-glass",placeholder:"Search..."},on:{input:t.doSearch}})},n=[],l={props:{dataForFilter:{type:Array,default:()=>[]},searchKey:{type:String,default:""}},data(){return{filtredData:[]}},methods:{doSearch(t){this.filtredData=this.dataForFilter.filter((e=>e[this.searchKey].includes(t))),this.$emit("onFilter",this.filtredData)}}},r=l,o=s(1001),h=(0,o.Z)(r,a,n,!1,null,null,null),d=h.exports},7902:function(t,e,s){s.r(e),s.d(e,{default:function(){return K}});var i=s(3423),a=(s(7658),s(7423)),n=a.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...a.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),l=s(6878),r=s(8860),o=s(3037),h=s(6669),d=s(1444),c=s(7069),u=s(5352),p=s(4101),m=s(7678);const v=(0,m.Z)(l.Z,r.Z,h.Z,(0,o.d)("listItemGroup"),(0,d.d)("inputValue"));var g=v.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...r.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,p.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:s}=this.generateRouteLink();s.attrs={...s.attrs,...this.genAttrs()},s[this.to?"nativeOn":"on"]={...s[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===u.Do.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,s):s,i)}}),_=s(2240),f=s(144),C=f.ZP.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:s}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,s)}}),y=s(2500),b=s(8223),I=s(4712),x=s(7394);const k=(0,m.Z)(y.Z,b.Z,l.Z,(0,I.f)("list"),d.Z);k.extend().extend({name:"v-list-group",directives:{ripple:c.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(_.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(C,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(g,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,u.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(C,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(x.Fx,this.genItems())])}});var $=s(6174),S=s(3457);const Z=(0,m.Z)($.Z,S.Z,h.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,p.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==s)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find((t=>!t.disabled));if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});Z.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),(0,m.Z)(Z,l.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...Z.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...Z.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),f.ZP.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:s=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=s.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,s)}});var A=i.Z;A.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...A.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=A.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});(0,u.Ji)("v-list-item__action-text","span"),(0,u.Ji)("v-list-item__content","div");const B=(0,u.Ji)("v-list-item__title","div"),V=(0,u.Ji)("v-list-item__subtitle","div");var w=s(5256),T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[t.templatesOrigin.length?t._e():e("div",{staticClass:"empty_list"},[t._v(" Список пуст ")]),e("div",{staticClass:"search-bar"},[e("search-bar",{attrs:{"data-for-filter":t.templates,"search-key":"template_name"},on:{onFilter:t.onFilterHandle}})],1),e(w.Z,{attrs:{items:t.templatesOrigin,"item-height":70,"min-height":"50vh","max-height":"100vh"},scopedSlots:t._u([{key:"default",fn:function({item:s}){return[e("div",{staticClass:"list_item"},[e("div",{staticClass:"list_item__block_info"},[e(i.Z,{attrs:{color:t.getColor(s.template_name)}},[e("div",[t._v(t._s(t.getFirstLetter(s.template_name)))])]),e("button",{staticClass:"block_info__name",on:{click:function(e){return t.openModal(s)}}},[t._v(" "+t._s(s.template_name)+" ")])],1),e("div",{staticClass:"list_item__block_buttons"},[e("button-vue",{attrs:{color:"gray"},on:{click:function(e){return t.deleteTemplate(s)}}},[e("i",{staticClass:"fa-solid fa-trash-can red_font"})])],1)])]}}])}),e("modal-vue",{attrs:{open:t.open,title:"Детали шаблона"},on:{onModalClose:t.onCloseModalHandle}},[e("template",{slot:"content"},[e(n,{attrs:{dense:""}},[e(g,[e(B,[t._v("ID Шаблона:")]),e(V,[t._v(t._s(t.selectedItem.template_id))])],1),e(g,[e(B,[t._v("ID Пользователя:")]),e(V,[t._v(t._s(t.selectedItem.user_id||"Не найдено"))])],1),e(g,[e(B,[t._v("Время создания")]),e(V,[t._v(t._s(t.dayjs(t.selectedItem.timestamp).format("DD.MM.YYYY hh:mm:ss")))])],1),e(g,[e(B,[t._v("Контент")]),"TEXT"===t.selectedItem.edna_shortcut?.content?.whatsappContent?.contentType?e("p",{key:"content-availability",staticStyle:{width:"100%"}},[t._v(' "'+t._s(t.selectedItem.edna_shortcut?.content?.whatsappContent?.text)+'" ')]):e("a",{key:"content-availability",staticClass:"content_file",attrs:{href:t.selectedItem.edna_shortcut?.content?.whatsappContent?.attachment?.url,target:"_blank"}},[t._v(" "+t._s(t.selectedItem.edna_shortcut?.content?.whatsappContent?.attachment?.url)+" ")])],1)],1)],1)],2),e("vue-element-loading",{attrs:{active:t.isLoading,"background-color":"rgba(255, 255, 255, 1)",color:"blue"}})],1)},D=[],L=s(4110),M=s(629),F=s(2271),O=s(5251),E=s.n(O),H=s(3450),G=s(4402),z=s(646),R=s(7484),j=s.n(R),N={components:{"modal-vue":H.Z,ButtonVue:z.Z,SearchBar:F.Z,VueElementLoading:E()},mixins:[L.Z],data:()=>({isLoading:!1,open:!1,selectedItem:{},templatesOrigin:[]}),computed:{...(0,M.Se)(["getTemplates"]),templates(){return this.getTemplates}},watch:{templates(t){this.templatesOrigin=[...t]}},mounted(){localStorage.getItem("CompleteTemplateCreateTour")||(this.createTour(),this.addCreateTemplateTour(),this.tour.start())},created(){this.getData()},methods:{getData(t=this.$route.params.userId){this.isLoading=!1;const e={};t&&(e.username=t),G.t.post("get/templates",e).then((t=>{const e=t.data.Data?t.data.Data:[],s=e.sort(((t,e)=>new Date(e.date)-new Date(t.date)));this.$store.commit("setTemplate",s)})).catch((t=>{this.$toast.error(t.message,{timeout:2e3})})).finally((()=>{this.isLoading=!1}))},dayjs:j(),onCloseModalHandle(){this.selectedItem={},this.open=!1},onFilterHandle(t){this.templatesOrigin=t},openModal(t){this.selectedItem=t,this.open=!0},getColor(t){const e=["#F46A5F","#FC8256","#FFC33D","#49BEB7","#4C96D7","#8555D7","#FF7DCC","#D4C5F9","#4992E6","#FF6B8A","#01A9DB","#B6FCD5"];let s=0;for(let a=0;a<t.length;a++)s=t.charCodeAt(a)+((s<<5)-s);const i=Math.abs(s)%e.length;return e[i]},getFirstLetter(t){return t&&t.length>0?t.charAt(0):""},deleteTemplate(t){G.t["delete"](`delete/template/${t.template_id}`).then((()=>{this.$store.commit("deleteTemplate",t.template_id),this.$toast.info("Шаблон успешно удален")})).catch((t=>{this.$toast.error(t.message,{timeout:2e3})}))}}},P=N,J=s(1001),Y=(0,J.Z)(P,T,D,!1,null,"2f1fea81",null),K=Y.exports},3423:function(t,e,s){s.d(e,{Z:function(){return o}});var i=s(6878),a=s(8846),n=s(2637),l=s(5352),r=s(7678),o=(0,r.Z)(i.Z,a.Z,n.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,l.kb)(this.size),minWidth:(0,l.kb)(this.size),width:(0,l.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},5256:function(t,e,s){s.d(e,{Z:function(){return h}});var i=s(8846);function a(t,e,s){const{self:i=!1}=e.modifiers||{},a=e.value,n="object"===typeof a&&a.options||{passive:!0},l="function"===typeof a||"handleEvent"in a?a:a.handler,r=i?t:e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",l,n),t._onScroll=Object(t._onScroll),t._onScroll[s.context._uid]={handler:l,options:n,target:i?void 0:r})}function n(t,e,s){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[s.context._uid]))return;const{handler:a,options:n,target:l=t}=t._onScroll[s.context._uid];l.removeEventListener("scroll",a,n),delete t._onScroll[s.context._uid]}const l={inserted:a,unbind:n};var r=l,o=s(5352),h=i.Z.extend({name:"v-virtual-scroll",directives:{Scroll:r},props:{bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},data:()=>({first:0,last:0,scrollTop:0}),computed:{__bench(){return parseInt(this.bench,10)},__itemHeight(){return parseInt(this.itemHeight,10)},firstToRender(){return Math.max(0,this.first-this.__bench)},lastToRender(){return Math.min(this.items.length,this.last+this.__bench)}},watch:{height:"onScroll",itemHeight:"onScroll"},mounted(){this.last=this.getLast(0)},methods:{getChildren(){return this.items.slice(this.firstToRender,this.lastToRender).map(this.genChild)},genChild(t,e){e+=this.firstToRender;const s=(0,o.kb)(e*this.__itemHeight);return this.$createElement("div",{staticClass:"v-virtual-scroll__item",style:{top:s},key:e},(0,o.z9)(this,"default",{index:e,item:t}))},getFirst(){return Math.floor(this.scrollTop/this.__itemHeight)},getLast(t){const e=parseInt(this.height||0,10)||this.$el.clientHeight;return t+Math.ceil(e/this.__itemHeight)},onScroll(){this.scrollTop=this.$el.scrollTop,this.first=this.getFirst(),this.last=this.getLast(this.first)}},render(t){const e=t("div",{staticClass:"v-virtual-scroll__container",style:{height:(0,o.kb)(this.items.length*this.__itemHeight)}},this.getChildren());return t("div",{staticClass:"v-virtual-scroll",style:this.measurableStyles,directives:[{name:"scroll",modifiers:{self:!0},value:this.onScroll}],on:this.$listeners},[e])}})},6174:function(t,e,s){var i=s(144),a=s(5352);e["Z"]=i.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:a.vZ}}})}}]);
//# sourceMappingURL=140.7e3d6d9c.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{386:function(v,e,_){"use strict";_.r(e);var t=_(42),o=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"vuex"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[v._v("#")]),v._v(" Vuex")]),v._v(" "),_("h2",{attrs:{id:"vuex是什么-怎么使用-哪种功能场景使用它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vuex是什么-怎么使用-哪种功能场景使用它"}},[v._v("#")]),v._v(" vuex是什么？怎么使用？哪种功能场景使用它？")]),v._v(" "),_("ol",[_("li",[v._v("vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地，对应于一般 vue 对象里面的 data")]),v._v(" "),_("li",[v._v("state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新")]),v._v(" "),_("li",[v._v("它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性")])]),v._v(" "),_("p",[v._v("vuex的使用借助官方提供的一张图来说明:")]),v._v(" "),_("p",[_("img",{attrs:{src:"/docs/interview/img1.png",alt:"img1"}})]),v._v(" "),_("p",[v._v("Vuex有5种属性: 分别是 "),_("code",[v._v("state")]),v._v("、"),_("code",[v._v("getter")]),v._v("、"),_("code",[v._v("mutation")]),v._v("、"),_("code",[v._v("action")]),v._v("、"),_("code",[v._v("module")]),v._v(";")]),v._v(" "),_("p",[_("code",[v._v("state")])]),v._v(" "),_("p",[v._v("Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。")]),v._v(" "),_("p",[_("code",[v._v("mutations")])]),v._v(" "),_("p",[v._v("mutations定义的方法动态修改Vuex 的 store 中的状态或数据。")]),v._v(" "),_("p",[_("code",[v._v("getters")])]),v._v(" "),_("p",[v._v("类似vue的计算属性，主要用来过滤一些数据。")]),v._v(" "),_("p",[_("code",[v._v("action")])]),v._v(" "),_("p",[v._v("actions可以理解为通过将"),_("code",[v._v("mutations")]),v._v("里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 "),_("code",[v._v("store.dispath")]),v._v(" 来分发 "),_("code",[v._v("action")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("vuex")]),v._v(" 一般用于中大型 web 单页应用中对应用的状态进行管理，对于一些组件间关系较为简单的小型应用，使用 "),_("code",[v._v("vuex")]),v._v(" 的必要性不是很大，因为完全可以用组件 prop 属性或者事件来完成父子组件之间的通信，"),_("code",[v._v("vuex")]),v._v(" 更多地用于解决跨组件通信以及作为数据中心集中式存储数据。")]),v._v(" "),_("p",[v._v("使用"),_("code",[v._v("Vuex")]),v._v("解决非父子组件之间通信问题")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("vuex")]),v._v(" 是通过将 "),_("code",[v._v("state")]),v._v(" 作为数据中心、各个组件共享 "),_("code",[v._v("state")]),v._v(" 实现跨组件通信的，此时的数据完全独立于组件，因此将组件间共享的数据置于 "),_("code",[v._v("State")]),v._v(" 中能有效解决多层级组件嵌套的跨组件通信问题。")]),v._v(" "),_("li",[_("code",[v._v("vuex")]),v._v(" 作为数据存储中心\n"),_("code",[v._v("vuex")]),v._v(" 的 "),_("code",[v._v("State")]),v._v(" 在单页应用的开发中本身具有一个“数据库”的作用，可以将组件中用到的数据存储在 "),_("code",[v._v("State")]),v._v(" 中，并在 "),_("code",[v._v("Action")]),v._v(" 中封装数据读写的逻辑。这时候存在一个问题，一般什么样的数据会放在 "),_("code",[v._v("State")]),v._v(" 中呢？ 目前主要有两种数据会使用 vuex 进行管理：\n1、组件之间全局共享的数据\n2、通过后端异步请求的数据\n比如做加入购物车、登录状态等都可以使用"),_("code",[v._v("Vuex")]),v._v("来管理数据状态。\n一般面试官问到这里vue基本知识就差不多了， 如果更深入的研究就是和你探讨关于vue的底层源码；或者是具体在项目中遇到的问题，下面列举几个项目中可能遇到的问题：")])]),v._v(" "),_("ol",[_("li",[v._v("开发时，改变数组或者对象的数据，但是页面没有更新如何解决？")]),v._v(" "),_("li",[_("code",[v._v("vue")]),v._v("弹窗后如何禁止滚动条滚动？")]),v._v(" "),_("li",[v._v("如何在 "),_("code",[v._v("vue")]),v._v(" 项目里正确地引用 "),_("code",[v._v("jquery")]),v._v(" 和 "),_("code",[v._v("jquery-ui")]),v._v("的插件")])])])}),[],!1,null,null,null);e.default=o.exports}}]);
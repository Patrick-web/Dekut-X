(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],r=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},a={app:0},n=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("85ec"),a=s.n(r);a.a},"09e0":function(t,e,s){},"0dc6":function(t,e,s){},"116d":function(t,e,s){},"16a3":function(t,e,s){"use strict";var r=s("cd8c"),a=s.n(r);a.a},"2b56":function(t,e,s){"use strict";var r=s("09e0"),a=s.n(r);a.a},"52db":function(t,e){t.exports="data:image/png;base64,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"},"538a":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],o=(s("034f"),s("2877")),i={},c=Object(o["a"])(i,a,n,!1,null,null,null),u=c.exports,l=s("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=s("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"DekutX logo",id:"logo",src:s("bca0")}}),r("button",{attrs:{id:"formShowBt"},on:{click:function(e){t.showForm=!0}}},[t._v(" Sign In ")]),t.showForm?r("div",{staticClass:"formWrapper"},[r("form",{staticClass:"form"},[t._m(0),r("div",{staticClass:"formGroup"},[r("label",{attrs:{for:"Username"}},[t._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"sirname.middlename.year"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("div",{staticClass:"formGroup"},[r("label",{attrs:{for:"Password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"registration number yako"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "+t._s(t.password)+" ")]),r("button",{attrs:{id:"signInBt"},on:{click:t.testCredentials}},[t._v(" Tusonge basi "),r("img",{attrs:{id:"arrow",src:s("b94f"),alt:""}})])])]):t._e()])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header animated"},[s("p",[t._v("Nisaidie na details zako za E-learning ndo tusonge.")])])}],v=(s("ac1f"),s("5319"),s("bc3a"),{name:"Home",data:function(){return{showForm:!1,username:"",password:""}},methods:{testCredentials:function(){if(this.username&&this.password){var t=/\w*\.\w*\.\d\d/;if(t.test(this.username)){var e=/\w\d\d\d-\d\d-\d\d\d\d\/\d\d\d\d/;e.test(this.password)?this.login():this.showError("Umekosea password. Password ni your Registration Number")}else this.showError("Umekosea username. It should be in this format <sirname.middlename.year>")}else this.showError("Tutasonga aje bila details zako zote surely?")},login:function(){this.$router.replace({name:"dashboard"})},showError:function(t){var e=document.querySelector(".form .header");e.classList.add("zii","shake"),e.querySelector("p").textContent=t,setTimeout((function(){e.classList.remove("zii"),e.querySelector("p").textContent="Nisaidie na details zako za E-learning ndo tusonge for real sasa."}),3e3)}},components:{}}),m=v,g=(s("b259"),Object(o["a"])(m,f,p,!1,null,"6fa5090e",null)),C=g.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Dashboard"},[s("Navbar",{on:{switchTo:t.switchTabs}}),"courses"==t.currentTab?s("div",{staticClass:"coursesTab"},[s("CourseCard"),s("CourseCard"),s("CourseCard"),s("CourseCard"),s("CourseCard"),s("CourseCard")],1):t._e(),"notices"==t.currentTab?s("div",{staticClass:"noticesTab"},[s("NoticeCard"),s("NoticeCard"),s("NoticeCard"),s("NoticeCard"),s("NoticeCard")],1):t._e()],1)},h=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Navbar"},[t._m(0),t.currentCourse?t._e():r("div",{staticClass:"links"},[r("div",{staticClass:"link activeLink",attrs:{id:"courses"},on:{click:function(e){return t.goTo("courses")}}},[t._v(" Courses "),r("div",{staticClass:"indicator"})]),r("div",{staticClass:"link",attrs:{id:"notices"},on:{click:function(e){return t.goTo("notices")}}},[t._v(" Notices "),r("div",{staticClass:"indicator"})]),t._m(1)]),t.currentCourse?r("div",{staticClass:"currentCourseDiv"},[r("h2",[t._v(t._s(t.currentCourse))]),r("router-link",{staticClass:"backBt",attrs:{to:"/dashboard",replace:""}},[r("img",{attrs:{src:s("b94f"),alt:""}}),r("h3",[t._v("Back")])])],1):t._e(),t._m(2)])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logoArea"},[r("img",{attrs:{id:"logo",src:s("bca0"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"link",attrs:{id:"soon"}},[s("span",[t._v("soon")]),s("p",{attrs:{id:"forDesktop"}},[t._v("Student portal")]),s("p",{attrs:{id:"forMobile"}},[t._v("Portal")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"avatar"},[r("img",{attrs:{src:s("c5f5"),alt:""}})])}],k={methods:{goTo:function(t){document.querySelector(".activeLink").classList.remove("activeLink"),document.querySelector("#".concat(t)).classList.add("activeLink"),this.$emit("switchTo",t)}},props:{currentCourse:String}},I=k,x=(s("16a3"),Object(o["a"])(I,w,b,!1,null,null,null)),B=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"CourseCard",attrs:{to:"/coursePage"}},[r("div",{staticClass:"header animated"},[r("div",{staticClass:"editOptions"},[r("img",{attrs:{src:s("c4cc"),alt:""}})])]),r("div",{staticClass:"content"},[r("h3",[t._v("Computer Organization and Architecture and something else")]),r("div",{staticClass:"info"},[r("p",[t._v("CCS 1202")]),r("p",[t._v("SARAH MURAGE")])])])])},U=[],F={},Q=F,y=(s("e34a"),Object(o["a"])(Q,S,U,!1,null,null,null)),E=y.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"NoticeCard"},[s("div",{staticClass:"bar"}),s("p",[t._v(" Semester Schedule 2020/2021 Academic Year - Applicable to 4th Year and 5th Year Students in Main Campus and All Students in Nairobi Campus ")])])}],N={},D=N,T=(s("e4db"),Object(o["a"])(D,j,O,!1,null,null,null)),L=T.exports,P={data:function(){return{currentTab:"courses"}},methods:{switchTabs:function(t){this.currentTab=t}},components:{Navbar:B,CourseCard:E,NoticeCard:L}},R=P,q=(s("2b56"),Object(o["a"])(R,A,h,!1,null,null,null)),Y=q.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CoursePage"},[s("Navbar",{attrs:{currentCourse:"CCS 2102 Data Structures and Algorithms"}}),s("div",{staticClass:"lessonCardsWrapper"},[s("LessonCard"),s("LessonCard")],1)],1)},K=[],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"LessonCard"},[r("h3",[t._v("Lesson 1: Introduction")]),r("div",{staticClass:"cardBody"},[r("div",{staticClass:"cardItem"},[r("span",{staticClass:"iconArea"},[r("img",{attrs:{src:s("52db"),alt:""}})]),r("span",{staticClass:"description"},[t._v("Normalization Assignment ")])]),r("div",{staticClass:"cardItem"},[r("span",{staticClass:"iconArea"},[r("img",{attrs:{src:s("52db"),alt:""}})]),r("span",{staticClass:"description"},[t._v("Submission of Demonstration of Concurrency ProblemsAssignment ")])]),r("div",{staticClass:"cardItem"},[r("span",{staticClass:"iconArea"},[r("img",{attrs:{src:s("52db"),alt:""}})]),r("span",{staticClass:"description"},[t._v("Normalization Assignment ")])])])])}],J={},_=J,z=(s("83dd"),Object(o["a"])(_,M,G,!1,null,null,null)),V=z.exports,X={components:{Navbar:B,LessonCard:V}},W=X,Z=(s("e104"),Object(o["a"])(W,H,K,!1,null,null,null)),$=Z.exports;r["a"].use(d["a"]);var tt=[{path:"/",name:"Home",component:C},{path:"/dashboard",name:"dashboard",component:Y},{path:"/coursePage",name:"coursePage",component:$}],et=new d["a"]({routes:tt}),st=et;r["a"].config.productionTip=!1,new r["a"]({router:st,render:function(t){return t(u)}}).$mount("#app")},"83dd":function(t,e,s){"use strict";var r=s("0dc6"),a=s.n(r);a.a},"85ec":function(t,e,s){},afa9:function(t,e,s){},b259:function(t,e,s){"use strict";var r=s("116d"),a=s.n(r);a.a},b94f:function(t,e,s){t.exports=s.p+"img/arrow.6292fb49.svg"},bca0:function(t,e,s){t.exports=s.p+"img/Logo.284979da.png"},c192:function(t,e,s){},c4cc:function(t,e,s){t.exports=s.p+"img/pen.17a76835.svg"},c5f5:function(t,e,s){t.exports=s.p+"img/avatar1.a4d258c4.svg"},cd8c:function(t,e,s){},e104:function(t,e,s){"use strict";var r=s("afa9"),a=s.n(r);a.a},e34a:function(t,e,s){"use strict";var r=s("c192"),a=s.n(r);a.a},e4db:function(t,e,s){"use strict";var r=s("538a"),a=s.n(r);a.a}});
//# sourceMappingURL=app.34fb7834.js.map
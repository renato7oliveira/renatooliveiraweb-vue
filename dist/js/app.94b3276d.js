(function(e){function t(t){for(var o,r,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-040d53c5":"0e3652a0","chunk-0b687662":"83719204","chunk-75c672fc":"82abd4a7","chunk-c22d43f2":"307e9593"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-040d53c5":1,"chunk-0b687662":1,"chunk-75c672fc":1,"chunk-c22d43f2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-040d53c5":"9685239d","chunk-0b687662":"aa7b5e18","chunk-75c672fc":"2685db4c","chunk-c22d43f2":"bee07c4f"}[e]+".css",i=l.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===o||s===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"476e":function(e,t,n){"use strict";var o=n("9afb"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[e._m(0),n("nav",{staticClass:"hide_mobile"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("home")])],1),n("li",[n("router-link",{attrs:{to:"/portfolio"}},[e._v("portfolio")])],1),n("li",[n("router-link",{attrs:{to:"/sobre"}},[e._v("sobre")])],1)])])]),e._m(1),n("nav",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"sidebar"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"material-icons-outline md-account_circle"}),e._v(" home")])],1),n("li",[n("router-link",{attrs:{to:"/portfolio"}},[n("i",{staticClass:"material-icons-outline md-account_circle"}),e._v(" portfolio")])],1),n("li",[n("router-link",{attrs:{to:"/sobre"}},[n("i",{staticClass:"material-icons-outline md-account_circle"}),e._v(" sobre")])],1)])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("@renato7oliveira")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mobile_menu show_mobile"},[n("i",{staticClass:"material-icons-outline md-menu"})])}],l=(n("8c59"),n("2877")),u={},s=Object(l["a"])(u,a,c,!1,null,"33ad1531",null),f=s.exports,d={components:{Nav:f}},p=d,m=(n("5c0b"),Object(l["a"])(p,r,i,!1,null,null,null)),h=m.exports,v=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("article",[n("h2",[e._v("renato7oliveira")]),n("p",[e._v("Olá, meu nome é Renato Oliveira, trabalho com webdesign e desenvolvimento frontend para web.")]),n("router-link",{staticClass:"btn btn_white",attrs:{to:"/portfolio"}},[n("i",{staticClass:"material-icons-outline md-account_circle"}),e._v(" portfolio")])],1)])},g=[],_=(n("476e"),{}),k=Object(l["a"])(_,b,g,!1,null,"745f59c1",null),y=k.exports;o["a"].use(v["a"]);var w="renato7oliveira · ",C=[{path:"/",name:"Home",meta:{title:w+"frontend · webdesign",description:"renato7oliveira · frontend · webdesign"},component:y},{path:"/sobre",name:"sobre",meta:{title:w+"sobre"},component:function(){return n.e("chunk-c22d43f2").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"Portfolio",meta:{title:w+"portfolio"},component:function(){return n.e("chunk-0b687662").then(n.bind(null,"6cd1"))}},{path:"/portfolio-detalhe",name:"PortfolioDetalhe",meta:{title:w+"detalhe"},component:function(){return n.e("chunk-75c672fc").then(n.bind(null,"fe45"))}},{path:"/*",name:"NotFound",meta:{title:w+"página não encontrada"},component:function(){return n.e("chunk-040d53c5").then(n.bind(null,"9703"))}}],O=new v["a"]({linkExactActiveClass:"link_active",routes:C});O.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var E=O,j=n("d5e8"),S=n.n(j),P=n("05b9"),x=n.n(P),L=n("1f54"),T=n.n(L);o["a"].config.productionTip=!1,S.a,x.a,T.a,new o["a"]({router:E,render:function(e){return e(h)}}).$mount("#app");var N=document.querySelector(".sidebar"),q=document.querySelector(".overlay");function A(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".mobile_menu").onclick=function(){N.classList.toggle("active"),q.classList.toggle("ds_block")},document.querySelector(".sidebar").onclick=function(){N.classList.toggle("active"),q.classList.toggle("ds_block"),A()},document.querySelector(".overlay").onclick=function(){N.classList.toggle("active"),q.classList.toggle("ds_block")}},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},6254:function(e,t,n){},"8c59":function(e,t,n){"use strict";var o=n("6254"),r=n.n(o);r.a},"9afb":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.94b3276d.js.map
(function(e){function t(t){for(var r,o,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-16c343fe":"6ad89a61","chunk-1e66fd68":"8298e652","chunk-3c121433":"04006d70","chunk-af23c78a":"f8ec90d4"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-16c343fe":1,"chunk-1e66fd68":1,"chunk-3c121433":1,"chunk-af23c78a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-16c343fe":"fb5f2f1f","chunk-1e66fd68":"9a18bccf","chunk-3c121433":"fb326f33","chunk-af23c78a":"b0405fa7"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d00":function(e,t,n){},4279:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("i",{staticClass:"material-icons-round md-brightness_2",attrs:{id:"switch",title:"Click!"}}),n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("nav",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"sidebar"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("home")])],1),n("li",[n("router-link",{attrs:{to:"/sobre"}},[e._v("sobre")])],1),n("li",[n("router-link",{attrs:{to:"/portfolio"}},[e._v("portfolio")])],1)])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"nav"},[n("i",{staticClass:"material-icons-outline md-menu"})]),n("div",[n("h1",[e._v("renato7oliveira · webdesigner")])])])}],l=(n("cd33"),n("2877")),u={},s=Object(l["a"])(u,i,c,!1,null,"a3259200",null),f=s.exports,d={components:{Nav:f}},p=d,v=(n("5c0b"),Object(l["a"])(p,o,a,!1,null,null,null)),h=v.exports,m=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"home"},[r("article",[r("figure",[r("router-link",{attrs:{to:"/sobre"}},[r("img",{attrs:{src:n("aa41"),alt:"renato7oliveira",title:"renato7oliveira"}})])],1),r("h2",[e._v("renato7oliveira · webdesigner")]),r("p",[e._v("Olá, trabalho com desenvolvimento web e comunicação digital.")]),r("router-link",{staticClass:"btn",attrs:{to:"/portfolio"}},[r("i",{staticClass:"material-icons-outline md-apps"}),e._v(" Ver Portfolio")])],1)])])},g=[],k=(n("8f2a"),{}),y=Object(l["a"])(k,b,g,!1,null,"6efabeea",null),_=y.exports;r["a"].use(m["a"]);var w=[{path:"/",name:"Home",meta:{title:"renato7oliveira · webdesigner"},component:_},{path:"/sobre",name:"sobre",meta:{title:"renato7oliveira · sobre"},component:function(){return n.e("chunk-3c121433").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"Portfolio",meta:{title:"renato7oliveira · portfolio"},component:function(){return n.e("chunk-af23c78a").then(n.bind(null,"6cd1"))}},{path:"/portfolio-detalhe",name:"PortfolioDetalhe",meta:{title:"renato7oliveira · portfolio · detalhe"},component:function(){return n.e("chunk-16c343fe").then(n.bind(null,"fe45"))}},{path:"/*",name:"NotFound",meta:{title:"renato7oliveira · página não encontrada"},component:function(){return n.e("chunk-1e66fd68").then(n.bind(null,"9703"))}}],C=new m["a"]({linkExactActiveClass:"link_active",routes:w});C.beforeEach((function(e,t,n){document.title=e.meta.title,n()}));var S=C,E=n("d5e8"),O=n.n(E),j=n("05b9"),L=n.n(j),P=n("1f54"),x=n.n(P);r["a"].config.productionTip=!1,O.a,L.a,x.a,new r["a"]({router:S,render:function(e){return e(h)}}).$mount("#app");var q=document.querySelector(".sidebar"),T=document.querySelector(".overlay");function N(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".nav").onclick=function(){q.classList.toggle("active"),T.classList.toggle("ds_block")},document.querySelector(".sidebar").onclick=function(){q.classList.toggle("active"),T.classList.toggle("ds_block"),N()},document.querySelector("h1").onclick=function(){N()},document.querySelector(".overlay").onclick=function(){q.classList.toggle("active"),T.classList.toggle("ds_block")};var A=document.querySelector("html"),$=document.querySelector("#switch");$.addEventListener("click",(function(){A.classList.toggle("dark-mode")}))},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"8f2a":function(e,t,n){"use strict";var r=n("0d00"),o=n.n(r);o.a},"9c0c":function(e,t,n){},aa41:function(e,t,n){e.exports=n.p+"img/renato7oliveira-home.34fa2d80.jpg"},cd33:function(e,t,n){"use strict";var r=n("4279"),o=n.n(r);o.a}});
//# sourceMappingURL=app.b8dcb980.js.map
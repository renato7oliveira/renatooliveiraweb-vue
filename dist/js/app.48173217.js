(function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1c7fd4e7":"c722dfc4","chunk-6ae98ddc":"3c408f80","chunk-afb442bc":"4c02b51a"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1c7fd4e7":1,"chunk-6ae98ddc":1,"chunk-afb442bc":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1c7fd4e7":"9e1fddd8","chunk-6ae98ddc":"1c704526","chunk-afb442bc":"e7a838b2"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1710:function(t,e,n){"use strict";var r=n("e2d4"),a=n.n(r);a.a},"3db2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experiments"},[t._m(0),n("section",t._l(t.front,(function(e,r){return n("article",{key:"B"+r},[n("figure",[n("img",{attrs:{src:e.screen,title:e.title,alt:e.title}})]),n("div",[n("h2",[t._v(t._s(e.title))]),n("p",[t._v(" Aqui usei: "),n("span",[t._v(t._s(e.stack))])]),n("p",[n("a",{staticClass:"btn",attrs:{href:e.url,target:"_blank",title:"Abrirá em nova aba"}},[n("i",{staticClass:"fa fa-external-link",attrs:{"aria-hidden":"true"}}),t._v(" Visualizar")])])])])})),0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"section-experiments"},[n("i",{staticClass:"fa fa-flask",attrs:{"aria-hidden":"true"}}),t._v(" Alguns Experimentos ")])}],o={name:"Lab",data:function(){return{front:[{title:"Code Canyon Template",stack:"CSS-Grids / javaScript",url:"https://renato7oliveira.github.io/portfolio/Grid_CSS_Template_Canyon/src/",screen:n("e985")},{title:"Clone Google",stack:"CSS-Grids",url:"https://renato7oliveira.github.io/portfolio/Google_Clone/src/",screen:n("8f31")},{title:"Breaking Bad Tributo",stack:"Glide.js / CSS-Grids",url:"https://renato7oliveira.github.io/portfolio/Breaking_Bad_Tributo/src/",screen:n("9460")},{title:"Beatles Tributo",stack:"CSS-Grids / Photoshop",url:"https://renato7oliveira.github.io/portfolio/Beatles_Tributo/src/",screen:n("7d2d")},{title:"Street Fighter Tributo (old school)",stack:"Adobe Edge Animate",url:"https://renato7oliveira.github.io/street-fighter-audio-project",screen:n("c926")},{title:"E-mail Mkt (old school)",stack:"HTML 1.0",url:"https://renato7oliveira.github.io/portfolio/Email_Mkt/Vivo/index.html",screen:n("d592")}]}}},i=o,c=(n("75d6"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"2893cbb1",null);e["a"]=s.exports},"4e9e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav-ico show-d",on:{click:function(e){return t.nav()}}},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),n("aside",{staticClass:"show-d"},[n("nav",[n("ul",[n("li",{on:{click:function(e){t.toTop(),t.overlayOff()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v("Home")])],1),n("li",{on:{click:function(e){t.toTop(),t.overlayOff()}}},[n("router-link",{attrs:{to:"/about"}},[n("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v("Sobre")])],1)])])]),n("div",{staticClass:"nav-mobile show-m"},[n("div",{staticClass:"nav-link",on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v("Home")])],1),n("div",{staticClass:"nav-link",on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/about"}},[n("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v("Sobre")])],1),n("div",{staticClass:"nav-link",on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/lab"}},[n("i",{staticClass:"fa fa-flask",attrs:{"aria-hidden":"true"}}),t._v("Experimentos")])],1)]),n("div",{staticClass:"overlay",on:{click:function(e){return t.overlayOff()}}})])},c=[],s={methods:{toTop:function(){window.scrollTo({top:0})},nav:function(){document.querySelector("aside").classList.add("nav-active"),document.querySelector(".overlay").classList.add("nav-block")},overlayOff:function(){document.querySelector("aside").classList.remove("nav-active"),document.querySelector(".overlay").classList.remove("nav-block")}}},l=s,u=(n("a92d"),n("2877")),f=Object(u["a"])(l,i,c,!1,null,"55d8975c",null),d=f.exports,p={components:{Nav:d}},v=p,h=(n("5c0b"),Object(u["a"])(v,a,o,!1,null,null,null)),m=h.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",[n("article",[t._m(0),n("h1",[t._v("RENATO7OLIVEIRA")]),n("h2",[t._v("WEBDESIGNER")]),n("div",[n("p",[t._v(" 10+ anos que trabalho para empresas nas divisões de web, normalmente dedicado ao front-end e design de interface. "),n("router-link",{attrs:{to:"/about"}},[n("span",{on:{click:function(e){return t.toTop()}}},[t._v(" Saiba mais")])])],1)])])]),n("div",{staticClass:"show-d"},[n("Experiments")],1)])},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",[r("img",{attrs:{src:n("cf6a"),alt:"renato7oliveira",title:"renato7oliveira"}})])}],_=n("3db2"),E={components:{Experiments:_["a"]},methods:{toTop:function(){window.scrollTo({top:0})}}},y=E,C=(n("1710"),Object(u["a"])(y,g,k,!1,null,"4de1d4bb",null)),S=C.exports;r["a"].use(b["a"]);var O="RENATO7OLIVEIRA · ",T=[{path:"/",name:"Home",meta:{title:O+"WEBDESIGNER",description:"RENATO7OLIVEIRA · WEBDESIGNER"},component:S},{path:"/about",name:"about",meta:{title:O+"SOBRE"},component:function(){return n.e("chunk-6ae98ddc").then(n.bind(null,"f820"))}},{path:"/skills",name:"skills",meta:{title:O+"SOBRE"},component:function(){return n.e("chunk-6ae98ddc").then(n.bind(null,"f820"))}},{path:"/lab",name:"experimentos",meta:{title:O+"EXPERIMENTOS"},component:function(){return n.e("chunk-afb442bc").then(n.bind(null,"6cd1"))}},{path:"/*",name:"NotFound",meta:{title:O+"PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-1c7fd4e7").then(n.bind(null,"9703"))}}],w=new b["a"]({linkExactActiveClass:"link_active",routes:T});w.beforeEach((function(t,e,n){document.title=t.meta.title,document.description=t.meta.description,n()}));var x=w,j=n("d5e8"),A=n.n(j),N=n("1f54"),B=n.n(N),L=n("d207"),P=n.n(L);r["a"].config.productionTip=!1,A.a,B.a,P.a,new r["a"]({router:x,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"75d6":function(t,e,n){"use strict";var r=n("8fda"),a=n.n(r);a.a},"7d2d":function(t,e,n){t.exports=n.p+"img/portfolio-beatles.8f9f144b.jpg"},"8f31":function(t,e,n){t.exports=n.p+"img/portfolio-google.f8521c5f.jpg"},"8fda":function(t,e,n){},9460:function(t,e,n){t.exports=n.p+"img/portfolio-breaking-bad-tributo.62a1f389.jpg"},"9c0c":function(t,e,n){},a92d:function(t,e,n){"use strict";var r=n("4e9e"),a=n.n(r);a.a},c926:function(t,e,n){t.exports=n.p+"img/portfolio-street-fighter.8d5a81f8.jpg"},cf6a:function(t,e,n){t.exports=n.p+"img/renato7oliveira-about.6ac0daa1.gif"},d592:function(t,e,n){t.exports=n.p+"img/portfolio-frontend-emailmkt-vivo.7c943109.jpg"},e2d4:function(t,e,n){},e985:function(t,e,n){t.exports=n.p+"img/portfolio-template-canyon.ba675a7e.jpg"}});
//# sourceMappingURL=app.48173217.js.map
(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-12cb2df7":"b5987e21","chunk-485f423c":"ab0a460e","chunk-5733712f":"2a08464a","chunk-786b58d0":"43243ba4"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-12cb2df7":1,"chunk-485f423c":1,"chunk-5733712f":1,"chunk-786b58d0":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-12cb2df7":"d658c075","chunk-485f423c":"11f84dae","chunk-5733712f":"a17e8920","chunk-786b58d0":"eaed9207"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21d6":function(t,e,n){"use strict";var r=n("a604"),o=n.n(r);o.a},"2fcf":function(t,e,n){t.exports=n.p+"img/renato7oliveira-about.cf961cae.jpg"},4358:function(t,e,n){"use strict";var r=n("e91a"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("Nav")],1),n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-home"}),t._v("Home")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/sobre"}},[n("i",{staticClass:"fas fa-running"}),t._v("Sobre")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/projetos"}},[n("i",{staticClass:"fas fa-gamepad"}),t._v("Projetos")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/contato"}},[n("i",{staticClass:"fas fa-share-alt"}),t._v("Contato")])],1)])])},c=[],u={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}};window.addEventListener("scroll",(function(){var t=document.querySelector("nav");t.classList.toggle("header-mini",window.scrollY>75)}));var s=u,l=(n("4358"),n("2877")),f=Object(l["a"])(s,i,c,!1,null,"17f08f50",null),p=f.exports,d={components:{Nav:p}},h=d,m=(n("5c0b"),Object(l["a"])(h,o,a,!1,null,null,null)),v=m.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),n("section",{staticClass:"home-grid-nav"},[n("div",[n("router-link",{attrs:{to:"/sobre"}},[n("i",{staticClass:"fas fa-running",on:{click:function(e){return t.toTop()}}})]),n("p",[t._v("Veja a minha experiência")])],1),n("div",[n("router-link",{attrs:{to:"/projetos"}},[n("i",{staticClass:"fas fa-gamepad",on:{click:function(e){return t.toTop()}}})]),n("p",[t._v("Confira alguns projetos pessoais")])],1),n("div",[n("router-link",{attrs:{to:"/contato"}},[n("i",{staticClass:"fas fa-share-alt",on:{click:function(e){return t.toTop()}}})]),n("i",{}),n("p",[t._v("Entre em contato pelas Redes")])],1)])])},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("figure",{staticClass:"show-m"},[r("img",{attrs:{src:n("2fcf"),alt:"renato7oliveira",title:"renato7oliveira"}})]),r("h1",[t._v("RENATO7OLIVEIRA")]),r("h2",[t._v("WEBDESIGNER")])])}],E={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},y=E,w=(n("21d6"),Object(l["a"])(y,g,k,!1,null,"65668193",null)),O=w.exports;r["a"].use(b["a"]);var _="RENATO7OLIVEIRA · ",T=[{path:"/",meta:{title:_+"WEBDESIGNER",description:"RENATO7OLIVEIRA · WEBDESIGNER"},component:O},{path:"/sobre",meta:{title:_+"SOBRE"},component:function(){return n.e("chunk-485f423c").then(n.bind(null,"f820"))}},{path:"/projetos",meta:{title:_+"PROJETOS"},component:function(){return n.e("chunk-5733712f").then(n.bind(null,"acca"))}},{path:"/contato",name:"Contact",meta:{title:_+"CONTATO"},component:function(){return n.e("chunk-12cb2df7").then(n.bind(null,"b8fa"))}},{path:"/*",meta:{title:_+"PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-786b58d0").then(n.bind(null,"9703"))}}],C=new b["a"]({linkExactActiveClass:"link_active",routes:T});C.beforeEach((function(t,e,n){document.title=t.meta.title,document.description=t.meta.description,n()}));var j=C,N=n("becf"),A=n.n(N),S=n("d207"),x=n.n(S);r["a"].config.productionTip=!1,A.a,x.a,new r["a"]({router:j,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},a604:function(t,e,n){},e91a:function(t,e,n){}});
//# sourceMappingURL=app.ad4b2784.js.map
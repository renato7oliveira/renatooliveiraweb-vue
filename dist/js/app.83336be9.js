(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0f0509":"ad2104c7","chunk-2d210c47":"d5b6d0fd","chunk-48f61c32":"045a74c4","chunk-4967c0b3":"1e299ef9","chunk-6d80ae6f":"510ff9b4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-48f61c32":1,"chunk-4967c0b3":1,"chunk-6d80ae6f":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0f0509":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-48f61c32":"addcabc8","chunk-4967c0b3":"ce47ef6c","chunk-6d80ae6f":"943e9fe9"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1),n("nav",[n("Nav")],1)])},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-running"}),e._v("Home ")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-link"}),e._v("Links ")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/contato"}},[n("i",{staticClass:"fas fa-share-alt"}),e._v("Contato ")])],1)])},c=[],u={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},l=u,s=(n("8be7"),n("2877")),f=Object(s["a"])(l,i,c,!1,null,"4e7a7ad2",null),d=f.exports,p={components:{Nav:d}},h=p,m=(n("5c0b"),Object(s["a"])(h,o,a,!1,null,null,null)),b=m.exports,v=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"header-hero"}),e._m(0),n("article",[e._m(1),n("p",[e._v("Olá, sou o Renato, profissional de web, me dedico ao front-end e design (UI). Formado em Comunicação para Web pela UNIP, tive oportunidade de trabalhar em áreas de TI, Comunicação e Marketing. Me esforço diariamente para entregar o melhor. Veja meu "),n("span",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/curriculo"}},[e._v("currículo")])],1)]),n("p",[e._v(' Casado com a Delma, pai da Ana Luiza e da "Cyndi". ')])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("RENATO OLIVEIRA")]),n("h2",[e._v("front-end / web-designer")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:n("7c0a"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])}],w={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renatooliveiraweb"},{title:"Github",img:"fab fa-github-alt",url:"https://github.com/renato7oliveira"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renatooliveiraweb"}]}}},_=w,y=(n("6024"),Object(s["a"])(_,g,k,!1,null,"b871b7ca",null)),O=y.exports;r["a"].use(v["a"]);var E="RENATO OLIVEIRA WEB",T=[{path:"/",meta:{title:E+" · HOME"},component:O},{path:"/sobre",meta:{title:E+" · SOBRE"},component:function(){return n.e("chunk-4967c0b3").then(n.bind(null,"f820"))}},{path:"/links",meta:{title:E+" · LINKS"},component:function(){return n.e("chunk-48f61c32").then(n.bind(null,"b398"))}},{path:"/contato",meta:{title:E+" · CONTATO"},component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}},{path:"/curriculo",meta:{title:E+" · CURRÍCULO"},component:function(){return n.e("chunk-2d0f0509").then(n.bind(null,"9c9b"))}},{path:"/*",meta:{title:E+" · PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-6d80ae6f").then(n.bind(null,"9703"))}}],C=new v["a"]({linkExactActiveClass:"link_active",routes:T});C.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var j=C,A=n("becf"),N=n.n(A);r["a"].config.productionTip=!1,N.a,new r["a"]({router:j,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6024:function(e,t,n){"use strict";var r=n("d066b"),o=n.n(r);o.a},"7c0a":function(e,t,n){e.exports=n.p+"img/renato-oliveira-web-2.758d5155.jpg"},"8be7":function(e,t,n){"use strict";var r=n("971b"),o=n.n(r);o.a},"971b":function(e,t,n){},"9c0c":function(e,t,n){},d066b:function(e,t,n){}});
//# sourceMappingURL=app.83336be9.js.map
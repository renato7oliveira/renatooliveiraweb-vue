(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0f0509":"a6371496","chunk-2d210c47":"5e865b56","chunk-6d80ae6f":"564c2362","chunk-ec923566":"be9acb6f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6d80ae6f":1,"chunk-ec923566":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0f0509":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-6d80ae6f":"943e9fe9","chunk-ec923566":"7c4e1628"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1),n("nav",[n("Nav")],1)])},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-running"}),e._v("Home ")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-link"}),e._v("Links ")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/contato"}},[n("i",{staticClass:"fas fa-share-alt"}),e._v("Contato ")])],1)])},c=[],u={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},l=u,s=(n("b061"),n("2877")),f=Object(s["a"])(l,i,c,!1,null,"990ecd96",null),d=f.exports,p={components:{Nav:d}},h=p,m=(n("5c0b"),Object(s["a"])(h,o,a,!1,null,null,null)),v=m.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"header-hero"}),e._m(0),n("article",[e._m(1),n("p",[e._v(" Olá, sou o Renato, profissional de web dedicado ao front-end e design. Formado em Comunicação para Web pela UNIP, tive oportunidade de trabalhar em áreas de TI, Comunicação e Marketing. Veja meu "),n("span",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/curriculo"}},[e._v("currículo")])],1)]),n("p",[e._v('Casado com a Delma, pai da Ana Luiza e da "Cyndi".')])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("RENATO OLIVEIRA")]),n("h2",[e._v("front-end · web-designer")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:n("5b76"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])}],_={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},y=_,w=(n("91d0"),Object(s["a"])(y,g,k,!1,null,"ed75843a",null)),O=w.exports;r["a"].use(b["a"]);var C="Renato Oliveira Web · ",E=[{path:"/",meta:{title:C+"Front-end · Web-designer"},component:O},{path:"/links",meta:{title:C+"Links"},component:function(){return n.e("chunk-ec923566").then(n.bind(null,"b398"))}},{path:"/contato",meta:{title:C+"Contato"},component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}},{path:"/curriculo",meta:{title:C+"Currículo"},component:function(){return n.e("chunk-2d0f0509").then(n.bind(null,"9c9b"))}},{path:"/*",meta:{title:C+"Página não encontrada..."},component:function(){return n.e("chunk-6d80ae6f").then(n.bind(null,"9703"))}}],T=new b["a"]({linkExactActiveClass:"link_active",routes:E});T.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var j=T,x=n("becf"),P=n.n(x);r["a"].config.productionTip=!1,P.a,new r["a"]({router:j,render:function(e){return e(v)}}).$mount("#app")},"5b76":function(e,t,n){e.exports=n.p+"img/renato-oliveira-web-about.7d020af7.jpg"},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"91d0":function(e,t,n){"use strict";var r=n("bad4"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b061:function(e,t,n){"use strict";var r=n("f997"),o=n.n(r);o.a},bad4:function(e,t,n){},f997:function(e,t,n){}});
//# sourceMappingURL=app.525b78a0.js.map
(function(t){function e(e){for(var r,o,c=e[0],u=e[1],l=e[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d20f3e6":"32061cdc","chunk-2d210c47":"37dfac25","chunk-6bd994d7":"7b22bcc8","chunk-7aeaa26a":"ed122de2"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-6bd994d7":1,"chunk-7aeaa26a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d20f3e6":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-6bd994d7":"d3543ced","chunk-7aeaa26a":"943e9fe9"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var f=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e64":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("aside",[n("Nav")],1),n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-home"}),t._v("Home")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/sobre"}},[n("i",{staticClass:"fas fa-running"}),t._v("Sobre")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-external-link-alt"}),t._v("Links")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/contato"}},[n("i",{staticClass:"fas fa-paper-plane"}),t._v("Contato")])],1)])])},c=[],u={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},l=u,s=(n("b5f0"),n("2877")),f=Object(s["a"])(l,i,c,!1,null,"57cb861e",null),d=f.exports,p={components:{Nav:d}},h=p,m=(n("5c0b"),Object(s["a"])(h,o,a,!1,null,null,null)),b=m.exports,v=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("RENATO OLIVEIRA")]),n("h2",[t._v("WEBDESIGN / FRONTEND")])])}],w={data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renatooliveiraweb"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renatooliveiraweb"},{title:"Github",img:"fab fa-github-alt",url:"https://github.com/renato7oliveira"},{title:"Flickr",img:"fab fa-flickr",url:"https://github.com/renato7oliveira"}],skills:[{categ:{content:"Code"},list:{content:"JS · TS · HTML5 · Sass + CSS3"}},{categ:{content:"FW"},list:{content:"Angular · Ionic"}},{categ:{content:"Design"},list:{content:"XD · Photoshop"}},{categ:{content:"Marketing"},list:{content:"Wordpress"}}]}}},y=w,E=(n("8894"),Object(s["a"])(y,g,k,!1,null,"32a7ebcd",null)),O=E.exports;r["a"].use(v["a"]);var _="RENATO OLIVEIRA WEB",T=[{path:"/",meta:{title:_+" · HOME"},component:O},{path:"/sobre",meta:{title:_+" · SOBRE"},component:function(){return n.e("chunk-6bd994d7").then(n.bind(null,"f820"))}},{path:"/links",meta:{title:_+" · LINKS"},component:function(){return n.e("chunk-2d20f3e6").then(n.bind(null,"b398"))}},{path:"/contato",meta:{title:_+" · CONTATO"},component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}},{path:"/*",meta:{title:_+" · PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-7aeaa26a").then(n.bind(null,"9703"))}}],N=new v["a"]({linkExactActiveClass:"link_active",routes:T});N.beforeEach((function(t,e,n){document.title=t.meta.title,document.description=t.meta.description,n()}));var S=N,C=n("becf"),A=n.n(C),j=n("eefc"),x=n.n(j);r["a"].config.productionTip=!1,x.a,A.a,new r["a"]({router:S,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},8894:function(t,e,n){"use strict";var r=n("aae4"),o=n.n(r);o.a},"9c0c":function(t,e,n){},aae4:function(t,e,n){},b5f0:function(t,e,n){"use strict";var r=n("1e64"),o=n.n(r);o.a}});
//# sourceMappingURL=app.364ad7c0.js.map
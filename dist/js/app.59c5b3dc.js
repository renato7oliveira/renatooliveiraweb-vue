(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-52ec542f":"bec85126","chunk-c9d24fa8":"32622333"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-52ec542f":1,"chunk-c9d24fa8":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-52ec542f":"dd47bdf9","chunk-c9d24fa8":"5a50b3a9"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ec8":function(t,e,n){"use strict";var r=n("4660"),a=n.n(r);a.a},"3e46":function(t,e,n){"use strict";var r=n("9499"),a=n.n(r);a.a},4660:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1),n("Nav")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v("home")])],1),n("li",{on:{click:function(e){t.toTop(),t.navOverflow()}}},[n("router-link",{attrs:{to:"/trabalhos"}},[n("i",{staticClass:"fa fa-coffee",attrs:{"aria-hidden":"true"}}),t._v("trabalhos")])],1),t._m(0)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"show-m"},[n("a",{attrs:{href:"https://forms.gle/mdYVxaBnc1mziQ8KA",target:"_blank"}},[n("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("mensagem")])])}],c={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},navOverflow:function(){document.querySelector("html").style.overflowY="auto"}}},u=c,l=(n("2ec8"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"cc23a548",null),d=f.exports,h={components:{Nav:d}},m=h,p=(n("5c0b"),Object(l["a"])(m,a,o,!1,null,null,null)),v=p.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("article",{staticClass:"about-description"},[n("h1",[t._v("RENATO7OLIVEIRA")]),n("h2",[t._v("FRONTEND · WEB")]),n("p",[t._v(" Desde 2009 trabalho para empresas nas divisões de web, normalmente dedicado ao frontend, design e gestão de mídias digitais. Sou casado com a Delma, pai da AnaLu e da “Cyndi”. ")]),n("h3",[t._v("Contato")]),n("p",{staticClass:"social"},t._l(t.social,(function(t){return n("a",{key:t.id,attrs:{title:t.title,href:t.url,target:"_blank"}},[n("i",{class:t.img})])})),0)]),n("article",{staticClass:"about-animate"},[t._m(0),n("button",{staticClass:"shuttle-bt show-d",on:{click:function(e){return t.sky()}}},[n("i",{staticClass:"fa fa-hand-o-up",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"shuttle-reset show-d",on:{click:function(e){return t.reset()}}},[n("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"shuttle"},[n("i",{staticClass:"fa fa-space-shuttle",attrs:{"aria-hidden":"true"}})])}],w={data:function(){return{social:[{title:"Github",img:"fa fa-github",url:"https://github.com/renato7oliveira"},{title:"Linkedin",img:"fa fa-linkedin",url:"https://www.linkedin.com/in/renato7oliveira"},{title:"Instagram",img:"fa fa-instagram",url:"https://www.instagram.com/renato7oliveira"},{title:"Twitter",img:"fa fa-twitter",url:"https://twitter.com/renato7oliveira"},{title:"Facebook",img:"fa fa-facebook",url:"https://facebook.com/renato7oliveira"},{title:"Mensagem",img:"fa fa-paper-plane",url:"https://forms.gle/mdYVxaBnc1mziQ8KA"}]}},methods:{sky:function(){document.querySelector(".shuttle").classList.add("shuttle-active"),document.querySelector("body").style.overflow="hidden",document.querySelector(".shuttle-bt").style.display="none",setTimeout((function(){document.querySelector(".shuttle-reset").style.display="block",document.querySelector(".shuttle-reset").classList.add("shuttle-reset-active")}),3e3)},reset:function(){document.querySelector(".shuttle").classList.remove("shuttle-active"),document.querySelector(".shuttle-bt").style.display="block",document.querySelector(".shuttle-reset").style.display="none"}}},k=w,_=(n("3e46"),Object(l["a"])(k,g,y,!1,null,"3610fb5c",null)),E=_.exports;r["a"].use(b["a"]);var O="RENATO7OLIVEIRA · ",C=[{path:"/",name:"Home",meta:{title:O+"FRONTEND · WEB",description:"RENATO7OLIVEIRA · FRONTEND · WEB"},component:E},{path:"/trabalhos",name:"trabalhos",meta:{title:O+"TRABALHOS"},component:function(){return n.e("chunk-c9d24fa8").then(n.bind(null,"6cd1"))}},{path:"/*",name:"NotFound",meta:{title:O+"PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-52ec542f").then(n.bind(null,"9703"))}}],T=new b["a"]({linkExactActiveClass:"link_active",routes:C});T.beforeEach((function(t,e,n){document.title=t.meta.title,document.description=t.meta.description,n()}));var A=T,N=n("d5e8"),S=n.n(N),j=n("1f54"),L=n.n(j),x=n("d207"),q=n.n(x);r["a"].config.productionTip=!1,S.a,L.a,q.a,new r["a"]({router:A,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},9499:function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.59c5b3dc.js.map
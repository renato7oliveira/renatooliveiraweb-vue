(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-58cea67e":"4a15be33","chunk-6d80ae6f":"510ff9b4","chunk-b644dffe":"9a88f2b7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-58cea67e":1,"chunk-6d80ae6f":1,"chunk-b644dffe":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-58cea67e":"7dff0431","chunk-6d80ae6f":"943e9fe9","chunk-b644dffe":"ec814c88"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],d.parentNode.removeChild(d),n(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0eda":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("aside",[n("Nav")],1),n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-house-user"}),e._v("Home")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/skills"}},[n("i",{staticClass:"fas fa-chess-knight"}),e._v("Skills")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-link"}),e._v("Links")])],1)])])},c=[],s={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},u=s,l=(n("8a1e"),n("2877")),f=Object(l["a"])(u,a,c,!1,null,"0e1bcffc",null),d=f.exports,p={components:{Nav:d}},v=p,m=(n("5c0b"),Object(l["a"])(v,i,o,!1,null,null,null)),h=m.exports,_=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("article",[n("div",{staticClass:"description"},[e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),n("div",{staticClass:"btn-content",on:{click:function(t){return e.toTop()}}},[n("router-link",{staticClass:"btn",attrs:{to:"/skills"}},[n("i",{staticClass:"fas fa-chess-knight"}),e._v("Skills")])],1)]),n("div",[e._m(9),n("div",{staticClass:"social"},[n("h2",[e._v("Redes Sociais")]),n("ul",e._l(e.social,(function(e){return n("li",{key:e.id},[n("a",{attrs:{href:e.url,target:"_blank",title:e.title}},[n("i",{class:e.img,attrs:{"aria-hidden":"true"}})])])})),0)])])])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("RENATO OLIVEIRA")]),n("h2",[e._v("FRONT-END DEV.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Nome")]),e._v(": Renato Oliveira.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Aniversário")]),e._v(": 12/05.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Signo")]),e._v(": Touro.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Formação")]),e._v(": Comunicação Web UNIP.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Posição")]),e._v(": Web Designer / Front-end Dev.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Departamentos")]),e._v(": Comunicação / Marketing / TI.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Missão")]),e._v(": Transformar semente em substância.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Amo")]),e._v(": São Paulo (onde vivo), Profissão, MPB, Transporte público, Culinária Familiar, Pedalar, Ler, Assistir TV, Ser pai da AnaLu e da “Cyndi”. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:n("c6d8"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])}],k={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renatooliveiraweb"},{title:"Github",img:"fab fa-github-alt",url:"https://github.com/renato7oliveira"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renatooliveiraweb"}]}}},E=k,w=(n("978b"),Object(l["a"])(E,b,g,!1,null,"5b5278c4",null)),y=w.exports;r["a"].use(_["a"]);var O="RENATO OLIVEIRA WEB",T=[{path:"/",meta:{title:O+" · HOME"},component:y},{path:"/skills",meta:{title:O+" · SKILLS"},component:function(){return n.e("chunk-58cea67e").then(n.bind(null,"ad83"))}},{path:"/links",meta:{title:O+" · LINKS"},component:function(){return n.e("chunk-b644dffe").then(n.bind(null,"b398"))}},{path:"/*",meta:{title:O+" · PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-6d80ae6f").then(n.bind(null,"9703"))}}],C=new _["a"]({linkExactActiveClass:"link_active",routes:T});C.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var A=C,N=n("becf"),S=n.n(N);r["a"].config.productionTip=!1,S.a,new r["a"]({router:A,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"734e":function(e,t,n){},"8a1e":function(e,t,n){"use strict";var r=n("734e"),i=n.n(r);i.a},"978b":function(e,t,n){"use strict";var r=n("0eda"),i=n.n(r);i.a},"9c0c":function(e,t,n){},c6d8:function(e,t,n){e.exports=n.p+"img/renato-oliveira-web.e84f604d.jpg"}});
//# sourceMappingURL=app.1a3812af.js.map
!function(e){function n(n){for(var t,r,_=n[0],l=n[1],i=0,c=[];i<_.length;i++)r=_[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(u&&u(n);c.length;)c.shift()()}function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={},o={0:0};t.e=function(e){var n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var _=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=_);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.src=function(e){return t.p+""+({2:"route-home"}[e]||e)+".chunk."+{2:"12789"}[e]+".js"}(e);var u=new Error;l=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),_=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+_+")",u.name="ChunkLoadError",u.type=r,u.request=_,t[1](u)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(n)},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/edge-classic-web-test/webplayer/",t.oe=function(e){throw console.error(e),e};var _=window.webpackJsonp=window.webpackJsonp||[],l=_.push.bind(_);_.push=n,_=_.slice();for(var i=0;i<_.length;i++)n(_[i]);var u=l;t(t.s="Pq/i")}({"Pq/i":function(e,n,t){"use strict";t.r(n);var r=t("hosL"),o=r.b,_=r.e,l=r.c,i=function(e){return e&&e.default?e.default:e},u=function(e){return"/"===e[e.length-1]?e:e+"/"};if("function"==typeof i(t("qVkA"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=i(t("qVkA")),n={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(n=JSON.parse(decodeURI(r.innerHTML)).preRenderData||n);var f={preRenderData:n},s=n.url?u(n.url):"";(l&&s===u(location.pathname)?l:_)(o(e,{CLI_DATA:f}),document.body,c)}()}},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,t){var r,o,_,i={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:i[_]=n[_];if(arguments.length>2&&(i.children=arguments.length>3?A.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return l(e,i,r,o,null)}function l(e,n,t,r,o){var _={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=E.vnode&&E.vnode(_),_}function i(e){return e.children}function u(e,n){this.props=e,this.context=n}function c(e,n){if(null==n)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?c(e):null}function f(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return f(e)}}function s(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!a.__r++||j!==E.debounceRendering)&&((j=E.debounceRendering)||M)(a)}function a(){var e,n,t,o,_,l,i,u;for(D.sort(U);e=D.shift();)e.__d&&(n=D.length,o=void 0,_=void 0,i=(l=(t=e).__v).__e,(u=t.__P)&&(o=[],(_=r({},l)).__v=l.__v+1,k(u,l,_,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[i]:null,o,null==i?c(l):i,l.__h),w(o,l),l.__e!=i&&f(l)),D.length>n&&D.sort(U));a.__r=0}function p(e,n,t,r,o,_,u,f,s,a){var p,y,m,b,g,w,P,C=r&&r.__k||I,O=C.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(b=t.__k[p]=null==(b=n[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?l(null,b,null,null,b):Array.isArray(b)?l(i,{children:b},null,null,null):b.__b>0?l(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=t,b.__b=t.__b+1,null===(m=C[p])||m&&b.key==m.key&&b.type===m.type)C[p]=void 0;else for(y=0;y<O;y++){if((m=C[y])&&b.key==m.key&&b.type===m.type){C[y]=void 0;break}m=null}k(e,b,m=m||N,o,_,u,f,s,a),g=b.__e,(y=b.ref)&&m.ref!=y&&(P||(P=[]),m.ref&&P.push(m.ref,null,b),P.push(y,b.__c||g,b)),null!=g?(null==w&&(w=g),"function"==typeof b.type&&b.__k===m.__k?b.__d=s=d(b,s,e):s=h(e,b,m,C,g,s),"function"==typeof t.type&&(t.__d=s)):s&&m.__e==s&&s.parentNode!=e&&(s=c(m))}for(t.__e=w,p=O;p--;)null!=C[p]&&("function"==typeof t.type&&null!=C[p].__e&&C[p].__e==t.__d&&(t.__d=v(r).nextSibling),x(C[p],C[p]));if(P)for(p=0;p<P.length;p++)S(P[p],P[++p],P[++p])}function d(e,n,t){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,n="function"==typeof r.type?d(r,n,t):h(t,r,r,o,r.__e,n));return n}function h(e,n,t,r,o,_){var l,i,u;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),l=null;else{for(i=_,u=0;(i=i.nextSibling)&&u<r.length;u+=1)if(i==o)break e;e.insertBefore(o,_),l=_}return void 0!==l?l:o.nextSibling}function v(e){var n,t,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(r=v(t)))return r;return null}function y(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||W.test(n)?t:t+"px"}function m(e,n,t,r,o){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||y(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||y(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r||e.addEventListener(n,_?g:b,_):e.removeEventListener(n,_?g:b,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function b(e){return this.l[e.type+!1](E.event?E.event(e):e)}function g(e){return this.l[e.type+!0](E.event?E.event(e):e)}function k(e,n,t,o,_,l,c,f,s){var a,d,h,v,y,m,b,g,k,w,S,x,O,T,A,L=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,f=n.__e=t.__e,n.__h=null,l=[f]),(a=E.__b)&&a(n);try{e:if("function"==typeof L){if(g=n.props,k=(a=L.contextType)&&o[a.__c],w=a?k?k.props.value:a.__:o,t.__c?b=(d=n.__c=t.__c).__=d.__E:("prototype"in L&&L.prototype.render?n.__c=d=new L(g,w):(n.__c=d=new u(g,w),d.constructor=L,d.render=C),k&&k.sub(d),d.props=g,d.state||(d.state={}),d.context=w,d.__n=o,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=L.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,L.getDerivedStateFromProps(g,d.__s))),v=d.props,y=d.state,d.__v=n,h)null==L.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==L.getDerivedStateFromProps&&g!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,w),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,w)||n.__v===t.__v){for(n.__v!==t.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S]);d._sb=[],d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,w),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,m)}))}if(d.context=w,d.props=g,d.__P=e,x=E.__r,O=0,"prototype"in L&&L.prototype.render){for(d.state=d.__s,d.__d=!1,x&&x(n),a=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do{d.__d=!1,x&&x(n),a=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++O<25);d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(v,y)),A=null!=a&&a.type===i&&null==a.key?a.props.children:a,p(e,Array.isArray(A)?A:[A],n,t,o,_,l,c,f,s),d.base=n.__e,n.__h=null,d.__h.length&&c.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=P(t.__e,n,t,o,_,l,c,s);(a=E.diffed)&&a(n)}catch(e){n.__v=null,(s||null!=l)&&(n.__e=f,n.__h=!!s,l[l.indexOf(f)]=null),E.__e(e,n,t)}}function w(e,n){E.__c&&E.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){E.__e(e,n.__v)}}))}function P(e,n,t,r,_,l,i,u){var f,s,a,d=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(_=!0),null!=l)for(;y<l.length;y++)if((f=l[y])&&"setAttribute"in f==!!v&&(v?f.localName===v:3===f.nodeType)){e=f,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,u=!1}if(null===v)d===h||u&&e.data===h||(e.data=h);else{if(l=l&&A.call(e.childNodes),s=(d=t.props||N).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!u){if(null!=l)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(a||s)&&(a&&(s&&a.__html==s.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,n,t,r,o){var _;for(_ in t)"children"===_||"key"===_||_ in n||m(e,_,null,t[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||m(e,_,n[_],t[_],r)}(e,h,d,_,u),a)n.__k=[];else if(y=n.props.children,p(e,Array.isArray(y)?y:[y],n,t,r,_&&"foreignObject"!==v,l,i,l?l[0]:t.__k&&c(t,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&o(l[y]);u||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==d.value)&&m(e,"value",y,d.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&m(e,"checked",y,d.checked,!1))}return e}function S(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){E.__e(e,t)}}function x(e,n,t){var r,_;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&x(r[_],n,t||"function"!=typeof e.type);t||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function C(e,n,t){return this.constructor(e,t)}function O(e,n,t){var r,o,l;E.__&&E.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,l=[],k(n,e=(!r&&t||n).__k=_(i,null,[e]),o||N,N,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?A.call(n.childNodes):null,l,!r&&t?t:o?o.__e:n.firstChild,r),w(l,e)}function T(e,n){O(e,n,T)}t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return _})),t.d(n,"c",(function(){return T})),t.d(n,"d",(function(){return E})),t.d(n,"e",(function(){return O}));var A,E,L,D,j,M,U,N={},I=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;A=I.slice,E={__e:function(e,n,t,r){for(var o,_,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(n){e=n}throw e}},L=0,u.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),s(this))},u.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),s(this))},u.prototype.render=i,D=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U=function(e,n){return e.__v.__b-n.__v.__b},a.__r=0},qVkA:function(e,n,t){"use strict";function r(e,n){if(!e||"string"==typeof e.type)return null;var t=e.__;if(t){var o=t.__k;if(o){Array.isArray(o)||(o=[o]);var _=o.indexOf(e);-1===_&&(_=o.length);for(var l=_;l--;){var i=o[l],u=i&&(i.__e||r(i,!0));if(u)return u}}return n?void 0:r(t)}}t.r(n);var o=t("hosL"),_={},l=function(e){function n(){var n=this;o.a.call(this),t||(this.componentWillMount=function(){e((function(e){t=e&&e.default||e,n.setState({})}))},this.shouldComponentUpdate=function(){return null!=t}),this.render=function(e){if(t)return Object(o.b)(t,e);var l=r(n.__v),i=l&&l.nextSibling||(n.__P||n._parentDom).firstChild;return i?3===i.nodeType?i.data:Object(o.b)(i.localName,{dangerouslySetInnerHTML:_}):void 0}}var t;return n.preload=e,(n.prototype=new o.a).constructor=n,n}((function(e){t.e(2).then(function(){var n=t("OPsQ");"function"==typeof e&&e(n)}.bind(null,t)).catch(t.oe)}));n.default=function(){return Object(o.b)("div",{id:"app"},Object(o.b)("main",null,Object(o.b)(l,null)))}}});
//# sourceMappingURL=bundle.a84e3.js.map
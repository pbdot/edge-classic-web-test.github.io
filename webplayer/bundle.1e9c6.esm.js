!function(e){function n(n){for(var t,r,l=n[0],_=n[1],i=0,c=[];i<l.length;i++)r=l[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(t in _)Object.prototype.hasOwnProperty.call(_,t)&&(e[t]=_[t]);for(u&&u(n);c.length;)c.shift()()}function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={},o={0:0};t.e=function(e){var n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var l=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=l);var _,i=document.createElement("script");i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.src=function(e){return t.p+""+({2:"route-home"}[e]||e)+".chunk."+{2:"c8459"}[e]+".esm.js"}(e);var u=new Error;_=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",u.name="ChunkLoadError",u.type=r,u.request=l,t[1](u)}o[e]=void 0}};var c=setTimeout((function(){_({type:"timeout",target:i})}),12e4);i.onerror=i.onload=_,document.head.appendChild(i)}return Promise.all(n)},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/edge-classic-web-test/webplayer/",t.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],_=l.push.bind(l);l.push=n,l=l.slice();for(var i=0;i<l.length;i++)n(l[i]);var u=_;t(t.s="Pq/i")}({"Pq/i":function(e,n,t){"use strict";t.r(n);var r=t("hosL");const{h:o,render:l,hydrate:_}=r,i=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("function"==typeof i(t("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=i(t("qVkA")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const s={preRenderData:r},f=r.url?u(r.url):"";(_&&f===u(location.pathname)?_:l)(o(n,{CLI_DATA:s}),document.body,e)};0,n()}},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function l(e,n,t){var r,o,l,i={};for(l in n)"key"==l?r=n[l]:"ref"==l?o=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?j.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return _(e,i,r,o,null)}function _(e,n,t,r,o){var l={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=M.vnode&&M.vnode(l),l}function i(){return{current:null}}function u(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function f(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return f(e)}}function p(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!a.__r++||I!==M.debounceRendering)&&((I=M.debounceRendering)||R)(a)}function a(){var e,n,t,o,l,_,i,u;for(W.sort(H);e=W.shift();)e.__d&&(n=W.length,o=void 0,l=void 0,i=(_=(t=e).__v).__e,(u=t.__P)&&(o=[],(l=r({},_)).__v=_.__v+1,x(u,_,l,t.__n,void 0!==u.ownerSVGElement,null!=_.__h?[i]:null,o,null==i?s(_):i,_.__h),P(o,_),_.__e!=i&&f(_)),W.length>n&&W.sort(H));a.__r=0}function d(e,n,t,r,o,l,i,c,f,p){var a,d,y,g,b,k,C,P=r&&r.__k||V,w=P.length;for(t.__k=[],a=0;a<n.length;a++)if(null!=(g=t.__k[a]=null==(g=n[a])||"boolean"==typeof g||"function"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?_(null,g,null,null,g):Array.isArray(g)?_(u,{children:g},null,null,null):g.__b>0?_(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(y=P[a])||y&&g.key==y.key&&g.type===y.type)P[a]=void 0;else for(d=0;d<w;d++){if((y=P[d])&&g.key==y.key&&g.type===y.type){P[d]=void 0;break}y=null}x(e,g,y=y||F,o,l,i,c,f,p),b=g.__e,(d=g.ref)&&y.ref!=d&&(C||(C=[]),y.ref&&C.push(y.ref,null,g),C.push(d,g.__c||b,g)),null!=b?(null==k&&(k=b),"function"==typeof g.type&&g.__k===y.__k?g.__d=f=h(g,f,e):f=v(e,g,y,P,b,f),"function"==typeof t.type&&(t.__d=f)):f&&y.__e==f&&f.parentNode!=e&&(f=s(y))}for(t.__e=k,a=w;a--;)null!=P[a]&&("function"==typeof t.type&&null!=P[a].__e&&P[a].__e==t.__d&&(t.__d=m(r).nextSibling),O(P[a],P[a]));if(C)for(a=0;a<C.length;a++)S(C[a],C[++a],C[++a])}function h(e,n,t){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,n="function"==typeof r.type?h(r,n,t):v(t,r,r,o,r.__e,n));return n}function y(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){y(e,n)})):n.push(e)),n}function v(e,n,t,r,o,l){var _,i,u;if(void 0!==n.__d)_=n.__d,n.__d=void 0;else if(null==t||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),_=null;else{for(i=l,u=0;(i=i.nextSibling)&&u<r.length;u+=1)if(i==o)break e;e.insertBefore(o,l),_=l}return void 0!==_?_:o.nextSibling}function m(e){var n,t,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(r=m(t)))return r;return null}function g(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||B.test(n)?t:t+"px"}function b(e,n,t,r,o){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||g(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||g(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?r||e.addEventListener(n,l?C:k,l):e.removeEventListener(n,l?C:k,l);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function k(e){return this.l[e.type+!1](M.event?M.event(e):e)}function C(e){return this.l[e.type+!0](M.event?M.event(e):e)}function x(e,n,t,o,l,_,i,s,f){var p,a,h,y,v,m,g,b,k,C,x,P,S,O,T,E=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(f=t.__h,s=n.__e=t.__e,n.__h=null,_=[s]),(p=M.__b)&&p(n);try{e:if("function"==typeof E){if(b=n.props,k=(p=E.contextType)&&o[p.__c],C=p?k?k.props.value:p.__:o,t.__c?g=(a=n.__c=t.__c).__=a.__E:("prototype"in E&&E.prototype.render?n.__c=a=new E(b,C):(n.__c=a=new c(b,C),a.constructor=E,a.render=A),k&&k.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=o,h=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=E.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=r({},a.__s)),r(a.__s,E.getDerivedStateFromProps(b,a.__s))),y=a.props,v=a.state,a.__v=n,h)null==E.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)||n.__v===t.__v){for(n.__v!==t.__v&&(a.props=b,a.state=a.__s,a.__d=!1),a.__e=!1,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),x=0;x<a._sb.length;x++)a.__h.push(a._sb[x]);a._sb=[],a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(y,v,m)}))}if(a.context=C,a.props=b,a.__P=e,P=M.__r,S=0,"prototype"in E&&E.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(n),p=a.render(a.props,a.state,a.context),O=0;O<a._sb.length;O++)a.__h.push(a._sb[O]);a._sb=[]}else do{a.__d=!1,P&&P(n),p=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++S<25);a.state=a.__s,null!=a.getChildContext&&(o=r(r({},o),a.getChildContext())),h||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(y,v)),T=null!=p&&p.type===u&&null==p.key?p.props.children:p,d(e,Array.isArray(T)?T:[T],n,t,o,l,_,i,s,f),a.base=n.__e,n.__h=null,a.__h.length&&i.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=w(t.__e,n,t,o,l,_,i,f);(p=M.diffed)&&p(n)}catch(e){n.__v=null,(f||null!=_)&&(n.__e=s,n.__h=!!f,_[_.indexOf(s)]=null),M.__e(e,n,t)}}function P(e,n){M.__c&&M.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){M.__e(e,n.__v)}}))}function w(e,n,t,r,l,_,i,u){var c,f,p,a=t.props,h=n.props,y=n.type,v=0;if("svg"===y&&(l=!0),null!=_)for(;v<_.length;v++)if((c=_[v])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){e=c,_[v]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),_=null,u=!1}if(null===y)a===h||u&&e.data===h||(e.data=h);else{if(_=_&&j.call(e.childNodes),f=(a=t.props||F).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!u){if(null!=_)for(a={},v=0;v<e.attributes.length;v++)a[e.attributes[v].name]=e.attributes[v].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,t,r,o){var l;for(l in t)"children"===l||"key"===l||l in n||b(e,l,null,t[l],r);for(l in n)o&&"function"!=typeof n[l]||"children"===l||"key"===l||"value"===l||"checked"===l||t[l]===n[l]||b(e,l,n[l],t[l],r)}(e,h,a,l,u),p)n.__k=[];else if(v=n.props.children,d(e,Array.isArray(v)?v:[v],n,t,r,l&&"foreignObject"!==y,_,i,_?_[0]:t.__k&&s(t,0),u),null!=_)for(v=_.length;v--;)null!=_[v]&&o(_[v]);u||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===y&&!v||"option"===y&&v!==a.value)&&b(e,"value",v,a.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&b(e,"checked",v,a.checked,!1))}return e}function S(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){M.__e(e,t)}}function O(e,n,t){var r,l;if(M.unmount&&M.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){M.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&O(r[l],n,t||"function"!=typeof e.type);t||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function A(e,n,t){return this.constructor(e,t)}function T(e,n,t){var r,o,_;M.__&&M.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,_=[],x(n,e=(!r&&t||n).__k=l(u,null,[e]),o||F,F,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?j.call(n.childNodes):null,_,!r&&t?t:o?o.__e:n.firstChild,r),P(_,e)}function E(e,n){T(e,n,E)}function L(e,n,t){var o,l,i,u=r({},e.props);for(i in n)"key"==i?o=n[i]:"ref"==i?l=n[i]:u[i]=n[i];return arguments.length>2&&(u.children=arguments.length>3?j.call(arguments,2):t),_(e.type,u,o||e.key,l||e.ref,null)}function D(e,n){var t={__c:n="__cC"+q++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some((function(e){e.__e=!0,p(e)}))},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"Component",(function(){return c})),t.d(n,"Fragment",(function(){return u})),t.d(n,"cloneElement",(function(){return L})),t.d(n,"createContext",(function(){return D})),t.d(n,"createElement",(function(){return l})),t.d(n,"createRef",(function(){return i})),t.d(n,"h",(function(){return l})),t.d(n,"hydrate",(function(){return E})),t.d(n,"isValidElement",(function(){return N})),t.d(n,"options",(function(){return M})),t.d(n,"render",(function(){return T})),t.d(n,"toChildArray",(function(){return y}));var j,M,U,N,W,I,R,H,q,F={},V=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;j=V.slice,M={__e:function(e,n,t,r){for(var o,l,_;n=n.__;)if((o=n.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(n){e=n}throw e}},U=0,N=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=u,W=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(e,n){return e.__v.__b-n.__v.__b},a.__r=0,q=0},qVkA:function(e,n,t){"use strict";function r(e,n){if(!e||"string"==typeof e.type)return null;const t=e.__;if(!t)return;let o=t.__k;if(o){Array.isArray(o)||(o=[o]);let n=o.indexOf(e);-1===n&&(n=o.length);for(let e=n;e--;){const n=o[e],t=n&&(n.__e||r(n,!0));if(t)return t}}return n?void 0:r(t)}t.r(n);var o=t("hosL");const l={};var _=function(e){function n(){o.Component.call(this),t||(this.componentWillMount=()=>{e((e=>{t=e&&e.default||e,this.setState({})}))},this.shouldComponentUpdate=()=>null!=t),this.render=e=>{if(t)return Object(o.h)(t,e);const n=r(this.__v),_=n&&n.nextSibling||(this.__P||this._parentDom).firstChild;return _?3===_.nodeType?_.data:Object(o.h)(_.localName,{dangerouslySetInnerHTML:l}):void 0}}let t;return n.preload=e,(n.prototype=new o.Component).constructor=n,n}((function(e){t.e(2).then(function(){var n=t("OPsQ");"function"==typeof e&&e(n)}.bind(null,t)).catch(t.oe)}));n.default=()=>Object(o.h)("div",{id:"app"},Object(o.h)("main",null,Object(o.h)(_,null)))}});
//# sourceMappingURL=bundle.1e9c6.esm.js.map
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/edge-classic-web-test/webplayer/",t(t.s="/Cyz")}({"+TSP":function(e,t,n){e.exports=self.fetch||(self.fetch=n("Cf1v").default||n("Cf1v"))},"/Cyz":function(e,t,n){(function(e){e.Promise||(e.Promise=n("5+HP").default),e.fetch||(e.fetch=n("+TSP"))}).call(this,n("pCvA"))},"5+HP":function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){this.name="AggregateError",this.errors=e,this.message=t||""}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e){return Boolean(e&&void 0!==e.length)}function f(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}l(t.promise,r)}else(1===e._state?l:a)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===i(t)||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void p(e);if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,p(e)}catch(t){a(e,t)}var r,o}function a(e,t){e._state=2,e._value=t,p(e)}function p(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function y(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,a(t,e))}))}catch(e){if(n)return;n=!0,a(t,e)}}n.r(t);var h=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},v=function(e){return new this((function(t,n){function o(e,n){if(n&&("object"===r(n)||"function"==typeof n)){var f=n.then;if("function"==typeof f)return void f.call(n,(function(t){o(e,t)}),(function(n){i[e]={status:"rejected",reason:n},0==--u&&t(i)}))}i[e]={status:"fulfilled",value:n},0==--u&&t(i)}if(!e||void 0===e.length)return n(new TypeError(r(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var u=i.length,f=0;f<i.length;f++)o(f,i[f])}))};o.prototype=Error.prototype;var m=function(e){var t=this;return new t((function(n,r){if(!e||void 0===e.length)return r(new TypeError("Promise.any accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return r();for(var u=[],f=0;f<i.length;f++)try{t.resolve(i[f]).then(n).catch((function(e){u.push(e),u.length===i.length&&r(new o(u,"All promises were rejected"))}))}catch(e){r(e)}}))},b=setTimeout;c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(f);return s(this,new y(e,t,n)),n},c.prototype.finally=h,c.all=function(e){return new c((function(t,n){function r(e,u){try{if(u&&("object"===i(u)||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,(function(t){r(e,t)}),n)}o[e]=u,0==--f&&t(o)}catch(e){n(e)}}if(!u(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var f=o.length,c=0;c<o.length;c++)r(c,o[c])}))},c.any=m,c.allSettled=v,c.resolve=function(e){return e&&"object"===i(e)&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,n){n(e)}))},c.race=function(e){return new c((function(t,n){if(!u(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)c.resolve(e[r]).then(t,n)}))},c._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){b(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};t.default=c},Cf1v:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],u=[],f={},c=function e(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:e,headers:{keys:function(){return i},entries:function(){return u},get:function(e){return f[e.toLowerCase()]},has:function(e){return e.toLowerCase()in f}}}};for(var s in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){i.push(t=t.toLowerCase()),u.push([t,n]),f[t]=f[t]?f[t]+","+n:n})),n(c())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(s,t.headers[s]);o.send(t.body||null)}))}},pCvA:function(e){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":t(window))&&(n=window)}e.exports=n}});
//# sourceMappingURL=polyfills.b040d.js.map
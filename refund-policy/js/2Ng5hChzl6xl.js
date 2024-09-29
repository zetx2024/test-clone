(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4606],{7145:function(e,t,n){"use strict";var r=n(83454);function o(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var i="object"==typeof r;function a(e,t){if(!e){if(i)throw Error("Invariant failed");throw Error(t())}}t.invariant=a;var u=Object.prototype.hasOwnProperty,c=Array.prototype.splice,s=Object.prototype.toString;function l(e){return s.call(e).slice(8,-1)}var f=Object.assign||function(e,t){return p(t).forEach(function(n){u.call(t,n)&&(e[n]=t[n])}),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?f(e.constructor(e.length),e):"Map"===l(e)?new Map(e):"Set"===l(e)?new Set(e):e&&"object"==typeof e?f(Object.create(Object.getPrototypeOf(e)),e):e}var h=function(){function e(){this.commands=f({},y),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return new e().update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,r="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(r)||a(!Array.isArray(r),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),a("object"==typeof r&&null!==r,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."});var o=e;return p(r).forEach(function(t){if(u.call(n.commands,t)){var i=e===o;o=n.commands[t](r[t],o,r,e),i&&n.isEquals(o,e)&&(o=e)}else{var a="Map"===l(e)?n.update(e.get(t),r[t]):n.update(e[t],r[t]),c="Map"===l(o)?o.get(t):o[t];n.isEquals(a,c)&&(void 0!==a||u.call(e,t))||(o===e&&(o=d(e)),"Map"===l(o)?o.set(t,a):o[t]=a)}}),o},e}();t.Context=h;var y={$push:function(e,t,n){return g(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return g(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,r){var i;return a(Array.isArray(i=t),function(){return"Expected $splice target to be an array; got "+o(i)}),b(n.$splice),e.forEach(function(e){b(e),t===r&&e.length&&(t=d(r)),c.apply(t,e)}),t},$set:function(e,t,n){return a(1===Object.keys(n).length,function(){return"Cannot have more than one key in an object with $set"}),e},$toggle:function(e,t){v(e,"$toggle");var n=e.length?d(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},$unset:function(e,t,n,r){return v(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=d(r)),delete t[e])}),t},$add:function(e,t,n,r){return w(t,"$add"),v(e,"$add"),"Map"===l(t)?e.forEach(function(e){var n=e[0],o=e[1];t===r&&t.get(n)!==o&&(t=d(r)),t.set(n,o)}):e.forEach(function(e){t!==r||t.has(e)||(t=d(r)),t.add(e)}),t},$remove:function(e,t,n,r){return w(t,"$remove"),v(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=d(r)),t.delete(e)}),t},$merge:function(e,t,n,r){var i;return i=t,a(e&&"object"==typeof e,function(){return"update(): $merge expects a spec of type 'object'; got "+o(e)}),a(i&&"object"==typeof i,function(){return"update(): $merge expects a target of type 'object'; got "+o(i)}),p(e).forEach(function(n){e[n]!==t[n]&&(t===r&&(t=d(r)),t[n]=e[n])}),t},$apply:function(e,t){return a("function"==typeof e,function(){return"update(): expected spec of $apply to be a function; got "+o(e)+"."}),e(t)}},m=new h;function g(e,t,n){a(Array.isArray(e),function(){return"update(): expected target of "+o(n)+" to be an array; got "+o(e)+"."}),v(t[n],n)}function v(e,t){a(Array.isArray(e),function(){return"update(): expected spec of "+o(t)+" to be an array; got "+o(e)+". Did you forget to wrap your parameter in an array?"})}function b(e){a(Array.isArray(e),function(){return"update(): expected spec of $splice to be an array of arrays; got "+o(e)+". Did you forget to wrap your parameters in an array?"})}function w(e,t){var n=l(e);a("Map"===n||"Set"===n,function(){return"update(): "+o(t)+" expects a target of type Set or Map; got "+o(n)})}t.isEquals=m.update.isEquals,t.extend=m.extend,t.default=m.update,t.default.default=e.exports=f(t.default,t)},83454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(77663)},24978:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/refund-policy",function(){return n(27451)}])},27451:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(85893);n(67294),n(89830),n(63377),n(93318);var o=n(7468),i=n(45508);function a(e){return(0,i.Z)(),(0,r.jsxs)("div",{className:"bg-gray-900 text-white",children:[(0,r.jsx)(o.wp,{}),(0,r.jsx)("div",{class:"my-16 content",children:(0,r.jsxs)("div",{class:"mx-8 space-y-4",children:[(0,r.jsx)("h3",{children:"We are sorry you had to visit this page."}),(0,r.jsx)("p",{class:"text-sm",children:"At Proshtuti.com, we are committed to providing exceptional value and service."}),(0,r.jsx)("p",{class:"text-sm",children:"By completing your subscription purchase, you acknowledge and agree that the sale is final and non-refundable. We encourage our customers to review all subscription details before finalizing a purchase."}),(0,r.jsx)("p",{class:"text-sm",children:"Our customer support team remains available to assist you with any questions or concerns you may have regarding your subscription."}),(0,r.jsx)("p",{class:"text-sm",children:"By purchasing a subscription, you are agreeing to our terms and conditions and the no-refund policy. Your satisfaction is important to us, and we are here to support you in making the most of your subscription."})]})}),(0,r.jsx)(o.$_,{})]})}},45508:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294);function o(){(0,r.useEffect)(()=>(document.documentElement.classList.add("dark"),()=>{document.documentElement.classList.remove("dark")}),[])}},77663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c=[],s=!1,l=-1;function f(){s&&r&&(s=!1,r.length?c=r.concat(c):l=-1,c.length&&p())}function p(){if(!s){var e=u(f);s=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||s||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},82911:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))});t.Z=o},13245:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))});t.Z=o},51446:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))});t.Z=o},66610:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"}))});t.Z=o},31415:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}},function(e){e.O(0,[8907,5121,1664,5889,4863,3048,6005,7536,3947,7468,50,9774,2888,179],function(){return e(e.s=24978)}),_N_E=e.O()}]);
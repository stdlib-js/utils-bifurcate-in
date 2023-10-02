// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var o=["values","keys","*"];function l(r,s){return e(s)?(n(s,"thisArg")&&(r.thisArg=s.thisArg),n(s,"returns")&&(r.returns=s.returns,-1===i(o,r.returns))?new TypeError(t("1Rv2X,3g,4S,GD,Gg,Jm","returns",o.join('", "'),r.returns)):null):new TypeError(t("1Rv2V,FD",s))}function h(r,s,t){var e,n,i,o,l;for(i in e=s.thisArg,n=[[],[]],o=!0,r)o=!1,l=r[i],t.call(e,l,i)?n[0].push(l):n[1].push(l);return o&&(n.length=0),n}function u(r,s,t){var e,n,i,o;for(i in e=s.thisArg,n=[[],[]],o=!0,r)o=!1,t.call(e,r[i],i)?n[0].push(i):n[1].push(i);return o&&(n.length=0),n}function d(r,s,t){var e,n,i,o,l;for(i in e=s.thisArg,n=[[],[]],o=!0,r)o=!1,l=r[i],t.call(e,l,i)?n[0].push([i,l]):n[1].push([i,l]);return o&&(n.length=0),n}function m(e,n,i){var o,m,p;if(!r(e))throw new TypeError(t("1Rv3L,Gc",e));if(o={returns:"values"},2===arguments.length)p=n;else{if(m=l(o,n))throw m;p=i}if(!s(p))throw new TypeError(t("1Rv3q,JV",p));return"values"===o.returns?h(e,o,p):"keys"===o.returns?u(e,o,p):d(e,o,p)}export{m as default};
//# sourceMappingURL=index.mjs.map

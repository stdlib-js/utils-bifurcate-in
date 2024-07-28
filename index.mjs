// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";var o=["values","keys","*"];function l(l,h,u){var d,p,m;if(!r(l))throw new TypeError(t("1Rv3L",l));if(d={returns:"values"},2===arguments.length)m=h;else{if(p=function(r,s){return e(s)?(n(s,"thisArg")&&(r.thisArg=s.thisArg),n(s,"returns")&&(r.returns=s.returns,-1===i(o,r.returns))?new TypeError(t("1Rv4S","returns",o.join('", "'),r.returns)):null):new TypeError(t("1Rv2V",s))}(d,h),p)throw p;m=u}if(!s(m))throw new TypeError(t("1Rv3q",m));return"values"===d.returns?function(r,s,t){var e,n,i,o,l;for(i in e=s.thisArg,n=[[],[]],o=!0,r)o=!1,l=r[i],t.call(e,l,i)?n[0].push(l):n[1].push(l);return o&&(n.length=0),n}(l,d,m):"keys"===d.returns?function(r,s,t){var e,n,i,o;for(i in e=s.thisArg,n=[[],[]],o=!0,r)o=!1,t.call(e,r[i],i)?n[0].push(i):n[1].push(i);return o&&(n.length=0),n}(l,d,m):function(r,s,t){var e,n,i,o,l;for(i in e=s.thisArg,n=[[],[]],o=!0,r)o=!1,l=r[i],t.call(e,l,i)?n[0].push([i,l]):n[1].push([i,l]);return o&&(n.length=0),n}(l,d,m)}export{l as default};
//# sourceMappingURL=index.mjs.map
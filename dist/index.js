"use strict";var f=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var h=f(function(H,g){
var k=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/utils-index-of/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),c=["values","keys","*"];function E(e,t){return k(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"returns")&&(e.returns=t.returns,O(c,e.returns)===-1)?new TypeError(o('1Rv4S',"returns",c.join('", "'),e.returns)):null):new TypeError(o('1Rv2V',t));}g.exports=E
});var p=f(function(J,m){
function I(e,t,v){var u,a,r,i,n,s;u=t.thisArg,r=[[],[]],n=!0;for(i in e)n=!1,s=e[i],a=v.call(u,s,i),a?r[0].push(s):r[1].push(s);return n&&(r.length=0),r}m.exports=I
});var y=f(function(M,q){
function T(e,t,v){var u,a,r,i,n;u=t.thisArg,r=[[],[]],n=!0;for(i in e)n=!1,a=v.call(u,e[i],i),a?r[0].push(i):r[1].push(i);return n&&(r.length=0),r}q.exports=T
});var w=f(function(N,b){
function V(e,t,v){var u,a,r,i,n,s;u=t.thisArg,r=[[],[]],n=!0;for(i in e)n=!1,s=e[i],a=v.call(u,s,i),a?r[0].push([i,s]):r[1].push([i,s]);return n&&(r.length=0),r}b.exports=V
});var x=f(function(Q,d){
var F=require('@stdlib/assert-is-object-like/dist'),L=require('@stdlib/assert-is-function/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),P=h(),K=p(),z=y(),B=w();function C(e,t,v){var u,a,r;if(!F(e))throw new TypeError(A('1Rv3L',e));if(u={returns:"values"},arguments.length===2)r=t;else{if(a=P(u,t),a)throw a;r=v}if(!L(r))throw new TypeError(A('1Rv3q',r));return u.returns==="values"?K(e,u,r):u.returns==="keys"?z(e,u,r):B(e,u,r)}d.exports=C
});var D=x();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

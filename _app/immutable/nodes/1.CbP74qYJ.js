import{a as h,b as $}from"../chunks/disclose-version.CQ1DD6PQ.js";import{B as x,C as i,z as w,D as f,E as y,F as E,G as m,I as k,J as a,K as z,L as B,M as C,w as D,f as F,N as b,s as p,O as G,y as I,P as l}from"../chunks/runtime.CHk9PFAs.js";import{s as g}from"../chunks/render.8oHGWyRG.js";import{s as J}from"../chunks/entry.Deo5CnNs.js";function K(){const s=w,e=s.l.u;e&&(e.b.length&&x(()=>{d(s),f(e.b)}),i(()=>{const t=y(()=>e.m.map(E));return()=>{for(const r of t)typeof r=="function"&&r()}}),e.a.length&&i(()=>{d(s),f(e.a)}))}function d(s){if(s.l.s)for(const e of s.l.s)m(e);k(s.s)}function L(s,e,t){if(s==null)return e(void 0),a;const r=s.subscribe(e,t);return r.unsubscribe?()=>r.unsubscribe():r}function M(s,e,t){const r=t[e]??(t[e]={store:null,source:B(void 0),unsubscribe:a});if(r.store!==s)if(r.unsubscribe(),r.store=s??null,s==null)r.source.v=void 0,r.unsubscribe=a;else{var u=!0;r.unsubscribe=L(s,n=>{u?r.source.v=n:C(r.source,n)}),u=!1}return m(r.source)}function N(){const s={};return z(()=>{for(var e in s)s[e].unsubscribe()}),s}const O=()=>{const s=J;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return O().page.subscribe(s)}};var S=$("<h1> </h1> <p> </p>",1);function Q(s,e){D(e,!1);const t=N(),r=()=>M(P,"$page",t);K();var u=S(),n=F(u),v=b(n);l(n);var o=p(p(n)),_=b(o);l(o),G(()=>{var c;g(v,r().status),g(_,(c=r().error)==null?void 0:c.message)}),h(s,u),I()}export{Q as component};

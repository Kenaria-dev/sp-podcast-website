import{a as h,t as $}from"../chunks/disclose-version.BhT1kNQh.js";import{A as x,B as i,y,C as f,D as E,E as k,F as m,G as w,I as a,J as A,K as B,L as C,v as D,f as F,M as b,s as p,N as G,x as I,O as l}from"../chunks/runtime.DyNtDZs9.js";import{s as g}from"../chunks/render.Rh3nv1NA.js";import{s as J}from"../chunks/entry.sNuYFIPq.js";function K(){const s=y,e=s.l.u;e&&(e.b.length&&x(()=>{d(s),f(e.b)}),i(()=>{const t=E(()=>e.m.map(k));return()=>{for(const r of t)typeof r=="function"&&r()}}),e.a.length&&i(()=>{d(s),f(e.a)}))}function d(s){if(s.l.s)for(const e of s.l.s)m(e);w(s.s)}function L(s,e,t){if(s==null)return e(void 0),a;const r=s.subscribe(e,t);return r.unsubscribe?()=>r.unsubscribe():r}function M(s,e,t){const r=t[e]??(t[e]={store:null,source:B(void 0),unsubscribe:a});if(r.store!==s)if(r.unsubscribe(),r.store=s??null,s==null)r.source.v=void 0,r.unsubscribe=a;else{var u=!0;r.unsubscribe=L(s,n=>{u?r.source.v=n:C(r.source,n)}),u=!1}return m(r.source)}function N(){const s={};return A(()=>{for(var e in s)s[e].unsubscribe()}),s}const O=()=>{const s=J;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},S={subscribe(s){return O().page.subscribe(s)}};var j=$("<h1> </h1> <p> </p>",1);function Q(s,e){D(e,!1);const t=N(),r=()=>M(S,"$page",t);K();var u=j(),n=F(u),v=b(n);l(n);var o=p(p(n)),_=b(o);l(o),G(()=>{var c;g(v,r().status),g(_,(c=r().error)==null?void 0:c.message)}),h(s,u),I()}export{Q as component};

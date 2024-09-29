"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3947],{3947:function(e,a,t){t.d(a,{Z:function(){return g},b:function(){return f}});var r=t(85893),i=t(54346),l=t(63771),n=t(13746),s=t(41664),o=t.n(s),d=t(11163),c=t(67294),h=t(40914),m=t(37106),u=t(58192);let x=e=>{let{Icon:a,name:t,href:i,active:l,childs:n,level:s=0,pathname:d}=e,h=(e,a)=>{var t;return null!==(t=null==e?void 0:e.some(e=>a===e.href))&&void 0!==t&&t},[f,g]=(0,c.useState)(()=>h(n,d)),v=(0,u.U0)();return(0,r.jsxs)("div",{children:[n?(0,r.jsxs)("button",{onClick:()=>{g(!f)},className:"w-full hover:bg-v2-gray_100 hover:dark:bg-v2-gray_500 text-gray-700 dark:text-gray-300 flex justify-between items-center md:rounded-xl px-4 py-2 text-sm leading-6 xl:text-base font-normal tracking-tight ml-".concat(s),children:[(0,r.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,r.jsx)(a,{className:"sidebar-icon"}),(0,r.jsx)("span",{children:t})]}),f?(0,r.jsx)(m.YRR,{className:"sidebar-icon"}):(0,r.jsx)(m.YeS,{className:"sidebar-icon"})]}):(0,r.jsxs)(o(),{onClick:()=>{v.capture("Sidebar ".concat(t," Clicked"))},href:i,className:"".concat(l?"sidebar-tab-active":"sidebar-tab-inactive"," ml-").concat(s),children:[(0,r.jsx)(a,{className:"sidebar-icon"}),(0,r.jsx)("span",{children:t})]}),n&&f&&n.map(e=>(0,r.jsx)(x,{Icon:e.Icon,name:e.name,href:e.href,active:e.href==d,level:s+4}))]})},f=()=>{let e=(0,u.U0)(),a=(0,d.useRouter)();return a.isReady?((0,c.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("theme"),r=t||(e?"dark":"light");a.query.theme&&(r=a.query.theme),"dark"===r?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark"),localStorage.setItem("theme",r)},[]),(0,r.jsxs)("button",{className:"rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 p-1",onClick:()=>{e.capture("Theme Switched");let a=localStorage.getItem("theme")||"light";"dark"===a?document.querySelector("html").classList.remove("dark"):document.querySelector("html").classList.add("dark"),localStorage.setItem("theme","dark"===a?"light":"dark")},type:"button",children:[(0,r.jsx)(i.Z,{className:"w-5 h-5 block dark:hidden"}),(0,r.jsx)(l.Z,{className:"w-5 h-5 hidden dark:block"})]})):null};function g(e){var a,t,i,l;let{children:s,items:m,type:g="main"}=e,v=(0,d.useRouter)(),[p,k]=(0,c.useState)(!1),j=v.pathname,w=(0,h.Z)(g),b=(0,u.U0)(),N=w||{},y=N.thumbnail||"https://www.gravatar.com/avatar/".concat(N.md5,"?d=robohash");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"app:hidden",children:[(0,r.jsx)("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72 lg:flex-col",children:(0,r.jsxs)("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto md:border-r border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-6",children:[(0,r.jsxs)("div",{className:"flex h-20 shrink-0 items-center justify-between",children:[(0,r.jsx)(o(),{onClick:()=>b.capture("Sidebar Logo Cliked"),href:"main"!=g?"/".concat(g,"/dashboard"):"/dashboard",children:(0,r.jsx)("img",{className:"h-12 w-auto dark:hidden",src:(null==v?void 0:null===(a=v.query)||void 0===a?void 0:a.teacher)&&"/exam/[id]"==j?"https://www.porikkhok.com/img/porikkhok-light.png":m.logo||"/img/logo.png",alt:"Chorcha Logo"})}),(0,r.jsx)(o(),{onClick:()=>b.capture("Sidebar Logo Cliked"),href:"main"!=g?"/".concat(g,"/dashboard"):"/dashboard",children:(0,r.jsx)("img",{className:"h-12 w-auto hidden dark:block",src:(null==v?void 0:null===(t=v.query)||void 0===t?void 0:t.teacher)&&"/exam/[id]"==j?"https://www.porikkhok.com/img/porikkhok-dark.png":m.logo_dark||"/img/logo-dark.png",alt:"Chorcha Logo "})}),(0,r.jsx)(f,{})]}),(0,r.jsx)("nav",{className:"flex flex-1 flex-col",children:(0,r.jsxs)("div",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{role:"list",className:"-mx-2 space-y-1",children:["undefined"!=typeof timer?(0,r.jsx)("div",{className:"flex justify-center mb-10",children:(0,r.jsx)("span",{id:"timeLeft","data-left":"<%-1 + Math.floor((endTime - Date.now()) / 1000)%>",className:"text-red-600 font-bold text-2xl timeLeft",children:"XX:YY"})}):null,m.nav_header&&(0,r.jsx)(o(),{href:m.nav_header.href,children:(0,r.jsxs)("div",{className:"flex items-center mb-4",children:[(0,r.jsx)("button",{className:"icon-button",children:(0,r.jsx)(m.nav_header.Icon,{className:"icon"})}),(0,r.jsx)("label",{children:m.nav_header.name})]})}),m.nav_items.map((e,a)=>!e.auth||(null==N?void 0:N._id)?(0,r.jsx)(x,{name:e.name,Icon:e.Icon,childs:e.childs,href:"/profile"==e.href?"/users/".concat(N._id):e.href,active:e.href==j,pathname:j},e.href):null)]})}),("main"==g||"ems"==g)&&(0,r.jsx)("div",{className:"-mx-6 mt-auto",children:(null==N?void 0:N._id)?(0,r.jsx)(o(),{onClick:()=>b.capture("Sidebar Settings Clicked"),href:"ems"==g?"/ems/settings":"/settings",children:(0,r.jsxs)("div",{className:"flex items-center gap-x-4 px-6 py-6 leading-6",children:[(0,r.jsx)("img",{className:"h-10 w-10 rounded-sm object-cover bg-gray-50",src:y,alt:""}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"text-sm font-medium",children:N.name}),(0,r.jsx)("span",{"aria-hidden":"true",className:"text-xs font-light",children:N.school})]})]})}):(0,r.jsx)(o(),{onClick:()=>b.capture("Sidebar Join Now Clicked"),href:"/auth/register",className:"btn btn-primary m-3",children:"Join Now"})})]})})]})}),(0,r.jsxs)("div",{id:"openSidebarParent",className:"sticky top-0 z-40 flex items-center justify-between px-4 py-2 shadow-sm sm:px-6 lg:hidden border-none relative",children:[(0,r.jsx)("div",{className:"flex justify-center items-center gap-x-4",children:(0,r.jsx)("button",{id:"openSidebar",type:"button",className:"-m-2.5 p-2.5 lg:hidden",onClick:()=>{b.capture("Sidebar Opened"),k(e=>!0^e)},children:(0,r.jsx)(n.Z,{className:"h-6 w-6"})})}),(0,r.jsxs)("div",{className:"absolute left-1/2 transform -translate-x-1/2",children:[(0,r.jsx)("img",{className:"h-8 w-auto dark:hidden",src:(null==v?void 0:null===(i=v.query)||void 0===i?void 0:i.teacher)&&"/exam/[id]"==j?"https://www.porikkhok.com/img/porikkhok-light.png":m.logo||"/img/logo.png",alt:"Chorcha Logo "}),(0,r.jsx)("img",{className:"h-8 w-auto hidden dark:block",src:(null==v?void 0:null===(l=v.query)||void 0===l?void 0:l.teacher)&&"/exam/[id]"==j?"https://www.porikkhok.com/img/porikkhok-dark.png":m.logo_dark||"/img/logo-dark.png",alt:"Chorcha Logo "})]}),(0,r.jsxs)("div",{className:"flex  items-center gap-3",children:[(0,r.jsx)(f,{}),"undefined"!=typeof timer?(0,r.jsx)("span",{id:"timeLeft","data-left":"<%-1 + Math.floor((endTime - Date.now()) / 1000)%>",className:"timeLeft text-red-600 font-bold text-2xl ",children:"XX:YY"}):null,("main"==g||"ems"==g)&&(0,r.jsx)("div",{className:"relative",children:(null==N?void 0:N._id)?(0,r.jsx)(o(),{href:"ems"==g?"/ems/settings":"/settings",children:(0,r.jsx)("div",{className:"rounded-lg",children:(0,r.jsx)("img",{src:y,className:"h-8 w-8 rounded-sm object-cover"})})}):(0,r.jsx)(o(),{href:"/auth/register",className:"btn btn-primary",children:"Join"})})]})]}),(0,r.jsx)("div",{id:"mobileNav",className:"".concat(p?"":"hidden"," shadow-sm "),children:(0,r.jsx)("nav",{className:"flex flex-1 flex-col",children:m.nav_items.map((e,a)=>!e.auth||(null==N?void 0:N._id)?(0,r.jsx)(x,{name:e.name,Icon:e.Icon,childs:e.childs,href:"/profile"==e.href?"/users/".concat(N._id):e.href,active:e.href==j,pathname:j},e.href):null)})})]}),s]})}},63377:function(e,a,t){t.d(a,{BK:function(){return o},U2:function(){return n},ZJ:function(){return d},v_:function(){return s}});var r=t(5121);let i="https://proshtuti.com",l={"x-chorcha-mode":"api"};async function n(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{let s=await r.Z.get(i+e,{withCredentials:!0,params:a||{},headers:{...l,Authorization:t?"Bearer ".concat(t):""}});if(n)return s;return s.data}catch(e){return{status:"error",data:"Network Error"}}}async function s(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var n,s,o,d,c,h;let m=await r.Z.post(i+e,a,{withCredentials:!0,headers:l});if(null==m?void 0:null===(s=m.data)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.auth)return window.location.href="/auth/register?redirect=".concat(window.location.pathname),{};if("string"==typeof(null===(o=m.data)||void 0===o?void 0:o.data)&&(null==m?void 0:null===(c=m.data)||void 0===c?void 0:null===(d=c.data)||void 0===d?void 0:d.search("upgrade"))!=-1){console.log("user confirm for upgrade");let a=window.confirm(null==m?void 0:null===(h=m.data)||void 0===h?void 0:h.data);return a&&(e.startsWith("/ems")?window.location="/ems/upgrade":window.location="/upgrade"),{}}if(t)return m;return m.data}catch(e){return console.log(e),{status:"error",data:"Network Error"}}}async function o(e,a){try{let t=await r.Z.post(i+e,a,{headers:{"Content-Type":"multipart/form-data",...l},withCredentials:!0});return t.data}catch(e){return{status:"error",data:"Network Error"}}}async function d(e){try{let a=await r.Z.delete(i+e,{withCredentials:!0,headers:l});return a.data}catch(e){return{status:"error",data:"Network Error"}}}},40914:function(e,a,t){t.d(a,{Z:function(){return n}});var r=t(59734),i=t(63377),l=t(67294);function n(){var e,a;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",{data:n}=(0,r.ZP)(t&&"main"!=t?"/".concat(t,"/_profile"):"/_profile",i.U2),[s,o]=(0,l.useState)(null);return(0,l.useEffect)(()=>{var e,a;(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.user)&&localStorage.setItem(t?"@profile-".concat(t):"@profile",JSON.stringify(null==n?void 0:null===(a=n.data)||void 0===a?void 0:a.user))},[n,t]),(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.user)||("undefined"!=typeof window?null===(a=window)||void 0===a?void 0:a.user:null)}}}]);
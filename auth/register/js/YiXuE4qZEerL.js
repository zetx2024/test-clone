(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{53829:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return s(87267)}])},81991:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(85893);s(67294);var n=s(64055);function r(e){let{size:t}=e;return"large"==t?(0,a.jsx)(n.Z,{size:40,color:"gray"}):(0,a.jsxs)("svg",{className:"animate-spin h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},87267:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var a=s(85893),n=s(67294),r=s(81991),l=s(63377),i=s(31415),o=s(51446),c=s(48974),d=s(57292),u=s(82911),x=s(11163),h=s(59734),m=s(81872),f=s(58192);function g(e){let{label:t,setProperty:s,setPage:n,property:r,page:l,header:i,placeholder:o}=e;return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"mb-4",children:i}),(0,a.jsx)("h1",{className:"font-semibold text-gray-700 text-sm mb-2",children:t}),(0,a.jsx)("input",{onChange:e=>{s(e.target.value)},type:"text",placeholder:o,className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",value:r}),(0,a.jsx)("button",{onClick:()=>{n(l)},className:"rounded-xl mt-8 w-full flex justify-center text-lg font-medium ".concat(r?"bg-brand text-white":"bg-gray-200 text-gray-600 cursor-not-allowed"," p-4"),disabled:!r,children:(0,a.jsx)("span",{children:"এগিয়ে যাও"})})]})}let p={HSC:"SCIENCE",ARTS:"ARTS",COMMERCE:"COMMERCE"};function b(e){var t,s,b;let{redirect:j}=e,[w,v]=(0,n.useState)(1),[y,N]=(0,n.useState)(""),[C,k]=(0,n.useState)(""),[S,_]=(0,n.useState)(""),[E,Z]=(0,n.useState)(""),[O,B]=(0,n.useState)(""),[P,F]=(0,n.useState)(""),[H,M]=(0,n.useState)(""),[L,T]=(0,n.useState)(!1),[R,X]=(0,n.useState)(""),[z,A]=(0,n.useState)(""),[W,q]=(0,n.useState)(""),[J,I]=(0,n.useState)(!1),[V,U]=(0,n.useState)(""),[$,G]=(0,n.useState)(null),[D,K]=(0,n.useState)(!1),[Q,Y]=(0,n.useState)(!1),[ee,et]=(0,n.useState)(2),es={1:249,2:499,3:599,6:999,12:1799};async function ea(e,t,s){let a=await fetch("/payments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({duration:e,price:s,from:"subscribe",phone:t})});console.log(a);let n=await a.json();return n.data.url}let en=(0,f.U0)();(0,n.useEffect)(()=>{F("BCS"===E||"JOB"===E?"BCS_44":"HSC_23")},[E]),(0,n.useEffect)(()=>{if(R||z){Y(!1);let e=setTimeout(()=>{Y(!0)},3e3);return()=>clearTimeout(e)}},[R,z]);let er=(0,x.useRouter)(),el=(0,h.ZP)("/_profile",l.U2);(null==el?void 0:null===(b=el.data)||void 0===b?void 0:null===(s=b.data)||void 0===s?void 0:null===(t=s.user)||void 0===t?void 0:t._id)&&er.push("/dashboard");let ei=()=>{K(!0);let e=30;G(30);let t=setInterval(()=>{G(--e),e<=0&&(clearInterval(t),K(!1))},1e3)};return(0,n.useEffect)(()=>{7==w&&ei()},[w]),(0,a.jsx)("div",{className:"font-medium text-base  text-black bg-brand-extralight",children:(0,a.jsx)("div",{className:"flex justify-center items-start h-screen",children:(0,a.jsxs)("div",{className:"w-full max-w-lg mx-8 mt-20 lg:mt-32",children:[(0,a.jsx)("div",{className:"flex justify-center ",children:(0,a.jsx)("img",{className:"mb-8 w-10 h-10 ",src:"/img/logo.png",alt:""})}),(0,a.jsxs)("div",{className:"".concat(R?"":"hidden"," ").concat(Q?"fade-out":""," rounded-md mb-4 text-start border border-dashed border-red-700 bg-red-200 text-red-900 px-4 py-2 text-xxs flex justify-between items-center"),children:[(0,a.jsx)("span",{children:R}),(0,a.jsx)("button",{className:"",onClick:()=>{X(null),Y(!1)},children:(0,a.jsx)(i.Z,{className:"h-3 w-3"})})]}),(0,a.jsxs)("div",{className:"".concat(z?"":"hidden"," ").concat(Q?"fade-out":""," rounded-md mb-4 text-start border border-dashed border-lime-700 bg-lime-200 text-lime-900 px-4 py-2 text-xxs flex justify-between items-center"),children:[(0,a.jsx)("span",{children:z}),(0,a.jsx)("button",{className:"",onClick:()=>{A(null),Y(!1)},children:(0,a.jsx)(i.Z,{className:"h-3 w-3"})})]}),1==w?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,a.jsx)("h1",{className:"mb-8",children:"মোবাইল নাম্বার"}),(0,a.jsx)("input",{onChange:e=>{k(e.target.value)},type:"text",placeholder:"01XXXXXXXXX",className:"text-lg font-medium px-4 py-4 rounded-xl border text-gray-600 bg-white shadow-xl border-none focus:border-gray-600",value:C}),(0,a.jsxs)("div",{className:"".concat(L?"w-full":"hidden"),children:[(0,a.jsxs)("div",{className:"my-2 flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"text-base font-semibold text-gray-600",children:"Password"}),(0,a.jsx)("button",{onClick:async()=>{let e=await (0,l.v_)("/auth/forgot",{email:C});A(e.data.message)},className:"text-blue-700 text-sm font-semibold",children:"Forgot Passowrd"})]}),(0,a.jsx)("input",{onChange:e=>{q(e.target.value)},type:"password",className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl"})]}),(0,a.jsx)("button",{onClick:async()=>{if(C.match(/^01[0-9]{9}$/)){I(!0);let e=await (0,l.U2)("/auth/check?phone=".concat(C));I(!1),"Login"==e.data?T(!0):"OTP"==e.data?v(7):v(2)}},className:"".concat(L?"hidden":""," rounded-xl mt-8 w-full flex justify-center text-lg font-medium shadow-xl ").concat(C.match(/^01[0-9]{9}$/)?"bg-brand text-white":"bg-gray-200 text-gray-600"," p-4"),children:(0,a.jsx)("span",{children:J?(0,a.jsx)(r.Z,{}):"শুরু করো"})}),(0,a.jsx)("button",{onClick:async()=>{X(null),A(null),I(!0);let e=await (0,l.v_)("/auth/login",{email:C,password:W,redirect:j});"error"==e.status?X(e.data):"success"==e.status&&(en.identify(e.data.user._id,{email:e.data.user.email,phone:e.data.user.phone,name:e.data.user.name}),er.push(er.query.redirect||"/dashboard")),I(!1)},className:"".concat(L?"":"hidden"," rounded-xl mt-8 w-full flex justify-center shadow-xl text-xl font-medium ").concat(W?"bg-brand text-white":"bg-gray-300 text-gray-600"," p-4"),children:(0,a.jsx)("span",{children:J?(0,a.jsx)(r.Z,{}):"শুরু করো"})}),(0,a.jsxs)("div",{className:"flex w-full items-center gap-2 mt-4",children:[(0,a.jsx)("a",{className:"rounded-xl space-x-2 py-4 w-full flex justify-center items-center shadow-xl bg-[#1877F2] text-white",href:"https://www.facebook.com/v17.0/dialog/oauth?client_id=".concat("678509247656781","&redirect_uri=").concat("https://new.proshtuti.com/auth/finish","&state=fblogin"),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{fill:"white",d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})}),(0,a.jsx)("a",{className:"rounded-xl space-x-2 py-4 w-full flex justify-center items-center bg-white shadow-xl text-black",href:"https://accounts.google.com/o/oauth2/v2/auth?client_id=190970597107-saq4qhuc6shea2p7jj20cmq9pf43givb.apps.googleusercontent.com&redirect_uri=https://proshtuti.com/auth/finish&response_type=code&state=google&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile https://www.googleapis.com/auth/userinfo.email",children:(0,a.jsx)(m.JM8,{className:"text-2xl"})})]})]})}):2==w?(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{onClick:()=>{v(w-1)},className:"flex justify-start items-center text-blue-600 mb-2 text-sm",children:[(0,a.jsx)(o.Z,{className:"h-3 w-3"}),(0,a.jsx)("span",{children:"Back"})]}),(0,a.jsx)(g,{label:"Name",setProperty:N,setPage:v,property:y,page:3,header:"তোমার নাম কি",placeholder:"Shakib Al Hasan"})]}):3==w?(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("button",{onClick:()=>{v(w-1)},className:"flex justify-start items-center text-blue-600 mb-2 text-sm",children:[(0,a.jsx)(o.Z,{className:"h-3 w-3"}),(0,a.jsx)("span",{children:"Back"})]}),(0,a.jsx)("h1",{className:"mb-4",children:"কি নিয়ে চর্চা করতে চাও?"}),(0,a.jsx)("h1",{className:"font-semibold text-lg text-gray-700 mb-2",children:"লক্ষ্য"}),(0,a.jsxs)("div",{className:"grid gap-2",children:[(0,a.jsx)("button",{onClick:()=>{Z("HSC"),v(4)},className:"p-4 items-center justify-center  rounded-xl bg-brand-light hover:bg-brand hover:text-white ",children:"HSC/Admissions"}),(0,a.jsx)("button",{onClick:()=>{Z("BCS"),v(5)},className:"p-4 items-center justify-center  rounded-xl bg-brand-light hover:bg-brand hover:text-white",children:"BCS/JOBS"})]})]}):4==w?"HSC"===E?(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("button",{onClick:()=>{v(w-1)},className:"flex justify-start items-center text-blue-600 mb-2 text-sm",children:[(0,a.jsx)(o.Z,{className:"h-3 w-3"}),(0,a.jsx)("span",{children:"Back"})]}),(0,a.jsx)("h1",{className:"mb-4",children:"তোমার গ্রপ কি?"}),(0,a.jsx)("h1",{className:"font-medium text-lg my-2",children:"গ্রুপ"}),(0,a.jsx)("select",{className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",onChange:e=>{Z(Object.keys(p).find(t=>p[t]===e.target.value)),v(5)},name:"Group",id:"",children:Object.values(p).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},t))}),(0,a.jsx)("button",{onClick:()=>{v(5)},className:"rounded-xl mt-8 w-full flex justify-center text-lg font-medium ".concat(E?"bg-brand text-white":"bg-gray-200 text-gray-600"," p-4"),children:(0,a.jsx)("span",{children:"NEXT"})})]}):"":5==w?(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("button",{onClick:()=>{"HSC"===E?v(4):v(3)},className:"flex justify-start items-center text-blue-600 text-sm mb-2",children:[(0,a.jsx)(o.Z,{className:"h-3 w-3"}),(0,a.jsx)("span",{children:"Back"})]}),(0,a.jsx)("h1",{className:"mb-4",children:"ব্যাচ ও বর্তমান / সর্বশেষ শিক্ষা প্রতিষ্ঠানের নাম"}),(0,a.jsx)("h1",{className:"font-medium text-lg mb-2",children:"শিক্ষা প্রতিষ্ঠান"}),(0,a.jsx)("input",{onChange:e=>{M(e.target.value)},placeholder:"School",type:"text",className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",value:H}),(0,a.jsx)("h1",{className:"font-medium text-lg my-2",children:"ব্যাচ"}),(0,a.jsx)("select",{onChange:e=>{F(e.target.value)},className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",name:"Batch",id:"",children:"BCS"==E||"JOB"==E?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("option",{value:"BCS_44",children:"BCS_44"}),(0,a.jsx)("option",{value:"BCS_45",children:"BCS_45"}),(0,a.jsx)("option",{value:"BCS_46",children:"BCS_46"}),(0,a.jsx)("option",{value:"BCS_47",children:"BCS_47"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("option",{value:"HSC_23",children:"HSC_22"}),(0,a.jsx)("option",{value:"HSC_23",children:"HSC_23"}),(0,a.jsx)("option",{value:"HSC_24",children:"HSC_24"}),(0,a.jsx)("option",{value:"HSC_25",children:"HSC_25"}),(0,a.jsx)("option",{value:"HSC_25",children:"HSC_26 "})]})}),(0,a.jsx)("button",{onClick:async()=>{v(6)},className:"rounded-xl mt-8 w-full flex justify-center text-lg font-medium ".concat(P?"bg-brand text-white":"bg-gray-200 text-gray-600"," p-4"),children:(0,a.jsx)("span",{children:"NEXT"})})]}):6==w?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>{v(w-1)},className:"flex justify-start items-center text-blue-600 mb-2 text-sm",children:[(0,a.jsx)(o.Z,{className:"h-3 w-3"}),(0,a.jsx)("span",{children:"Back"})]}),(0,a.jsx)("h1",{className:"mb-4",children:"পাসওয়ার্ড নির্বাচন করো"}),(0,a.jsx)("h1",{className:"font-medium text-base my-2",children:"Password"}),(0,a.jsx)("input",{onChange:e=>{q(e.target.value)},type:"password",className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",value:W}),(0,a.jsx)("h1",{className:"font-medium text-base my-2",children:"Confirm Password"}),(0,a.jsx)("input",{onChange:e=>{U(e.target.value)},type:"password",className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",value:V}),(0,a.jsx)("button",{onClick:async()=>{if(!W||!V)return window.alert("Password and Confirm Password can not be empty");if(W!=V)return X("Password and Confirm password did not match");{X(null),I(!0);let e=await (0,l.v_)("/auth/register",{name:y,phone:C,password:W,type:E,level:P,school:H});if("error"==e.status)return X(e.data);I(!1),v(7)}},className:"rounded-xl mt-8 w-full flex justify-center text-lg font-medium ".concat(W==V?"bg-brand text-white":"bg-gray-200 text-gray-600 cursor-not-allowed"," p-4"),children:(0,a.jsx)("span",{children:J?(0,a.jsx)(r.Z,{}):"GET OTP"})})]}):7==w?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>{v(w-1)},className:"flex justify-start items-center text-blue-600 mb-2 text-sm",children:[(0,a.jsx)(o.Z,{className:"h-3 w-3"}),(0,a.jsx)("span",{children:"Back"})]}),(0,a.jsx)("h1",{className:"mb-4",children:"তোমার ফোন নাম্বার এ পাঠানো কোডটি কি?"}),(0,a.jsxs)("div",{className:"my-2 flex justify-between items-end",children:[(0,a.jsx)("h1",{className:"text-sm font-medium my-2",children:"OTP"}),(0,a.jsxs)("button",{disabled:D,onClick:async()=>{A(null),ei();let e=await (0,l.v_)("/auth/subscribe/resendotp",{phone:C});e&&A("OTP sent successfully to ".concat(C))},className:"text-".concat(D?"gray-400":"blue-600"," text-xs font-light"),children:["Resend ",$>0&&"(resend available in ".concat($," seconds)")]})]}),(0,a.jsx)("input",{onChange:e=>{_(e.target.value)},type:"text",placeholder:"1234",className:"text-lg font-medium px-4 py-4 rounded-xl border border-none text-[#818181] focus:border-[#818181] bg-white shadow-xl",value:S}),(0,a.jsx)("button",{onClick:async()=>{var e;X(null),I(!0);let t=await (0,l.v_)("/auth/otp",{phone:C,otp:S});"error"===t.status?X(t.data):er.push((null===(e=er.query)||void 0===e?void 0:e.redirect)||"/dashboard"),I(!1)},className:"rounded-xl mt-8 w-full flex justify-center text-lg font-medium ".concat(S?"bg-brand text-white":"bg-gray-200 text-gray-600"," p-4"),children:(0,a.jsx)("span",{children:J?(0,a.jsx)(r.Z,{}):"শুরু করো"})}),(0,a.jsxs)("div",{className:"p-4 bg-gray-100 rounded-xl text-gray-600 mt-12 border-blue-700 border",children:[(0,a.jsx)("h1",{className:"text-sm font-normal",children:"ফোন নাম্বারটি ভুল হয় নাই তো?"}),(0,a.jsxs)("div",{onClick:()=>{v(1)},className:"flex justify-between items-center cursor-pointer",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:C}),(0,a.jsxs)("div",{className:"text-blue-700 text-sm flex justify-center items-center space-x-1",children:[(0,a.jsx)(c.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"নাম্বার পরিবর্তন"})]})]})]})]}):8==w?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-4",children:[(0,a.jsxs)("div",{href:"/dashboard",className:"p-6 rounded-2xl bg-brand-extralight md:opacity-80",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"text-3xl font-medium ",children:"সাধারণ"}),(0,a.jsx)("button",{onClick:()=>{var e;er.push((null===(e=er.query)||void 0===e?void 0:e.redirect)||"/dashboard")},className:"rounded-full p-2 bg-white text-[#CF1820]",children:(0,a.jsx)(d.Z,{className:"h-4 w-4"})})]}),(0,a.jsx)("p",{className:"text-sm leading-5 font-normal mt-4 mb-6 text-gray-300",children:"৪ টি পরীক্ষা দিয়ে তোমার চর্চা শুরু করো"})]}),(0,a.jsxs)("div",{className:"p-6 rounded-2xl bg-brand-extralight border-2 border-[#CF1820]",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("h1",{className:"text-3xl font-medium ",children:["“",(0,a.jsx)("span",{className:"text-[#CF1820]",children:"অ"}),"”সাধারণ"]}),(0,a.jsx)("button",{onClick:async()=>{I(!0);let e=await ea(ee,"01710456491",es[ee]);window.location.href=e,I(!1)},className:"rounded-full p-2 bg-white text-[#CF1820]",children:J?(0,a.jsx)(r.Z,{}):(0,a.jsx)(d.Z,{className:"h-4 w-4"})})]}),(0,a.jsxs)("p",{className:"text-sm leading-5 font-normal mt-4 mb-6 text-gray-300",children:[" ","লক্ষ লক্ষ প্রশ্নের পরীক্ষা দেওয়ার মাধ্যমে পৌঁছে যাও সফলতার চূড়ান্ত শেখরে"]}),(0,a.jsxs)("div",{className:"text-gray-300 dark:text-gray-300 text-sm space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center space-x-4",children:[(0,a.jsx)(u.Z,{className:"h-5 w-5"}),(0,a.jsx)("p",{children:"আনলিমিটেড পরীক্ষা"})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center space-x-4",children:[(0,a.jsx)(u.Z,{className:"h-5 w-5"}),(0,a.jsx)("p",{children:"বিগত বছরের প্রশ্ন"})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center space-x-4",children:[(0,a.jsx)(u.Z,{className:"h-5 w-5"}),(0,a.jsx)("p",{children:"পারফরমেন্স অ্যানালাইসিস"})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center space-x-4",children:[(0,a.jsx)(u.Z,{className:"h-5 w-5"}),(0,a.jsx)("p",{children:"লাইভ পরীক্ষা"})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center space-x-4",children:[(0,a.jsx)(u.Z,{className:"h-5 w-5"}),(0,a.jsx)("p",{children:"অ্যাড ফ্রি"})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"text-sm",children:"মাস"}),(0,a.jsxs)("h1",{className:"text-lg",children:["৳",es[ee]]})]}),(0,a.jsxs)("div",{className:"mt-1 space-x-2",children:[(0,a.jsx)("button",{onClick:()=>{et(1)},className:"rounded-full ".concat(1===ee?"bg-gray-600 hover:bg-gray-500":"bg-gray-700 hover:bg-gray-800","   px-2.5 py-0.5 text-md font-normal"),children:(0,a.jsx)("span",{children:"1"})}),(0,a.jsx)("button",{onClick:()=>{et(2)},className:"rounded-full ".concat(2===ee?"bg-gray-600 hover:bg-gray-500":"bg-gray-700 hover:bg-gray-800","  px-2.5 py-0.5 text-md font-normal"),children:(0,a.jsx)("span",{children:"2"})}),(0,a.jsx)("button",{onClick:()=>{et(3)},className:"rounded-full ".concat(3===ee?"bg-gray-600 hover:bg-gray-500":"bg-gray-700 hover:bg-gray-800","  px-2.5 py-0.5 text-md font-normal"),children:(0,a.jsx)("span",{children:"3"})}),(0,a.jsx)("button",{onClick:()=>{et(6)},className:"rounded-full ".concat(6===ee?"bg-gray-600 hover:bg-gray-500":"bg-gray-700 hover:bg-gray-800","  px-2.5 py-0.5 text-md font-normal"),children:(0,a.jsx)("span",{children:"6"})}),(0,a.jsx)("button",{onClick:()=>{et(12)},className:"rounded-full ".concat(12===ee?"bg-gray-600 hover:bg-gray-500":"bg-gray-700 hover:bg-gray-800","  px-1.5 py-0.5 text-md font-normal"),children:(0,a.jsx)("span",{children:"12"})})]})]})]})]})}):""]})})})}},63377:function(e,t,s){"use strict";s.d(t,{BK:function(){return o},U2:function(){return l},ZJ:function(){return c},v_:function(){return i}});var a=s(5121);let n="https://mujib.chorcha.net",r={"x-chorcha-mode":"api"};async function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{let i=await a.Z.get(n+e,{withCredentials:!0,params:t||{},headers:{...r,Authorization:s?"Bearer ".concat(s):""}});if(l)return i;return i.data}catch(e){return{status:"error",data:"Network Error"}}}async function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var l,i,o,c,d,u;let x=await a.Z.post(n+e,t,{withCredentials:!0,headers:r});if(null==x?void 0:null===(i=x.data)||void 0===i?void 0:null===(l=i.data)||void 0===l?void 0:l.auth)return window.location.href="/auth/register?redirect=".concat(window.location.pathname),{};if("string"==typeof(null===(o=x.data)||void 0===o?void 0:o.data)&&(null==x?void 0:null===(d=x.data)||void 0===d?void 0:null===(c=d.data)||void 0===c?void 0:c.search("upgrade"))!=-1){console.log("user confirm for upgrade");let t=window.confirm(null==x?void 0:null===(u=x.data)||void 0===u?void 0:u.data);return t&&(e.startsWith("/ems")?window.location="/ems/upgrade":window.location="/upgrade"),{}}if(s)return x;return x.data}catch(e){return console.log(e),{status:"error",data:"Network Error"}}}async function o(e,t){try{let s=await a.Z.post(n+e,t,{headers:{"Content-Type":"multipart/form-data",...r},withCredentials:!0});return s.data}catch(e){return{status:"error",data:"Network Error"}}}async function c(e){try{let t=await a.Z.delete(n+e,{withCredentials:!0,headers:r});return t.data}catch(e){return{status:"error",data:"Network Error"}}}},64055:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(67294),n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,s=(e.match(/^[0-9.]*/)||"").toString();t=s.includes(".")?parseFloat(s):parseInt(s,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function l(e){var t=r(e);return"".concat(t.value).concat(t.unit)}var i=function(){return(i=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]]);return s},c=function(e,t,s){var a="react-spinners-".concat(e,"-").concat(s);if("undefined"==typeof window||!window.document)return a;var n=document.createElement("style");document.head.appendChild(n);var r=n.sheet,l="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return r&&r.insertRule(l,0),a}("MoonLoader","100% {transform: rotate(360deg)}","moon"),d=function(e){var t=e.loading,s=e.color,n=void 0===s?"#000000":s,d=e.speedMultiplier,u=void 0===d?1:d,x=e.cssOverride,h=e.size,m=o(e,["loading","color","speedMultiplier","cssOverride","size"]),f=r(void 0===h?60:h),g=f.value,p=f.unit,b=g/7,j=i({display:"inherit",position:"relative",width:"".concat("".concat(g+2*b).concat(p)),height:"".concat("".concat(g+2*b).concat(p)),animation:"".concat(c," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"},void 0===x?{}:x),w=function(e){return{width:l(e),height:l(e),borderRadius:"100%"}},v=i(i({},w(b)),{backgroundColor:"".concat(n),opacity:"0.8",position:"absolute",top:"".concat("".concat(g/2-b/2).concat(p)),animation:"".concat(c," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"}),y=i(i({},w(g)),{border:"".concat(b,"px solid ").concat(n),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return void 0===t||t?a.createElement("span",i({style:j},m),a.createElement("span",{style:v}),a.createElement("span",{style:y})):null}},57292:function(e,t,s){"use strict";var a=s(67294);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))});t.Z=n},82911:function(e,t,s){"use strict";var a=s(67294);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))});t.Z=n},51446:function(e,t,s){"use strict";var a=s(67294);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))});t.Z=n},48974:function(e,t,s){"use strict";var a=s(67294);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"}))});t.Z=n},31415:function(e,t,s){"use strict";var a=s(67294);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=n}},function(e){e.O(0,[994,5121,5889,9774,2888,179],function(){return e(e.s=53829)}),_N_E=e.O()}]);
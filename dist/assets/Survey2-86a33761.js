import{q as N,r as f,o as V,a as U,w as C,b as I,c as v,d as y,f as o,e as A,p as u,i,n,bK as b,F as h,l as k,bL as d,g as F,h as L,t as c,bI as S}from"./index-37a37fb8.js";import{_ as M}from"./top_banner-20bcc5a6.js";const z={class:"wrap"},B={class:"check-wrap"},E={class:"check-wrap"},K={class:"box"},O=["id","value"],P=["for"],R=["id","value"],W=["for"],D={class:"input-wrap"},J={class:"box"},Z={class:"input-wrap"},j={class:"input-wrap"},$={class:"input-wrap"},G={class:"box"},H={class:"input-wrap"},Q={class:"btn-wrap"},oe={__name:"Survey2",setup(X){const x=N(),l=f(!1),p=f(!1),w=["YouTube","Facebook","Instagram","TikTok","Other"],g=["Food","Beauty, Cosmetic","Fashion","Music","Life","Other"];V(()=>{var e;((e=window.history.state)==null?void 0:e.agree)!="Y"&&(alert("Invalid approach."),x.replace("/"))});const t=U({accountYn:"",accountType:"",contentType:[],mediaLink:"",name:"",email:"",phoneNumber:"",questions:""});C(()=>t.email,a=>{a&&(p.value=T(a),console.log(p))});const q=async()=>{if(l.value=!0,!(t.accountYn==""||t.contentType.length<=0||t.name==""||t.email==""||!p.value||t.phoneNumber=="")){try{const a=await fetch("https://api.3alliance.co.kr/kworld/insert.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});console.log("response>>>",a),a!=""}catch(a){console.log(a),alert("Failed, please contact your administrator.")}x.push("/surveyComplete")}},T=a=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a);return(a,e)=>{const Y=I("router-link");return v(),y(h,null,[o("div",z,[e[24]||(e[24]=A('<img src="'+M+'"><div class="box top-line"><h1 class="box-tit">Join Us as a &quot;Creator&quot; on Keverything!</h1><div class="box-line"></div><p class="box-txt color-red">All (*) marked fields are mandatory</p></div><div class="box"><h4 class="bg-tit">Join Us as a &quot;Creator&quot; on Keverything!</h4><p class="box-txt"> We are looking for creators to chase their dreams together with Keverything! </p></div>',3)),o("div",{class:u(["box",l.value&&t.accountYn==""?"error":null])},[e[11]||(e[11]=o("h5",null,[i("1. Do you have a social media account? "),o("span",{class:"color-red"},"*")],-1)),o("div",B,[n(o("input",{type:"radio",id:"radio1",name:"radio","onUpdate:modelValue":e[0]||(e[0]=s=>t.accountYn=s),value:"Y",required:""},null,512),[[b,t.accountYn]]),e[9]||(e[9]=o("label",{for:"radio1"},"1. Yes, I do",-1))]),o("div",E,[n(o("input",{type:"radio",id:"radio1_2",name:"radio","onUpdate:modelValue":e[1]||(e[1]=s=>t.accountYn=s),value:"N",required:""},null,512),[[b,t.accountYn]]),e[10]||(e[10]=o("label",{for:"radio1_2"},"2. No, I don't",-1))]),e[12]||(e[12]=o("p",{class:"input-guide"},"※ This is an essential question",-1))],2),o("div",K,[e[13]||(e[13]=o("h5",null,'2. If you answered "Yes" above, which social media accounts do you use?',-1)),(v(),y(h,null,k(w,(s,r)=>o("div",{class:"check-wrap",key:r},[n(o("input",{type:"radio",id:s,name:"radio2","onUpdate:modelValue":e[2]||(e[2]=m=>t.accountType=m),value:s,required:""},null,8,O),[[b,t.accountType]]),o("label",{for:s},c(r+1)+". "+c(s),9,P)])),64))]),o("div",{class:u(["box",l.value&&t.contentType.length<=0?"error":null])},[e[14]||(e[14]=o("h5",null,[i("3. What type of content do you primarily share on your social media? "),o("span",{class:"color-red"},"*")],-1)),(v(),y(h,null,k(g,(s,r)=>o("div",{class:"check-wrap",key:r},[n(o("input",{type:"checkbox",id:s,name:"check[]","onUpdate:modelValue":e[3]||(e[3]=m=>t.contentType=m),value:s},null,8,R),[[S,t.contentType]]),o("label",{for:s},c(r+1)+". "+c(s),9,W)])),64)),e[15]||(e[15]=o("p",{class:"input-guide"},"※ This is an essential question",-1))],2),o("div",{class:u(["box",l.value&&t.name==""?"error":null])},[e[16]||(e[16]=o("h5",null,[i("4. What is your name? "),o("span",{class:"color-red"},"*")],-1)),o("div",D,[n(o("input",{type:"text",placeholder:"my answer",class:"input-text","onUpdate:modelValue":e[4]||(e[4]=s=>t.name=s),required:""},null,512),[[d,t.name]])]),e[17]||(e[17]=o("p",{class:"input-guide"},"※ This is an essential question",-1))],2),o("div",J,[e[18]||(e[18]=o("h5",null,"5. Please provide the link to your primary social media account",-1)),o("div",Z,[n(o("input",{type:"text",placeholder:"my answer",class:"input-text","onUpdate:modelValue":e[5]||(e[5]=s=>t.mediaLink=s),required:""},null,512),[[d,t.mediaLink]])])]),o("div",{class:u(["box",l.value&&(t.email==""||!p.value)?"error":null])},[e[19]||(e[19]=o("h5",null,[i("6. What is your Email address? "),o("span",{class:"color-red"},"*")],-1)),o("div",j,[n(o("input",{type:"text",placeholder:"my answer",class:"input-text","onUpdate:modelValue":e[6]||(e[6]=s=>t.email=s),required:""},null,512),[[d,t.email]])]),e[20]||(e[20]=o("p",{class:"input-guide"},"※ Please check the email",-1))],2),o("div",{class:u(["box",l.value&&t.phoneNumber==""?"error":null])},[e[21]||(e[21]=o("h5",null,[i("7. Please provide your cell number "),o("span",{class:"color-red"},"*")],-1)),o("div",$,[n(o("input",{type:"text",placeholder:"my answer",class:"input-text","onUpdate:modelValue":e[7]||(e[7]=s=>t.phoneNumber=s),required:""},null,512),[[d,t.phoneNumber]])]),e[22]||(e[22]=o("p",{class:"input-guide"},"※ This is an essential question",-1))],2),o("div",G,[e[23]||(e[23]=o("h5",null,"8. If you have any feedback or questions, feel free to leave them below",-1)),o("div",H,[n(o("input",{type:"text",placeholder:"my answer",class:"input-text w-100","onUpdate:modelValue":e[8]||(e[8]=s=>t.questions=s)},null,512),[[d,t.questions]])])])]),o("div",Q,[o("div",null,[F(Y,{to:"/",class:"btn"},{default:L(()=>e[25]||(e[25]=[i("back")])),_:1}),o("button",{onClick:q,class:"btn btn-primary"},"submit")])])],64)}}};export{oe as default};

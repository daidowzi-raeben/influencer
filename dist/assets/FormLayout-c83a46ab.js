import{r as i,b as e,c as f,d as u,f as s,g as l}from"./index-9a51f9f9.js";const v={class:"grid"},c={class:"col-12 md:col-6"},_={class:"card p-fluid"},b={class:"field"},y={class:"field"},x={class:"field"},g={class:"card p-fluid"},O={class:"formgrid grid"},V={class:"field col"},w={class:"field col"},B={class:"col-12 md:col-6"},E={class:"card p-fluid"},I={class:"field grid"},L={class:"col-12 md:col-10"},N={class:"field grid"},T={class:"col-12 md:col-10"},F={class:"card"},z={class:"formgroup-inline"},A={class:"field"},S={class:"field"},k={class:"card"},C={class:"field p-fluid"},D={class:"col-12"},H={class:"card"},U={class:"p-fluid formgrid grid"},G={class:"field col-12 md:col-6"},Z={class:"field col-12 md:col-6"},j={class:"field col-12"},q={class:"field col-12 md:col-6"},J={class:"field col-12 md:col-3"},K={class:"field col-12 md:col-3"},R={__name:"FormLayout",setup(M){const n=i([{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}]),d=i(null);return(P,t)=>{const o=e("InputText"),a=e("Button"),r=e("Textarea"),m=e("Dropdown");return f(),u("div",v,[s("div",c,[s("div",_,[t[4]||(t[4]=s("h5",null,"Vertical",-1)),s("div",b,[t[1]||(t[1]=s("label",{for:"name1"},"Name",-1)),l(o,{id:"name1",type:"text"})]),s("div",y,[t[2]||(t[2]=s("label",{for:"email1"},"Email",-1)),l(o,{id:"email1",type:"text"})]),s("div",x,[t[3]||(t[3]=s("label",{for:"age1"},"Age",-1)),l(o,{id:"age1",type:"text"})])]),s("div",g,[t[7]||(t[7]=s("h5",null,"Vertical Grid",-1)),s("div",O,[s("div",V,[t[5]||(t[5]=s("label",{for:"name2"},"Name",-1)),l(o,{id:"name2",type:"text"})]),s("div",w,[t[6]||(t[6]=s("label",{for:"email2"},"Email",-1)),l(o,{id:"email2",type:"text"})])])])]),s("div",B,[s("div",E,[t[10]||(t[10]=s("h5",null,"Horizontal",-1)),s("div",I,[t[8]||(t[8]=s("label",{for:"name3",class:"col-12 mb-2 md:col-2 md:mb-0"},"Name",-1)),s("div",L,[l(o,{id:"name3",type:"text"})])]),s("div",N,[t[9]||(t[9]=s("label",{for:"email3",class:"col-12 mb-2 md:col-2 md:mb-0"},"Email",-1)),s("div",T,[l(o,{id:"email3",type:"text"})])])]),s("div",F,[t[13]||(t[13]=s("h5",null,"Inline",-1)),s("div",z,[s("div",A,[t[11]||(t[11]=s("label",{for:"firstname1",class:"p-sr-only"},"Firstname",-1)),l(o,{id:"firstname1",type:"text",placeholder:"Firstname"})]),s("div",S,[t[12]||(t[12]=s("label",{for:"lastname1",class:"p-sr-only"},"Lastname",-1)),l(o,{id:"lastname1",type:"text",placeholder:"Lastname"})]),l(a,{label:"Submit"})])]),s("div",k,[t[16]||(t[16]=s("h5",null,"Help Text",-1)),s("div",C,[t[14]||(t[14]=s("label",{for:"username"},"Username",-1)),l(o,{id:"username",type:"text"}),t[15]||(t[15]=s("small",null,"Enter your username to reset your password.",-1))])])]),s("div",D,[s("div",H,[t[23]||(t[23]=s("h5",null,"Advanced",-1)),s("div",U,[s("div",G,[t[17]||(t[17]=s("label",{for:"firstname2"},"Firstname",-1)),l(o,{id:"firstname2",type:"text"})]),s("div",Z,[t[18]||(t[18]=s("label",{for:"lastname2"},"Lastname",-1)),l(o,{id:"lastname2",type:"text"})]),s("div",j,[t[19]||(t[19]=s("label",{for:"address"},"Address",-1)),l(r,{id:"address",rows:"4"})]),s("div",q,[t[20]||(t[20]=s("label",{for:"city"},"City",-1)),l(o,{id:"city",type:"text"})]),s("div",J,[t[21]||(t[21]=s("label",{for:"state"},"State",-1)),l(m,{id:"state",modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=p=>d.value=p),options:n.value,optionLabel:"name",placeholder:"Select One"},null,8,["modelValue","options"])]),s("div",K,[t[22]||(t[22]=s("label",{for:"zip"},"Zip",-1)),l(o,{id:"zip",type:"text"})])])])])])}}};export{R as default};

import{r as s,x as g,m as w,k as y,b as a,c as d,d as u,f as t,F as m,p as f,g as i,h as c,t as b,a5 as N}from"./index-9a51f9f9.js";const T={class:"grid"},F={class:"col-12 xl:col-6"},I={class:"card"},V={class:"table-wrap"},S={class:"table"},B={style:{"min-width":"200px"}},O={class:"col-12 xl:col-6"},Q={class:"card"},L={class:"card p-2"},U={class:"line-height-3 m-0"},D={data(){return{dropdownValues:s([{name:"select1",code:"1"},{name:"select2",code:"2"},{name:"select3",code:"3"}]),dropdownValue:s(null),dropdownValues2:s([{name:"select1",code:"1"},{name:"select2",code:"2"},{name:"select3",code:"3"}]),dropdownValue2:s(null),router:g(),checkboxValue:s([]),ratingValue:s(4)}},components:{},computed:{...w(["FAQ"])},created(){},mounted(){this.ACTION_FAQ_LIST({mode:"faq"})},methods:{...y(["ACTION_FAQ_LIST","ACTION_FAQ_USE"]),onClickUseYn(p,l){const r={mode:"isUse",use_yn:p==="Y"?"N":"Y",idx:l};this.ACTION_FAQ_USE(r)},onClickLocation(){location.href="/shop/faq/add"}}},Y=Object.assign(D,{__name:"notice",setup(p){const l=s(!1),r=()=>{l.value=!0},h=()=>{l.value=!1};return(A,e)=>{const _=a("Button"),v=a("Dialog"),k=a("AccordionTab"),x=a("Accordion");return d(),u("div",T,[t("div",F,[t("div",I,[e[4]||(e[4]=t("h4",null,"Notice",-1)),e[5]||(e[5]=t("div",{class:"table-top"},[t("div",{class:"left"})],-1)),t("div",V,[t("table",S,[e[3]||(e[3]=t("tr",null,[t("th",null,"No"),t("th",null,"title"),t("th",null,"upload date")],-1)),(d(),u(m,null,f(5,n=>t("tr",{key:n},[t("td",null,b(n),1),t("td",B,[i(_,{label:"notice title",severity:"secondary",text:"",onClick:r}),i(v,{header:"notice title",visible:l.value,"onUpdate:visible":e[0]||(e[0]=o=>l.value=o),style:{width:"50vw"},modal:!0},{footer:c(()=>[i(_,{label:"Ok",onClick:h,icon:"pi pi-check",class:"p-button-outlined"})]),default:c(()=>[e[1]||(e[1]=t("div",null," notice content ",-1))]),_:1},8,["visible"])]),e[2]||(e[2]=t("td",null,"2024-01-01",-1))])),64))])])])]),t("div",O,[t("div",Q,[e[6]||(e[6]=t("h4",null,"Alarm",-1)),e[7]||(e[7]=t("div",{class:"table-top"},[t("div",{class:"left"})],-1)),t("div",L,[i(x,{activeIndex:0},{default:c(()=>{var n;return[(d(!0),u(m,null,f((n=A.FAQ.LIST)==null?void 0:n.data,(o,C)=>(d(),N(k,{key:C,header:o==null?void 0:o.title},{default:c(()=>[t("p",U,b(o==null?void 0:o.content),1)]),_:2},1032,["header"]))),128))]}),_:1})])])])])}}});export{Y as default};
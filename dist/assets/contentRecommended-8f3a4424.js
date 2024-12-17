import{P as J}from"./ProductService-74c45874.js";import{r as m,x as Q,m as W,k as X,o as Y,b as T,c as n,d as a,f as e,g as h,h as j,F as k,p as D,s as g,y as I,t as d,i as Z}from"./index-9a51f9f9.js";const z={class:"grid"},x={class:"col-12"},ee={class:"card"},te={class:"card p-3 flex align-items-center"},oe={class:"field-checkbox mb-0"},le={class:"table-wrap"},se={class:"table"},ne=["src"],ae={class:"text-left"},ie={class:"text-grey"},de={key:0,class:"p-paginator p-component mt-2"},re=["disabled"],pe=["disabled"],ue={class:"p-paginator-pages","data-pc-section":"pages"},ge=["onClick"],me=["disabled"],Oe=["disabled"],Se={data(){return{nowPage:0,dropdownValues:m([{name:"select1",code:"1"},{name:"select2",code:"2"},{name:"select3",code:"3"}]),dropdownValue:m(null),calendarValue:"",calendarValue2:"",router:Q()}},computed:{...W(["GOODS"])},components:{},created(){},mounted(){this.ACTION_GOODS_LIST({mode:"list"})},methods:{...X(["ACTION_GOODS_LIST"]),async onClickPageNation(p,u){var r,S,b;const O={mode:"list",page:p};(r=this.$route.query)!=null&&r.t&&(O[(S=this.$route.query)==null?void 0:S.t]=(b=this.$route.query)==null?void 0:b.q),await this.ACTION_GOODS_LIST(O),this.nowPage=(p-1)*10},onSubmitSearch(){const p={mode:"list",cate:"5790757"};p[this.dropdownValue.code]=this.searchStr,this.ACTION_MEMBER_LIST(p),this.router.push(`/shop/productad?t=${this.dropdownValue.code}&q=${this.searchStr}`)},onClickResetSearch(){this.router.push("/shop/productad"),this.searchStr="",this.dropdownValue={name:"id",code:"mb_id"},this.ACTION_MEMBER_LIST({mode:"list"})}}},ke=Object.assign(Se,{__name:"contentRecommended",setup(p){const u=m(!1),O=m(null),r=m([]),S=new J;Y(()=>{S.getProductsSmall().then(l=>O.value=l)});const b=()=>{u.value=!0},H=()=>{u.value=!1};return(l,t)=>{var L,f,w,C,G,y,V,P,$,A,B,E,F,q,M;const N=T("Checkbox"),_=T("Button"),v=T("Dialog");return n(),a("div",z,[e("div",x,[e("div",ee,[t[19]||(t[19]=e("h4",null,"Algorithm-recommended products",-1)),e("div",te,[e("button",{type:"button",class:"btn flex align-items-center justify-content-center bg-blue-100 border-round mr-3",style:{width:"2.5rem",height:"2.5rem"},onClick:b},t[7]||(t[7]=[e("i",{class:"pi pi-filter text-blue-500 text-xl"},null,-1)])),h(v,{header:"Filter",visible:u.value,"onUpdate:visible":t[2]||(t[2]=o=>u.value=o),style:{width:"30vw"},modal:!0},{footer:j(()=>[h(_,{label:"Ok",onClick:H,icon:"pi pi-check",class:"p-button-outlined"})]),default:j(()=>[e("div",null,[e("div",oe,[h(N,{id:"checkOption1",name:"option",value:"K-FOOD",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o)},null,8,["modelValue"]),t[8]||(t[8]=e("label",{for:"checkOption1",class:"mr-3"},"K-FOOD",-1)),h(N,{id:"checkOption2",name:"option",value:"Chicago",modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=o=>r.value=o)},null,8,["modelValue"]),t[9]||(t[9]=e("label",{for:"checkOption2"},"NOODLE",-1))])])]),_:1},8,["visible"]),t[10]||(t[10]=e("span",{class:"mr-2"},"#K-FOOD",-1)),t[11]||(t[11]=e("span",{class:"mr-2"},"#NOODLE",-1))]),e("div",le,[e("table",se,[t[14]||(t[14]=e("tr",null,[e("th",null,"번호"),e("th",null,"상품코드"),e("th",null,"이미지"),e("th",null,"상품명"),e("th",null,"판매가"),e("th",null,"재고"),e("th",null,"Hashtag")],-1)),(n(!0),a(k,null,D((L=l.GOODS.LIST)==null?void 0:L.data,(o,s)=>(n(),a("tr",{key:s},[e("td",null,d(s+1+l.nowPage),1),e("td",null,d(o==null?void 0:o.goods_code),1),e("td",null,[(n(!0),a(k,null,D(o==null?void 0:o.img_list,(i,c)=>(n(),a("div",{key:c},[(i==null?void 0:i.img_code)==="T"?(n(),a("img",{key:0,class:"thumb-img sm",src:i==null?void 0:i.img_url},null,8,ne)):I("",!0)]))),128))]),e("td",ae,[e("span",ie,d(o==null?void 0:o.depth1_name)+" > "+d(o==null?void 0:o.depth2_name),1),t[12]||(t[12]=e("br",null,null,-1)),Z(" ["+d(o==null?void 0:o.brand_name)+"] "+d(o==null?void 0:o.goods_name),1)]),e("td",null,"$"+d(o==null?void 0:o.goods_amt),1),e("td",null,d(o==null?void 0:o.goods_inven),1),t[13]||(t[13]=e("td",null,"#food #noodle",-1))]))),128))])]),((w=(f=l.GOODS.LIST)==null?void 0:f.data)==null?void 0:w.length)>0?(n(),a("div",de,[e("button",{class:g(["p-paginator-prev p-paginator-element p-link",{"p-disabled":((C=l.GOODS.LIST)==null?void 0:C.pageNow)===1}]),type:"button",disabled:((G=l.GOODS.LIST)==null?void 0:G.pageNow)===1,onClick:t[3]||(t[3]=o=>l.onClickPageNation(1))},t[15]||(t[15]=[e("i",{class:"pi pi-angle-double-left"},null,-1)]),10,re),e("button",{class:g(["p-paginator-first p-paginator-element p-link",{"p-disabled":((y=l.GOODS.LIST)==null?void 0:y.pageNow)===1}]),disabled:((V=l.GOODS.LIST)==null?void 0:V.pageNow)===1,type:"button",onClick:t[4]||(t[4]=o=>{var s;return l.onClickPageNation(((s=l.GOODS.LIST)==null?void 0:s.pageNow)-1)})},t[16]||(t[16]=[e("i",{class:"pi pi-angle-left"},null,-1)]),10,pe),e("span",ue,[(n(),a(k,null,D(10,o=>{var s,i,c,R,K;return n(),a(k,{key:o},[((s=l.GOODS.LIST)==null?void 0:s.page)>=o+((i=l.GOODS.LIST)==null?void 0:i.pageNow)-1?(n(),a("button",{key:0,class:g([{"p-highlight":((c=l.GOODS.LIST)==null?void 0:c.pageNow)===o+((R=l.GOODS.LIST)==null?void 0:R.pageNow)-1},"p-paginator-page p-paginator-element p-link"]),type:"button",onClick:be=>{var U;return l.onClickPageNation(o+((U=l.GOODS.LIST)==null?void 0:U.pageNow)-1)}},d(o+((K=l.GOODS.LIST)==null?void 0:K.pageNow)-1),11,ge)):I("",!0)],64)}),64))]),e("button",{class:g(["p-paginator-first p-paginator-element p-link",{"p-disabled":((P=l.GOODS.LIST)==null?void 0:P.pageNow)===(($=l.GOODS.LIST)==null?void 0:$.page)}]),type:"button",disabled:((A=l.GOODS.LIST)==null?void 0:A.pageNow)===((B=l.GOODS.LIST)==null?void 0:B.page),onClick:t[5]||(t[5]=o=>{var s;return l.onClickPageNation(((s=l.GOODS.LIST)==null?void 0:s.pageNow)+1)})},t[17]||(t[17]=[e("i",{class:"pi pi-angle-right"},null,-1)]),10,me),e("button",{class:g(["p-paginator-prev p-paginator-element p-link",{"p-disabled":((E=l.GOODS.LIST)==null?void 0:E.pageNow)===((F=l.GOODS.LIST)==null?void 0:F.page)}]),type:"button",disabled:((q=l.GOODS.LIST)==null?void 0:q.pageNow)===((M=l.GOODS.LIST)==null?void 0:M.page),onClick:t[6]||(t[6]=o=>{var s;return l.onClickPageNation((s=l.GOODS.LIST)==null?void 0:s.page)})},t[18]||(t[18]=[e("i",{class:"pi pi-angle-double-right"},null,-1)]),10,Oe)])):I("",!0)])]),t[20]||(t[20]=e("div",{class:"col-12 xl:col-6"},[e("div",{class:"card"},[e("h4",null,[e("strong",null,"Products similar to my items for sale")])])],-1)),t[21]||(t[21]=e("div",{class:"col-12 xl:col-6"},[e("div",{class:"card"},[e("h4",null,[e("strong",null,"Trending products")])])],-1))])}}});export{ke as default};

import{_ as b,u as v,x as y,r,j as w,a3 as k,b as i,c as h,d as V,f as t,n as I,g as n,F as S,c1 as U,c2 as B}from"./index-65a4ed44.js";const C={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},j={class:"flex flex-column align-items-center justify-content-center"},F=["src"],P={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},L={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},T={class:"flex align-items-center justify-content-between mb-5 gap-5"},$={class:"flex align-items-center"},A={__name:"signIn",setup(E){const{layoutConfig:c}=v(),d=y(),o=r(""),s=r(""),u=r(!1);w()&&d.push("/");const f=k(()=>`/layout/images/${c.darkTheme.value?"logo-white":"logo-dark"}.svg`),g=()=>{if(!(o!=null&&o.value)||!(s!=null&&s.value))return alert("아이디, 패스워드 모두 입력해주세요");B.post("http://localhost:3095/randBox/login.php",{mode:"login",mb_id:o==null?void 0:o.value,mb_pw:s==null?void 0:s.value}).then(function(l){var e;if(console.log(l),(l==null?void 0:l.data)==="FALSE")return alert("아이디 또는 패스워드가 맞지 않습니다.");console.log("로그인"),sessionStorage.setItem("user_id",(e=l==null?void 0:l.data)==null?void 0:e.idnt_code),d.push("/")}).catch(function(l){console.log(l)})};return(l,e)=>{const p=i("InputText"),x=i("Password"),_=i("Checkbox"),m=i("Button");return h(),V(S,null,[t("div",C,[t("div",j,[t("img",{src:f.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,F),t("div",P,[t("form",{onSubmit:I(g,["prevent"])},[t("div",L,[e[7]||(e[7]=t("div",{class:"text-center mb-5"},[t("div",{class:"text-900 text-3xl font-medium mb-3"},"K-World"),t("span",{class:"text-600 font-medium"},"Sign in to continue")],-1)),t("div",null,[e[5]||(e[5]=t("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Id",-1)),n(p,{id:"email1",type:"text",placeholder:"ID",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a)},null,8,["modelValue"]),e[6]||(e[6]=t("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),n(x,{id:"password1",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=a=>s.value=a),placeholder:"Password",feedback:!1,toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),t("div",T,[t("div",$,[n(_,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=a=>u.value=a),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),e[3]||(e[3]=t("label",{for:"rememberme1"},"Auto login",-1))]),e[4]||(e[4]=t("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"Forgot password?",-1))]),n(m,{type:"submit",label:"Sign In",class:"w-full p-3 text-xl"}),n(m,{label:"Sign Up",severity:"secondary",class:"w-full p-3 text-xl mt-3"})])])],32)])])]),n(U,{simple:""})],64)}}},D=b(A,[["__scopeId","data-v-e53858af"]]);export{D as default};
import{o as e,a,f as t,O as o,T as s,U as l,e as n,b as r}from"./vendor.24e2e329.js";const i={props:{show:{type:Boolean,required:!0},click:{type:Function,default:void 0},transparent:{type:Boolean,default:!1},opacity:{type:Number,default:1}}},p=l(),d=p(((l,n,r,i,d,c)=>(e(),a(s,{name:"overlay"},{default:p((()=>[r.show?(e(),a("div",{key:0,class:"overlay "+(r.transparent?"transparent":""),onClick:n[1]||(n[1]=e=>r.click&&r.click())},[t("div",{class:"inner",style:{opacity:r.opacity}},null,4)],2)):o("",!0)])),_:1}))));i.render=d,i.__scopeId="data-v-3fa4a900";const c={components:{Overlay:i},props:{show:{type:Boolean,default:!1}},emits:["open","close"],data(){return{mutableShow:this.show}},methods:{open(){this.mutableShow=!0,this.$emit("open",this)},close(){this.mutableShow=!1,this.$emit("close",this)}},watch:{show(e){this.mutableShow=e}}},h={key:0,class:"preloader-modal"},u=t("span",{class:"preloader preloader-white"},null,-1);c.render=function(l,i,p,d,c,m){const w=n("Overlay");return e(),a("div",null,[t(w,{show:c.mutableShow,transparent:!0},null,8,["show"]),t(s,{name:"preloader-modal"},{default:r((()=>[c.mutableShow?(e(),a("div",h,[u])):o("",!0)])),_:1})])};export default c;

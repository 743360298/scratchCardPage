import{o as e,a,f as t,b as i,e as r,M as s,N as n,Q as o,L as l}from"./vendor.24e2e329.js";const d={name:"TrueTableCard",props:{prize:Number,prizeList:Array},data:()=>({angle:0}),methods:{async go(){this.angle=0;const e=Math.floor(360/7);this.angle=e*this.prize-e/2-Math.floor(Math.random()*e)+720,this.$refs.activeImg.style.transform=`rotate(${-this.angle}deg)`;const a=this.prizeList.find((e=>e.id===this.prize));setTimeout((()=>{this.$toast((null==a?void 0:a.name)||"谢谢惠顾")}),3e3)}}},m={class:"bg-img"},p={class:"active",ref:"activeImg"},u=t("img",{src:"/assets/turntable.1d01a608.png",alt:""},null,-1),c=t("img",{src:"/assets/pointer.fa7a442b.png",alt:""},null,-1),g=t("img",{src:"/assets/go.8e3debd9.png",alt:""},null,-1);d.render=function(i,r,s,n,o,l){return e(),a("div",m,[t("div",p,[u],512),t("div",{class:"pointer",onClick:r[1]||(r[1]=(...e)=>l.go&&l.go(...e))},[c,g])])};const h={name:"Lottery",components:{TrueTableCard:d},data:()=>({keyId:3,prize:1,prizeList:[{id:1,name:"一等奖"},{id:2,name:"二等奖"},{id:3,name:"三等奖"},{id:4,name:"四等奖"},{id:5,name:"五等奖"},{id:6,name:"六等奖"},{id:7,name:"谢谢惠顾"}]}),methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}};h.render=function(d,m,p,u,c,g){const h=r("TrueTableCard"),z=r("van-radio"),f=r("van-radio-group"),b=r("Page");return e(),a(b,{"content-class":"lottery",header:"",footer:"",title:"从入门到放弃"},{default:i((()=>[t(h,{prize:c.prize,"prize-list":c.prizeList,key:c.prize},null,8,["prize","prize-list"]),t(f,{modelValue:c.prize,"onUpdate:modelValue":m[1]||(m[1]=e=>c.prize=e)},{default:i((()=>[(e(!0),a(s,null,n(c.prizeList,(t=>(e(),a(z,{name:t.id,key:t.id},{default:i((()=>[o(l(t.name),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:1})};export default h;

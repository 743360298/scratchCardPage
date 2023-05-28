import{D as i,o as e,a as t,b as n,e as s,f as l,M as o,N as u,L as h,Q as a}from"./vendor.24e2e329.js";const r={name:"LotteryTicket",data:()=>({loading:!1,list:[],win:[9,15,19,25,29,8,9],cishu:0,timer:null,winNum:{one:0,two:0,three:0,four:0,five:0,six:0,seven:0,eight:0,nine:0},bonus:{one:344860295,two:11215692,three:1e4,four:3e3,five:300,six:200,seven:100,eight:15,nine:5},isDialog:!1,voiceTips:!0}),async mounted(){},methods:{automatic(){let i=this;i.timer=setInterval((()=>{i.generate(),i.cishu=++i.cishu,i.win.toString()==i.list[0].toString()&&(this.getTips("一"),clearInterval(i.timer))}),1)},generate(){let i=[...this.randomNumber(5,35),...this.randomNumber(2,12)];this.cishu=++this.cishu,this.list.unshift(i),this.winOrNot(i)},randomNumber(i,e){let t=[];for(let n=0;n<i;n++){let i=parseInt(Math.floor(Math.random()*e)+1);t[n]=i;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++)t[e]==t[i]&&(t.splice(i,1),i--,n--)}return t.sort(((i,e)=>i-e))},winOrNot(i){const e=i.filter(((i,e)=>e<5)),t=i.filter(((i,e)=>e>=5)),n=this.win.filter(((i,e)=>e<5)),s=this.win.filter(((i,e)=>e>=5)),l=this.getWin(e,n).length,o=this.getWin(t,s).length;(3===l&&0===o||2===l&&1===o||1===l&&2===o||0===l&&2===o)&&(this.winNum.nine=++this.winNum.nine,this.getTips("九")),(3===l&&1===o||2===l&&2===o)&&(this.winNum.eight=++this.winNum.eight,this.getTips("八")),4===l&&0===o&&(this.winNum.seven=++this.winNum.seven,this.getTips("七")),3===l&&2===o&&(this.winNum.six=++this.winNum.six,this.getTips("六")),4===l&&1===o&&(this.winNum.five=++this.winNum.five,this.getTips("五")),4===l&&2===o&&(this.winNum.four=++this.winNum.four,this.getTips("四")),5===l&&0===o&&(this.winNum.three=++this.winNum.three,this.getTips("三")),5===l&&1===o&&(this.winNum.two=++this.winNum.two,this.getTips("二")),5===l&&2===o&&(this.winNum.one=++this.winNum.one,this.getTips("一"))},getTips(e){const t=`恭喜你中了${e}等奖`;this.isDialog?i.alert({message:t}):(!function(i){const e=window.speechSynthesis,t=new SpeechSynthesisUtterance;t.text=i,t.lang="zh-CN",t.volume=1,t.rate=1,t.pitch=1,e.speak(t)}(t),this.$toast(t))},getWin(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n];for(let i=0;i<e.length;i++){let n=e[i];if(n===s){t.push(n);break}}}return t},finished(){},onLoad(){},onClickBack(){this.$router?this.$router.back():window.history.back()}}},w={style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"10px 16px"}},m={class:"wealth"},c={class:"password"},g={key:0,class:"ball_red"},d={key:1,class:"ball_blue"},N=l("br",null,null,-1),f=l("br",null,null,-1),p={style:{height:"calc(100vh - 190px)",overflow:"scroll"}},v={class:"wealth"},b={class:"password"},y={key:0,class:"ball_red"},k={key:1,class:"ball_blue"};r.render=function(i,r,x,T,_,L){const C=s("VanButton"),S=s("VanCell"),$=s("VanList"),D=s("Page");return e(),t(D,{"content-class":"lottery",header:"",footer:"",title:"财富密码"},{default:n((()=>[l("div",w,[l("div",m,[(e(!0),t(o,null,u(_.win,((i,n)=>(e(),t("div",c,[n<5?(e(),t("p",g,[l("span",null,h(i),1)])):(e(),t("p",d,[l("span",null,h(i),1)]))])))),256))]),l(C,{type:"primary",onClick:L.generate,size:"mini"},{default:n((()=>[a("生成次数"+h(_.cishu),1)])),_:1},8,["onClick"])]),a(" 一： "+h(_.winNum.one)+"、 二： "+h(_.winNum.two)+"、 三： "+h(_.winNum.three)+"、 四： "+h(_.winNum.four)+"、",1),N,a(" 五： "+h(_.winNum.five)+"、 六： "+h(_.winNum.six)+"、 七： "+h(_.winNum.seven)+"、 八： "+h(_.winNum.eight)+"、",1),f,a(" 九： "+h(_.winNum.nine)+"； 累计奖金："+h(_.winNum.one*_.bonus.one+_.winNum.two*_.bonus.two+_.winNum.three*_.bonus.three+_.winNum.four*_.bonus.four+_.winNum.five*_.bonus.five+_.winNum.six*_.bonus.six+_.winNum.seven*_.bonus.seven+_.winNum.eight*_.bonus.eight+_.winNum.nine*_.bonus.nine)+"、 花费金额："+h(2*_.cishu)+" ",1),l("div",p,[l($,{loading:_.loading,"onUpdate:loading":r[1]||(r[1]=i=>_.loading=i),finished:L.finished,"finished-text":"没有更多了",onLoad:L.onLoad},{default:n((()=>[(e(!0),t(o,null,u(_.list,(i=>(e(),t(S,{key:i},{title:n((()=>[l("div",v,[(e(!0),t(o,null,u(i,((i,n)=>(e(),t("div",b,[n<5?(e(),t("p",y,[l("span",null,h(i),1)])):(e(),t("p",k,[l("span",null,h(i),1)]))])))),256))])])),_:2},1024)))),128))])),_:1},8,["loading","finished","onLoad"])])])),_:1})};export default r;

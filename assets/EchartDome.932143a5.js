import{_ as e}from"./ECharts.42a9825f.js";import{o as t,a,b as o,e as n,f as r,M as s,N as l}from"./vendor.24e2e329.js";const i={name:"EchartDome",components:{ECharts:e},data:()=>({options:{color:["#6eab46","#4270c1","#e97c30","#bd0000","#fbbd00","#9550c9"],title:{text:"title",x:"center",top:30,textStyle:{fontSize:20,fontWeight:"600"}},tooltip:{trigger:"item",show:!1,formatter:"{b} : {c} ({d}%)"},legend:{orient:"horizontal",bottom:10,itemWidth:8,itemHeight:8,textStyle:{fontSize:14}},series:[{name:"",type:"pie",radius:"55%",center:["50%","45%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],label:{formatter:"{b}:\n {c} ({d}%)",normal:{show:!1}},labelLine:{normal:{show:!1}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 05)"}}}]}})},m={style:{width:"100%",height:"300px"}};i.render=function(e,i,d,h,f,c){const u=n("ECharts"),p=n("VanCol"),b=n("VanRow"),g=n("Page");return t(),a(g,{"content-class":"echart-dome",header:"",footer:"",title:"EchartDome"},{default:o((()=>[r(b,null,{default:o((()=>[(t(),a(s,null,l(10,(e=>r(p,{span:"12",key:e},{default:o((()=>[r("div",m,[r(u,{options:f.options,ref:"chart","auto-resize":""},null,8,["options"])])])),_:2},1024))),64))])),_:1})])),_:1})};export default i;
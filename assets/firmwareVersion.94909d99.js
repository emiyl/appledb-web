import{_ as g,p as w,r as y,o as i,c as s,d as n,m as u,F as d,n as f,b as p,t as _,$ as H}from"./app.b16ceeda.js";String.prototype.format=function(a){let l=this;for(let m in a)l=l.replace("${"+m+"}",a[m]);return l};const S={data(){return{devicePath:"/device/",jailbreakPath:"/jailbreak/",timeLocale:"en-US",infoHeader:"Info",verStr:"Version: ${verNum}",buildStr:"Build: ${buildId}",releasedStr:"Released: ${releasedTime}",basedOnStr:"Based on: ${iosVersion}",downloadInfoStr:'Download: <a href="${ipsw}">${ipswStr} <i class="fas fa-download"></i></a>',relatedFirmwaresHeader:"Related Firmware",devicesHeader:"Devices",showMoreStr:"Show More",showLessStr:"Show Less",downloadStr:"Download IPSW",jailbreaksHeader:"Jailbreaks",showDevStr:"Show Devices",hideDevStr:"Hide Devices",fm:w()}},methods:{toggleShowDev:function(a,l){var m=`liDev-${a}`,c=document.getElementById(m).classList;c.contains("showOnHover")?c.remove("showOnHover"):c.add("showOnHover"),document.getElementById(m).classList=c;var e=`toggleShowDev-${a}`,t=document.getElementById(e).innerHTML;t==this.showMoreStr?t=this.showLessStr:t=this.showMoreStr,document.getElementById(e).innerHTML=t},toggleShowJb:function(a,l){var m=`liJb-${a}`,c=document.getElementById(m).classList;c.contains("showOnHover")?c.remove("showOnHover"):c.add("showOnHover"),document.getElementById(m).classList=c;var e=`toggleShowJb-${a}`,t=document.getElementById(e).innerHTML;t==this.showDevStr?t=this.hideDevStr:t=this.showDevStr,document.getElementById(e).innerHTML=t}}},L=["innerHTML"],k={style:{"list-style-type":"none","padding-left":"0"}},T=["innerHTML"],M=["innerHTML"],b=["innerHTML"],D=["innerHTML"],I=["innerHTML"],A=["id"],B=["id"],E={key:1,class:"fas fa-circle circle"},G={class:"hoverElement",style:{display:"inline"}},O=["for"],J=["id","innerHTML","onClick"],P={class:"custom-container tip clickToShow"},C={key:1},V=["innerHTML"],N=["id"],F=["id"],j={key:1,class:"fas fa-circle circle"},x={class:"hoverElement",style:{display:"inline"}},z=["for"],R=["id","innerHTML","onClick"],U={class:"custom-container tip clickToShow"},W=["href"],q=["innerHTML"],K={key:0,class:"hoverElement"},Q=["href"],X={style:{"font-weight":"500"}};function Y(a,l,m,c,e,t){const v=y("router-link");return i(),s(d,null,[n("h2",{innerHTML:e.infoHeader},null,8,L),n("ul",k,[n("li",{innerHTML:e.verStr.format({verNum:[e.fm.build.osStr,e.fm.build.version].join(" ")})},null,8,T),e.fm.build.build!=e.fm.build.version?(i(),s("li",{key:0,innerHTML:e.buildStr.format({buildId:e.fm.build.build})},null,8,M)):u("",!0),e.fm.released!=-1?(i(),s("li",{key:1,innerHTML:e.releasedStr.format({releasedTime:e.fm.released})},null,8,b)):u("",!0),e.fm.devGroupArr&&e.fm.devGroupArr[0]&&e.fm.devGroupArr[0].devices[0].ipsw&&Array.from(new Set(e.fm.devGroupArr.map(r=>r.devices).flat().map(r=>r.ipsw))).length==1&&e.fm.devGroupArr[0].devices[0].ipsw!="none"?(i(),s("li",{key:2,innerHTML:e.downloadInfoStr.format({ipsw:e.fm.devGroupArr[0].devices[0].ipsw,ipswStr:[e.fm.devGroupArr[0].devices[0].ipsw.split("/")[e.fm.devGroupArr[0].devices[0].ipsw.split("/").length-1]]})},null,8,D)):u("",!0)]),e.fm.jailbreakArr.length>0?(i(),s("h2",{key:0,innerHTML:e.jailbreaksHeader},null,8,I)):u("",!0),n("ul",null,[(i(!0),s(d,null,f(e.fm.jailbreakArr,(r,o)=>(i(),s("li",{key:r,id:`liJb-${r.name.replace(/ /g,"-")}`,style:{"list-style-type":"none"},class:"showOnHover"},[e.fm.jbDevArr[o].length>0?(i(),s(d,{key:0},[n("input",{type:"checkbox",id:`toggleListJb-${r.name.replace(/ /g,"-")}`},null,8,B),l[0]||(l[0]=n("i",{class:"fas fa-chevron-right chevron chevronPoint clickToHide"},null,-1)),l[1]||(l[1]=n("i",{class:"fas fa-chevron-down chevron chevronPoint clickToShow displayNone"},null,-1))],64)):(i(),s("i",E)),p(v,{innerHTML:r.name,to:`${e.jailbreakPath}${r.name}.html`},null,8,["innerHTML","to"]),e.fm.jbDevArr[o].length>0?(i(),s(d,{key:2},[n("div",G,[l[2]||(l[2]=n("i",{class:"fas fa-circle ml-",style:{"font-size":"0.3rem",opacity:"0.5","vertical-align":"middle","margin-left":"2em","margin-right":"2em"}},null,-1)),n("label",{for:`toggleListJb-${r.name.replace(/ /g,"-")}`},[n("a",{style:{cursor:"pointer"},id:`toggleShowJb-${r.name.replace(/ /g,"-")}`,innerHTML:e.showDevStr,onClick:h=>t.toggleShowJb(r.name.replace(/ /g,"-"))},null,8,J)],8,O)]),n("div",P,[n("p",null,[n("ul",null,[(i(!0),s(d,null,f(e.fm.jbDevArr[o],h=>(i(),s("li",{class:"showOnHover",style:{"list-style-type":"disc"},key:h},[p(v,{to:h.url,innerHTML:h.name},null,8,["to","innerHTML"])]))),128))])])])],64)):u("",!0)],8,A))),128))]),e.fm.devGroupArr&&e.fm.devGroupArr.length>0?(i(),s("div",C,[n("h2",{innerHTML:e.devicesHeader},null,8,V),n("ul",{style:H(e.fm.devGroupArr.filter(r=>r.devices.length>1).length>0?"list-style-type: none":"")},[(i(!0),s(d,null,f(e.fm.devGroupArr,r=>(i(),s("li",{key:r,id:`liDev-${r.name.replace(/ /g,"-")}`,class:"showOnHover"},[e.fm.devGroupArr.filter(o=>o.devices.length>1).length>0&&r.devices.length>1?(i(),s(d,{key:0},[n("input",{type:"checkbox",id:`toggleListDev-${r.name.replace(/ /g,"-")}`},null,8,F),l[3]||(l[3]=n("i",{class:"clickToHide fas fa-chevron-right chevron chevronPoint"},null,-1)),l[4]||(l[4]=n("i",{class:"clickToShow fas fa-chevron-down chevron chevronPoint"},null,-1))],64)):(i(),s("i",j)),p(v,{to:r.url,innerHTML:r.name},null,8,["to","innerHTML"]),r.devices.length>1?(i(),s(d,{key:2},[n("div",x,[l[5]||(l[5]=n("i",{class:"fas fa-circle ml-",style:{"font-size":"0.3rem",opacity:"0.5","vertical-align":"middle","margin-left":"2em","margin-right":"2em"}},null,-1)),n("label",{for:`toggleListDev-${r.name.replace(/ /g,"-")}`},[n("a",{style:{cursor:"pointer"},id:`toggleShowDev-${r.name.replace(/ /g,"-")}`,innerHTML:e.showMoreStr,onClick:o=>t.toggleShowDev(r.name.replace(/ /g,"-"))},null,8,R)],8,z)]),n("div",U,[n("p",null,[n("ul",null,[(i(!0),s(d,null,f(r.devices,o=>(i(),s("li",{class:"showOnHover",style:{"list-style-type":"disc"},key:o},[p(v,{to:o.url,innerHTML:o.name},null,8,["to","innerHTML"]),o.ipsw!="none"&&o.ipsw?(i(),s("a",{key:0,class:"hoverElement",href:o.ipsw},[l[6]||(l[6]=n("i",{class:"fas fa-download chevron",style:{"margin-left":"0.8em","margin-right":"0.5em"}},null,-1)),n("span",{style:{"font-weight":"500"},innerHTML:e.downloadStr},null,8,q)],8,W)):u("",!0)]))),128))])])])],64)):(i(),s(d,{key:3},[r.devices[0].ipsw!="none"&&r.devices[0].ipsw?(i(),s("span",K,[l[8]||(l[8]=n("i",{class:"fas fa-circle ml-",style:{"font-size":"0.3rem",opacity:"0.5","vertical-align":"middle","margin-left":"2em","margin-right":"2em"}},null,-1)),n("a",{href:r.devices[0].ipsw},[l[7]||(l[7]=n("i",{class:"fas fa-download",style:{"margin-right":"0.5em"}},null,-1)),n("span",X,_(e.downloadStr),1)],8,Q)])):u("",!0)],64))],8,N))),128))],4)])):u("",!0)],64)}var $=g(S,[["render",Y],["__file","firmwareVersion.vue"]]);export{$ as default};

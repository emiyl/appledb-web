import{_ as i,r as p,o as r,c as o,d as t,F as l,n as m,D as d,w as u,b as v}from"./app.b16ceeda.js";const y={data(){return{osTypeCards:[]}},created(){fetch("https://api.appledb.dev/appledb-web/homePage.json").then(s=>s.json()).then(s=>{this.osTypeCards=s.osTypeCardArray})}},h={class:"wrapper"},f={class:"cardWrapper"};function k(s,a,C,T,_,b){const n=p("homeSmallItem"),c=p("router-link");return r(),o(l,null,[a[0]||(a[0]=t("h1",{style:{"margin-bottom":".5em"}},"Firmware versions",-1)),t("div",h,[t("div",f,[(r(!0),o(l,null,m(_.osTypeCards,e=>(r(),o("div",{class:"recentDeviceCard",key:e.name},[e.link?(r(),d(c,{key:0,to:e.link},{default:u(()=>[v(n,{card:e},null,8,["card"])]),_:2},1032,["to"])):(r(),d(n,{key:1,card:e},null,8,["card"]))]))),128))])]),a[1]||(a[1]=t("div",{class:"space"},null,-1))],64)}var x=i(y,[["render",k],["__scopeId","data-v-d2daf930"],["__file","homeOsTypeCardWrapper.vue"]]);export{x as default};

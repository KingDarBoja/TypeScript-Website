(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5psB":function(e){e.exports=JSON.parse('{"_generated by":"node packages/typescriptlang-org/scripts/getTypeScriptNPMVersions.js","tags":{"stableMajMin":"3.7","stable":"3.7.5","betaMajMin":"3.8","beta":"3.8.0-beta","rc":"3.8.1-rc","rcMajMin":"3.8"},"isRC":true,"isBeta":true,"releaseNotesURL":"/docs/handbook/release-notes/typescript-3-7.html","betaPostURL":"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/","rcPostURL":"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-rc/","vs":{"stable":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-374","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-374"},"beta":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta"},"rc":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta"}}}')},"7ScH":function(e){e.exports=JSON.parse('{"_format":"mm/dd/yyyy - these get put into new Date()","upcoming_version":"3.8","iteration_plan_url":"https://github.com/microsoft/TypeScript/issues/34898","last_release_date":"11/05/2019","upcoming_beta_date":"01/08/2020","upcoming_rc_date":"02/04/2020","upcoming_release_date":"02/18/2020"}')},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("ERkP"),r=a.n(n),l=a("9Dj+"),c=a("GO2c"),i=a("I56Z"),s=(a("pxef"),a("GTM1"),a("yVh0")),o=a("Wbzz"),m=a("5psB"),u=function(){var e=Object(i.a)(Object(s.a)()),t=r.a.createElement("span",null,e("nav_version_between"),r.a.createElement("a",{href:m.betaPostURL},m.tags.betaMajMin)," ",e("nav_version_beta_prefix")),a=r.a.createElement("span",null,e("nav_version_between"),r.a.createElement("a",{href:m.betaPostURL},m.tags.rcMajMin)," ",e("nav_version_rc_prefix")),n=m.isRC?a:m.isBeta?t:null;return r.a.createElement("div",{className:"version-bar"},r.a.createElement("p",null,r.a.createElement("a",{href:Object(o.withPrefix)(m.releaseNotesURL)},"TypeScript ",m.tags.stableMajMin)," ",e("nav_version_stable_prefix"),n))},d=a("fGr3"),p=a("7ScH"),h=function(){var e=Object(s.a)(),t=Object(i.a)(e),a=new Date(p.last_release_date),n=new Date(p.upcoming_beta_date),l=new Date(p.upcoming_rc_date),c=new Date(p.upcoming_release_date),u=new Date;!function(e,t,a,n){if(!(e&&t&&a&&n)){var r=[{name:"startDate",date:e},{name:"betaDate",date:t},{name:"rcDate",date:a},{name:"releaseDate",date:p}].filter((function(e){return!e.date}));throw new Error("Dates in release-plan.json can't be converted into JS dates: "+r.join(" - "))}}(a,n,l,c);var d=Math.round(Math.abs((+a-+c)/864e5)),h=Math.round(Math.abs((+a-+n)/864e5)),f=Math.round(Math.abs((+a-+l)/864e5)),E=Math.round(Math.abs((+a-+u)/864e5)),v=-1;if(E>100||E<0);else if(E<55){v=.55*(h-E)}else if(E<83){v=.83*(f-E)+55}else{v=.17*(d-E)+83}var b=e.formatDateToParts(a,{month:"short",day:"numeric"}),_=e.formatDateToParts(n,{month:"short",day:"numeric"}),y=e.formatDateToParts(l,{month:"short",day:"numeric"}),w=e.formatDateToParts(c,{month:"short",day:"numeric"}),g=r.a.createElement("a",{href:m.iteration_plan_url},p.upcoming_version),x=r.a.createElement("a",{href:Object(o.withPrefix)(m.releaseNotesURL)},t("index_releases_released")),k=m.isBeta?r.a.createElement("a",{href:m.betaPostURL},t("index_releases_beta")):r.a.createElement("span",null,t("index_releases_beta")),N=m.isBeta?r.a.createElement("a",{href:m.rcPostURL},t("index_releases_rc")):r.a.createElement("span",null,t("index_releases_rc"));return r.a.createElement("div",{className:"grey-box  last"},r.a.createElement("p",null,t("index_releases_pt1")," ",g,t("index_releases_pt2")," ",w.map((function(e){return e.value})).join("")),r.a.createElement("div",{className:"release-info"},r.a.createElement("div",{className:"needle",style:{left:v+"%",display:-1===v?"none":"block"}}),r.a.createElement("div",{className:"needle-head",style:{left:v+"%",display:-1===v?"none":"block"}}),r.a.createElement("div",{className:"release"},r.a.createElement("div",null,r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"bar"})),r.a.createElement("p",null,m.tags.stableMajMin," ",x,r.a.createElement("br",null),b.map((function(e){return e.value})).join(""))),r.a.createElement("div",{className:"beta"},r.a.createElement("div",null,r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"bar"})),r.a.createElement("p",null,p.upcoming_version," ",k,r.a.createElement("br",null),_.map((function(e){return e.value})).join(""))),r.a.createElement("div",{className:"rc"},r.a.createElement("div",null,r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"bar"})),r.a.createElement("p",null,p.upcoming_version," ",N,r.a.createElement("br",null),y.map((function(e){return e.value})).join("")))))};var f=function(e){return r.a.createElement("div",{key:e.color,className:e.color+" "+e.className},r.a.createElement("div",{className:"container"},e.children))},E=function(e){var t=e.front?"front":"back";return r.a.createElement("div",{className:"editor "+t},r.a.createElement("div",{className:"titlebar"},r.a.createElement("div",{className:"lang"},e.isJS?r.a.createElement("svg",{fill:"none",height:"10",viewBox:"0 0 12 10",width:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m2.83755.874988h1.85625v5.225002c0 2.3375-1.1 3.1625-2.95625 3.1625-.4125 0-1.031251-.06875-1.375001-.20625l.20625-1.5125c.275.1375.618751.20625.962501.20625.75625 0 1.30625-.34375 1.30625-1.65zm3.50625 6.325002c.48125.275 1.30625.55 2.0625.55.89375 0 1.30625-.34375 1.30625-.89375s-.4125-.825-1.375-1.16875c-1.375-.48125-2.26875-1.2375-2.26875-2.475 0-1.44375 1.16875-2.475002 3.1625-2.475002.9625 0 1.65.206249 2.1312.412502l-.4125 1.5125c-.3437-.1375-.8937-.4125-1.7187-.4125s-1.2375.34375-1.2375.825c0 .55.48125.75625 1.5125 1.16875 1.4437.55 2.1313 1.30625 2.1313 2.475 0 1.375-1.1001 2.54375-3.3688 2.54375-.9625 0-1.85625-.275-2.3375-.48125z",fill:"#f1dd3f"})):r.a.createElement("svg",{fill:"none",height:"8",viewBox:"0 0 14 8",width:"14",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m6.72499 1.47255h-2.3375v6.32987h-1.71875v-6.32987h-2.337502v-1.117035h6.325002v1.117035zm5.29371 4.40609c0-.31029-.1375-.49646-.3437-.68264-.2063-.18617-.6188-.31028-1.1688-.49646-.96246-.24823-1.71871-.55852-2.26871-.93086-.48125-.37235-.75625-.80675-.75625-1.42732 0-.62058.275-1.11704.89375-1.489385.55-.372345 1.30625-.558518 2.20001-.558518.8937 0 1.65.24823 2.2.682633.55.4344.825.99292.825 1.6135h-1.5813c0-.37235-.1375-.62058-.4125-.86881-.275-.18617-.6187-.31029-1.1-.31029-.4125 0-.75621.06206-1.03121.24823-.275.18618-.34375.43441-.34375.68264s.1375.4344.4125.62057.68746.31029 1.37496.49646c.8938.24823 1.5813.55852 2.0625.93087.4813.37234.6875.8688.6875 1.48938 0 .62057-.275 1.17909-.825 1.48938-.55.37234-1.3062.55852-2.2.55852-.89371 0-1.71871-.18618-2.33746-.62058s-1.03125-.99292-.9625-1.79967h1.65c0 .4344.1375.74469.48125.99292.275.18617.75621.31029 1.23751.31029.4812 0 .825-.06206 1.0312-.24823.1375-.18617.275-.4344.275-.68263z",fill:"#529bba"}))),r.a.createElement("div",{className:"window-name"},"index.ts")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"lines"}),r.a.createElement("div",{className:"text"},"function addPrices(items: number[]) {\nlet sum = 0\n  for (const item of items) {\n    sum += item\n  }\n  return sum\n}\n\naddPrices(3, 4, 6)")))},v=function(e){return r.a.createElement("div",{className:"row"},e.children)},b=function(e){return r.a.createElement("div",{className:"col1"},e.children)},_=function(e){return r.a.createElement("div",{className:"col2"},e.children)},y=function(e){var t=Object(i.a)(Object(s.a)());return r.a.createElement(l.a,{title:"JavaScript For Any Scale.",description:"Desc",lang:"en"},r.a.createElement(u,null),r.a.createElement("div",{id:"index"},r.a.createElement(f,{color:"darkblue",className:"headline"},r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement("h1",null,t("index_headline",{bold:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("strong",null,t)}})),r.a.createElement("p",null,t("index_byline")),r.a.createElement("p",null,t("index_summary")),r.a.createElement("p",null,t("index_locations"))),r.a.createElement(_,null,r.a.createElement("div",{className:"headline-diagram"},r.a.createElement(E,{title:"index.js",isJS:!0}),r.a.createElement(E,{title:"index.js",isJS:!1,front:!0}))))),r.a.createElement(f,{color:"white"},r.a.createElement("h3",null,t("index_what_is")),r.a.createElement(v,null,r.a.createElement(b,{key:"what is js"},r.a.createElement("h4",null,t("index_what_is_js")),r.a.createElement("div",null,t("index_what_is_js_copy",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)}}))),r.a.createElement(b,{key:"you can trust typescipt"},r.a.createElement("h4",null,t("index_trust")),r.a.createElement("div",null,t("index_trust_copy",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)},babel:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{href:"https://babeljs.io/"},t)}}))),r.a.createElement(b,{key:"TS improves JS"},r.a.createElement("h4",null,t("index_standards")),r.a.createElement("div",null,t("index_standards_copy",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)}}))))),r.a.createElement(f,{color:"blue"},r.a.createElement(v,null,r.a.createElement(b,{key:"dts description"},r.a.createElement("h4",null,t("index_dts")),r.a.createElement("div",null,t("index_dts_copy",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)},dt:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},t)}}))),r.a.createElement(b,{key:"tools description"},r.a.createElement("h4",null,t("index_tools")),r.a.createElement("div",null,t("index_tools_copy",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)},vs:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:1,href:"https://visualstudio.microsoft.com"},t)},vsc:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:2,href:"https://code.visualstudio.com/"},t)},atom:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:3,href:"https://atom.io/"},t)},nova:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:4,href:"https://panic.com/nova/"},t)},subl:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:5,href:"https://www.sublimetext.com//"},t)},emacs:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:6,href:"https://github.com/ananthakumaran/tide/#readme"},t)},vim:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:7,href:"https://www.vimfromscratch.com/articles/setting-up-vim-for-typescript/"},t)},webs:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:8,href:"https://www.jetbrains.com/webstorm/"},t)},eclipse:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("a",{key:9,href:"https://github.com/eclipse/wildwebdeveloper/"},t)}}))),r.a.createElement(b,{key:"why trust ts"},r.a.createElement("h4",null,t("index_trust")),r.a.createElement("div",null,t("index_trust_copy",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)}}))))),r.a.createElement(f,{color:"white"},r.a.createElement(v,{key:"what is ts?"},r.a.createElement("h3",null,t("index_what_is"))),r.a.createElement(v,{key:"call to actions"},r.a.createElement(d.a,{href:Object(o.withPrefix)("/docs/handbook"),title:t("index_started_handbook"),blurb:t("index_started_handbook_blurb")}),r.a.createElement(d.a,{href:Object(o.withPrefix)("/docs/handbook"),title:t("index_started_guides"),blurb:t("index_started_guides_blurb")}),r.a.createElement(d.a,{href:Object(o.withPrefix)("/docs/handbook"),title:t("index_started_ref"),blurb:t("index_started_ref_blurb")}),r.a.createElement(d.a,{href:Object(o.withPrefix)("/docs/handbook"),title:t("index_started_community"),blurb:t("index_started_community_blurb"),last:!0})),r.a.createElement(v,{key:"overall info"},r.a.createElement(b,{key:"installation"},r.a.createElement("h4",null,t("index_install")),r.a.createElement("div",{className:"grey-box"},t("index_install_ref",{p:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("p",null,t)},pre:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("pre",null,t)},code:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.createElement("code",null,t)}}))),r.a.createElement(b,{key:"releases"},r.a.createElement("h4",null,t("index_releases")),r.a.createElement(h,null)))),r.a.createElement(f,{color:"purple"},r.a.createElement("p",null,"hi")),r.a.createElement(f,{color:"light-grey"},r.a.createElement("p",null,"hi"))))};t.default=function(e){return r.a.createElement(c.a,null,r.a.createElement(y,e))}},fGr3:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("9J3r");var n=a("ERkP"),r=a.n(n),l=a("Wbzz"),c=function(e){var t=e.href.startsWith("http")?e.href:Object(l.withPrefix)(e.href);return r.a.createElement("a",{key:e.title,href:t,className:e.headline?"headline clicky-grey-button":"clicky-grey-button"},r.a.createElement("p",null,e.blurb),r.a.createElement("h4",null,e.title))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7ca6d05d9bb7d994c9bd.js.map
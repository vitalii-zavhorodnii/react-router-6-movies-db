"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[213],{1213:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var i,r,o,a,s,c,l,p=e(885),d=e(2791),h=e(7406),x=e(168),u=e(8683),f=e(6031),m=e(3592),g=e(3504),w=e(184),Z=f.ZP.div(i||(i=(0,x.Z)(["\n  width: 280px;\n  transform: scale(1);\n  transition: transform ",";\n\n  @media "," {\n    width: 336px;\n  }\n\n  @media "," {\n    width: 305px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.04);\n  }\n"])),(function(n){return n.theme.transition}),m.A.tablet,m.A.desktop),v=f.ZP.div(r||(r=(0,x.Z)(["\n  height: 402px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n\n  @media "," {\n    height: 455px;\n  }\n\n  @media "," {\n    height: 449px;\n  }\n"])),m.A.tablet,m.A.desktop),j=f.ZP.picture(o||(o=(0,x.Z)(["\n  width: 100%;\n"]))),b=f.ZP.h3(a||(a=(0,x.Z)(["\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 12px / 14px;\n  color: ",";\n"])),(function(n){return n.theme.mainColor})),_=f.ZP.p(s||(s=(0,x.Z)(["\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 12px / 14px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=function(n){var t=n.id,e=n.title,i=n.posterPath,r=n.genres;return(0,w.jsx)(g.rU,{to:"/movies/".concat(t),children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(v,{children:(0,w.jsxs)(j,{children:[(0,w.jsx)("source",{srcSet:"https://themoviedb.org/t/p/w342".concat(i),media:"(min-width: 768px)"}),(0,w.jsx)("source",{srcSet:"https://themoviedb.org/t/p/w342".concat(i),media:"(min-width: 1024px)"}),(0,w.jsx)("img",{alt:e,loading:"lazy",src:"https://themoviedb.org/t/p/w342".concat(i)})]})}),(0,w.jsx)(b,{children:e}),(0,w.jsx)(_,{children:r})]})})},k=f.ZP.ul(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  margin-left: -20px;\n\n  @media "," {\n    flex-direction: row;\n    align-items: flex-start;\n    margin-left: -32px;\n  }\n\n  @media "," {\n    margin-left: -16px;\n  }\n"])),m.A.tablet,m.A.desktop),A=f.ZP.li(l||(l=(0,x.Z)(["\n  margin-left: 20px;\n  margin-top: 20px;\n\n  @media "," {\n    flex-basis: calc((100% - (2 * 32px)) / 2);\n    margin-left: 32px;\n    margin-top: 32px;\n  }\n\n  @media "," {\n    flex-basis: calc((100% - (3 * 16px)) / 3);\n    margin-left: 16px;\n    margin-top: 32px;\n  }\n"])),m.A.tablet,m.A.desktop),C=function(n){var t=n.list;return(0,w.jsx)(k,{children:t.length>0?t.map((function(n){return(0,w.jsx)(A,{children:(0,w.jsx)(P,(0,u.Z)({},n))},n.id)})):null})},z=e(249),S=e(3221),y=function(n,t){if(n.length&&t){var e=t.map((function(t){return n.find((function(n){return n.id===t}))})).map((function(n){return null===n||void 0===n?void 0:n.name})).join(", ");if(e)return e}return""},E=function(n){var t=n.genresList,e=(0,d.useState)([]),i=(0,p.Z)(e,2),r=i[0],o=i[1];return(0,d.useEffect)((function(){t.length&&(0,h.Tg)().then((function(n){return o(function(n,t){return t.map((function(t){return{id:t.id,title:t.title,posterPath:t.poster_path,genres:y(n,t.genre_ids)}}))}(t,n.list))}))}),[t]),(0,w.jsx)(S.Z,{children:(0,w.jsx)(z.Z,{children:(0,w.jsx)(C,{list:r})})})}}}]);
//# sourceMappingURL=213.74521a37.chunk.js.map
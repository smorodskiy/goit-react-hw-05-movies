"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,i,u,s,o=t(885),d=t(791),p=t(689),f=t(731),l=t(86),h=t(168),v=t(691),x=v.default.button(r||(r=(0,h.Z)(["\n  border-radius: 6px;\n  padding: 7px 10px;\n  border: medium none transparent;\n  outline: none;\n  margin-left: 20px;\n  font-weight: 600;\n  cursor: pointer;\n\n  :hover {\n    background: #00b4cc;\n    color: #fff;\n  }\n"]))),g=v.default.div(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  padding: 20px;\n"]))),m=v.default.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),Z=v.default.img(i||(i=(0,h.Z)(["\n  width: 250px;\n"]))),b=v.default.h2(u||(u=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),w=v.default.div(s||(s=(0,h.Z)([""]))),j=t(184),k=function(){var n=(0,p.UO)().movieId,e=(0,d.useState)(null),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,p.TH)(),i=(0,p.s0)();if((0,d.useEffect)((function(){(0,l.Pg)(n).then(a)}),[n]),r)return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x,{onClick:function(){i(c.state.from)},children:"Go back"}),(0,j.jsxs)(g,{children:[(0,j.jsx)(Z,{src:"".concat("https://image.tmdb.org/t/p/w500/","/").concat(r.poster_path),alt:"".concat(r.title)}),(0,j.jsxs)("div",{children:[(0,j.jsx)(b,{children:r.title}),(0,j.jsxs)(w,{children:[(0,j.jsx)("b",{children:"Overview"}),(0,j.jsx)("p",{children:r.overview}),(0,j.jsx)("b",{children:"Genres"}),(0,j.jsx)("ul",{children:r.genres.map((function(n){return(0,j.jsx)("li",{children:n.name},n.id)}))})]})]})]}),(0,j.jsxs)(m,{children:[(0,j.jsx)("h2",{children:"Additional information"}),(0,j.jsx)(f.rU,{to:"cast",state:c.state,children:"Cast"}),(0,j.jsx)(f.rU,{to:"reviews",state:c.state,children:"Reviews"})]}),(0,j.jsx)(p.j3,{})]})}},86:function(n,e,t){t.d(e,{Df:function(){return u},Jh:function(){return p},Pg:function(){return s},Ph:function(){return o},bp:function(){return d}});var r=t(165),a=t(861),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="d5db08081a23b85f2c18e58b0bb5a9b8",u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/week?api_key=".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.28313ebc.chunk.js.map
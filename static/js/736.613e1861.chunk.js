"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,u=e(165),c=e(861),i=e(885),s=e(791),o=e(689),p=e(86),f=e(168),l=e(691),d=l.default.ul(r||(r=(0,f.Z)(["\n  margin-top: 5px;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n"]))),h=l.default.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),v=e(184),g=function(){var n=(0,o.UO)().movieId,t=(0,s.useState)(null),e=(0,i.Z)(t,2),r=e[0],a=e[1];if((0,s.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,u.Z)().mark((function t(){var e;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.bp)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),r)return(0,v.jsx)("div",{children:r.length>0?(0,v.jsx)(d,{children:r.map((function(n){return(0,v.jsxs)(h,{children:[(0,v.jsx)("img",{src:"".concat(n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://via.placeholder.com/150?text="+n.name),width:"100%",height:"100%",alt:n.name}),(0,v.jsx)("span",{children:n.name})]},n.id)}))}):(0,v.jsx)("p",{children:"We don't have any cast for that movie"})})}},86:function(n,t,e){e.d(t,{Df:function(){return i},Jh:function(){return f},Pg:function(){return s},Ph:function(){return o},bp:function(){return p}});var r=e(165),a=e(861),u=e(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c="d5db08081a23b85f2c18e58b0bb5a9b8",i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("trending/movie/week?api_key=".concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.613e1861.chunk.js.map
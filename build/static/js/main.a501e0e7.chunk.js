(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(18),o=n.n(r),s=(n(27),n(28),n(4)),l=n.n(s),u=n(6),d=n(5),h=n(19),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(47),n(8));var v=function(e){var t=e.title,n=e.fetchURL,i=e.isLargeRow,r=Object(a.useState)([]),o=Object(d.a)(r,2),s=o[0],h=o[1],v=Object(a.useState)(""),j=Object(d.a)(v,2),p=j[0],m=j[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var g={height:"390",width:"100%",playerVars:{autoplay:1}},O=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=4;break}m(""),e.next=8;break;case 4:return e.next=6,f.get("/movie/".concat(t.id,"/videos?api_key=fb34530271b349314af0de263d16ab5a"));case 6:c=e.sent,m(null===(n=c.data.results[0])||void 0===n?void 0:n.key);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https:/image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alr:e.name,onClick:function(){return O(e)}},e.id)}))}),Object(c.jsx)(b.a,{videoId:p,opts:g}),p&&Object(c.jsx)(b.a,{videoId:p,opts:g})]})},j="28f0cc330ceb6ad4071456d1d98a51f3",p={fetchTrending:"/trending/all/week?api_key=".concat(j,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(j,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(j,"&language=en-US"),fecthActionMovies:"/discover/movie?api_key=".concat(j,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(j,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(j,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(j,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(j,"&with_genres=99")};n(61);var m=function(){var e,t,n=Object(a.useState)(),i=Object(d.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(p.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")'),backdropPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner_contents",children:[Object(c.jsx)("h1",{className:"banner_title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(c.jsxs)("div",{className:"banner_buttons",children:[Object(c.jsx)("button",{className:"banner_button",children:"Play"}),Object(c.jsx)("button",{className:"banner_button",children:"My List "})]}),Object(c.jsx)("h1",{className:"banner_description",children:(e=null===r||void 0===r?void 0:r.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"banner_fadeBottom"})]})};n(62);var g=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("nav",{}),Object(c.jsx)(m,{}),Object(c.jsx)(v,{title:"NETFLIX ORIGINALS",fetchURL:p.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(v,{title:"Trending Now",fetchURL:p.fetchTrending}),Object(c.jsx)(v,{title:"Top Rated",fetchURL:p.fetchTopRated}),Object(c.jsx)(v,{title:"Action Movies",fetchURL:p.fecthActionMovies}),Object(c.jsx)(v,{title:"Comedy Movies",fetchURL:p.fetchComedyMovies}),Object(c.jsx)(v,{title:"Horror Movies",fetchURL:p.fetchHorrorMovies}),Object(c.jsx)(v,{title:"Romance Movies",fetchURL:p.fetchRomanceMovies}),Object(c.jsx)(v,{title:"Document Movies",fetchURL:p.fetchDocumentaries})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),O()}},[[63,1,2]]]);
//# sourceMappingURL=main.a501e0e7.chunk.js.map
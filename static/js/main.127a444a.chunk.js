(this["webpackJsonpbulletin-board"]=this["webpackJsonpbulletin-board"]||[]).push([[0],{21:function(e,t,a){e.exports={root:"PageNav_root__1kTnF",link:"PageNav_link__dLwpU",logo:"PageNav_logo__2X_X1"}},52:function(e,t,a){e.exports={root:"Footer_root__3S8dX"}},53:function(e,t,a){},54:function(e,t,a){e.exports={root:"MainLayout_root__1tCmj"}},55:function(e,t,a){},56:function(e,t,a){e.exports={root:"Hero_root__2tGfh"}},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),r=a.n(c),i=a(20),l=a(6),s=a(16),m=a(63),u=a(117),d=a(115),p=a(116),h=a(23),g=a(47),b=a(48),E=a(64),f=a(18),v=function(e){return"app/".concat("posts","/").concat(e)},j=v("FETCH_START"),N=v("FETCH_SUCCESS"),O=v("FETCH_ERROR"),y=v("UPDATE_POST_STATUS");var _,x=function(e){return e.isLogged},T=(_="UPDATE_LOGIN_STATUS","app/".concat("login","/").concat(_));var k={isLogged:!0,posts:{data:[{id:"1",title:"Announcement title 1",description:"This is a description. You can use this section to describe the content",publicationDate:"2020-04-20",lastUpdate:"2020-05-19",authorEmail:"aaa@bb.eu",status:"draft",price:55,phone:"888-777-666",image:"https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_960_720.jpg",imageTitle:"Image title1"},{id:"2",title:"Announcement title 2",description:"This is a description. You can use this section to describe the content",publicationDate:"2020-04-20",lastUpdate:"2020-05-19",authorEmail:"aaa@bb.eu",status:"draft",price:55,phone:"888-777-666",image:"https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg",imageTitle:"Image title1"},{id:"3",title:"Announcement title 3",description:"This is a description. You can use this section to describe the content",publicationDate:"2020-04-20",lastUpdate:"2020-05-19",authorEmail:"aaa@bb.eu",status:"draft",price:55,phone:"888-777-666",image:"https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_960_720.jpg",imageTitle:"Image title1"},{id:"4",title:"Announcement title 4",description:"This is a description. You can use this section to describe the content",publicationDate:"2020-04-20",lastUpdate:"2020-05-19",authorEmail:"aaa@bb.eu",status:"draft",price:55,phone:"888-777-666",image:"https://cdn.pixabay.com/photo/2016/12/12/15/30/dodge-charger-1901806_960_720.jpg",imageTitle:"Image title1"},{id:"5",title:"Announcement title 5",description:"This is a description. You can use this section to describe the content",publicationDate:"2020-04-20",lastUpdate:"2020-05-19",authorEmail:"aaa@bb.eu",status:"draft",price:55,phone:"888-777-666",image:"https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_960_720.jpg",imageTitle:"Image title1"},{id:"6",title:"Announcement title 6",description:"This is a description. You can use this section to describe the content",publicationDate:"2020-04-20",lastUpdate:"2020-05-19",authorEmail:"aaa@bb.eu",status:"draft",price:55,phone:"888-777-666",image:"https://cdn.pixabay.com/photo/2018/10/31/19/43/books-3786559_960_720.jpg",imageTitle:"Image title1"}],loading:{active:!1,error:!1}}},w={posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return Object(f.a)(Object(f.a)({},e),{},{loading:{active:!0,error:!1}});case N:return Object(f.a)(Object(f.a)({},e),{},{loading:{active:!1,error:!1},data:t.payload});case O:return Object(f.a)(Object(f.a)({},e),{},{loading:{active:!1,error:t.payload}});case y:return Object(f.a)(Object(f.a)({},e),{},{data:Object(E.a)(e.data.map((function(e){return e.id===t.payload.id?t.payload:e})))});default:return e}},isLogged:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case T:switch(t.payload){case"login":return!0;case"logout":return!1;default:return e}default:return e}}};Object.keys(k).forEach((function(e){"undefined"==typeof w[e]&&(w[e]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e})}));var C=Object(h.combineReducers)(w),L=Object(h.createStore)(C,k,Object(b.composeWithDevTools)(Object(h.applyMiddleware)(g.a))),S=a(2),A=a(118),D=a(21),U=a.n(D),I=Object(s.b)((function(e){return{isLogged:e.isLogged}}))((function(e){var t=e.className,a=e.isLogged;return(o.a.createElement("div",{className:Object(S.a)(t,U.a.root)},o.a.createElement(A.a,{className:Object(S.a)(U.a.link),component:i.b,exact:!0,to:"".concat("/bulletin-board","/"),activeClassName:"active"},o.a.createElement("i",{className:Object(S.a)(U.a.logo,"fas fa-bullhorn")}),"Announce It!"),o.a.createElement("div",null,o.a.createElement(A.a,{className:U.a.link,component:i.b,exact:!0,to:"".concat("/bulletin-board","/"),activeClassName:"active"},"Homepage"),a&&o.a.createElement(A.a,{className:U.a.link,component:i.b,to:"".concat("/bulletin-board","/posts"),activeClassName:"active"},"My posts"),a?o.a.createElement(A.a,{className:U.a.link,component:i.b,to:"".concat("/bulletin-board","/"),activeClassName:"active"},"Log Out"):o.a.createElement(A.a,{className:U.a.link,component:i.b,to:"".concat("/bulletin-board","/login"),activeClassName:"active"},"Log In"))))})),P=a(52),B=a.n(P),F=a(83),G=a(53),H=a.n(G),M=a(105),W=function(e){var t=e.className;e.children;return(o.a.createElement("div",{className:Object(S.a)(t,H.a.root)},o.a.createElement(F.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(M.a,{color:"inherit",href:"https://github.com/grzegorz-jodlowski"},"GitHub")," ",(new Date).getFullYear(),".")))},Y=function(e){var t=e.className;e.children;return(o.a.createElement("footer",{className:Object(S.a)(t,B.a.root)},o.a.createElement(F.a,{variant:"h6",align:"center",gutterBottom:!0},"Announce It!"),o.a.createElement(F.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Local announcements and advertisements for free"),o.a.createElement(W,null)))},R=a(106),X=a(108),z=a(107),J=a(54),$=a.n(J),q=Object(s.b)((function(e){return{}}),(function(e){return{updateLoginStatus:function(t){return e({payload:t,type:T})}}}))((function(e){var t=e.className,a=e.children,n=e.updateLoginStatus;return(o.a.createElement("div",{className:Object(S.a)(t,$.a.root)},o.a.createElement(R.a,null,o.a.createElement(z.a,{maxWidth:"lg"},o.a.createElement(X.a,{disableGutters:!0},o.a.createElement(I,null)))),o.a.createElement(z.a,{maxWidth:"lg"},o.a.createElement(X.a,null),o.a.createElement("select",{onChange:function(e){return n(e.target.value)}},o.a.createElement("option",{value:"login"},"Login"),o.a.createElement("option",{value:"logout"},"Logout"),o.a.createElement("option",{value:"admin"},"admin")),a),o.a.createElement(Y,null)))})),K=a(55),Q=a.n(K),V=a(56),Z=a.n(V),ee=a(110),te=a(109),ae=Object(te.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)}}})),ne=Object(s.b)((function(e){return{isLogged:x(e)}}))((function(e){var t=e.className,a=(e.children,e.isLogged),n=ae();return o.a.createElement("div",{className:Object(S.a)(t,Z.a.root)},o.a.createElement(z.a,{maxWidth:"sm"},o.a.createElement(F.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Bulletin board"),o.a.createElement(F.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Do you want to clean space around you? Add and sell things you no longer need. Help others find something interesting!"),o.a.createElement("div",{className:n.heroButtons},o.a.createElement(ee.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(ee.a,{item:!0},a&&o.a.createElement(A.a,{variant:"contained",color:"primary",href:"".concat("/bulletin-board","/post/add")},"Add new post"))))))})),oe=a(57),ce=a.n(oe),re=(a(80),a(113)),ie=a(112),le=a(111),se=a(114),me=Object(te.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),ue=function(e){var t=e.post,a=me(),n=t.title,c=t.image,r=t.imageTitle,i=t.description,l=t.id;return o.a.createElement(M.a,{underline:"none",href:"".concat("/bulletin-board","/post/").concat(l)},o.a.createElement(le.a,{className:a.card},o.a.createElement(ie.a,{className:a.cardMedia,image:c,title:r}),o.a.createElement(re.a,{className:a.cardContent},o.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},n),o.a.createElement(F.a,null,i)),o.a.createElement(se.a,null)))},de=Object(te.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}})),pe=Object(s.b)((function(e){return{posts:(t=e,t.posts.data)};var t}))((function(e){var t=e.className,a=e.posts,n=de();return o.a.createElement("div",{className:Object(S.a)(t,ce.a.root)},o.a.createElement(z.a,{className:n.cardGrid,maxWidth:"md"},o.a.createElement(ee.a,{container:!0,spacing:4},a.map((function(e){return o.a.createElement(ee.a,{item:!0,key:e.title,xs:12,sm:6,md:4},o.a.createElement(ue,{post:e}))})))))})),he=function(e){var t=e.className;e.children;return(o.a.createElement("main",{className:Object(S.a)(t,Q.a.root)},o.a.createElement(ne,null),o.a.createElement(pe,null)))},ge=a(58),be=a.n(ge),Ee=function(e){var t=e.className,a=e.children;return(o.a.createElement("div",{className:Object(S.a)(t,be.a.root)},o.a.createElement("h2",null,"Post"),a))},fe=a(59),ve=a.n(fe),je=function(e){var t=e.className,a=e.children;return(o.a.createElement("div",{className:Object(S.a)(t,ve.a.root)},o.a.createElement("h2",null,"PostAdd"),a))},Ne=a(60),Oe=a.n(Ne),ye=function(e){var t=e.className,a=e.children;return(o.a.createElement("div",{className:Object(S.a)(t,Oe.a.root)},o.a.createElement("h2",null,"PostEdit"),a))},_e=a(61),xe=a.n(_e),Te=function(e){var t=e.className,a=e.children;return(o.a.createElement("div",{className:Object(S.a)(t,xe.a.root)},o.a.createElement("h2",null,"MyPosts"),a))},ke=a(62),we=a.n(ke),Ce=function(e){var t=e.className,a=e.children;return(o.a.createElement("div",{className:Object(S.a)(t,we.a.root)},o.a.createElement("h2",null,"NotFound"),a))},Le=Object(m.a)({palette:{primary:{main:"#2B4C6F"},secondary:{main:"#c0c0c0"}}}),Se=function(){return o.a.createElement(s.a,{store:L},o.a.createElement(i.a,{basename:"/"},o.a.createElement(u.b,{injectFirst:!0},o.a.createElement(d.a,{theme:Le},o.a.createElement(p.a,null),o.a.createElement(q,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:he}),o.a.createElement(l.a,{exact:!0,path:"/post/add",component:je}),o.a.createElement(l.a,{exact:!0,path:"/post/:id",component:Ee}),o.a.createElement(l.a,{exact:!0,path:"/post/:id/edit",component:ye}),o.a.createElement(l.a,{exact:!0,path:"/posts",component:Te}),o.a.createElement(l.a,{exact:!0,path:"*",component:Ce})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.127a444a.chunk.js.map
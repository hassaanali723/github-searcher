(this["webpackJsonpauth0-github-api"]=this["webpackJsonpauth0-github-api"]||[]).push([[0],{181:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(39),a=n.n(c),r=(n(181),n(29)),s=n(30),l=n(32),h=n(31),u=(n.p,n(52),n(2)),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={},o}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.userData,t="".concat(e.homeURL,"?tab=following"),n="".concat(e.homeURL,"?tab=followers"),o="".concat(e.homeURL,"?tab=repositories");return"Not Found"===e.notFound?Object(u.jsxs)("div",{className:"notFound",children:[Object(u.jsx)("h2",{children:"Hey"}),Object(u.jsx)("p",{children:"Username Not Found"})]}):Object(u.jsxs)("section",{className:"github-profile",children:[console.log(e.username),Object(u.jsxs)("div",{className:"github-profile-info",children:[Object(u.jsx)("a",{href:e.homeURL,target:"_blank",title:e.name||e.username,children:Object(u.jsx)("img",{src:e.avatar})}),Object(u.jsx)("a",{href:e.homeURL,target:"_blank",title:e.name||e.username,children:Object(u.jsx)("h2",{children:e.name})}),Object(u.jsx)("h3",{children:e.location})]}),Object(u.jsx)("div",{className:"github-profile-state",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:n,target:"_blank",title:"Number of Followers",children:[Object(u.jsx)("i",{children:e.followers}),Object(u.jsx)("span",{children:"Followers"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:t,target:"_blank",title:"Number of Following",children:[Object(u.jsx)("i",{children:e.following}),Object(u.jsx)("span",{children:"Following"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:o,target:"_blank",title:"Number of Repositories",children:[Object(u.jsx)("i",{children:e.repos}),Object(u.jsx)("span",{children:"Repositories"})]})})]})})]})}}]),n}(o.Component),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={},o}return Object(s.a)(n,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.username.value;console.log(t),this.props.searchProfile(t),this.refs.username.value=""}},{key:"render",value:function(){return Object(u.jsx)("div",{onSubmit:this.onSubmit.bind(this),children:Object(u.jsx)("form",{className:"search-box",children:Object(u.jsx)("input",{type:"search",ref:"username",placeholder:"Type username and hit enter"})})})}}]),n}(o.Component),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={username:"hassaanali723",name:"",avatar:"",repos:"",followers:"",following:"",homeURL:"",location:"",notFound:""},o}return Object(s.a)(n,[{key:"getProfile",value:function(e){var t=this,n="".concat("https://api.github.com/users","/").concat(e);fetch(n).then((function(e){return e.json()})).then((function(e){t.setState({username:e.login,name:e.name,avatar:e.avatar_url,repos:e.public_repos,followers:e.followers,following:e.following,homeURL:e.html_url,location:e.location,notFound:e.message})})).catch((function(e){return console.log("There was a problem in fetching data")}))}},{key:"componentDidMount",value:function(){this.getProfile(this.state.username)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("section",{id:"card",children:[Object(u.jsx)("h2",{children:"Welcome to GitHub Searcher"}),Object(u.jsx)(b,{searchProfile:this.getProfile.bind(this)}),Object(u.jsx)(j,{userData:this.state})]})})}}]),n}(o.Component),f=n(377),m=n(376),O=n(375),g=n(175),p=(n(183),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={},o}return Object(s.a)(n,[{key:"onLogin",value:function(){this.props.onLogin()}},{key:"onLogout",value:function(){this.props.onLogout()}},{key:"render",value:function(){var e;return e=this.props.idToken?Object(u.jsx)(f.a.Link,{onClick:this.onLogout.bind(this),href:"#",children:"Logout"}):Object(u.jsx)(f.a.Link,{onClick:this.onLogin.bind(this),href:"#",children:"Login"}),Object(u.jsx)("div",{children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(m.a.Brand,{children:"Github Searcher"})}),Object(u.jsx)(f.a,{children:Object(u.jsx)(g.a,{children:e})})]})})}}]),n}(o.Component)),v=n(117),x=n.n(v),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={idToken:"",profile:{}},o}return Object(s.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.lock=new x.a(this.props.clientID,this.props.domain),this.lock.on("authenticated",(function(t){console.log(t),e.lock.getProfile(t.accessToken,(function(n,o){n?console.log(n):(e.setProfile(t.accessToken,o),console.log(o))}))})),this.getProfile()}},{key:"setProfile",value:function(e,t){localStorage.setItem("idToken",e),localStorage.setItem("profile",JSON.stringify(t)),this.setState({idToken:localStorage.getItem("idToken"),profile:JSON.parse(localStorage.getItem("profile"))})}},{key:"getProfile",value:function(){var e=this;null!=localStorage.getItem&&this.setState({idToken:localStorage.getItem("idToken"),profile:JSON.parse(localStorage.getItem("profile"))},(function(){console.log(e.state)}))}},{key:"showLock",value:function(){this.lock.show()}},{key:"logout",value:function(){this.setState({idToken:"",profile:""},(function(){localStorage.removeItem("idToken"),localStorage.removeItem("profile")}))}},{key:"render",value:function(){var e;return e=this.state.idToken?Object(u.jsx)(d,{}):Object(u.jsx)("div",{className:"main",children:Object(u.jsx)("h2",{children:"Click on Login to view the github Searcher"})}),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{idToken:this.state.idToken,profile:this.state.profile,onLogout:this.logout.bind(this),onLogin:this.showLock.bind(this)}),e]})}}]),n}(o.Component);k.defaultProps={clientID:"1OCNZfc8mHfYEg7UmdOGHHE75heIpLMf",domain:"dev-cpqq0sbz.us.auth0.com"};var L=k,S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,378)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),S()},52:function(e,t,n){}},[[372,1,2]]]);
//# sourceMappingURL=main.14149caf.chunk.js.map
(this.webpackJsonprobot=this.webpackJsonprobot||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),i=t.n(o),c=(t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(14);var s=t(3),u=t(4),h=t(6),d=t(5),f=t(7),m=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 br2 b--black bg-lightest-blue",type:"search",placeholder:"Search mugy friends :)",onChange:n}))},g=function(e){var n=e.id,t=e.name,a=e.email;return r.a.createElement("div",{className:" tc bg- linear-gradient(299deg, #21D4FD 0%, #B721FF 64% dib   ma2 pa1 br4 bg-animate hover-bg-blue  b--black ba bw1   grow "},r.a.createElement("img",{src:"https://robohash.org/".concat(n),alt:"asdas"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},v=function(e){var n=e.arr;return r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},b=(t(15),t(16),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"530px"}},e.children)}),p=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(h.a)(this,Object(d.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={arr:[],searchfield:""},e}return Object(f.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({arr:n})}))}},{key:"render",value:function(){var e=this,n=this.state.arr.filter((function(n){return n.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.arr.length?r.a.createElement("h1",{className:" tc "},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends of MB"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(v,{arr:n})))}}]),n}(a.Component);i.a.render(r.a.createElement(p,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robot",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robot","/service-worker.js");c?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):l(e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.a8643c56.chunk.js.map
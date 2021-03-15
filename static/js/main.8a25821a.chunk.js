(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(15),s=n.n(a),i=(n(35),n(14)),r=n(3),l=n(1),d=function(e){var t=Object(r.g)();return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"header container",children:Object(l.jsxs)("div",{className:"header flex",children:[Object(l.jsx)("h1",{onClick:function(){return t.push("/")},style:{cursor:"pointer"},children:"Digital Library"}),Object(l.jsx)("div",{className:"action-buttons flex",children:Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("i",{className:"fa fa-search"}),Object(l.jsx)("input",{placeholder:"Search Books",type:"text",className:"search",value:e.searchTerm,onChange:function(t){return e.setSearchTerm(t.target.value)}})]})})]})})})},j=n(20),u=n(7),b=n(10),h=n(19),O=n(29),m=n(30),f="https://book-management-backend.herokuapp.com/",x=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"readBooks",value:function(){return fetch(f+"getbooks").then((function(e){return e.json()}))}},{key:"writeBooks",value:function(e){return fetch(f+"writebooks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:e})}}]),e}(),p={name:"New Book",author:"Myself",description:"This is a placeholder for a new book. Please add the details and submit to add the book to the database. Have a nice day!",count:1},k=Object(h.b)({name:"AppState",initialState:{books:[],selectedBook:null},reducers:{addBook:function(e,t){var n=e.books.findIndex((function(e){return e.name===t.payload.name}));console.log(n,t.payload.name),-1!==n?e.books[n].count=(e.books[n].count||1)+1:e.books.push(t.payload),console.log(JSON.stringify(e.books)),x.writeBooks(JSON.stringify(e.books))},udpateSelectedBook:function(e,t){e.selectedBook=t.payload},updateBooks:function(e,t){var n=e.books.filter((function(e){return e.name!==t.payload.oldName}));e.books=[].concat(Object(j.a)(n),[t.payload.newBook]),x.writeBooks(JSON.stringify(e.books))},setBooks:function(e,t){e.books=t.payload},deleteBook:function(e,t){e.books=e.books.filter((function(e){return e.name!==t.payload.name})),x.writeBooks(JSON.stringify(e.books))}}}),v=k.actions,N=v.addBook,y=v.udpateSelectedBook,g=v.updateBooks,w=v.setBooks,B=v.deleteBook,S=function(e){return e.books},C=function(e){return e.selectedBook},T=k.reducer,A=function(){return Object(l.jsx)("div",{className:"blank",children:Object(l.jsxs)("div",{className:"blank-header",style:{maxWidth:700,margin:"0 auto",width:"100%",textAlign:"center",marginTop:"6rem"},children:[Object(l.jsx)("img",{src:"https://i.imgur.com/pKopwXp.gif",alt:"Loading"}),Object(l.jsx)("p",{style:{fontSize:24,fontWeight:300},children:"Please wait, the books are being transported from the API."})]})})},E=function(e){var t=Object(u.b)(),n=Object(u.c)(S),o=Object(j.a)(n).sort((function(e,t){return e.name.localeCompare(t.name)}));e.searchTerm&&(o=o.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.searchTerm.toLowerCase())})));var c=o.reduce((function(e,t){var n=t.name[0];return e[n]?e[n].books.push(t):e[n]={index:n,books:[t]},e}),{});return Object(l.jsxs)("div",{className:"list-holder",children:[Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("h2",{children:"List of Available books"}),Object(l.jsx)("div",{className:"action-holder",children:Object(l.jsx)(b.b,{to:"/add",className:"btn btn-outline",children:"Add Book"})})]}),Object(l.jsx)("div",{className:"books-list",children:e.loaded?Object.values(c).map((function(e){return Object(l.jsxs)("div",{className:"group-holder",children:[Object(l.jsx)("div",{className:"group-header",children:e.index}),Object(l.jsx)("div",{className:"books-holder",children:e.books.map((function(e){return Object(l.jsx)(b.b,{className:"book-holder",to:"/detail",onClick:function(){t(y(e))},children:Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("i",{className:"fa fa-book"}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("div",{className:"book-name",children:e.name}),Object(l.jsx)("div",{className:"book-author",children:e.author})]})]})},e.name)}))})]})})):Object(l.jsx)(A,{})})]})},J=n(18),D=n(26),I=function(e){var t=Object(u.c)(C),n=Object(r.g)(),a=Object(u.b)(),s=c.a.useRef(document.createElement("textarea")),d=c.a.useRef(document.createElement("textarea")),j=e.type||"view",h="view"===j,O="edit"===j||"add"===j,m="add"===j?p:t,f=Object(o.useState)(m),x=Object(i.a)(f,2),k=x[0],v=x[1],w=function(e){var t=e.target,n=t.name;v(Object(D.a)(Object(D.a)({},k),{},Object(J.a)({},n,t.value)))},S=function(e){e.current.style.height="auto",e.current.style.height=e.current.scrollHeight+"px"};return Object(o.useEffect)((function(){d.current.setAttribute("style","height:"+(d.current.scrollHeight+10)+"px;overflow-y:hidden;"),s.current.setAttribute("style","height:"+(s.current.scrollHeight+10)+"px;overflow-y:hidden;")}),[]),Object(l.jsxs)("div",{className:"book-detail-holder "+j,children:[Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("h2",{onClick:function(){return n.push("/list")},style:{cursor:"pointer"},children:Object(l.jsx)("i",{className:"fa fa-arrow-left back"})}),Object(l.jsx)("h2",{children:{view:"Book Details",edit:"Edit Book",add:"Add new Book"}[j]}),Object(l.jsxs)("div",{className:"action-holder flex",children:["view"===j&&Object(l.jsx)("div",{className:"btn btn-outline",onClick:function(){window.confirm("Are you sure? This action will delete this book.")&&(a(B(k)),n.push("/list"))},children:"Delete"}),"view"===j&&Object(l.jsx)(b.b,{to:"/edit",className:"btn btn-outline",children:"Edit"}),O&&Object(l.jsx)("div",{className:"btn btn-outline",onClick:function(){"edit"===j&&v(t),n.push("add"===j?"/list":"/detail")},children:"Cancel"}),O&&Object(l.jsx)("div",{className:"btn btn-primary",onClick:"edit"===j?function(){a(g({oldName:null===t||void 0===t?void 0:t.name,newBook:k})),a(y(k)),n.push("/detail")}:function(){a(N(k)),setTimeout((function(){return n.push("/list")}),500)},children:"edit"===j?"Done":"Add"})]})]})}),Object(l.jsxs)("div",{className:"detail-holder",children:[Object(l.jsxs)("div",{className:"title-desc flex",children:[Object(l.jsx)("i",{className:"fa fa-file-text"}),Object(l.jsxs)("div",{className:"title-author",children:[Object(l.jsx)("textarea",{className:"book-name",value:null===k||void 0===k?void 0:k.name,readOnly:h,rows:1,onChange:w,name:"name",ref:d,onInput:function(){return S(d)}}),Object(l.jsxs)("div",{className:"author-holder",children:["by ",Object(l.jsx)("input",{type:"text",value:null===k||void 0===k?void 0:k.author,name:"author",className:"author-input",readOnly:h,onChange:w})]})]})]}),Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("strong",{children:"Description:"}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{value:null===k||void 0===k?void 0:k.description,readOnly:h,rows:2,onChange:w,name:"description",ref:s,onInput:function(){return S(s)}})})]}),Object(l.jsxs)("div",{className:"count",children:[Object(l.jsx)("strong",{children:"No of Books:"}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"number",value:null===k||void 0===k?void 0:k.count,readOnly:h,onChange:w,name:"count"})})]})]})]})};var L=function(){var e=Object(o.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(u.b)(),s=Object(o.useState)(!1),j=Object(i.a)(s,2),b=j[0],h=j[1];return Object(o.useEffect)((function(){x.readBooks().then((function(e){a(w(JSON.parse(e))),setTimeout((function(){return h(!0)}),1e3)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{setSearchTerm:c,searchTerm:n}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"content-holder",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/list",render:function(){return Object(l.jsx)(E,{searchTerm:n,loaded:b})}}),Object(l.jsx)(r.b,{path:"/add",render:function(){return Object(l.jsx)(I,{type:"add"})}}),Object(u.c)(C)&&Object(l.jsx)(r.b,{path:"/detail",component:I}),Object(u.c)(C)&&Object(l.jsx)(r.b,{path:"/edit",render:function(){return Object(l.jsx)(I,{type:"edit"})}}),Object(l.jsx)(r.a,{to:"/list"})]})})})]})},H=Object(h.a)({reducer:T});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u.a,{store:H,children:Object(l.jsx)(b.a,{children:Object(l.jsx)(L,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.8a25821a.chunk.js.map
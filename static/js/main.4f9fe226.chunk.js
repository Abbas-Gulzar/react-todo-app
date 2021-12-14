(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(t,e,c){t.exports={item:"TodoItem_item__3MbaD",checkbox:"TodoItem_checkbox__2Jrs8",textInput:"TodoItem_textInput__t35cu"}},40:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var n=c(2),o=c(1),a=c.n(o),i=c(22),s=c.n(i),r=c(21),l=c(11),d=c(9),u=function(){return Object(n.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(n.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#eee",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},j=c(15),b=c(16),h=c(0),p=function(t){var e=Object(o.useState)({title:""}),c=Object(d.a)(e,2),a=c[0],i=c[1];return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.title.trim()?(t.addTodoProps(a.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(n.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:a.title,name:"title",onChange:function(t){i(Object(l.a)(Object(l.a)({},a),{},Object(j.a)({},t.target.name,t.target.value)))}}),Object(n.jsx)(h.b.Provider,{value:{color:"darkcyan",style:{fontSize:"20px",color:"#ff0000"},className:"submit-iconn"},children:Object(n.jsx)("button",{className:"input-submit",children:Object(n.jsx)(b.a,{})})})]})},x=c(17),O=c.n(x),f=function(t){var e=Object(o.useState)(!1),c=Object(d.a)(e,2),a=c[0],i=c[1],s=t.todo,r=s.completed,l=s.id,u=s.title,j={},h={};return a?j.display="none":h.display="none",Object(o.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(n.jsxs)("li",{className:O.a.item,children:[Object(n.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(n.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:r,onChange:function(){return t.handleChangeProps(l)}}),Object(n.jsx)("button",{onClick:function(){return t.deleteTodoProps(l)},children:Object(n.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(n.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:u})]}),Object(n.jsx)("input",{type:"text",style:h,className:O.a.textInput,value:u,onChange:function(e){t.setUpdate(e.target.value,l)},onKeyDown:function(t){"Enter"===t.key&&i(!1)}})]})},m=function(t){return Object(n.jsx)("ul",{children:t.todos.map((function(e){return Object(n.jsx)(f,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,setUpdate:t.setUpdate},e.id)}))})},g=c(43),v=c(3),y=c(8),N=function(){console.log(Object(v.e)());var t=Object(v.e)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),c=e.title,o=e.description;return Object(n.jsxs)("div",{className:"main__content",children:[Object(n.jsx)("h1",{children:c}),Object(n.jsx)("p",{children:o})]})},w=function(){console.log(Object(v.f)());var t=Object(v.f)(),e=t.url,c=t.path;return Object(n.jsxs)("div",{className:"about__content",children:[Object(n.jsxs)("ul",{className:"about__list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(y.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(n.jsx)("li",{children:Object(n.jsx)(y.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(n.jsx)(v.a,{path:"".concat(c,"/:slug"),children:Object(n.jsx)(N,{})})]})},k=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"No match for this page"})})},S=c(25),_=c(26),T=function(){var t=Object(o.useState)(!1),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(n.jsxs)("nav",{className:"navBar",children:[Object(n.jsx)("button",{onClick:function(){a(!c)},children:c?Object(n.jsx)(S.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(n.jsx)(_.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(n.jsx)("ul",{className:"menuNav ".concat(c?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/About",text:"About"},{id:3,path:"NotMatch",text:"NotMatch"}].map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)(y.c,{to:t.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:t.text})},t.id)}))})]})},C=function(){var t=Object(o.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(o.useEffect)((function(){var t=JSON.stringify(c);localStorage.setItem("todos",t)}),[c]),Object(n.jsxs)("switch",{children:[Object(n.jsx)(T,{}),Object(n.jsx)(v.a,{exact:!0,path:"/",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)(u,{}),Object(n.jsx)(p,{addTodoProps:function(t){var e={id:Object(g.a)(),title:t,completed:!1};a([].concat(Object(r.a)(c),[e]))}}),Object(n.jsx)(m,{todos:c,handleChangeProps:function(t){a((function(e){return e.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){a(Object(r.a)(c.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){a(c.map((function(c){return c.id===e&&(c.title=t),c})))}})]})})}),Object(n.jsx)(v.a,{path:"/about",children:Object(n.jsx)(w,{})}),Object(n.jsx)(v.a,{exact:!0,path:"/NotMatch",children:Object(n.jsx)(k,{})})]})};c(40);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y.a,{"react-todo-app":"",children:Object(n.jsx)(C,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4f9fe226.chunk.js.map
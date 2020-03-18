(this.webpackJsonptask_manager=this.webpackJsonptask_manager||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),c=a.n(r),l=a(3),s=a(4),i=a(6),d=a(5),u=a(7),m=a(10),p=a(23),f=a(8),b=a(22),y=a(61),g=a(11),h={todos:[],completedTodos:[]},S=Object(b.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS":case"GET_COMPLETED_TODOS":case"GET_TODOS_SORT_DOWN":case"GET_TODOS_SORT_DEFAULT":case"GET_TODOS_SORT_UP":case"GET_TODOS_SORT_DOWN":case"GET_TODOS_SORT_DEFAULT":case"GET_TODOS_SORT_UP":case"GET_EDIT_TODO":return Object(g.a)({},e,{todos:t.payload});case"GET_EDIT_COMPLETED_TODO":return Object(g.a)({},e,{completedTodos:t.payload});case"ADD_TODO":case" ADD_SEARCH_TODO":case"ADD_COMPLETED_TODO":case"UPDATE_TODO":case"UPDATE_COMPLETED_TODO":case"DELETE_TODO":case"DELETE_COMPLETED_TODO":return Object(g.a)({},e,{todos:t.payload});default:return e}}}),E=[y.a],v=Object(b.e)(S,{},Object(b.d)(b.a.apply(void 0,E),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),T=a(62),x=a.n(T),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={date:new Date},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{value:this.state.date,size:85}))}}]),t}(n.Component),D=a(21),w=a(63),N=a.n(w);var _=function(e){var t=e.branding1,a=e.branding2,n=e.home,r=e.add,c=e.about;return o.a.createElement("div",{className:"container-fluid py-3"},o.a.createElement("nav",{className:"navbar navbar-expand-sm bg-primary navbar-dark",style:{boxShadow:"10px 14px 8px 0 rgba(0, 0, 0, 0.2), 10px 16px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("a",{className:"navbar-brand mr-auto text-dark",href:"/"},o.a.createElement("img",{src:N.a,alt:"Logo",className:"animated bounceInRight slower",style:{width:"60px"}})," ",o.a.createElement("span",{className:"text-warning"},t)," ",o.a.createElement("span",null,a)),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item pt-4"},o.a.createElement(m.b,{to:"/",className:"nav-link"},o.a.createElement("i",{className:"fa fa-home"})," ",n)),o.a.createElement("li",{className:"nav-item pt-4"},o.a.createElement(m.b,{to:"/todo/add",className:"nav-link"},o.a.createElement("i",{className:"fa fa-tasks"})," ",r)),o.a.createElement("li",{className:"nav-item pt-4 mr-4"},o.a.createElement(m.b,{to:"/todo/about",className:"nav-link"},o.a.createElement("i",{className:"fa fa-question-circle"})," ",c)),o.a.createElement(D.a,null),o.a.createElement("li",{className:"nav-item","data-tip":(new Date).toTimeString().substr(0,5)},o.a.createElement("div",{className:"animated bounceInLeft slower"},o.a.createElement(O,null))))))};var k=function(){return o.a.createElement("div",{className:"container row col-sm-8 mx-auto my-3 card",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("h1",{className:"display-4 text-success p-2 mb-4 text-center",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"About ",o.a.createElement("span",{className:"text-danger"},"Task")," Manager ",o.a.createElement("br",null),o.a.createElement("p",{className:"text-secondary h6"},"Version 0.1.0")),o.a.createElement("p",{className:"lead"},o.a.createElement("span",{className:"text-danger h4"},"Task"),o.a.createElement("span",{className:"text-success h4"}," Manager")," Is An Easy To Use Task Manager With Advance Features To Manage Daily Schedules"),o.a.createElement("hr",null),o.a.createElement("h6",{className:"text-secondary"},"Developed With React.js & Redux Context Manager.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(m.b,{to:"https://github.com/Sidodus/"},"https://github.com/Sidodus")),o.a.createElement("hr",null))},j=a(125),L=a(36),C=a.n(L),F=a(9),q=a.n(F),I=a(18),A=function(){null!==localStorage.getItem("todos")&&""!==localStorage.getItem("todos")||localStorage.setItem("todos",JSON.stringify([])),null!==localStorage.getItem("todos_length")&&""!==localStorage.getItem("todos_length")||localStorage.setItem("todos_length",JSON.stringify(0));var e=JSON.parse(localStorage.getItem("todos"));return localStorage.setItem("todos_length",JSON.stringify(e.length)),null!==localStorage.getItem("completedTodos")&&""!==localStorage.getItem("completedTodos")||localStorage.setItem("completedTodos",JSON.stringify([])),null!==localStorage.getItem("completedTodos_length")&&""!==localStorage.getItem("completedTodos_length")||localStorage.setItem("completedTodos_length",JSON.stringify(0)),e},R=function(){var e=JSON.parse(localStorage.getItem("completedTodos"));return localStorage.setItem("completedTodos_length",JSON.stringify(e.length)),e},U=function(e){var t=A();return t.push(e),localStorage.setItem("todos",JSON.stringify(t)),t},P=function(e){var t=R();return t.push(e),localStorage.setItem("completedTodos",JSON.stringify(t)),localStorage.setItem("completedTodos_length",JSON.stringify(t.length)),t},M=function(e){var t=A().filter((function(t){return t.id!==e.id}));return t.push(e),localStorage.setItem("todos",JSON.stringify(t)),localStorage.setItem("todos_length",JSON.stringify(t.length)),t},G=function(e){var t=A().filter((function(t){return t.id!==e}));return localStorage.setItem("todos",JSON.stringify(t)),localStorage.setItem("todos_length",JSON.stringify(t.length)),t},J=function(e){var t=R().filter((function(t){return t.id!==e}));return localStorage.setItem("completedTodos",JSON.stringify(t)),localStorage.setItem("completedTodos_length",JSON.stringify(t.length)),t},z=function(){var e=A().sort((function(e,t){return new Date(e.date_Full)-new Date(t.date_Full)})),t=e.filter((function(e){return void 0===e.date_Full}));return e.filter((function(e){return void 0!==e.date_Full})).sort((function(e,t){return new Date(e.date_Full)-new Date(t.date_Full)})).concat(t)},V=function(){var e=A().sort((function(e,t){return new Date(t.date_Full)-new Date(e.date_Full)})),t=e.filter((function(e){return void 0===e.date_Full}));return e.filter((function(e){return void 0!==e.date_Full})).sort((function(e,t){return new Date(t.date_Full)-new Date(e.date_Full)})).concat(t)},W=function(){var e=R().sort((function(e,t){return new Date(e.date_Full)-new Date(t.date_Full)})),t=e.filter((function(e){return void 0===e.date_Full}));return e.filter((function(e){return void 0!==e.date_Full})).sort((function(e,t){return new Date(e.date_Full)-new Date(t.date_Full)})).concat(t)},B=function(){var e=R().sort((function(e,t){return new Date(t.date_Full)-new Date(e.date_Full)})),t=e.filter((function(e){return void 0===e.date_Full}));return e.filter((function(e){return void 0!==e.date_Full})).sort((function(e,t){return new Date(t.date_Full)-new Date(e.date_Full)})).concat(t)},Y=function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS",payload:A()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){return function(e){e({type:"GET_COMPLETED_TODOS",payload:R()})}},H=function(e){return function(t){t({type:"ADD_TODO",payload:U(e)})}},$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={inputValue:"",date:"",date_ToDateString:"",time_toLocaleTimeString:""},a.editInput=function(e){a.setState({inputValue:e.target.value})},a.changeDate=function(e){(e=new Date(e)).toDateString()===(new Date).toDateString()||e>new Date?a.setState({date:e,date_ToDateString:e.toDateString(),time_toLocaleTimeString:e.toLocaleTimeString()}):(alert("SORRY: \n You Can Only Select Today's Date \n OR \n A Future Date :)"),a.setState({date:""}))},a.submitForm=function(e){e.preventDefault();var t=new Date,n=a.state,o=n.date,r=n.inputValue,c=n.date_ToDateString,l=n.time_toLocaleTimeString,s={};s=""===c||""===l?{id:Object(j.a)(),todo:r,dateCreated:t}:{id:Object(j.a)(),todo:r,date_Full:o,date:c,time:l,dateCreated:t},a.props.addTodo(s),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.inputValue;return o.a.createElement("div",{className:"container row col-sm-8 mx-auto my-3 card",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("h4",{className:"display-4 card-header text-center text-dark",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"Add a task"),o.a.createElement("form",{onSubmit:this.submitForm},o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"card-title text-secondary"},o.a.createElement("i",{className:"fa fa-tasks text-success"})," Things To Do"),o.a.createElement("input",{autoFocus:!0,required:!0,type:"text",className:"form-control form-control-lg",placeholder:"Enter Task...",value:e,onChange:this.editInput.bind(this)}),o.a.createElement("div",{style:{float:"left"},className:"mt-3 mb-5"},o.a.createElement("label",{htmlFor:"datePicker",className:"mr-3 h6"},"Select Task Due Date"," ",o.a.createElement("span",{className:"text-secondary"},"(Optional!)"))," ",o.a.createElement("br",null),o.a.createElement(C.a,{id:"datePiker",className:"btn-block",value:this.state.date,onChange:this.changeDate})))),o.a.createElement("input",{type:"submit",value:"Add Task",className:"btn btn-secondary btn-block my-3",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}})))}}]),t}(n.Component),K=Object(f.b)((function(e){return{todo:e.todo.todos}}),{addTodo:H})($),Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={initialTodos:[],filtredTodos:[]},a.filterList=function(e){var t=a.state.initialTodos;t=t.filter((function(t){return t.todo.toLowerCase().includes(e.target.value.toLowerCase())})),a.setState({filtredTodos:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){0===this.state.initialTodos.length||"true"===localStorage.getItem("todoIsDeleted")?(this.setState({initialTodos:e.current,filtredTodos:e.current}),localStorage.setItem("todoIsDeleted",!1)):this.setState({filtredTodos:e.current})}},{key:"componentDidUpdate",value:function(){this.props.addSearchTodo(this.state.filtredTodos)}},{key:"render",value:function(){return o.a.createElement("div",{style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("div",{className:"bg-dark pb-2"},o.a.createElement("li",{className:"container navbar-nav nav-item",style:{marginTop:"-8px"}},o.a.createElement("input",{value:this.state.changedValue,onChange:this.filterList,type:"text",className:"fa fa-tasks",placeholder:"Enter Search Word",style:{textAlign:"center",backgroundColor:"lightyellow"}}))))}}]),t}(n.Component),Z=Object(f.b)((function(e){return{current:e.todo.todos}}),{addSearchTodo:function(e){return function(t){t({type:" ADD_SEARCH_TODO",payload:e})}}})(Q),ee=a(65),te=a.n(ee),ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={taskNowNow:!1},a.toDelete=function(e){!0===window.confirm("Confirm Delete")&&(a.props.deleteTodo(e),localStorage.setItem("todoIsDeleted",!0))},a.back=function(e){return document.getElementById("click".concat(e)).click()},a.completed=function(e){var t=A().filter((function(t){return t.id===e}));a.props.addCompletedTodo(t[0]),a.props.deleteTodo(e),document.querySelector(".defaultSort").classList.remove("btn-outline-secondary"),document.querySelector(".defaultSort").classList.add("btn-secondary"),document.querySelector(".downSort").classList.remove("btn-secondary"),document.querySelector(".downSort").classList.add("btn-outline-secondary"),document.querySelector(".upSort").classList.remove("btn-secondary"),document.querySelector(".upSort").classList.add("btn-outline-secondary")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.date,a=e.time,n=(new Date).toDateString(),o=(new Date).toLocaleTimeString();t===n&&a.substr(0,5)===o.substr(0,5)&&this.setState({taskNowNow:!0})}},{key:"render",value:function(){var e,t=this.props,a=t.id,n=t.todoTask,r=t.date,c=t.time,l=t.dateCreated,s=(new Date).toDateString(),i=new Date(l).toDateString(),d=new Date(l).toTimeString().substr(0,7),u=a.toString();return e=void 0!==l?"Created On ".concat(i," @ ").concat(d):null,o.a.createElement("form",{id:a,className:te()("my-1 text-left card-header",{"bg-warning":this.state.taskNowNow}),style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},s===r?o.a.createElement("div",{"data-tip":"This Task Is Due Today",style:{width:"15px",height:"15px",backgroundColor:"green",backgroundImage:"linear-gradient(green, white, green)",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",float:"left",marginLeft:"-63px",marginTop:"5px",transform:"rotate(90deg)"},className:"rounded-circle"}):null,o.a.createElement("div",{className:"form-check",style:{overflow:"auto"}},o.a.createElement("label",{className:"form-check-label","data-tip":e},o.a.createElement("input",{type:"checkbox",className:"form-check-input",style:{boxShadow:"0px 2px 4px rgba(0, 0, 0, .5)"},"data-toggle":"collapse",id:"click".concat(u),"data-target":"#id".concat(u)})," ",n," "),o.a.createElement(D.a,null),o.a.createElement("i",{"data-tip":"Delete Task",className:"fa fa-times text-danger",style:{float:"right",cursor:"pointer",fontSize:"2em"},onClick:this.toDelete.bind(this,a)}),o.a.createElement(m.b,{"data-tip":"Edit Task",to:"/todo/edit/".concat(a),className:"fa fa-pencil-alt mr-3 text-dark",style:{float:"right",cursor:"pointer",fontSize:"2em"}}),void 0!==r||void 0!==r?o.a.createElement("span",null,o.a.createElement("span",{className:"text-secondary mr-5",style:{float:"right"}},o.a.createElement("i",{className:"fa fa-calendar-day"}," ",r," "),o.a.createElement("i",{className:"fa fa-alarm-clock ml-3"}," ",c," "))," "):null,o.a.createElement("div",{id:"id".concat(u),className:"collapse"},o.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.back.bind(this,"".concat(u))},o.a.createElement("span",{style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"Back"))," ",o.a.createElement("div",{className:"spinner-border spinner-border-sm"})," ",o.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.completed.bind(this,a)},o.a.createElement("span",{style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"Completed")))))}}]),t}(n.Component),ne=Object(f.b)((function(e){return{todo:e.todo.todos,completedTodo:e.todo.completedTodos}}),{deleteTodo:function(e){return function(t){t({type:"DELETE_TODO",payload:G(e)})}},addCompletedTodo:function(e){return function(t){t({type:"ADD_COMPLETED_TODO",payload:P(e)})}}})(ae),oe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getTodos()}},{key:"render",value:function(){var e=this.props.todos;return o.a.createElement(o.a.Fragment,null,e.map((function(e){return o.a.createElement(ne,{key:e.id,id:e.id,todoTask:e.todo,date:e.date,date_Full:e.date_Full,dateCreated:e.dateCreated,time:e.time})})))}}]),t}(n.Component),re=Object(f.b)((function(e){return{todos:e.todo.todos}}),{getTodos:Y})(oe),ce=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.styling,a=e.href,n=e.classname,r=e.goBack,c=e.text,l=e.goFoward;return o.a.createElement("div",null,o.a.createElement("div",{style:t},o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.b,{to:a,type:"button",className:n},o.a.createElement("i",{className:r})," ",c," ",o.a.createElement("i",{className:l})))))}}]),t}(n.Component),le=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classname,a=e.styling,n=e.classname2,r=e.styling2,c=e.number,l=e.text,s=e.href,i=e.sort,d=e.dataTip;return o.a.createElement("ul",{className:"nav"},o.a.createElement(D.a,null),o.a.createElement(m.b,{to:s,onClick:i,"data-tip":d},o.a.createElement("li",{className:"nav-item mx-auto pt-2"},o.a.createElement("i",{className:t,style:{styling:a}}))),o.a.createElement("i",{className:n,style:{styling2:r}}),o.a.createElement("span",{className:"pt-2 text-secondary"}," ",c," ",l," "))}}]),t}(n.Component),se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).sortDown=function(){document.querySelector(".downSort").classList.remove("btn-outline-secondary"),document.querySelector(".downSort").classList.add("btn-secondary"),document.querySelector(".defaultSort").classList.remove("btn-secondary"),document.querySelector(".defaultSort").classList.add("btn-outline-secondary"),document.querySelector(".upSort").classList.remove("btn-secondary"),document.querySelector(".upSort").classList.add("btn-outline-secondary"),a.props.getTodosSortDown()},a.sortDefault=function(){document.querySelector(".defaultSort").classList.remove("btn-outline-secondary"),document.querySelector(".defaultSort").classList.add("btn-secondary"),document.querySelector(".downSort").classList.remove("btn-secondary"),document.querySelector(".downSort").classList.add("btn-outline-secondary"),document.querySelector(".upSort").classList.remove("btn-secondary"),document.querySelector(".upSort").classList.add("btn-outline-secondary"),a.props.getTodosSortDefault()},a.sortUp=function(e){document.querySelector(".upSort").classList.remove("btn-outline-secondary"),document.querySelector(".upSort").classList.add("btn-secondary"),document.querySelector(".defaultSort").classList.remove("btn-secondary"),document.querySelector(".defaultSort").classList.add("btn-outline-secondary"),document.querySelector(".downSort").classList.remove("btn-secondary"),document.querySelector(".downSort").classList.add("btn-outline-secondary"),a.props.getTodosSortUp()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo;return o.a.createElement("div",null,o.a.createElement(Z,{id:"search"}),o.a.createElement("div",{className:"container row col-sm-10 mx-auto my-3 card",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("h4",{className:"display-4 card-header text-center text-dark",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"Task Manager"),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("label",{htmlFor:"name",className:"card-title text-success"},o.a.createElement("i",{className:"fa fa-tasks text-secondary"})," Task(s) To Complete"),o.a.createElement(re,null)),o.a.createElement("ul",{className:"nav card-footer mx-auto"},o.a.createElement(le,{dataTip:"Add A Task",classname:"fa fa-lg fa-file-plus btn btn-light btn-sm mx-2 mr-5 text-secondary",styling:{cursor:"pointer",fontSize:"1.8em"},href:"/todo/add"}),o.a.createElement(le,{dataTip:"Sort Downwards",classname:"downSort fa fa-sm fa-sort-amount-down btn btn-outline-secondary btn-sm mx-2",styling:{cursor:"pointer",fontSize:"1.5em"},sort:this.sortDown.bind(this),href:"#"}),o.a.createElement(le,{dataTip:"Reset Sort",classname:"defaultSort fa fa-sm fa-ellipsis-v-alt btn btn-secondary btn-sm mx-2",styling:{cursor:"pointer",fontSize:"1.5em"},sort:this.sortDefault.bind(this),href:"#"}),o.a.createElement(le,{dataTip:"Sort Upwards",classname:"upSort fa fa-sm fa-sort-amount-up btn btn-outline-secondary btn-sm mx-2 mr-5",styling:{cursor:"pointer",fontSize:"1.5em"},sort:this.sortUp.bind(this),href:"#"}),o.a.createElement(le,{classname2:"fa fa-grip-lines-vertical fa-3x ml-1 mr-5 text-info",styling2:{fontSize:"3em",color:"lightgray"},href:"#"}),o.a.createElement(le,{number:e.length,text:"item(s) left",href:"#"}),o.a.createElement("ul",{className:"nav nav-pills ml-3",styling:{float:"right"}},o.a.createElement(ce,{text:"Go To Completed Task(s)",classname:"nav-link btn btn-sm btn-outline-primary ml-3",goFoward:"fa fa-forward",href:"/todo/complete"})))))}}]),t}(n.Component),ie=Object(f.b)((function(e){return{todo:e.todo.todos}}),{getTodos:Y,getTodosSortDown:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS_SORT_DOWN",payload:z()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getTodosSortDefault:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS_SORT_DEFAULT",payload:A()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getTodosSortUp:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS_SORT_UP",payload:V()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(se),de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).toDelete=function(e){!0===window.confirm("Confirm Delete")&&a.props.deleteCompletedTodo(e)},a.unDo=function(){var e=Object(I.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=R().filter((function(e){return e.id===t})),a.props.addTodo(n[0]),a.props.deleteCompletedTodo(t),document.querySelector(".defaultSort").classList.remove("btn-outline-secondary"),document.querySelector(".defaultSort").classList.add("btn-secondary"),document.querySelector(".downSort").classList.remove("btn-secondary"),document.querySelector(".downSort").classList.add("btn-outline-secondary"),document.querySelector(".upSort").classList.remove("btn-secondary"),document.querySelector(".upSort").classList.add("btn-outline-secondary");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.id,n=t.todoTask,r=t.date,c=t.time,l=t.dateCreated,s=a.toString(),i=new Date(l).toDateString(),d=new Date(l).toTimeString().substr(0,7);return e=void 0!==l?"Created On ".concat(i," @ ").concat(d):null,o.a.createElement("form",{className:"my-1 text-left card-header",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("div",{className:"form-check",style:{overflow:"auto"}},o.a.createElement("label",{className:"form-check-label","data-tip":e},o.a.createElement("input",{type:"checkbox",className:"form-check-input",style:{boxShadow:"0px 2px 4px rgba(0, 0, 0, .5)"},"data-toggle":"collapse",id:"click".concat(s),"data-target":"#id".concat(s)})," ",n," "),o.a.createElement(D.a,null),o.a.createElement("i",{"data-tip":"Delete Completed Task",className:"fa fa-times text-danger",style:{float:"right",cursor:"pointer",fontSize:"2em"},onClick:this.toDelete.bind(this,a)}),void 0!==r||void 0!==r?o.a.createElement("span",null,o.a.createElement("span",{className:"text-secondary mr-5",style:{float:"right"}},o.a.createElement("i",{className:"fa fa-calendar-day"}," ",r," "),o.a.createElement("i",{className:"fa fa-alarm-clock ml-3"}," ",c," "))," "):null,o.a.createElement("div",{id:"id".concat(s),className:"collapse"},o.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.unDo.bind(this,"".concat(s))},o.a.createElement("span",{style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"unDo"))," ")))}}]),t}(n.Component),ue=Object(f.b)((function(e){return{todo:e.todo.todos,completedTodo:e.todo.completedTodos}}),{deleteCompletedTodo:function(e){return function(t){t({type:"DELETE_COMPLETED_TODO",payload:J(e)})}},addTodo:H})(de),me=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getCompletedTodos()}},{key:"render",value:function(){var e=this.props.completedTodos;return o.a.createElement(o.a.Fragment,null,e.map((function(e){return o.a.createElement(ue,{key:e.id,id:e.id,todoTask:e.todo,date:e.date,dateCreated:e.dateCreated,time:e.time})})))}}]),t}(n.Component),pe=Object(f.b)((function(e){return{completedTodos:e.todo.todos}}),{getCompletedTodos:X})(me),fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).sortDown=function(){document.querySelector(".downSort").classList.remove("btn-outline-secondary"),document.querySelector(".downSort").classList.add("btn-secondary"),document.querySelector(".defaultSort").classList.remove("btn-secondary"),document.querySelector(".defaultSort").classList.add("btn-outline-secondary"),document.querySelector(".upSort").classList.remove("btn-secondary"),document.querySelector(".upSort").classList.add("btn-outline-secondary"),a.props.getCompletedTodosSortDown()},a.sortDefault=function(){document.querySelector(".defaultSort").classList.remove("btn-outline-secondary"),document.querySelector(".defaultSort").classList.add("btn-secondary"),document.querySelector(".downSort").classList.remove("btn-secondary"),document.querySelector(".downSort").classList.add("btn-outline-secondary"),document.querySelector(".upSort").classList.remove("btn-secondary"),document.querySelector(".upSort").classList.add("btn-outline-secondary"),a.props.getCompletedTodosSortDefault()},a.sortUp=function(e){document.querySelector(".upSort").classList.remove("btn-outline-secondary"),document.querySelector(".upSort").classList.add("btn-secondary"),document.querySelector(".defaultSort").classList.remove("btn-secondary"),document.querySelector(".defaultSort").classList.add("btn-outline-secondary"),document.querySelector(".downSort").classList.remove("btn-secondary"),document.querySelector(".downSort").classList.add("btn-outline-secondary"),a.props.getCompletedTodosSortUp()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo;return o.a.createElement("div",null,o.a.createElement(Z,null),o.a.createElement("div",{className:"container row col-sm-10 mx-auto my-3 card",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("h4",{className:"display-4 card-header text-center text-dark",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"Task Archive"),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("label",{htmlFor:"name",className:"card-title text-danger"},o.a.createElement("i",{className:"fa fa-tasks text-secondary"})," Completed Task(s)"),o.a.createElement(pe,null)),o.a.createElement("ul",{className:"nav card-footer mx-auto"},o.a.createElement(le,{dataTip:"Add A Task",classname:"fa fa-lg fa-file-plus btn btn-light btn-sm mx-2 mr-5 text-secondary",styling:{cursor:"pointer",fontSize:"1.8em"},href:"/todo/add"}),o.a.createElement(le,{dataTip:"Sort Downwards",classname:"downSort fa fa-sm fa-sort-amount-down btn btn-outline-secondary btn-sm mx-2",styling:{cursor:"pointer",fontSize:"1.5em"},sort:this.sortDown.bind(this),href:"#"}),o.a.createElement(le,{dataTip:"Reset Sort",classname:"defaultSort fa fa-sm fa-ellipsis-v-alt btn btn-secondary btn-sm mx-2",styling:{cursor:"pointer",fontSize:"1.5em"},sort:this.sortDefault.bind(this),href:"#"}),o.a.createElement(le,{dataTip:"Sort Upwards",classname:"upSort fa fa-sm fa-sort-amount-up btn btn-outline-secondary btn-sm mx-2 mr-5",styling:{cursor:"pointer",fontSize:"1.5em"},sort:this.sortUp.bind(this),href:"#"}),o.a.createElement(le,{classname2:"fa fa-grip-lines-vertical fa-3x ml-1 mr-5 text-info",styling2:{fontSize:"3em",color:"lightgray"},href:"#"}),o.a.createElement(le,{number:e.length,text:"item(s) left",href:"#"}),o.a.createElement("ul",{className:"nav nav-pills ml-3",styling:{float:"right"}},o.a.createElement(ce,{text:"Back To Active Task(s)",classname:"nav-link btn btn-sm btn-outline-secondary ml-3",goBack:"fa fa-backward",href:"/"})))))}}]),t}(n.Component),be=Object(f.b)((function(e){return{todo:e.todo.todos}}),{getCompletedTodos:X,getCompletedTodosSortDown:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS_SORT_DOWN",payload:W()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getCompletedTodosSortDefault:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS_SORT_DEFAULT",payload:R()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getCompletedTodosSortUp:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_TODOS_SORT_UP",payload:B()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(fe),ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={id:"",inputValue:"",date:"",date_ToDateString:"",dateCreated:"",time_toLocaleTimeString:""},a.editInput=function(e){a.setState({inputValue:e.target.value})},a.changeDate=function(e){(e=new Date(e)).toDateString()===(new Date).toDateString()||e>new Date?a.setState({date:e,date_ToDateString:e.toDateString(),time_toLocaleTimeString:e.toLocaleTimeString()}):alert("SORRY: \n You Can Only Select Today's Date \n OR \n A Future Date :)")},a.submitForm=function(e){e.preventDefault();var t=a.state,n=t.id,o=t.inputValue,r=t.date,c=t.date_ToDateString,l=t.dateCreated,s=t.time_toLocaleTimeString,i={};i=""===c||""===s?{id:n,todo:o,dateCreated:l}:{id:n,todo:o,date_Full:r,date:c,dateCreated:l,time:s},a.props.updateTodo(i),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id,t=A().filter((function(t){return t.id.toString()===e}))[0],a=t.todo,n=t.date_Full,o=t.dateCreated;void 0===n?this.setState({id:e,inputValue:a,dateCreated:o}):this.setState({id:e,inputValue:a,date:new Date(n),date_ToDateString:new Date(n).toDateString(),dateCreated:o,time_toLocaleTimeString:new Date(n).toLocaleTimeString()})}},{key:"render",value:function(){var e=this.state.inputValue;return o.a.createElement("div",{className:"container row col-sm-8 mx-auto my-3 card",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("h4",{className:"display-4 card-header text-center text-dark",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},"Event To Edit"),o.a.createElement("form",{onSubmit:this.submitForm},o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"card-title text-secondary"},o.a.createElement("i",{className:"fa fa-tasks text-success"})," Edit Task"),o.a.createElement("input",{autoFocus:!0,required:!0,type:"text",className:"form-control form-control-lg",placeholder:"Enter Task...",value:e,onChange:this.editInput.bind(this)}),o.a.createElement("div",{style:{float:"left"},className:"mt-3 mb-5"},o.a.createElement("label",{htmlFor:"datePicker",className:"mr-3 h6"},"Edit Task Due Date"," ",o.a.createElement("span",{className:"text-secondary"},"(Optional!)"))," ",o.a.createElement("br",null),o.a.createElement(C.a,{id:"datePiker",className:"btn-block",value:this.state.date,onChange:this.changeDate})))),o.a.createElement("input",{type:"submit",value:"Update Task",className:"btn btn-secondary btn-block my-3",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}})))}}]),t}(n.Component),ge=Object(f.b)((function(e){return{todo:e.todo.todos}}),{updateTodo:function(e){return function(t){t({type:"UPDATE_TODO",payload:M(e)})}}})(ye);var he=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container mt-2",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},o.a.createElement("h4",null,o.a.createElement("span",{className:"text-danger display-4"},"404")," Page Not Found"),o.a.createElement("p",null,"Sorry!!! The Page You Request Is Not Available."),o.a.createElement("p",{className:"small text-secondary"},"It might have been removed; had its name changed; or is temporarily unavailable. Please ensure the Web site address is spelled correctly, OR go to the ",o.a.createElement(m.b,{to:"/"},"home page"),", OR use the Menu to navigate to a specific Page.")))};var Se=function(){var e,t=new Date("2020").getFullYear(),a=(new Date).getFullYear();return e=t>=a?t:"".concat(t," - ").concat(a),o.a.createElement("footer",{className:"container-fluid",style:{color:"white",textAlign:"center",marginTop:"18px",background:"blue",padding:"18px"}},"\xa9 Copyright ",o.a.createElement("span",{className:"text-warning"},e)," by",o.a.createElement(m.b,{to:"https://github.com/Sidodus/",className:"text-light"}," ","Saheed Odulaja"," "))},Ee=(a(116),a(117),a(59),a(119),a(120),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{store:v},o.a.createElement(m.a,null,o.a.createElement("div",{className:"container-fluid bg-dark"},o.a.createElement(_,{branding1:"Task",branding2:"Manager",home:"Home",add:"Add A Task",about:"About"})),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:ie}),o.a.createElement(p.a,{exact:!0,path:"/todo/complete",component:be}),o.a.createElement(p.a,{exact:!0,path:"/todo/about",component:k}),o.a.createElement(p.a,{exact:!0,path:"/todo/add",component:K}),o.a.createElement(p.a,{exact:!0,path:"/todo/edit/:id",component:ge}),o.a.createElement(p.a,{component:he})),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(Se,null))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){e.exports=a.p+"static/media/SidoByMe.ea269fc5.png"},66:function(e,t,a){e.exports=a(121)}},[[66,1,2]]]);
//# sourceMappingURL=main.933a9a83.chunk.js.map
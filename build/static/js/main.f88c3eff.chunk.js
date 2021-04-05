(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterInput:"Filter_filterInput__ceXvA",filterLabel:"Filter_filterLabel__biDdS"}},30:function(t,e,n){},31:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(8),i=n.n(o),s=(n(30),n(9)),l=n(10),u=n(14),b=n(12),d=(n(31),n(3)),m=n(43),j=n(6),f=n.n(j),p=n(1),h=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleContactInfo=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t.submitForm=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(m.a)(),name:a,number:c};t.props.onSubmit(r),t.reset()},t}return Object(l.a)(n,[{key:"render",value:function(){var t,e=this.state,n=e.name,a=e.number;return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.submitForm,children:[Object(p.jsxs)("label",{htmlFor:"name",className:f.a.label,children:["Name",Object(p.jsx)("input",{placeholder:"Ivan Ivanov",className:f.a.formInput,onChange:this.handleContactInfo,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,name:"name",value:n,type:"text"})]}),Object(p.jsxs)("label",{className:f.a.label,children:["Number",Object(p.jsx)("input",(t={placeholder:"09755555555",required:!0,onChange:this.handleContactInfo,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"},Object(d.a)(t,"required",!0),Object(d.a)(t,"value",a),Object(d.a)(t,"htmlFor","number"),Object(d.a)(t,"className",f.a.formInput),Object(d.a)(t,"name","number"),Object(d.a)(t,"type","tel"),t))]}),Object(p.jsx)("button",{className:f.a.formButton,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),O=n(16),C=n.n(O),v=function(t){var e=t.filter,n=t.search;return Object(p.jsxs)("label",{className:C.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("input",{className:C.a.filterInput,name:"filter",value:e,onChange:n,type:"text"})]})},x=n(7),_=n.n(x),L=function(t){var e=t.filteredNames,n=t.deleteItem;return Object(p.jsx)("ul",{className:_.a.contaktList,children:e.map((function(t){return Object(p.jsxs)("li",{className:_.a.contaktListItem,children:[Object(p.jsxs)("p",{className:_.a.contaktListName,children:[t.name," : ",t.number]}),Object(p.jsx)("button",{className:_.a.contaktListButton,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},k=n(11),g="ADD_CONTACT",N="DELETE_CONTACT",I="FILTER_CONTACTS",y=n(4),A=g,F=N,T=I,S={addContact:Object(y.b)(A,(function(t){t.id;var e=t.name,n=t.number;return{payload:{id:Object(m.a)(),name:e,number:n}}})),deleteContact:Object(y.b)(F),filterContacts:Object(y.b)(T)},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).onHandleSubmit=function(e){t.props.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.props.addContact(e)},t.onClickDelete=function(e){t.props.deleteCont(e)},t.handleFilter=function(e){t.props.filterAct(e.currentTarget.value)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(h,{onSubmit:this.onHandleSubmit}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{filter:n,search:this.handleFilter}),Object(p.jsx)(L,{filteredNames:c,deleteItem:this.onClickDelete})]})]})}}]),n}(c.Component),D={addContact:S.addContact,deleteCont:S.deleteContact,filterAct:S.filterContacts},B=Object(k.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}),D)(w),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},z=n(13),Z=n(2),q=S.filterContacts,H=Object(y.c)("",Object(d.a)({},q,(function(t,e){return e.payload}))),J=S.addContact,P=S.deleteContact,K=Object(y.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(d.a)(a,J,(function(t,e){var n=e.payload;return[].concat(Object(z.a)(t),[n])})),Object(d.a)(a,P,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),M=n(22),R=n.n(M),Q=n(5),U=n(23),X={key:"contacts",storage:n.n(U).a,blacklist:["filter"]},Y=Object(Z.c)({items:K,filter:H}),$=Object(Z.c)({contacts:Object(Q.g)(X,Y)}),G=[].concat(Object(z.a)(Object(y.d)({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[R.a]),V=Object(y.a)({reducer:$,middleware:G,devTools:!1}),W={store:V,persistor:Object(Q.h)(V)},tt=n(24);i.a.render(Object(p.jsx)(k.a,{store:W.store,children:Object(p.jsx)(tt.a,{loading:null,persistor:W.persistor,children:Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(B,{})})})}),document.getElementById("root")),E()},6:function(t,e,n){t.exports={form:"ContactForm_form__3c4b-",formInput:"ContactForm_formInput__3hu3g",label:"ContactForm_label__1tQ3g"}},7:function(t,e,n){t.exports={contaktList:"ContactList_contaktList__2ifif",contaktListItem:"ContactList_contaktListItem__2ZTLK",contaktListButton:"ContactList_contaktListButton__tTUYT"}}},[[42,1,2]]]);
//# sourceMappingURL=main.f88c3eff.chunk.js.map
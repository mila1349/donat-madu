(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{161:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(7143)}])},7143:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return w},default:function(){return y}});var a=n(8520),r=n.n(a),s=n(5893),i=n(9669),l=n.n(i),c=n(5675),d=n(7294),o=n(4468),u=n.n(o),h=n(2753),_=n.n(h);n(1163);function x(t,e,n,a,r,s,i){try{var l=t[s](i),c=l.value}catch(d){return void n(d)}l.done?e(c):Promise.resolve(c).then(a,r)}var p=function(t){var e,n=t.setClose,a=(0,d.useState)(null),i=a[0],c=a[1],o=(0,d.useState)(null),u=o[0],h=o[1],p=(0,d.useState)(null),m=p[0],j=p[1],f=(0,d.useState)(1),b=f[0],N=f[1],v=(e=r().mark((function t(){var e,a,s,c;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData).append("file",i),e.append("upload_preset","uploads"),t.prev=3,t.next=6,l().post("https://api.cloudinary.com/v1_1/dqxsawwt2/image/upload",e);case 6:return a=t.sent,s=a.data.url,c={title:u,desc:m,price:b,img:s},console.log("price",c),t.next=12,l().post("http://localhost:3000/api/products",c);case 12:n(!0),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[3,15]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function i(t){x(s,a,r,i,l,"next",t)}function l(t){x(s,a,r,i,l,"throw",t)}i(void 0)}))});return(0,s.jsx)("div",{className:_().container,children:(0,s.jsxs)("div",{className:_().wrapper,children:[(0,s.jsx)("span",{onClick:function(){return n(!0)},className:_().close,children:"X"}),(0,s.jsx)("h1",{children:"Tambah Donat"}),(0,s.jsxs)("div",{className:_().item,children:[(0,s.jsx)("label",{className:_().label,children:"Pilih gambar"}),(0,s.jsx)("input",{type:"file",onChange:function(t){return c(t.target.files[0])}})]}),(0,s.jsxs)("div",{className:_().item,children:[(0,s.jsx)("label",{className:_().label,children:"Nama"}),(0,s.jsx)("input",{className:_().input,type:"text",onChange:function(t){return h(t.target.value)}})]}),(0,s.jsxs)("div",{className:_().item,children:[(0,s.jsx)("label",{className:_().label,children:"Deskripsi"}),(0,s.jsx)("textarea",{rows:4,type:"text",onChange:function(t){return j(t.target.value)}})]}),(0,s.jsxs)("div",{className:_().item,children:[(0,s.jsx)("label",{className:_().label,children:"Harga"}),(0,s.jsx)("div",{className:_().priceContainer,children:(0,s.jsx)("input",{className:"".concat(_().input," ").concat(_().inputSm),type:"number",placeholder:"Price",onChange:function(t){return N(t.target.value)}})})]}),(0,s.jsx)("button",{className:_().addButton,onClick:v,children:"Tambah"})]})})},m=n(2425),j=n.n(m),f=n(615),b=n.n(f),N=function(t){var e=t.selectedOrder,n=t.open,a=t.setOpen,r=t.handleStatus;return(0,s.jsx)("div",{className:n?b().container:b().close,children:(0,s.jsxs)("div",{className:b().wrapper2,children:[(0,s.jsx)("div",{className:j().left,children:(0,s.jsxs)("table",{className:j().table,children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{className:j().trTitle,children:[(0,s.jsx)("th",{children:"Donat"}),(0,s.jsx)("th",{children:"Nama"}),(0,s.jsx)("th",{children:"Harga"}),(0,s.jsx)("th",{children:"Quantity"}),(0,s.jsx)("th",{children:"Total"})]})}),(0,s.jsx)("tbody",{children:e.donat.map((function(t){return(0,s.jsxs)("tr",{className:j().tr,children:[(0,s.jsx)("td",{children:(0,s.jsx)("div",{className:j().imgContainer,children:(0,s.jsx)(c.default,{src:t.img,layout:"fill",objectFit:"cover",alt:""})})}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{className:j().name,children:t.title})}),(0,s.jsx)("td",{children:(0,s.jsxs)("span",{className:j().price,children:["Rp. ",t.price]})}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{className:j().quantity,children:t.quantity})}),(0,s.jsx)("td",{children:(0,s.jsxs)("span",{className:j().total,children:["Rp. ",t.total]})})]},t._id)}))})]})}),(0,s.jsx)("div",{className:j().right,children:(0,s.jsxs)("div",{className:j().wrapper,children:[(0,s.jsx)("h2",{className:j().title,children:"TOTAL ORDER"}),(0,s.jsxs)("div",{className:j().totalText,children:[(0,s.jsx)("b",{className:j().totalTextTitle,children:"Pembeli:"}),e.customer]}),(0,s.jsxs)("div",{className:j().totalText,children:[(0,s.jsx)("b",{className:j().totalTextTitle,children:"ID Pesan:"}),e.id]}),(0,s.jsxs)("div",{className:j().totalText,children:[(0,s.jsx)("b",{className:j().totalTextTitle,children:"Total:"}),"Rp. ",e.total]}),(0,s.jsxs)("div",{className:j().totalText,children:[(0,s.jsx)("b",{className:j().totalTextTitle,children:"Status:"}),["Disiapkan","Diantar","Selesai"][e.status]]}),(0,s.jsx)("button",{className:j().button,onClick:function(){return r(e.id),void(e.status<2&&(e.status=e.status+1))},children:"Next Stage"}),(0,s.jsx)("button",{onClick:function(){return a(!1)},className:j().button,children:"Close"})]})})]})})};function v(t,e,n,a,r,s,i){try{var l=t[s](i),c=l.value}catch(d){return void n(d)}l.done?e(c):Promise.resolve(c).then(a,r)}function C(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function i(t){v(s,a,r,i,l,"next",t)}function l(t){v(s,a,r,i,l,"throw",t)}i(void 0)}))}}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=!0,y=function(t){var e=t.orders,n=t.products,a=(0,d.useState)(!0),i=a[0],o=a[1],h=(0,d.useState)(!1),_=h[0],x=h[1],m=(0,d.useState)(n),j=m[0],f=m[1],b=(0,d.useState)(e),v=b[0],w=b[1],y=["Disiapkan","Diantar","Selesai"],A=(0,d.useState)({donat:[]}),T=A[0],k=A[1],S=C(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,l().delete("http://localhost:3000/api/products/"+e);case 4:t.sent,f(j.filter((function(t){return t._id!==e}))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),D=C(r().mark((function t(e){var n,a,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=v.filter((function(t){return t._id===e}))[0],!((a=n.status)<2)){t.next=13;break}return t.prev=3,t.next=6,l().put("http://localhost:3000/api/orders/"+e,{status:a+1});case 6:s=t.sent,w([s.data].concat(g(v.filter((function(t){return t._id!==e}))))),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return(0,s.jsxs)("div",{className:u().container,children:[(0,s.jsx)(N,{selectedOrder:T,open:_,setOpen:x,handleStatus:D}),(0,s.jsxs)("div",{className:u().item,children:[(0,s.jsx)("button",{onClick:function(){return o(!1)},className:u().button,children:"TAMBAH DONAT"}),!i&&(0,s.jsx)(p,{setClose:o}),(0,s.jsx)("h1",{className:u().title,children:"Donat"}),(0,s.jsxs)("table",{className:u().table,children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{className:u().trTitle,children:[(0,s.jsx)("th",{children:"Donat"}),(0,s.jsx)("th",{children:"Id"}),(0,s.jsx)("th",{children:"Nama"}),(0,s.jsx)("th",{children:"Harga"}),(0,s.jsx)("th",{children:"Aksi"})]})}),j.map((function(t){return(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{className:u().trTitle,children:[(0,s.jsx)("td",{children:(0,s.jsx)(c.default,{src:t.img,width:50,height:50,objectFit:"cover",alt:""})}),(0,s.jsxs)("td",{children:[t._id.slice(0,5),"..."]}),(0,s.jsx)("td",{children:t.title}),(0,s.jsxs)("td",{children:["Rp. ",t.price]}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:u().button,onClick:function(){return S(t._id)},children:"Delete"})})]})},t._id)}))]})]}),(0,s.jsxs)("div",{className:u().item,children:[(0,s.jsx)("h1",{className:u().title,children:"Pesanan"}),(0,s.jsxs)("table",{className:u().table,children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{className:u().trTitle,children:[(0,s.jsx)("th",{children:"Id"}),(0,s.jsx)("th",{children:"Pelanggan"}),(0,s.jsx)("th",{children:"Total"}),(0,s.jsx)("th",{children:"Bayar"}),(0,s.jsx)("th",{children:"Status"}),(0,s.jsx)("th",{children:"Aksi"})]})}),v.map((function(t){return(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{className:u().trTitle,children:[(0,s.jsxs)("td",{children:[t._id.slice(0,5),"..."]}),(0,s.jsx)("td",{children:t.customer}),(0,s.jsxs)("td",{children:["Rp. ",t.total]}),(0,s.jsx)("td",{children:0===t.method?(0,s.jsx)("span",{children:"cash"}):(0,s.jsx)("span",{children:"paid"})}),(0,s.jsx)("td",{children:y[t.status]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("button",{onClick:function(){return D(t._id)},className:u().button,children:"Next Stage"}),(0,s.jsx)("button",{onClick:function(){return function(t){var e=[];t.donat.map((function(t){console.log("nahhadhfja");for(var n=0;n<j.length;n++)if(j[n]._id===t.idProduct){var a={img:j[n].img,title:j[n].title,price:j[n].price,quantity:t.quantity,total:t.quantity*j[n].price};e.push(a)}})),k({id:t._id,customer:t.customer,donat:e,total:t.total,status:t.status}),x(!0)}(t)},className:u().button,children:"Lihat"})]})]})},t._id)}))]})]})]})}},2753:function(t){t.exports={mainAddButton:"Add_mainAddButton__jwM2b",container:"Add_container__nehfK",wrapper:"Add_wrapper__JHSck",close:"Add_close__1Bqhj",item:"Add_item__pgcYA",label:"Add_label__jItnq",input:"Add_input__EuiD8",priceContainer:"Add_priceContainer__WuGaE",inputSm:"Add_inputSm__dPDFU",extra:"Add_extra__3fi1Q",extraItems:"Add_extraItems__GWk48",extraItem:"Add_extraItem__9Z9sH",addButton:"Add_addButton__6OqWh"}},4468:function(t){t.exports={container:"Admin_container__7Kd1y",item:"Admin_item__FuGBz",table:"Admin_table__brNHw",button:"Admin_button___uar2"}},2425:function(t){t.exports={container:"Cart_container__v66s_",left:"Cart_left__uUdiV",right:"Cart_right__uQLkn",imgContainer:"Cart_imgContainer__X_0WK",table:"Cart_table__AtJ4d",name:"Cart_name__VSWCt",total:"Cart_total__e1x0z",wrapper:"Cart_wrapper__hwYiL",totalTextTitle:"Cart_totalTextTitle__5HC3q",button:"Cart_button__FRScP",trTitle:"Cart_trTitle__xPgd6",tr:"Cart_tr___K6pr",extras:"Cart_extras__B_Qbi",price:"Cart_price__JXkRc",quantity:"Cart_quantity__bbm6q",paymentMethods:"Cart_paymentMethods__9ZXIb",payButton:"Cart_payButton__YuHP8",th:"Cart_th__2tQAs"}},615:function(t){t.exports={container:"OrderDetail_container__g8vBb",wrapper:"OrderDetail_wrapper__gA7AW",title:"OrderDetail_title__q5AD3",item:"OrderDetail_item__cNl_Y",label:"OrderDetail_label__Gy3tH",input:"OrderDetail_input__CwAn3",button:"OrderDetail_button__PS9u_",input2:"OrderDetail_input2__Sk7cB",wrapper2:"OrderDetail_wrapper2__9oC8T",close:"OrderDetail_close__Iyebm"}}},function(t){t.O(0,[400,774,888,179],(function(){return e=161,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[610],{6610:function(e,t,r){r.r(t);var s=r(4165),a=r(5861),n=r(885),l=r(2791),c=r(8617),i=r(1933),o=r(7689),u=r(1087),x=r(9085),m=r(2208),d=r(2636),f=r(2203),g=r(2408),p=r(184),y=["tops","bottoms","shoes & accessories"];t.default=function(){var e=(0,l.useState)(""),t=(0,n.Z)(e,2),r=t[0],h=t[1],b=(0,l.useState)("tops"),v=(0,n.Z)(b,2),C=v[0],j=v[1],w=(0,o.s0)(),N=(0,i.useQueryClient)(),Z=(0,i.useMutation)((function(e){return m.HE.createCategory({title:e.title,type:e.type})}),{onSuccess:function(e){x.Am.success(e.message),N.invalidateQueries("categories"),w("/admin/categories")},onError:function(e){x.Am.error(e.body.message)}}),k=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Z.mutate({title:r,type:C});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:"w-full text-2xl font-medium",children:"Create Category"}),(0,p.jsx)("div",{className:"flex py-3 ",children:(0,p.jsxs)(u.rU,{to:"/admin/categories",className:"flex place-items-center  gap-x-2",children:[(0,p.jsx)(c.PSe,{className:"text-xl"}),"Go Back"]})}),(0,p.jsxs)("form",{className:"information flex min-h-[32rem] w-full flex-col gap-y-4 py-4 text-lg text-gray-700",onSubmit:k,children:[(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("label",{htmlFor:"categoryTitle",className:"text-lg",children:"Category Title"}),(0,p.jsx)(g.Z,{name:"categoryTitle",type:"text",extraClass:"w-full mt-1 mb-2",border:"border-2 border-gray-400",value:r,onChange:function(e){return h(e.target.value)},required:!0})]}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("div",{className:"mb-2 text-lg",children:"Category Type"}),(0,p.jsx)(f.Z,{selected:C,setSelected:j,width:"w-64",options:y})]}),(0,p.jsxs)("div",{className:"mt-8 flex place-content-between",children:[(0,p.jsx)("button",{type:"button",onClick:function(){return w("/admin/categories")},className:"mb-4 w-52 border border-gray-500 py-3 px-6 text-center text-xl hover:bg-gray-500  hover:text-gray-100 sm:py-2 sm:text-base","aria-label":"Cancel",children:"Cancel"}),(0,p.jsx)(d.Z,{type:"submit",value:"Create Category",extraClass:"w-52 text-center text-xl mb-4",size:"lg"})]})]})]})}}}]);
//# sourceMappingURL=610.a0702450.chunk.js.map
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[323],{3805:function(e,t,s){var r=s(184);t.Z=function(e){var t=e.onClick,s=e.size,l=e.extraClass,n=e.noBorder,c=void 0!==n&&n,a=e.inverted,i=void 0===a||a,d=e.children,x="";return x="sm"===s?"py-2 sm:py-1 px-5":"lg"===s?"py-4 sm:py-3 px-7  text-xl":"py-3 sm:py-2 px-6",(0,r.jsx)("button",{type:"button",onClick:t,className:"cursor-pointer bg-white text-center text-xl tracking-widest text-gray-500 sm:text-base ".concat(!c&&"border border-gray-500"," ").concat(i?"hover:bg-gray-500 hover:text-gray-100":"hover:text-gray-400"," ").concat(x," ").concat(l),children:d})}},9323:function(e,t,s){s.r(t);var r=s(8617),l=s(1087),n=s(3805),c=s(2824),a=s(7048),i=s(184);t.default=function(){var e=(0,a.E)(),t=e.wishlist,s=e.deleteWishlistItem,d=e.clearWishlist;return(0,i.jsxs)("main",{id:"main-content",className:"mx-auto mt-20 min-h-[60vh] max-w-7xl",children:[(0,i.jsxs)("div",{className:"app-max-width w-full border-t-2 border-gray-100 px-4 sm:px-8 md:px-20",children:[(0,i.jsx)("h1",{className:"mt-6 mb-2 text-center text-2xl sm:text-left sm:text-4xl",children:"Wishlist"}),(0,i.jsx)("div",{className:"mt-6 mb-3 flex ",children:(0,i.jsxs)(l.rU,{to:"/products",className:"flex place-items-center  gap-x-2",children:[(0,i.jsx)(r.PSe,{className:"text-xl"})," Continue Shopping"]})})]}),(0,i.jsx)("div",{className:"app-max-width mb-14 flex flex-col px-4 sm:px-8 md:px-20 lg:flex-row",children:(0,i.jsxs)("div",{className:"h-full w-full",children:[(0,i.jsxs)("table",{className:"mb-6 w-full",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"border-t-2 border-b-2 border-gray-200",children:[(0,i.jsx)("th",{className:"hidden py-2 text-left font-normal sm:text-center md:table-cell xl:w-72",children:"Product Image"}),(0,i.jsx)("th",{className:"hidden py-2 text-left font-normal sm:text-center md:table-cell xl:w-72",children:"Product Name"}),(0,i.jsx)("th",{className:"max-w-xs py-2 text-center font-normal",children:"Unit Price"}),(0,i.jsx)("th",{className:"hidden  whitespace-nowrap py-2 text-center font-normal sm:table-cell",children:"Remove"})]})}),(0,i.jsx)("tbody",{children:0===t.data.length?(0,i.jsx)("tr",{className:"h-60 w-full border-b-2 border-gray-200 text-center",children:(0,i.jsx)("td",{colSpan:5,children:"Whislist is empty!"})}):t.data.map((function(e){return(0,i.jsxs)("tr",{className:"border-b-2 border-gray-200",children:[(0,i.jsx)("td",{className:"my-3 flex flex-col items-start justify-center sm:items-center",children:(0,i.jsxs)(l.rU,{to:"/products/".concat(encodeURIComponent(e.product_id)),children:[(0,i.jsx)("img",{src:e.image,alt:e.title,width:95,height:128,className:"h-32 xl:mr-4"}),(0,i.jsx)("span",{className:"text-xs md:hidden",children:e.title})]})}),(0,i.jsx)("td",{className:"hidden text-center md:table-cell",children:(0,i.jsx)(l.rU,{to:"/products/".concat(encodeURIComponent(e.product_id)),children:e.title})}),(0,i.jsx)("td",{className:"max-w-xs text-center text-gray-400",children:(0,c.fK)(e.price)}),(0,i.jsx)("td",{className:"text-center",children:(0,i.jsx)("button",{onClick:function(){return s.mutate({product_id:e.product_id})},type:"button",className:"text-4xl text-gray-300 outline-none hover:text-gray-500 focus:outline-none sm:text-2xl",children:"\u2715"})})]},e.id)}))})]}),(0,i.jsx)("div",{children:(0,i.jsx)(n.Z,{onClick:function(){return d.mutate()},extraClass:"w-full sm:w-48 whitespace-nowrap",children:"Clear Wishlist"})})]})})]})}}}]);
//# sourceMappingURL=323.86c74513.chunk.js.map
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[759],{8819:function(e,r,t){"use strict";var a=t(885),s=t(2791),i=t(8617),o=t(1087),n=t(2824),l=t(8788),c=t(7048),u=t(184);r.Z=function(e){var r=e.item,t=(0,c.E)(),d=t.wishlist,h=t.addWishlistItem,m=t.deleteWishlistItem,p=(0,l.a)().role,g=(0,s.useState)(!1),f=(0,a.Z)(g,2),x=f[0],v=f[1],b=(0,s.useState)(!1),$=(0,a.Z)(b,2),y=$[0],w=$[1],j=r.id,N=r.title,k=r.price,C=r.images,L="/products/".concat(encodeURIComponent(j)),U=d.data.find((function(e){return e.product_id===j}));return(0,u.jsxs)("div",{className:"w-60",children:[(0,u.jsxs)("div",{className:"group relative mb-1 overflow-hidden",onMouseOver:function(){return v(!0)},onMouseLeave:function(){return v(!1)},children:[(0,u.jsxs)(o.rU,{to:L,tabIndex:-1,children:[(0,u.jsx)("img",{src:C[0],alt:N,loading:"lazy",className:"".concat(x?"hidden":"animate__fadeIn"," animate__animated h-80  object-cover")}),(0,u.jsx)("img",{className:"".concat(x?"":"hidden"," h-80 transform object-cover transition-transform duration-1000 hover:scale-110"),src:C[1]||C[0],alt:N})]}),(0,u.jsx)("button",{type:"button",className:"absolute top-2 right-2 rounded-full p-1 text-2xl","aria-label":"Wishlist ",onClick:function(){"guest"!==p&&(null!=U?m.mutate({product_id:j}):h.mutate({id:j}))},onMouseOver:function(){return w(!0)},onMouseLeave:function(){return w(!1)},children:y||null!=U?(0,u.jsx)(i.dOX,{className:"text-red-500"}):(0,u.jsx)(i.wkn,{className:"text-gray-500"})}),(0,u.jsx)(o.rU,{to:L,className:"absolute left-0 right-1/2 z-10 mx-auto translate-x-1/2 transform whitespace-nowrap bg-white px-4 py-2 font-lato font-semibold text-gray-700 transition-all  duration-500 hover:bg-gray-500 hover:text-gray-100 focus:bottom-8 focus:duration-75 group-hover:bottom-8 sm:block md:-bottom-10",children:"See Details"})]}),(0,u.jsxs)("div",{className:"content font-lato",children:[(0,u.jsx)(o.rU,{to:L,className:"mb-1 block truncate text-base text-gray-700 no-underline sm:text-lg ",children:N}),(0,u.jsx)("div",{className:"text-gray-400",children:(0,n.fK)(k)}),(0,u.jsx)(o.rU,{to:L,className:"text-sm font-bold uppercase sm:hidden",children:"See Details"})]})]})}},9759:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var a=t(1933),s=t(176),i=t(8329),o=t(2208),n=t(2558),l=t(8563),c=t(184),u=function(e){var r=e.value;return(0,c.jsxs)("div",{className:"group relative flex w-28 justify-center transition-all",children:[(0,c.jsx)("button",{type:"button",className:"inline-block p-2 text-gray-500 no-underline duration-500 group-hover:tracking-widest",children:r}),(0,c.jsx)("div",{className:"absolute bottom-2 w-2.5 border-b-2 border-transparent duration-500 group-hover:w-4/5 group-hover:border-gray-500 group-hover:duration-500"})]})},d=t(1087);n.ZP.use([n.tl,n.W_,n.pt]);var h=function(e){var r=e.indexOf(" ",e.length/2);return{titleUp:e.slice(0,r),titleDown:e.slice(r+1)}},m=function(){var e=(0,a.useQuery)("banners",o.QD.getBanners,{staleTime:6e4}),r=e.data,t=e.isLoading,s=e.error;return t?(0,c.jsx)("div",{children:"Loading..."}):s?(0,c.jsx)("div",{children:"Error"}):(0,c.jsx)("div",{className:"relative z-20 w-full",children:(0,c.jsx)(l.tq,{style:{"--swiper-navigation-color":"rgba(0, 0, 0, 0.7)","--swiper-navigation-size":"2rem"},slidesPerView:1,spaceBetween:0,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},speed:2e3,navigation:!0,pagination:{type:"fraction",clickable:!0},className:"mySwiper",children:null===r||void 0===r?void 0:r.data.map((function(e){return(0,c.jsxs)(l.o5,{children:[(0,c.jsx)("div",{className:"block",children:(0,c.jsx)("img",{src:e.image,className:"object-strecth h-screen w-screen",alt:e.title})}),(0,c.jsxs)("div",{className:"absolute bottom-10 right-1/2 translate-x-1/2 transform bg-white p-4 opacity-90 sm:top-1/3 sm:transform-none sm:bg-transparent sm:p-0 sm:opacity-100 ".concat("right"===e.text_position?"flex flex-col items-center sm:right-12 sm:items-end md:right-20 lg:right-40":"flex flex-col items-center sm:left-12 sm:items-start md:left-20 lg:left-40"),children:[(0,c.jsxs)("span",{className:"my-4 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl ".concat("right"===e.text_position?"sm:text-right":"sm:text-left"),children:[h(e.title).titleUp,(0,c.jsx)("br",{}),h(e.title).titleDown]}),(0,c.jsx)(d.rU,{to:e.url_path,children:(0,c.jsx)(u,{value:"Shop Now"})})]})]},e.id)}))})})},p=function(e){var r=e.href,t=e.extraClass,a=e.size,s=e.aria_label,i=e.children,o=e.noBorder,n=void 0===o||o,l=e.inverted,u=void 0===l||l,h="";return h="sm"===a?"py-2 sm:py-1 px-5":"xl"===a?"py-4 sm:py-3 px-7  text-xl":"py-3 sm:py-2 px-6",(0,c.jsx)(d.rU,{to:r,role:"button","aria-label":s,className:"cursor-pointe group inline-block bg-white text-center ".concat(u?"hover:bg-gray-500 hover:text-gray-100":"hover:text-gray-400"," ").concat(!n&&"border border-gray-500"," ").concat(h," ").concat(t),children:i})},g=t(8819),f=function(e){var r=e.imgSrc,t=e.imgAlt,a=e.children;return(0,c.jsxs)("div",{className:"group relative flex h-72 items-center justify-center overflow-hidden",children:[(0,c.jsx)("img",{className:"object-cover transition-all duration-500  group-hover:scale-110",src:r,alt:t,width:710,height:710}),a,(0,c.jsx)("div",{className:"top-0 h-full w-full bg-gray-700 opacity-50 group-hover:absolute"}),(0,c.jsx)("div",{className:"absolute right-[10%] bottom-[10%] h-0 w-0 group-hover:h-[80%] group-hover:w-[80%] group-hover:border-b group-hover:border-l group-hover:border-b-white group-hover:border-l-white group-hover:transition-[width,_height]  group-hover:delay-[0s,_0.3s] group-hover:duration-300"}),(0,c.jsx)("div",{className:"absolute left-[10%] top-[10%] h-0 w-0 group-hover:h-[80%] group-hover:w-[80%] group-hover:border-t group-hover:border-r group-hover:border-r-white group-hover:border-t-white group-hover:transition-[width,_height] group-hover:delay-[0.6s,_0.9s] group-hover:duration-300 "})]})},x=t(4799);o.fC.TOKEN=i.Z.get("token");var v=function(){var e,r,t=[],i=(0,a.useQuery)("category_images",o.YD.getCategoryWithImage,{staleTime:6e4}),n=(0,a.useQuery)("bestSellers",o.YD.getBestSeller,{staleTime:6e4});return i.isLoading?(0,c.jsx)("div",{children:"Loading..."}):i.error?(0,c.jsx)("div",{children:"Error"}):(null!=i.data&&(t=i.data.data.map((function(e){var r=(0,s.I)(x.singular(e.title));return{id:e.id,image:e.image,title:"".concat(r.charAt(0).toUpperCase()).concat(r.slice(1)," Collection")}}))),n.isLoading?(0,c.jsx)("div",{children:"Loading..."}):n.error?(0,c.jsx)("div",{children:"Error"}):(0,c.jsxs)("main",{id:"main-content",className:"min-h-[60vh]",children:[(0,c.jsx)(m,{}),(0,c.jsxs)("section",{className:"h-auto w-full border-b-2  border-y-gray-100 py-10  ",children:[(0,c.jsx)("div",{className:"my-6 text-center",children:(0,c.jsx)("h2",{className:"text-3xl",children:"Our Collections"})}),(0,c.jsx)("div",{className:"wrapper mx-auto max-w-7xl",children:(0,c.jsx)("div",{className:"grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",children:null===(e=t)||void 0===e?void 0:e.map((function(e){return(0,c.jsx)("div",{className:"relative w-full",children:(0,c.jsx)(f,{imgSrc:e.image,imgAlt:e.title,children:(0,c.jsx)(p,{href:"products?category=".concat(e.id),extraClass:"absolute bottom-[10%] z-20",children:e.title})})},e.id)}))})})]}),(0,c.jsx)("section",{className:" mt-16 mb-20  h-full w-full",children:(0,c.jsxs)("div",{className:"wrapper mx-auto flex max-w-7xl flex-col justify-center ",children:[(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsxs)("div",{className:"mb-8 w-3/4 text-center sm:w-1/2 md:w-1/3",children:[(0,c.jsx)("h2",{className:"mb-4 text-3xl",children:"Best Selling"}),(0,c.jsx)("span",{children:"Here are some of our best selling products. Explore yourself in the latest trends."})]})}),(0,c.jsx)("div",{className:"mb-10 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-5 lg:gap-x-8",children:null===(r=n.data)||void 0===r?void 0:r.data.map((function(e){return(0,c.jsx)(g.Z,{item:e},e.id)}))})]})})]}))}},4799:function(e){e.exports=function(){var e=[],r=[],t={},a={},s={};function i(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function o(e,r){return e===r?r:e===e.toLowerCase()?r.toLowerCase():e===e.toUpperCase()?r.toUpperCase():e[0]===e[0].toUpperCase()?r.charAt(0).toUpperCase()+r.substr(1).toLowerCase():r.toLowerCase()}function n(e,r){return e.replace(/\$(\d{1,2})/g,(function(e,t){return r[t]||""}))}function l(e,r){return e.replace(r[0],(function(t,a){var s=n(r[1],arguments);return o(""===t?e[a-1]:t,s)}))}function c(e,r,a){if(!e.length||t.hasOwnProperty(e))return r;for(var s=a.length;s--;){var i=a[s];if(i[0].test(r))return l(r,i)}return r}function u(e,r,t){return function(a){var s=a.toLowerCase();return r.hasOwnProperty(s)?o(a,s):e.hasOwnProperty(s)?o(a,e[s]):c(s,a,t)}}function d(e,r,t,a){return function(a){var s=a.toLowerCase();return!!r.hasOwnProperty(s)||!e.hasOwnProperty(s)&&c(s,s,t)===s}}function h(e,r,t){return(t?r+" ":"")+(1===r?h.singular(e):h.plural(e))}return h.plural=u(s,a,e),h.isPlural=d(s,a,e),h.singular=u(a,s,r),h.isSingular=d(a,s,r),h.addPluralRule=function(r,t){e.push([i(r),t])},h.addSingularRule=function(e,t){r.push([i(e),t])},h.addUncountableRule=function(e){"string"!==typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},h.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),s[e]=r,a[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()}}]);
//# sourceMappingURL=759.f143b556.chunk.js.map
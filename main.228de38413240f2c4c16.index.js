!function(e){function t(t){for(var r,o,s=t[0],c=t[1],d=t[2],p=0,u=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);u.length;)u.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;i.push([39,1]),n()}(Array(18).concat([function(e,t,n){},function(e,t,n){var r=n(20),a=n(21);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},,function(e,t,n){var r=n(6),a=n(22),i=n(23),o=n(24),s=n(25),c=n(26),d=n(27),l=n(28),p=n(29),u=n(30),h=n(31),f=n(32),m=n(33),g=n(34),x=n(35);(t=r(!1)).i(a),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Lato:400,700&display=swap);"]);var v=i(o),b=i(s),w=i(c),y=i(d),k=i(l),_=i(p),L=i(u),E=i(h),S=i(f),D=i(m),M=i(g),j=i(x);t.push([e.i,".slider_wrapper{position:fixed;height:auto;width:80%;top:calc(50% + 70px);left:50%;transform:translate(-50%, -50%)}@media(max-width: 1021px){.slider_wrapper{width:90%}}@media(max-width: 769px){.slider_wrapper{width:100%;padding:0 40px;top:calc(50% + 60px)}}@media(max-width: 321px){.slider_wrapper{padding:0 20px}}.swiper-wrapper{padding-bottom:35px;opacity:1}.swiper-pagination{bottom:5px}.swiper-button-prev{left:0px;outline:none}.swiper-button-next{right:0px;outline:none}.swiper-slide{height:calc(100vh - 300px);max-height:800px;position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:center}@media(max-width: 769px){.swiper-slide{height:calc(100vh - 260px)}}.swiper-slide_title{font-size:1rem;font-weight:700;text-align:center}.swiper-slide_title a,.swiper-slide_title a:visited{color:#000}.swiper-slide_poster{height:calc(100% - 90px);min-height:50px;position:relative;display:flex;align-items:center;background:url("+v+") no-repeat fill}.swiper-slide_poster img{height:100%;width:auto;max-width:100%;object-fit:cover}.transitioned{transition:opacity .3s}.disappearing{opacity:0}.slider_more{position:absolute;height:30px;width:50%;background:linear-gradient(90deg, #16223a00 0%, #16223ae3 50%, #16223ae3 100%);bottom:80px;left:15%;color:#fff;line-height:30px;text-align:center;padding-left:10px;cursor:pointer;user-select:none}.slider_more:hover{box-shadow:-25px 0 30px -25px rgba(255,255,255,.452) inset}.slider_later{height:30px;width:20%;position:absolute;background:url("+b+") no-repeat 30%,linear-gradient(90deg, #16223ae3 0%, #16223ae3 50%, #16223a00 100%);left:65%;bottom:80px;animation:pulse 1s infinite;border-left:1px solid #fff;cursor:pointer;user-select:none}.slider_later:hover{box-shadow:25px 0 30px -25px rgba(255,255,255,.452) inset}.slider_later.added{background:url("+w+") no-repeat 30%,linear-gradient(90deg, #16223ae3 0%, #16223ae3 50%, #16223a00 100%)}.search{margin-top:30px}@media(max-width: 769px){.search{margin-top:20px}}.search_wrapper{flex-direction:column}.search_form{position:relative;display:flex;min-width:0;width:100%}.search_fill{visibility:hidden;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100}.search_preloader{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:100px;height:100px;background:url("+y+") center center no-repeat;background-size:100px;opacity:.5;transition:visibility .1s}.search_clear{display:none;position:absolute;right:115px;top:1px;height:35px;width:35px;background:url("+k+") center center no-repeat;opacity:.5;cursor:pointer}.search_clear:hover{opacity:.8}@media(max-width: 769px){.search_clear{right:70px}}.search_keyboard-btn{position:absolute;right:75px;top:2px;height:35px;width:35px;background:url("+_+") center center no-repeat;opacity:.6;cursor:pointer}.search_keyboard-btn:hover{opacity:.9}@media(max-width: 769px){.search_keyboard-btn{display:none}}.search_mic{position:absolute;right:65px;top:2px;height:35px;width:35px;background:url("+L+") center center no-repeat;background-size:12px;opacity:.6;cursor:pointer}.search_mic:hover{opacity:.8}.search_keyboard{position:absolute;top:40px;right:65px;background:rgba(255,255,255,.95);z-index:20;border-radius:0 0 5px 5px;box-shadow:0 3px 6px -2px rgba(150,146,146,.897)}.search_button{flex:0 0 auto;padding:0 5px;font-weight:400;user-select:none;color:#003d55;font-weight:700;letter-spacing:1px;background-color:#a6c8ec;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border:1px solid #ced4da;border-radius:.25rem;cursor:pointer}.search_button span{color:red}.search_button:focus,.search_button:active,.search_button:hover{outline:0px !important;-webkit-appearance:none;box-shadow:none !important}.search_button:hover{background-color:#92aecc}.search_button:active{background-color:#a6c8ec}.search_input{flex:1 1 auto;height:calc(1.5em + .75rem + 2px);font-size:1rem;font-weight:400;line-height:1.5;color:#495057;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-image:url("+E+');background-color:#fff;background-clip:padding-box;background-position:8px 50%;background-size:18px;background-repeat:no-repeat;padding:0 85px 0 35px;min-width:235px;margin-right:2px}.search_input:focus,.search_input:active,.search_input:hover{outline:0px !important;-webkit-appearance:none;box-shadow:none !important}.search_input:focus{color:#3c4146;border-color:#a6c8ec}@media(max-width: 769px){.search_input{padding:0 45px 0 35px}}.search_message{font-size:16px;line-height:1.5em;margin-top:4px;padding:0 30px;background:linear-gradient(90deg, white 0%, rgba(177, 236, 166, 0.5) 30px, rgba(177, 236, 166, 0.4) 50%, white 100%)}@media(max-width: 769px){.search_message{font-size:14px}}.search_message.error{background:linear-gradient(90deg, white 0%, rgba(255, 0, 0, 0.3) 30px, rgba(255, 0, 0, 0.2) 70%, white 100%)}.search_input:not(:placeholder-shown)+.search_clear{display:block}.featured{position:absolute;right:0%;top:-100vh;height:80vh;width:400px;max-width:100%;padding:20px 10px 20px 25px;background:#ecf1ff;box-shadow:2px 6px 9px 0 #003d5544;border-radius:0 0 5px 5px;border:1px solid #ced4da;border-top:none;transition:top .5s;z-index:30}.featured_list{height:100%;margin:0;line-height:1.2em;overflow-y:scroll;scrollbar-color:#003d55 #ecf1ff;scrollbar-width:thin;list-style:none;counter-reset:my-counter;padding:0}.featured_list>li{display:flex;align-items:center;counter-increment:my-counter;margin:10px 0}.featured_list>li:before{content:counter(my-counter) ": ";color:red;font-weight:bold;margin-left:10px}.featured_list::-webkit-scrollbar{width:14px;background-color:transparent}.featured_list::-webkit-scrollbar-thumb{background-color:#003d55;box-shadow:inset 0 0 0 4px #ecf1ff}@media(max-width: 400px){.featured_list{padding:10px}}.featured_item{flex:1 1 100%;display:flex;justify-content:space-between;align-items:center;margin-left:20px}.featured_title{flex:1 1 auto;text-align:center;cursor:pointer}.featured_title:hover{text-decoration:underline}.featured_remove{flex:0 0 20px;height:20px;background:url('+S+") no-repeat;background-size:100%;opacity:.5;transform:rotate(45deg);margin:0 10px 0 5px;cursor:pointer}.featured_remove:hover{opacity:.9}.featured.open{top:calc(100% + 1px)}@keyframes swing{1%{transform:translateY(-3px)}3%{transform:translateY(3px)}5%{transform:translateY(-2px)}6%{transform:translateY(1px)}8%{transform:translateY(-1px)}10%{transform:translateY(0)}}@keyframes show-modal{0%{opacity:.2;transform:translateY(-50%) scale(0.5)}100%{opacity:1;transform:translateY(-50%) scale(1)}}@keyframes show-overlay{0%{background-color:#00000000}100%{background-color:#00000080}}@keyframes hide-modal{0%{opacity:1;transform:translateY(-50%) scale(1)}100%{opacity:0;transform:translateY(-50%) scale(0.1)}}@keyframes hide-overlay{0%{background-color:#00000080}100%{background-color:#00000000}}.info p{margin:5px;font-size:18px}.info_overlay{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:50;background-color:#00000080;animation:show-overlay .4s}.info_modal{height:100%;max-height:calc(100vh - 51px);max-width:650px;position:relative;top:50%;transform:translateY(-50%);padding:40px 10px 35px 25px;margin:0 auto;border-radius:3px;background:#f1f5ff;color:#16223a;border:1px solid #ced4da;animation:show-modal .3s}@media(max-width: 769px){.info_modal{max-width:100%;margin:0 20px;padding:40px 5px 35px 15px}}@media(min-height: 800px){.info_modal{max-height:800px}}.info_container{height:100%;overflow-y:scroll;background:#f1f5ff;scrollbar-color:#003d55 #f1f5ff;scrollbar-width:thin}@media(max-width: 550px){.info_container{padding:0 10px}}.info_container::-webkit-scrollbar{width:14px;background-color:transparent}.info_container::-webkit-scrollbar-thumb{background-color:#003d55;box-shadow:inset 0 0 0 4px #f1f5ff}.info_close{position:absolute;top:10px;right:10px;width:25px;height:25px;background:url("+D+') no-repeat;background-size:100%;opacity:.6;transform:rotate(45deg);margin-left:20px;cursor:pointer;border-radius:50%}.info_close:hover{opacity:.8}.info_wrapper{display:flex;align-items:center}@media(max-width: 550px){.info_wrapper{flex-direction:column-reverse}}.info_poster{position:relative;width:50%;height:auto;border-radius:5px;object-fit:contain}@media(max-width: 550px){.info_poster{width:100%}}.info_inner{display:flex;flex-direction:column;width:50%;margin-left:20px}@media(max-width: 550px){.info_inner{width:100%;margin-bottom:20px;margin-left:0px}}.info_title{font-size:22px !important;font-weight:700;letter-spacing:.5px}.info_title::first-letter{color:red}.info_director>span{font-weight:700}.info_writers>span{font-weight:700}.info_actor>span{font-weight:700}.info_genre{font-weight:700}.info_description{margin-top:20px !important;font-size:16px !important;text-align:justify}.info_description::first-letter{margin-left:20px}.hiding .info_overlay{animation:hide-overlay .3s}.hiding .info_modal{animation:hide-modal .3s}*{box-sizing:border-box}html{min-width:320px;font-family:"Lato",sans-serif;font-size:16px}body{min-height:100vh}.wrapper{height:100%;width:80%;margin:0 auto;display:flex;justify-content:space-between}@media(max-width: 1021px){.wrapper{width:90%}}@media(max-width: 769px){.wrapper{width:auto;margin:0 30px}}@media(max-width: 400px){.wrapper{margin:0 10px}}h1{font-size:2.5rem;font-weight:400;line-height:1em;margin:20px;user-select:none}h1 span{color:red}h1::first-letter{color:red;font-weight:700}@media(max-width: 769px){h1{font-size:1.7rem;margin:10px}}.header{background-color:#e4efff;border-bottom:1px solid #ced4da;color:#003d55;z-index:40;position:relative}.header_featured-btn{align-self:flex-end;width:115px;text-align:center;font-size:1rem;box-shadow:0 -1px 10px 0px #003d5544,0 0 1px 1px #003d5544 inset;border-radius:3px;margin-bottom:10px;margin-right:70px;padding:5px;user-select:none;cursor:pointer;animation:swing 10s infinite}.header_featured-btn:hover{animation:none;background:#6464640e}@media(max-width: 500px){.header_featured-btn{margin-right:0px}}@media(max-width: 769px){.header_featured-btn{font-size:.8rem;width:85px;margin-bottom:5px;padding:3px}}.header_featured-btn::after{content:"";height:1em;width:1em;background:url('+M+') no-repeat;display:inline-block;background-size:100% 100%;margin-left:5px;vertical-align:-15%}.footer{position:fixed;bottom:0;left:0;width:100%;font-size:1.2rem;font-weight:700;line-height:2em;background-color:#e4efff;border-top:1px solid #ced4da;color:#16223a}@media(max-width: 769px){.footer{font-size:1rem}}.footer_rss,.footer_git{text-decoration:none;color:#16223a}.footer_rss:visited,.footer_git:visited{color:#16223a}.footer_git::before{content:"";display:inline-block;height:1.2em;width:1.2em;vertical-align:-10%;background:center/contain no-repeat url('+j+");margin:0 5px}.menu{z-index:30;color:#16223a}.menu__wrapper{position:relative}",""]),e.exports=t},,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"7d6009b7cb8548158aa80f93f58566b4.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"bba5e40f6296e3ebb6030ad840deddf9.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"2a05c881c388086a8ec3caa16e75c2a7.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"0ba903ae0c5ef1bcbf69731d40731789.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"4aa9288f4d3d17e6ab4475b5150e2021.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"1009b10341d6b05794efc9d8b561f7c3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"348f9a78bdcc2f1cdf0a6c4b7d37d742.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"aa15119569aa3caa1ca741eaac70f99b.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"9f16c9353ca876bc0edd8a579538b6a3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"0540a302b47d4660d9d6c9e50bd89d15.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"552680d49efa93aae86ddf414c3fa640.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"018c43625bfee0ad8890d7a63b782fe2.svg"},,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),s=(n(12),n(10)),c={direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:7},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchOverflow:!0,fadeEffect:{crossFade:!0},centerInsufficientSlides:!0,slidesPerView:1,spaceBetween:10,breakpoints:{"@1":{slidesPerView:2,spaceBetween:20},"@1.3":{slidesPerView:3,spaceBetween:30},"@1.8":{slidesPerView:4,spaceBetween:30}}},d=n(7),l=n.n(d),p=n(8),u=n.n(p),h=n(2),f=n.n(h),m=n(3),g=n.n(m),x=[["char",!0,"Backquote","~`","`","~","Ё","ё","Ё"],["char",!1,"Digit1","!1","1","!","!1","1","!"],["char",!1,"Digit2","@2","2","@",'"2',"2",'"'],["char",!1,"Digit3","#3","3","#","№3","3","№"],["char",!1,"Digit4","$4","4","$",";4","4",";"],["char",!1,"Digit5","%5","5","%","%5","5","%"],["char",!1,"Digit6","^6","6","^",":6","6",":"],["char",!1,"Digit7","&7","7","&","?7","7","?"],["char",!1,"Digit8","*8","8","*","*8","8","*"],["char",!1,"Digit9","(9","9","(","(9","9","("],["char",!1,"Digit0",")0","0",")",")0","0",")"],["char",!1,"Minus","_-","-","_"],["action",!1,"Backspace","Backspace"],["char",!0,"KeyQ","Q","q","Q","Й","й","Й"],["char",!0,"KeyW","W","w","W","Ц","ц","Ц"],["char",!0,"KeyE","E","e","E","У","у","У"],["char",!0,"KeyR","R","r","R","К","к","К"],["char",!0,"KeyT","T","t","T","Е","е","Е"],["char",!0,"KeyY","Y","y","Y","Н","н","Н"],["char",!0,"KeyU","U","u","U","Г","г","Г"],["char",!0,"KeyI","I","i","I","Ш","ш","Ш"],["char",!0,"KeyO","O","o","O","Щ","щ","Щ"],["char",!0,"KeyP","P","p","P","З","з","З"],["char",!0,"BracketLeft","{[","[","{","Х","х","Х"],["char",!0,"BracketRight","}]","]","}","Ъ","ъ","Ъ"],["action",!1,"Delete","DEL"],["char",!0,"KeyA","A","a","A","Ф","ф","Ф"],["char",!0,"KeyS","S","s","S","Ы","ы","Ы"],["char",!0,"KeyD","D","d","D","В","в","В"],["char",!0,"KeyF","F","f","F","А","а","А"],["char",!0,"KeyG","G","g","G","П","п","П"],["char",!0,"KeyH","H","h","H","Р","р","Р"],["char",!0,"KeyJ","J","j","J","О","о","О"],["char",!0,"KeyK","K","k","K","Л","л","Л"],["char",!0,"KeyL","L","l","L","Д","д","Д"],["char",!0,"Semicolon",":;",";",":","Ж","ж","Ж"],["char",!0,"Quote","\"'","'",'"',"Э","э","Э"],["action",!1,"Enter","ENTER"],["action",!1,"CapsLock","Caps Lock"],["char",!0,"KeyZ","Z","z","Z","Я","я","Я"],["char",!0,"KeyX","X","x","X","Ч","ч","Ч"],["char",!0,"KeyC","C","c","C","С","с","C"],["char",!0,"KeyV","V","v","V","М","м","М"],["char",!0,"KeyB","B","b","B","И","и","И"],["char",!0,"KeyN","N","n","N","Т","т","Т"],["char",!0,"KeyM","M","m","M","Ь","ь","Ь"],["char",!0,"Comma","<,",",","<","Б","б","Б"],["char",!0,"Period",">.",".",">","Ю","ю","Ю"],["char",!0,"Slash","?/","/","?",",.",".",","],["action",!1,"ArrowLeft","←"],["action",!1,"ArrowRight","→"],["action",!1,"ShiftLeft","Shift"],["char",!1,"Space",""," "],["action",!1,"Lang","En/Ru"]],v=["Backspace","Delete","CapsLock","Enter","Space","ShiftLeft","Lang"],b=["KeyA","KeyQ","CapsLock","ShiftLeft","Backquote"],w=function(){var e="en";localStorage.getItem("VirtualKeyboardUserLanguage")?e=localStorage.getItem("VirtualKeyboardUserLanguage"):localStorage.setItem("VirtualKeyboardUserLanguage",e);var t="en"===e?"ru":"en";return{getCurrent:function(){return e},getNext:function(){return t},change:function(){t=e,e="en"===e?"ru":"en",localStorage.setItem("VirtualKeyboardUserLanguage",e)}}}(),y={currentKey:!1},k=function(e){var t=document.createElement("span");if(2===e.length){var n=document.createElement("span"),r=document.createElement("span");n.innerHTML="".concat(e[0]),r.innerHTML="".concat(e[1]),n.classList.add("firstChar"),r.classList.add("secondChar"),t.appendChild(n),t.appendChild(r)}else t.innerText=e;return t},_=function(){function e(t,n,r,a,i,o,s,c,d){f()(this,e),this.type=t,this.isMutable=n,this.DOMContent={en:k(a)},"char"===t&&(this.content={en:i,ru:c||i},this.modContent={en:o||i,ru:d||c||o||i},this.DOMContent.ru=k(s||a)),this.DOMElement=document.createElement("div"),this.DOMElement.classList.add("key"),this.DOMElement.setAttribute("data-keycode",r),this.DOMElement.appendChild("char"===t?this.DOMContent[w.getCurrent()]:this.DOMContent.en),this.nameToLowerCase(),this.DOMElement.addEventListener("mouseenter",(function(){y.currentKey=r})),this.DOMElement.addEventListener("mouseleave",(function(){y.currentKey=!1})),v.includes(r)&&this.DOMElement.classList.add("stretch")}return g()(e,[{key:"languageToggle",value:function(){"char"===this.type&&this.DOMElement.replaceChild(this.DOMContent[w.getNext()],this.DOMContent[w.getCurrent()])}},{key:"nameToUpperCase",value:function(){this.isMutable&&this.DOMElement.classList.remove("lowercase")}},{key:"nameToLowerCase",value:function(){this.isMutable&&this.DOMElement.classList.add("lowercase")}}]),e}(),L=(n(18),function(){function e(t,n,r){var a=this;f()(this,e),this.isShow=!1;var i,o=t,s=n;this.input=n,this.container=document.createElement("div"),this.container.classList.add("container");var c=!1,d=!1,p={},h=[];s.insertText=function(e){this.setRangeText(e,s.selectionStart,s.selectionEnd,"end")};var m=function(){i+c===1?Object.keys(p).forEach((function(e){p[e].nameToUpperCase()})):Object.keys(p).forEach((function(e){p[e].nameToLowerCase()}))};this.clearActions=function(){i=!1,p.ShiftLeft.DOMElement.classList.remove("pressed"),m()};var g=function(e){var t=s.selectionEnd+e;t<0&&(t=0),t>s.value.length&&(t=s.value.length),s.setSelectionRange(t,t)},v=function(e){switch(e){case"ShiftLeft":i=!0,m();break;case"Backspace":s.selectionStart===s.selectionEnd?s.selectionStart>0&&s.setRangeText("",s.selectionStart-1,s.selectionEnd,"end"):s.insertText("");break;case"Delete":s.selectionStart===s.selectionEnd?s.selectionStart<s.value.length&&s.setRangeText("",s.selectionStart,s.selectionEnd+1,"end"):s.insertText("");break;case"ArrowLeft":g(-1);break;case"ArrowRight":g(1);break;case"CapsLock":c=!c,p.CapsLock.DOMElement.classList.toggle("caps"),m();break;case"Lang":d||(Object.keys(p).forEach((function(e){p[e].languageToggle()})),w.change(),d=!0,setTimeout((function(){d=!1}),100))}},k=function(e){if(p[e]){if(s.focus(),p[e].DOMElement.classList.add("pressed"),"action"===p[e].type)return void v(e);t=e,n=i?p[t].modContent[w.getCurrent()]:p[t].content[w.getCurrent()],c&&(n=i?n.toLowerCase():n.toUpperCase()),s.insertText(n)}var t,n},L=function(e){p[e]&&(p[e].DOMElement.classList.remove("pressed"),"action"===p[e].type&&function(e){switch(e){case"ShiftLeft":i&&(i=!1),m();break;case"Enter":r()}}(e))};this.onMouseDown=function(e){if(e.stopPropagation(),e.target.closest("[data-keycode]")){var t=e.target.closest("[data-keycode]").dataset.keycode;h.push(t),k(t),1===e.which&&(n=setTimeout((function(){y.currentKey&&y.currentKey!==h[h.length-1]&&(L(h.pop()),h.push(y.currentKey),k(y.currentKey));var e=setInterval((function(){y.currentKey&&(L(h.pop()),h.push(y.currentKey),k(y.currentKey))}),60);a.container.addEventListener("mouseup",(function(){clearInterval(e)}),{once:!0}),a.container.addEventListener("mouseleave",(function(){clearInterval(e)}),{once:!0})}),300),a.container.addEventListener("mouseup",(function(){clearTimeout(n)}),{once:!0}),a.container.addEventListener("mouseleave",(function(){clearTimeout(n)}),{once:!0}))}var n},this.onMouseUp=function(e){s.focus(),3===e.which&&"ShiftLeft"===h[0]&&1===h.length||(3===e.which&&"ShiftLeft"===h[0]&&2===h.length?"ShiftLeft"===h[1]?h[0]===h[1]?(L(h.pop()),h=[]):h.shift():L(h.pop()):function(){for(;h.length>0;)L(h.pop())}())};var E;x.forEach((function(e){p[e[2]]=l()(_,u()(e)),b.includes(e[2])&&((E=document.createElement("div")).classList.add("row"),a.container.appendChild(E)),E.appendChild(p[e[2]].DOMElement)})),o.appendChild(this.container),this.container.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.container.addEventListener("click",(function(e){e.stopPropagation()})),window.addEventListener("blur",this.clearActions)}return g()(e,[{key:"show",value:function(){this.isShow||(this.container.classList.add("visible"),this.container.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),this.isShow=!0,this.input.focus())}},{key:"hide",value:function(){this.isShow&&(this.container.classList.remove("visible"),this.container.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),this.clearActions(),this.isShow=!1)}},{key:"toggle",value:function(){this.isShow?this.hide():this.show()}}]),e}()),E=(n(19),new(function(){function e(){f()(this,e),this.element=document.getElementById("js-preloader")}return g()(e,[{key:"show",value:function(){this.element.style.visibility="visible"}},{key:"hide",value:function(){this.element.style.visibility=""}}]),e}())),S=n(9),D=n.n(S),M=function(){var e=o()(a.a.mark((function e(t){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,!/[а-я]/i.test(t)){e.next=16;break}return e.prev=2,e.next=5,fetch("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200424T234902Z.8d014bf73bf57d47.f9e7b25f34ed56ebfa19624ddee02238e63d3865&text=".concat(t,"&lang=ru-en"));case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,o=D()(i.text,1),n=o[0],e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(2),new Error("Translation is not available now. Try again later or use English");case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=o()(a.a.mark((function e(t){var n,r,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map(function(){var e=o()(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?i=".concat(t.imdbID,"&apikey=e5a28065"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.allSettled(n);case 3:return r=e.sent,s=!0,(i={}).value=r.map((function(e){return e.value&&"True"===e.value.Response?e:(s=!1,{value:{Ratings:[{Value:"N/A"}]}})})),i.ok=s,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=o()(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map(function(){var e=o()(a.a.mark((function e(t){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="N/A"===t.Poster?"./src/img/noposter.jpg":t.Poster,e.prev=1,e.next=4,fetch(n);case 4:r=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,fetch("./src/img/noposter.jpg");case 11:r=e.sent;case 12:if(r.ok){e.next=16;break}return e.next=15,fetch("./src/img/noposter.jpg");case 15:r=e.sent;case 16:return e.next=18,r.blob();case 18:return i=e.sent,o=URL.createObjectURL(i),e.abrupt("return",o);case 21:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.allSettled(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=o()(a.a.mark((function e(t,n){var r,i,o,s,c,d,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:return i=e.sent,o=i.split(" ").join("+"),e.prev=4,s="https://www.omdbapi.com/?s=".concat(o,"&page=").concat(n,"&apikey=e5a28065"),e.next=8,fetch(s);case 8:return c=e.sent,e.next=11,c.json();case 11:(r=e.sent).Search&&(d=[],l=0,r.Search.forEach((function(e){d.find((function(t){return t.imdbID===e.imdbID}))?l+=1:d.push(e)})),r.Search=d,r.duplicates=l),r.request=i,e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(4),new Error("Unable to get data. Try again later");case 19:return e.abrupt("return",r);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t,n){return e.apply(this,arguments)}}(),K=function(e){var t;switch(e.currentBreakpoint){case"@1":t=2;break;case"@1.3":t=3;break;case"@1.8":t=4;break;default:t=1}return t},C=function(e){return/\d{1}/.test(e[e.length-1])?e:e.slice(0,e.length-1)},I=document.getElementById("js-info"),B=function(){var e=o()(a.a.mark((function e(t){var n,r,i,o,s,c,d,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.show(),e.prev=1,e.next=4,j([{imdbID:t}]);case 4:return n=e.sent,r=n.value[0].value,e.next=8,T([{Poster:r.Poster}]);case 8:i=e.sent,o=i[0].value,s=C(r.Year),(c=document.createElement("div")).classList.add("info_overlay"),c.innerHTML='\n      <div class="info_modal">\n        <div class="info_container">\n          <div class="info_wrapper">\n            <img class="info_poster" src="'.concat(o,'" alt="').concat(r.Title,'">\n            <div class="info_inner">\n              <p class="info_title">').concat(r.Title," (").concat(s,')</p>\n              <p class="info_country">').concat(r.Country,'</p>\n              <p class="info_director"><span>Director:</span> ').concat(r.Director,'</p>\n              <p class="info_writers"><span>Writer:</span> ').concat(r.Writer,'</p>\n              <p class="info_actor"><span>Actors:</span> ').concat(r.Actors,'</p>\n              <p class="info_genre">').concat(r.Genre,'</p>\n              <p class="info_released">Released ').concat(r.Released,'</p>\n              <p class="info_runtime">').concat(r.Runtime,'</p>\n              <p class="info_rating">IMDb rating: ').concat(r.imdbRating,'</p>\n            </div>\n          </div>\n          <p class="info_description">').concat(r.Plot,'</p>\n        </div>\n        <div class="info_close" data-info="close"></div>\n      </div>\n    '),I.innerHTML="",I.append(c),d=function(e){e.stopPropagation()},l=function e(t){t.stopPropagation(),"close"!==t.target.dataset.info&&t.target!==c||(c.removeEventListener("click",e),c.removeEventListener("mousedown",d),I.classList.add("hiding"),I.addEventListener("animationend",(function(){c.remove(),I.classList.remove("hiding")}),{once:!0}))},c.addEventListener("mousedown",l),c.addEventListener("click",l),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),console.log(e.t0);case 25:E.hide();case 26:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}(),z=document.getElementById("js-list"),P={},R=function(e,t){var n=document.createElement("li");n.id="f-".concat(e),n.innerHTML='\n    <div class="featured_item">\n      <span data-open="'.concat(e,'" class="featured_title">').concat(t,'</span>\n      <span data-remove="').concat(e,'" class="featured_remove"></span>\n    </div>\n  '),z.append(n)},A=function(e,t){delete P[e],t.remove(),localStorage.movieSearchList=JSON.stringify(P)};localStorage.movieSearchList&&(P=JSON.parse(localStorage.movieSearchList),Object.keys(P).forEach((function(e){R(e,P[e])}))),z.addEventListener("click",(function(e){e.target.dataset.open?B(e.target.dataset.open):e.target.dataset.remove&&A(e.target.dataset.remove,e.target.parentNode.parentNode)}));var U=function(e,t){e in P?A(e,document.getElementById("f-".concat(e))):(R(e,t),P[e]=t,localStorage.movieSearchList=JSON.stringify(P))},Y=function(e,t,n,r,a){var i=!1;localStorage.movieSearchList&&(JSON.parse(localStorage.movieSearchList)[e]&&(i=!0));var o=document.createElement("div");return o.classList.add("swiper-slide"),o.innerHTML='\n  <div class="swiper-slide_title"><a href="https://www.imdb.com/title/'.concat(e,'/videogallery/" target="blank">').concat(t,'</a></div>\n  <div class="swiper-slide_poster"><img src=').concat(n,' alt="poster"></div>\n  <div class="swiper-slide_year">').concat(r,'</div>\n  <div class="swiper-slide_rating">\n      <span>IMDb: ').concat(a,'</span>\n  </div>\n  <div data-later="').concat(e,'" data-title="').concat(t," (").concat(r,')" class="slider_later').concat(i?" added":"",'"></div>\n  <div data-more="').concat(e,'" class="slider_more">Learn more...</div>\n  '),o},N=function(){var e=o()(a.a.mark((function e(t){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,T(t.movies);case 3:for(r=e.sent,i=0;i<t.movies.length;i+=1)o=C(t.movies[i].Year),n.push(Y(t.movies[i].imdbID,t.movies[i].Title,r[i].value,o,t.additional[i].value.Ratings[0]?t.additional[i].value.Ratings[0].Value:"0/0"));return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=o()(a.a.mark((function e(){var t,n,r,i,d,l,p,u,h,f,m,g,x,v,b,w,y,k,_,S,D,M;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("js-form"),n=document.getElementById("js-input"),r=document.getElementById("js-slides"),i=document.getElementById("js-message"),d=document.getElementById("js-clear"),l=document.getElementById("js-featuredbtn"),p=document.getElementById("js-featured"),T=void 0,f=(T=["hello","happy","hope","friend","love","holidays","fun","weekend","chocolate","sweet","orange","live"])[Math.floor(Math.random()*T.length)],m=1,g=!1,x=!1,v=new s.a(".swiper-container",c),b=function(){var e=o()(a.a.mark((function e(t){var n,o,s,c,d,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("add"!==(n=p.length>1&&void 0!==p[1]?p[1]:"start")||!g&&u-(K(v)+v.activeIndex)<7&&u<h)){e.next=31;break}return g=!0,"add"!==n&&(E.show(),m=1),e.prev=4,e.next=7,O(t,m);case 7:if("True"!==(o=e.sent).Response){e.next=22;break}return s=o.Search,e.next=12,j(s);case 12:return c=e.sent,d={movies:s,additional:c.value},e.next=16,N(d);case 16:return l=e.sent,m+=1,"user"===n?(r.classList.add("disappearing"),setTimeout((function(){v.removeAllSlides(),v.appendSlide(l),r.classList.remove("disappearing"),E.hide()}),300)):(v.appendSlide(l),r.classList.remove("disappearing"),E.hide()),"add"===n?(u+=s.length,h-=o.duplicates):(h=o.totalResults-o.duplicates,u=s.length,c.ok?(i.innerText='Showing results for "'.concat(o.request,'":'),i.classList.remove("error")):(i.innerText='Showing results for "'.concat(o.request,'", but some movie data is not available now. Try again later.'),i.classList.add("error"))),g=!1,e.abrupt("return",o.request);case 22:"Movie not found!"===o.Error?i.innerText='No results for "'.concat(o.request,'"...'):i.innerText="Unable to process request. ".concat(o.Error),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(4),i.innerText="".concat(e.t0);case 28:i.classList.add("error"),E.hide(),g=!1;case 31:return e.abrupt("return",!1);case 32:case"end":return e.stop()}}),e,null,[[4,25]])})));return function(t){return e.apply(this,arguments)}}(),y=!1,k=function e(){w.hide(),document.removeEventListener("click",S),document.removeEventListener("keydown",e),y=!1},_=function(){w.show(),document.addEventListener("click",S),document.addEventListener("keydown",k),y=!0},S=function(e){e.target.closest("#js-input")||e.target.closest("#js-keyboard")||e.target.closest("#js-clear")||k()},D=function(){var e=o()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n.value){e.next=5;break}return e.next=3,b(n.value,"user");case 3:e.sent&&k();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=document.getElementById("js-keyboardbtn"),w=new L(document.getElementById("js-keyboard"),n,D),M.addEventListener("click",(function(e){e.stopPropagation(),y?k():_()})),d.addEventListener("click",(function(){n.value="",n.focus()})),l.addEventListener("click",(function(e){e.stopPropagation(),p.classList.toggle("open");var t=function e(t){t.target.closest("#js-featured")||t.target.closest("#js-featuredbtn")||(p.classList.remove("open"),document.removeEventListener("click",e),x=!1)};(x=!x)?document.addEventListener("mousedown",t):document.removeEventListener("mousedown",t)})),r.addEventListener("click",(function(e){e.target.dataset.later?(U(e.target.dataset.later,e.target.dataset.title),e.target.classList.toggle("added"),console.log(e.target)):e.target.dataset.more&&B(e.target.dataset.more)})),t.addEventListener("submit",function(){var e=o()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===n.value){e.next=7;break}return e.next=4,b(n.value,"user");case 4:f=e.sent,e.next=8;break;case 7:n.focus();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v.on("slideChange",(function(){b(f,"add")})),v.on("reachEnd",(function(){g&&E.show()})),b(f);case 28:case"end":return e.stop()}var T}),e)})));return function(){return e.apply(this,arguments)}}();document.addEventListener("DOMContentLoaded",V)}]));
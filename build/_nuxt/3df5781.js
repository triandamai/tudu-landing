(window.webpackJsonp=window.webpackJsonp||[]).push([[25,8,13,15,18,19],{245:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("39400b80",content,!0,{sourceMap:!1})},246:function(t,e,n){"use strict";n(245)},247:function(t,e,n){var r=n(26)(!1);r.push([t.i,".nuxt-logo{height:180px}",""]),t.exports=r},248:function(t,e,n){"use strict";n.r(e);n(246);var r=n(43),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(r,l,function(e){return t[e]}.bind(null,l));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e){var n="function"==typeof Float32Array;function r(t,e){return 1-3*e+3*t}function l(t,e){return 3*e-6*t}function i(t){return 3*t}function s(t,e,n){return((r(e,n)*t+l(e,n))*t+i(e))*t}function o(t,e,n){return 3*r(e,n)*t*t+2*l(e,n)*t+i(e)}function a(t){return t}t.exports=function(t,e,r,l){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===l)return a;for(var i=n?new Float32Array(11):new Array(11),c=0;c<11;++c)i[c]=s(.1*c,t,r);function u(e){for(var n=0,l=1;10!==l&&i[l]<=e;++l)n+=.1;--l;var a=n+(e-i[l])/(i[l+1]-i[l])*.1,c=o(a,t,r);return c>=.001?function(t,e,n,r){for(var l=0;l<4;++l){var i=o(e,n,r);if(0===i)return e;e-=(s(e,n,r)-t)/i}return e}(e,a,t,r):0===c?a:function(t,e,n,r,l){var i,o,a=0;do{(i=s(o=e+(n-e)/2,r,l)-t)>0?n=o:e=o}while(Math.abs(i)>1e-7&&++a<10);return o}(e,n,n+.1,t,r)}return function(t){return 0===t?0:1===t?1:s(u(t),e,l)}}},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{ref:"scrollactive-nav-wrapper",tag:"component",staticClass:"scrollactive-nav"},[this._t("default")],2)};r._withStripped=!0;var l=n(0),i=n.n(l);function s(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=function(t,e,n,r,l,i,s,o){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):l&&(a=o?function(){l.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:l),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,a):[a]}return{exports:t,options:c}}({props:{activeClass:{type:String,default:"is-active"},offset:{type:Number,default:20},scrollOffset:{type:Number,default:null},scrollContainerSelector:{type:String,default:""},clickToScroll:{type:Boolean,default:!0},duration:{type:Number,default:600},alwaysTrack:{type:Boolean,default:!1},bezierEasingValue:{type:String,default:".5,0,.35,1"},modifyUrl:{type:Boolean,default:!0},exact:{type:Boolean,default:!1},highlightFirstItem:{type:Boolean,default:!1},tag:{type:String,default:"nav"},scrollOnStart:{type:Boolean,default:!0}},data:function(){return{observer:null,items:[],currentItem:null,lastActiveItem:null,scrollAnimationFrame:null,bezierEasing:i.a}},computed:{cubicBezierArray:function(){return this.bezierEasingValue.split(",")},scrollContainer:function(){var t=window;return this.scrollContainerSelector&&(t=document.querySelector(this.scrollContainerSelector)||window),t}},mounted:function(){var t=window.MutationObserver||window.WebKitMutationObserver;this.observer||(this.observer=new t(this.initScrollactiveItems),this.observer.observe(this.$refs["scrollactive-nav-wrapper"],{childList:!0,subtree:!0})),this.initScrollactiveItems(),this.removeActiveClass(),this.currentItem=this.getItemInsideWindow(),this.currentItem&&this.currentItem.classList.add(this.activeClass),this.scrollOnStart&&this.scrollToHashElement(),this.scrollContainer.addEventListener("scroll",this.onScroll)},updated:function(){this.initScrollactiveItems()},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame)},methods:{onScroll:function(t){this.currentItem=this.getItemInsideWindow(),this.currentItem!==this.lastActiveItem&&(this.removeActiveClass(),this.$emit("itemchanged",t,this.currentItem,this.lastActiveItem),this.lastActiveItem=this.currentItem),this.currentItem&&this.currentItem.classList.add(this.activeClass)},getItemInsideWindow:function(){var t,e=this;return[].forEach.call(this.items,(function(n){var r=n===e.items[0],l=document.getElementById(decodeURI(n.hash.substr(1)));if(l){var i=e.scrollContainer.scrollTop||window.pageYOffset,s=i>=e.getOffsetTop(l)-e.offset,o=i<e.getOffsetTop(l)-e.offset+l.offsetHeight;r&&e.highlightFirstItem&&o&&(t=n),e.exact&&s&&o&&(t=n),!e.exact&&s&&(t=n)}})),t},initScrollactiveItems:function(){var t=this;this.items=this.$el.querySelectorAll(".scrollactive-item"),this.clickToScroll?[].forEach.call(this.items,(function(e){e.addEventListener("click",t.handleClick)})):[].forEach.call(this.items,(function(e){e.removeEventListener("click",t.handleClick)}))},setScrollactiveItems:function(){this.initScrollactiveItems()},handleClick:function(t){var e=this;t.preventDefault();var n=t.currentTarget.hash,r=document.getElementById(decodeURI(n.substr(1)));r?(this.alwaysTrack||(this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame),this.removeActiveClass(),t.currentTarget.classList.add(this.activeClass)),this.scrollTo(r).then((function(){e.alwaysTrack||(e.scrollContainer.addEventListener("scroll",e.onScroll),e.currentItem=[].find.call(e.items,(function(t){return decodeURI(t.hash.substr(1))===r.id})),e.currentItem!==e.lastActiveItem&&(e.$emit("itemchanged",null,e.currentItem,e.lastActiveItem),e.lastActiveItem=e.currentItem)),e.modifyUrl&&e.pushHashToUrl(n)}))):console.warn("[vue-scrollactive] Element '".concat(n,"' was not found. Make sure it is set in the DOM."))},scrollTo:function(t){var e=this;return new Promise((function(n){var r=e.getOffsetTop(t),l=e.scrollContainer.scrollTop||window.pageYOffset,i=r-l,o=e.bezierEasing.apply(e,s(e.cubicBezierArray)),a=null;window.requestAnimationFrame((function t(r){a||(a=r);var s=r-a,c=s/e.duration;s>=e.duration&&(s=e.duration),c>=1&&(c=1);var u=e.scrollOffset||e.offset,v=l+o(c)*(i-u);e.scrollContainer.scrollTo(0,v),s<e.duration?e.scrollAnimationFrame=window.requestAnimationFrame(t):n()}))}))},getOffsetTop:function(t){for(var e=0,n=t;n;)e+=n.offsetTop,n=n.offsetParent;return this.scrollContainer.offsetTop&&(e-=this.scrollContainer.offsetTop),e},removeActiveClass:function(){var t=this;[].forEach.call(this.items,(function(e){e.classList.remove(t.activeClass)}))},scrollToHashElement:function(){var t=this,e=window.location.hash;if(e){var n=document.querySelector(decodeURI(e));n&&(window.location.hash="",setTimeout((function(){var r=n.offsetTop-t.offset;t.scrollContainer.scrollTo(0,r),t.pushHashToUrl(e)}),0))}},pushHashToUrl:function(t){window.history.pushState?window.history.pushState(null,null,t):window.location.hash=t}}},r,[],!1,null,null,null);a.options.__file="src/scrollactive.vue";var c=a.exports,u={install:function(t){u.install.installed||t.component("scrollactive",c)}};"undefined"!=typeof window&&window.Vue&&u.install(window.Vue),e.default=u}])},250:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"site-footer"},[r("span",{staticClass:"bubble-1"}),t._v(" "),r("span",{staticClass:"bubble-2"}),t._v(" "),r("span",{staticClass:"bubble-3"}),t._v(" "),r("span",{staticClass:"bubble-4"}),t._v(" "),r("span",{staticClass:"bubble-5"}),t._v(" "),r("span",{staticClass:"bubble-6"}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"inner-container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-widget"},[r("a",{attrs:{href:"index.html"}},[r("img",{attrs:{src:n(251),alt:"Awesome Image"}})])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-title"},[r("h3",[t._v("Address")])]),t._v(" "),r("ul",{staticClass:"contact-list"},[r("li",[t._v("888 999 0000")]),t._v(" "),r("li",[t._v("needhelp@opins.com")]),t._v(" "),r("li",[t._v("\n                  855 road, broklyn street "),r("br"),t._v("\n                  new york 600\n                ")])])])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-title"},[r("h3",[t._v("Explore")])]),t._v(" "),r("ul",{staticClass:"links-list"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Our Team")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Features")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Blog")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("How It Works")])])])])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-title"},[r("h3",[t._v("Links")])]),t._v(" "),r("ul",{staticClass:"links-list"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("Help")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Support")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Clients")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Contact")])])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-title"},[r("h3",[t._v("Follow")])]),t._v(" "),r("div",{staticClass:"social-block"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook-f"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dribbble"})])])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-footer text-center"},[n("div",{staticClass:"container"},[n("p",[t._v("© copyright 2019 by "),n("a",{attrs:{href:"#"}},[t._v("Layerdrops.com")])])])])}],l={name:"Footer",data:function(){return{sticky:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t.sticky?n("div",[n("scrollactive",[n("a",{staticClass:"scroll-to-target scroll-to-top scrollactive-item",attrs:{href:"#wrapper","data-target":"html"}},[n("i",{staticClass:"fa fa-long-arrow-up"})])])],1):t._e()])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(250).default})},251:function(t,e,n){t.exports=n.p+"img/logo-1-1.c1cf73e.png"},252:function(t,e,n){t.exports=n.p+"img/logo-1-2.f40aff0.png"},253:function(t,e,n){t.exports=n.p+"img/blog-1-1.684b8ae.png"},254:function(t,e,n){t.exports=n.p+"img/blog-1-2.684b8ae.png"},255:function(t,e,n){t.exports=n.p+"img/blog-1-3.684b8ae.png"},277:function(t,e,n){"use strict";n.r(e);n(33);var r=n(2),l=n(249),o=n.n(l),c=n(248);r.default.use(o.a);var v={components:{NuxtLogo:c.default},data:function(){return{sticky:!1,menuOpen:!1,menuClose:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.menuCloseHandle()},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)},menuCloseHandle:function(){document.querySelector(".menu-toggler").addEventListener("click",(function(){document.querySelector(".main-navigation").classList.toggle("showen")})),document.querySelectorAll(".sub-nav-toggler").forEach((function(t){t.addEventListener("click",(function(t){var e=t.currentTarget.parentElement.parentElement.children[1];t.preventDefault(),console.log("clicked"),e.classList.toggle("active")}))}))}}},d=n(43),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"site-header header-one home-page-two"},[r("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky "+(t.sticky?"stricky-fixed":"")},[r("div",{staticClass:"container clearfix"},[r("div",{staticClass:"logo-box clearfix"},[r("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[r("img",{attrs:{src:n(252),alt:"Awesome Image"}})]),t._v(" "),t._m(0)],1),t._v(" "),r("div",{staticClass:"main-navigation"},[r("ul",{staticClass:"one-page-scroll-menu navigation-box"},[r("li",{staticClass:"scrollToLink"},[r("nuxt-link",{attrs:{to:"#banner"}},[t._v("Home\n              "),r("button",{staticClass:"sub-nav-toggler"},[r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"})])]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home One")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home Two")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Header Versions")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Header One")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Header Two")])],1)])],1)])],1),t._v(" "),r("li",{staticClass:"scrollToLink"},[r("nuxt-link",{attrs:{to:"#service"}},[t._v("Features")])],1),t._v(" "),r("li",{staticClass:"scrollToLink"},[r("nuxt-link",{attrs:{to:"#features"}},[t._v("App Screens")])],1),t._v(" "),r("li",{staticClass:"scrollToLink"},[r("nuxt-link",{attrs:{to:"#pricing"}},[t._v("Pricing")])],1),t._v(" "),r("li",{staticClass:"scrollToLink"},[r("nuxt-link",{attrs:{to:"#blog"}},[t._v("Blog\n              "),r("button",{staticClass:"sub-nav-toggler"},[r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"})])]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Grid")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1)])]),t._v(" "),r("div",{staticClass:"right-side-box"},[r("nuxt-link",{staticClass:"header-btn",attrs:{to:"#"}},[t._v("Login")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"menu-toggler"},[e("span",{staticClass:"fa fa-bars"})])}],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String},pageName:{type:String}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"inner-banner"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"thm-breadcrumb"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(0),t._v(" "),n("li",[n("span",{staticClass:"page-title"},[t._v(t._s(t.pageName))])])]),t._v(" "),n("h2",[t._v(t._s(t.title))])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"sep"},[t._v(".")])])}],!1,null,null,null);e.default=component.exports},289:function(t,e,n){t.exports=n.p+"img/blog-1-4.684b8ae.png"},290:function(t,e,n){t.exports=n.p+"img/blog-1-5.684b8ae.png"},291:function(t,e,n){t.exports=n.p+"img/blog-1-6.684b8ae.png"},303:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-block"},[r("div",{staticClass:"inner-block"},[r("img",{attrs:{src:n(253),alt:"Awesome Image"}}),t._v(" "),r("div",{staticClass:"date-block"},[t._v("30 April, 2019")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-info"},[n("a",{attrs:{href:"#"}},[t._v("By Admin")]),t._v(" "),n("span",{staticClass:"sep"},[t._v(".")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2 Comments")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-block"},[r("div",{staticClass:"inner-block"},[r("img",{attrs:{src:n(254),alt:"Awesome Image"}}),t._v(" "),r("div",{staticClass:"date-block"},[t._v("30 April, 2019")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-info"},[n("a",{attrs:{href:"#"}},[t._v("By Admin")]),t._v(" "),n("span",{staticClass:"sep"},[t._v(".")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2 Comments")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-block"},[r("div",{staticClass:"inner-block"},[r("img",{attrs:{src:n(255),alt:"Awesome Image"}}),t._v(" "),r("div",{staticClass:"date-block"},[t._v("30 April, 2019")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-info"},[n("a",{attrs:{href:"#"}},[t._v("By Admin")]),t._v(" "),n("span",{staticClass:"sep"},[t._v(".")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2 Comments")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-block"},[r("div",{staticClass:"inner-block"},[r("img",{attrs:{src:n(289),alt:"Awesome Image"}}),t._v(" "),r("div",{staticClass:"date-block"},[t._v("30 April, 2019")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-info"},[n("a",{attrs:{href:"#"}},[t._v("By Admin")]),t._v(" "),n("span",{staticClass:"sep"},[t._v(".")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2 Comments")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-block"},[r("div",{staticClass:"inner-block"},[r("img",{attrs:{src:n(290),alt:"Awesome Image"}}),t._v(" "),r("div",{staticClass:"date-block"},[t._v("30 April, 2019")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-info"},[n("a",{attrs:{href:"#"}},[t._v("By Admin")]),t._v(" "),n("span",{staticClass:"sep"},[t._v(".")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2 Comments")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-block"},[r("div",{staticClass:"inner-block"},[r("img",{attrs:{src:n(291),alt:"Awesome Image"}}),t._v(" "),r("div",{staticClass:"date-block"},[t._v("30 April, 2019")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-info"},[n("a",{attrs:{href:"#"}},[t._v("By Admin")]),t._v(" "),n("span",{staticClass:"sep"},[t._v(".")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2 Comments")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-post-pagination text-center"},[n("a",{staticClass:"prev",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-arrow-left"})]),n("a",{staticClass:"active",attrs:{href:"#"}},[t._v("01")]),n("a",{attrs:{href:"#"}},[t._v("02")]),n("a",{attrs:{href:"#"}},[t._v("03")]),n("a",{attrs:{href:"#"}},[t._v("04")]),n("a",{attrs:{href:"#"}},[t._v("05")]),n("a",{staticClass:"next",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-arrow-right"})])])}],l=n(43),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog-style-one blog-page",attrs:{id:"blog"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("div",{staticClass:"single-blog-style-one"},[t._m(0),t._v(" "),n("div",{staticClass:"text-block"},[t._m(1),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Pre and post launch mobile app marketing pitfalls to\n                avoid")])],1),t._v(" "),n("p",[t._v("\n              There are many variations of passages of available but majority\n              have alteration in some by inject humour or random words.\n            ")]),t._v(" "),n("div",{staticClass:"line-block"}),t._v(" "),n("nuxt-link",{staticClass:"more-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("div",{staticClass:"single-blog-style-one"},[t._m(2),t._v(" "),n("div",{staticClass:"text-block"},[t._m(3),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Social currency high perfor- mance keywords or")])],1),t._v(" "),n("p",[t._v("\n              There are many variations of passages of available but majority\n              have alteration in some by inject humour or random words.\n            ")]),t._v(" "),n("div",{staticClass:"line-block"}),t._v(" "),n("nuxt-link",{staticClass:"more-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("div",{staticClass:"single-blog-style-one"},[t._m(4),t._v(" "),n("div",{staticClass:"text-block"},[t._m(5),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Prioritize these line items quarterly sales are at\n              ")])],1),t._v(" "),n("p",[t._v("\n              There are many variations of passages of available but majority\n              have alteration in some by inject humour or random words.\n            ")]),t._v(" "),n("div",{staticClass:"line-block"}),t._v(" "),n("nuxt-link",{staticClass:"more-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("div",{staticClass:"single-blog-style-one"},[t._m(6),t._v(" "),n("div",{staticClass:"text-block"},[t._m(7),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Forcing function blue money, nor powerpoint Bunny")])],1),t._v(" "),n("p",[t._v("\n              There are many variations of passages of available but majority\n              have alteration in some by inject humour or random words.\n            ")]),t._v(" "),n("div",{staticClass:"line-block"}),t._v(" "),n("nuxt-link",{staticClass:"more-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("div",{staticClass:"single-blog-style-one"},[t._m(8),t._v(" "),n("div",{staticClass:"text-block"},[t._m(9),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Execute marketing computer development html\n              ")])],1),t._v(" "),n("p",[t._v("\n              There are many variations of passages of available but majority\n              have alteration in some by inject humour or random words.\n            ")]),t._v(" "),n("div",{staticClass:"line-block"}),t._v(" "),n("nuxt-link",{staticClass:"more-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("div",{staticClass:"single-blog-style-one"},[t._m(10),t._v(" "),n("div",{staticClass:"text-block"},[t._m(11),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Onward and upward, productize the deliverables the")])],1),t._v(" "),n("p",[t._v("\n              There are many variations of passages of available but majority\n              have alteration in some by inject humour or random words.\n            ")]),t._v(" "),n("div",{staticClass:"line-block"}),t._v(" "),n("nuxt-link",{staticClass:"more-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])])]),t._v(" "),t._m(12)])])}),r,!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var r=n(43),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeaderInner"),t._v(" "),n("PageHeader",{attrs:{pageName:"Blog",title:"Blog Grid"}}),t._v(" "),n("BlogTwo"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderInner:n(277).default,PageHeader:n(278).default,BlogTwo:n(303).default,Footer:n(250).default})}}]);
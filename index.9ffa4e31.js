!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},n.parcelRequired7c6=s),s.register("iE7OH",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var s={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},i=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var i={};function s(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),i[t]=e),e}})),s("iE7OH").register(JSON.parse('{"9p9yL":"index.9ffa4e31.js","410VS":"icons.47253bc4.svg","9UbSS":"index.923206c1.js"}')),s("ekC86");var a,o=s("bpxeT"),c=s("2TvXO"),u=s("dIxxU"),l=s("6JpON");function p(t){return t.map((function(t){var n=t.burnedCalories,r=t.name,i=t.target,s=t.rating,o=t.bodyPart,c=t.time,u=t._id;return'\n        <li class="exercise-card" >\n          <div class="first-part">\n            <div class="badge">\n              <div class="badge-text">WORKOUT</div>\n            </div>\n            <div class="exercise-card-rating">\n              <p class="rating-text">'.concat(s.toFixed(1),'</p>\n              <svg class="icon-star" width="12" height="12">\n                <use href="').concat(e(a),'#icon-yellow_star"></use>\n              </svg>\n            </div>\n            <button class="start-btn" data-id="').concat(u,'" type="submit">\n              Start\n              <svg class="start-btn-icon" width="16" height="16">\n                <use href="').concat(e(a),'#icon-arrow"></use>\n              </svg>\n            </button>\n          </div>\n          <div class="second-part">\n            <svg class="run-man-icon" width="24" height="24">\n              <use href="').concat(e(a),'#icon-run"></use>\n            </svg>&nbsp;\n            <p class="exercise-name">').concat(r,'</p>\n          </div>\n          <div class="third-part">\n            <p class="text-card">Burned calories: <span class="value-card">').concat(n," / ").concat(c,'</span></p>\n            <p class="text-card">Body part: <span class="value-card">').concat(o,'</span></p>\n            <p class="text-card">Target: <span class="value-card">').concat(i,"</span></p>\n          </div>\n        </li>\n      ")})).join("")}a=s("aNJCr").getBundleURL("9p9yL")+s("iE7OH").resolve("410VS");var f,d={};
/*!
 * TOAST UI Pagination
 * @version 3.4.0
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,f=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,s,a=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),s=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):s(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,s;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,i=n;n>=0&&i<s;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),s=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=s(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),s=n(0),a=n(1),o=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=s({},u,e),this._currentPage=0,this._view=new o(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),s=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(s/2),(n=(e=Math.max(t-r,1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i)):(e=(a-1)*s+1,n=a*s,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),s=n(4),a=n(16),o=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){r(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var r=this;s(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},p.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,r=0;if(o(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},p.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,s=e===r.context,a=i&&s;return a&&n._forgetContext(r.context),a}},p.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):s(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),s=n(21),a=n(22),o=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,i=s(e);o(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!f.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),s=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=s(t,e),o=!1;i(a,(function(t){return t.handler!==n||(o=!0,!1)})),o||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,s){r(e)?i(e.split(/\s+/g),(function(e){a(t,e,n,s)})):i(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),s=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,c=[];o?r(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),s=n(2),a=n(4),o=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],s=0,a=0;return i(e,(function(t,i){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,i)),a=i+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),s=!1,a="";return i(r.exps,(function(t,e){return(s=y(t,n))&&(a=b(r.sourcesInsideIf[e],n)),!s})),a},each:function(t,e,n){var r=y(t,n),a=s(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[a]=r,c["@this"]=t,o(n,c),u+=b(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),s=t[i+1],a=y(t.slice(0,i),n),c={};return c[s]=a,b(e,o(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(s,r)),s=r+n[0].length,n=e.exec(t);return i.push(t.slice(s)),i};function _(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:d.test(t)?r=t.replace(h,""):u.test(t)?r=_((n=t.split(l))[0],e)[_(n[1],e)]:p.test(t)?r=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function x(t,e,n){for(var r,i,s,o,c=v[t],u=1,l=2,p=e[l];u&&a(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,r=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,s=r,(o=e.splice(i+1,s-i)).pop(),o),n),e}function y(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(_(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function b(t,e){for(var n,r,i,s=1,o=t[s];a(o);)r=(n=o.split(" "))[0],v[r]?(i=x(r,t.splice(s,t.length-s),e),t=t.concat(i)):t[s]=y(n,e),o=t[s+=2];return t.join("")}t.exports=function(t,e){return b(m(t,c),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},d=f();var h=document.getElementById("tui-pagination-container"),g=document.querySelector(".list-all-cards"),v=12;function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,r=new(e(d))(h,{totalItems:t*v,itemsPerPage:v,visiblePages:3,page:n});"cards"===g.dataset.page?r.on("afterMove",(function(t){var e=t.page;k(document.querySelector(".current").dataset.filter,e)})):r.on("afterMove",(function(t){var e=t.page;F(g.dataset.query,g.dataset.filter,e)}))}window.innerWidth<768&&(v=9);var _,x,y,b=s("4sJSP"),P=(b=s("4sJSP"),document.querySelector(".list-all-cards")),E=document.querySelectorAll(".nav-exercise-btn"),w=document.querySelector(".form-search-input"),C=document.querySelector(".exercises-title"),M=document.querySelector(".tui-pagination"),B=document.querySelector(".search-input"),L="",I="Body parts",N=12;function T(t){C.innerHTML='Exercises<span class="exercise-title-span"></span>',P.innerHTML="",w.style.display="none";var e=document.querySelector(".current"),n=t.currentTarget;e.classList.remove("current"),n.classList.add("current"),k(n.dataset.filter),W()}function O(t,e){return S.apply(this,arguments)}function S(){return S=e(o)(e(c).mark((function t(n,r){var i,s,a,o,p=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=p.length>2&&void 0!==p[2]?p[2]:1,t.prev=1,s="https://your-energy.b.goit.study/api/filters?filter=".concat(n,"&page=").concat(i,"&limit=").concat(r),t.next=5,u.default.get(s);case 5:return a=t.sent,t.next=8,a.data;case 8:return o=t.sent,t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0),l.Notify.failure("ERROR !!!");case 16:case"end":return t.stop()}}),t,null,[[1,12]])}))),S.apply(this,arguments)}function k(t){return H.apply(this,arguments)}function H(){return H=e(o)(e(c).mark((function t(n){var r,i,s,a,o=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,P.dataset.page="cards",M.style.display="none",I=n.split("%20").join(" "),L="",t.next=7,O(n,N,r);case 7:i=t.sent,s=i.results,m(a=i.totalPages,r),1!==a&&(M.style.display="flex"),s.forEach((function(t){return L+='<li class="ex-card-item" data-query="'.concat(t.name,'" data-filter="').concat(I,'">\n                <img class="ex-card-img" src="').concat(t.imgURL,'" alt="').concat(t.name,' card exercises" loading="lazy">\n                <div class="ex-card-text-container">\n                    <h2 class="ex-card-title">').concat(t.name,'</h2>\n                    <p class="ex-card-filter">').concat(I,"</p>\n                </div>\n            </li>")})),P.innerHTML=L;case 14:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}window.innerWidth<768&&(N=9),E.forEach((function(t){return t.addEventListener("click",T)})),k("Body%20parts");var A=0,j=10;function q(){return(q=e(o)(e(c).mark((function t(n){var r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.target.parentNode.classList.contains("ex-card-item")){t.next=2;break}return t.abrupt("return");case 2:r=n.target.closest(".ex-card-item"),_=r.dataset.query,x=r.dataset.filter,P.dataset.query=_,P.dataset.filter=x;try{F(_,x)}catch(t){console.log(t)}case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t,e){return R.apply(this,arguments)}function R(){return R=e(o)(e(c).mark((function t(n,r){var i,s,a,o=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.length>2&&void 0!==o[2]?o[2]:1,M.style.display="none",P.dataset.page="exercises","Body parts"===r&&(r="bodypart"),t.next=6,D(r,n,i);case 6:s=t.sent,a=s.totalPages,A=i,m(a,i),1!==a&&(M.style.display="flex"),w.style.display="block",C.innerHTML='Exercises /<span class="exercise-section-title-span">'.concat(n,"</span>"),P.innerHTML=p(s.results),W();case 15:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function D(t,e,n){return z.apply(this,arguments)}function z(){return(z=e(o)(e(c).mark((function t(n,r,i){var s;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.default.get("https://your-energy.b.goit.study/api/exercises?".concat(n.toLowerCase(),"=").concat(r,"&page=").concat(i,"&limit=").concat(j));case 3:return s=t.sent,t.abrupt("return",s.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function U(){l.Notify.failure("Nothing was found for your request",{position:"right-top",timeout:3e3,fontSize:"18px",borderRadius:"40px"})}function V(t){return J.apply(this,arguments)}function J(){return(J=e(o)(e(c).mark((function t(n){var r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""!==n.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,u.default.get("https://your-energy.b.goit.study/api/exercises?".concat(x.toLowerCase(),"=").concat(_,"&keyword=").concat(n,"&page=").concat(A,"&limit=").concat(j));case 5:return r=t.sent,t.abrupt("return",r.data);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function $(){return($=e(o)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,r=n.currentTarget.elements.filter.value,"Body parts"===x&&(x="bodypart"),t.next=6,V(r);case 6:if(i=t.sent,M.style.display="none",B.value="",0!==i.results.length){t.next=11;break}throw new Error;case 11:P.innerHTML=p(i.results),W(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),U();case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}function W(){document.querySelectorAll(".start-btn").forEach((function(t){t.addEventListener("click",(function(e){y=t.dataset.id,(0,b.makeDetailsCard)(y).then(b.renderCard).catch((function(t){return console.log(t)}))}))}))}window.innerWidth<768&&(j=8),P.addEventListener("click",(function(t){return q.apply(this,arguments)})),w.addEventListener("submit",(function(t){return $.apply(this,arguments)})),s("4sJSP"),s("lxY1m"),s("8DOUy")}();
//# sourceMappingURL=index.9ffa4e31.js.map
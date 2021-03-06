(function ($, undefined) {

    /*!
     * imagesLoaded PACKAGED v3.1.6
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */

    (function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.йгnotify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

    /*!
     * Masonry PACKAGED v3.1.5
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */

    !function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c(a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(this),function(a){function b(a){"function"==typeof a&&(b.isReady?a():f.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==e.readyState;if(!b.isReady&&!c){b.isReady=!0;for(var d=0,g=f.length;g>d;d++){var h=f[d];h()}}}function d(d){return d.bind(e,"DOMContentLoaded",c),d.bind(e,"readystatechange",c),d.bind(a,"load",c),b}var e=a.document,f=[];b.isReady=!1,"function"==typeof define&&define.amd?(b.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],d)):a.docReady=d(a.eventie)}(this),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var e={};e.width=a.offsetWidth,e.height=a.offsetHeight;for(var k=e.isBorderBox=!(!j||!d[j]||"border-box"!==d[j]),l=0,m=g.length;m>l;l++){var n=g[l],o=d[n];o=h(a,o);var p=parseFloat(o);e[n]=isNaN(p)?0:p}var q=e.paddingLeft+e.paddingRight,r=e.paddingTop+e.paddingBottom,s=e.marginLeft+e.marginRight,t=e.marginTop+e.marginBottom,u=e.borderLeftWidth+e.borderRightWidth,v=e.borderTopWidth+e.borderBottomWidth,w=k&&i,x=b(d.width);x!==!1&&(e.width=x+(w?0:q+u));var y=b(d.height);return y!==!1&&(e.height=y+(w?0:r+v)),e.innerWidth=e.width-(q+u),e.innerHeight=e.height-(r+v),e.outerWidth=e.width+s,e.outerHeight=e.height+t,e}}function h(a,b){if(e||-1===b.indexOf("%"))return b;var c=a.style,d=c.left,f=a.runtimeStyle,g=f&&f.left;return g&&(f.left=a.currentStyle.left),c.left=b,b=c.pixelLeft,c.left=d,g&&(f.left=g),b}var i,j=a("boxSizing");return function(){if(j){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[j]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);i=200===b(d.width),c.removeChild(a)}}(),d}var e=a.getComputedStyle,f=e?function(a){return e(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],d):"object"==typeof exports?module.exports=d(require("get-style-property")):a.getSize=d(a.getStyleProperty)}(window),function(a,b){function c(a,b){return a[h](b)}function d(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function e(a,b){d(a);for(var c=a.parentNode.querySelectorAll(b),e=0,f=c.length;f>e;e++)if(c[e]===a)return!0;return!1}function f(a,b){return d(a),c(a,b)}var g,h=function(){if(b.matchesSelector)return"matchesSelector";for(var a=["webkit","moz","ms","o"],c=0,d=a.length;d>c;c++){var e=a[c],f=e+"MatchesSelector";if(b[f])return f}}();if(h){var i=document.createElement("div"),j=c(i,"div");g=j?c:f}else g=e;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return g}):window.matchesSelector=g}(this,Element.prototype),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){for(var b in a)return!1;return b=null,!0}function d(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function e(a,e,f){function h(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}var i=f("transition"),j=f("transform"),k=i&&j,l=!!f("perspective"),m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[i],n=["transform","transition","transitionDuration","transitionProperty"],o=function(){for(var a={},b=0,c=n.length;c>b;b++){var d=n[b],e=f(d);e&&e!==d&&(a[d]=e)}return a}();b(h.prototype,a.prototype),h.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},h.prototype.getSize=function(){this.size=e(this.element)},h.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=o[c]||c;b[d]=a[c]}},h.prototype.getPosition=function(){var a=g(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=parseInt(a[c?"left":"right"],10),f=parseInt(a[d?"top":"bottom"],10);e=isNaN(e)?0:e,f=isNaN(f)?0:f;var h=this.layout.size;e-=c?h.paddingLeft:h.paddingRight,f-=d?h.paddingTop:h.paddingBottom,this.position.x=e,this.position.y=f},h.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={};b.isOriginLeft?(c.left=this.position.x+a.paddingLeft+"px",c.right=""):(c.right=this.position.x+a.paddingRight+"px",c.left=""),b.isOriginTop?(c.top=this.position.y+a.paddingTop+"px",c.bottom=""):(c.bottom=this.position.y+a.paddingBottom+"px",c.top=""),this.css(c),this.emitEvent("layout",[this])};var p=l?function(a,b){return"translate3d("+a+"px, "+b+"px, 0)"}:function(a,b){return"translate("+a+"px, "+b+"px)"};h.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={},k=this.layout.options;h=k.isOriginLeft?h:-h,i=k.isOriginTop?i:-i,j.transform=p(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},h.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},h.prototype.moveTo=k?h.prototype._transitionTo:h.prototype.goTo,h.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},h.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},h.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var q=j&&d(j)+",opacity";h.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:q,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(m,this,!1))},h.prototype.transition=h.prototype[i?"_transition":"_nonTransition"],h.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},h.prototype.onotransitionend=function(a){this.ontransitionend(a)};var r={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};h.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,d=r[a.propertyName]||a.propertyName;if(delete b.ingProperties[d],c(b.ingProperties)&&this.disableTransition(),d in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[d]),d in b.onEnd){var e=b.onEnd[d];e.call(this),delete b.onEnd[d]}this.emitEvent("transitionEnd",[this])}},h.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(m,this,!1),this.isTransitioning=!1},h.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var s={transitionProperty:"",transitionDuration:""};return h.prototype.removeTransitionStyles=function(){this.css(s)},h.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},h.prototype.remove=function(){if(!i||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.on("transitionEnd",function(){return a.removeElem(),!0}),this.hide()},h.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options;this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0})},h.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options;this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},h.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h}var f=a.getComputedStyle,g=f?function(a){return f(a,null)}:function(a){return a.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],e):(a.Outlayer={},a.Outlayer.Item=e(a.EventEmitter,a.getSize,a.getStyleProperty))}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===l.call(a)}function d(a){var b=[];if(c(a))b=a;else if(a&&"number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,b){var c=n(b,a);-1!==c&&b.splice(c,1)}function f(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()}function g(c,g,l,n,o,p){function q(a,c){if("string"==typeof a&&(a=h.querySelector(a)),!a||!m(a))return void(i&&i.error("Bad "+this.constructor.namespace+" element: "+a));this.element=a,this.options=b({},this.constructor.defaults),this.option(c);var d=++r;this.element.outlayerGUID=d,s[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var r=0,s={};return q.namespace="outlayer",q.Item=p,q.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},b(q.prototype,l.prototype),q.prototype.option=function(a){b(this.options,a)},q.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},q.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},q.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},q.prototype._filterFindItemElements=function(a){a=d(a);for(var b=this.options.itemSelector,c=[],e=0,f=a.length;f>e;e++){var g=a[e];if(m(g))if(b){o(g,b)&&c.push(g);for(var h=g.querySelectorAll(b),i=0,j=h.length;j>i;i++)c.push(h[i])}else c.push(g)}return c},q.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},q.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},q.prototype._init=q.prototype.layout,q.prototype._resetLayout=function(){this.getSize()},q.prototype.getSize=function(){this.size=n(this.element)},q.prototype._getMeasurement=function(a,b){var c,d=this.options[a];d?("string"==typeof d?c=this.element.querySelector(d):m(d)&&(c=d),this[a]=c?n(c)[b]:d):this[a]=0},q.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},q.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},q.prototype._layoutItems=function(a,b){function c(){d.emitEvent("layoutComplete",[d,a])}var d=this;if(!a||!a.length)return void c();this._itemsOn(a,"layout",c);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f],i=this._getItemLayoutPosition(h);i.item=h,i.isInstant=b||h.isLayoutInstant,e.push(i)}this._processLayoutQueue(e)},q.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},q.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},q.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},q.prototype._postLayout=function(){this.resizeContainer()},q.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},q.prototype._getContainerSize=k,q.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},q.prototype._itemsOn=function(a,b,c){function d(){return e++,e===f&&c.call(g),!0}for(var e=0,f=a.length,g=this,h=0,i=a.length;i>h;h++){var j=a[h];j.on(b,d)}},q.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},q.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},q.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},q.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e(d,this.stamps),this.unignore(d)}},q.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=d(a)):void 0},q.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},q.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},q.prototype._manageStamp=k,q.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,d=n(a),e={left:b.left-c.left-d.marginLeft,top:b.top-c.top-d.marginTop,right:c.right-b.right-d.marginRight,bottom:c.bottom-b.bottom-d.marginBottom};return e},q.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},q.prototype.bindResize=function(){this.isResizeBound||(c.bind(a,"resize",this),this.isResizeBound=!0)},q.prototype.unbindResize=function(){this.isResizeBound&&c.unbind(a,"resize",this),this.isResizeBound=!1},q.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},q.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},q.prototype.needsResizeLayout=function(){var a=n(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},q.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},q.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},q.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},q.prototype.reveal=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.reveal()}},q.prototype.hide=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.hide()}},q.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},q.prototype.getItems=function(a){if(a&&a.length){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c],f=this.getItem(e);f&&b.push(f)}return b}},q.prototype.remove=function(a){a=d(a);var b=this.getItems(a);if(b&&b.length){this._itemsOn(b,"remove",function(){this.emitEvent("removeComplete",[this,b])});for(var c=0,f=b.length;f>c;c++){var g=b[c];g.remove(),e(g,this.items)}}},q.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize(),delete this.element.outlayerGUID,j&&j.removeData(this.element,this.constructor.namespace)},q.data=function(a){var b=a&&a.outlayerGUID;return b&&s[b]},q.create=function(a,c){function d(){q.apply(this,arguments)}return Object.create?d.prototype=Object.create(q.prototype):b(d.prototype,q.prototype),d.prototype.constructor=d,d.defaults=b({},q.defaults),b(d.defaults,c),d.prototype.settings={},d.namespace=a,d.data=q.data,d.Item=function(){p.apply(this,arguments)},d.Item.prototype=new p,g(function(){for(var b=f(a),c=h.querySelectorAll(".js-"+b),e="data-"+b+"-options",g=0,k=c.length;k>g;g++){var l,m=c[g],n=m.getAttribute(e);try{l=n&&JSON.parse(n)}catch(o){i&&i.error("Error parsing "+e+" on "+m.nodeName.toLowerCase()+(m.id?"#"+m.id:"")+": "+o);continue}var p=new d(m,l);j&&j.data(m,a,p)}}),j&&j.bridget&&j.bridget(a,d),d},q.Item=p,q}var h=a.document,i=a.console,j=a.jQuery,k=function(){},l=Object.prototype.toString,m="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},n=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],g):a.Outlayer=g(a.eventie,a.docReady,a.EventEmitter,a.getSize,a.matchesSelector,a.Outlayer.Item)}(window),function(a){function b(a,b){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}var c=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(e===b)return c}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):a.Masonry=b(a.Outlayer,a.getSize)}(window);

    /*!
     jQuery wookmark plugin
     @name jquery.wookmark.js
     @author Christoph Ono (chri@sto.ph or @gbks)
     @author Sebastian Helzle (sebastian@helzle.net or @sebobo)
     @version 1.4.7
     @date 05/18/2014
     @category jQuery plugin
     @copyright (c) 2009-2014 Christoph Ono (www.wookmark.com)
     @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
     */
    (function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function i(t){n(function(){var i,e;for(i=0;t.length>i;i++)e=t[i],e.obj.css(e.css)})}function e(i){return t.trim(i).toLowerCase()}var s,h,o;o=function(t,i){return function(){return t.apply(i,arguments)}},h={align:"center",autoResize:!1,comparator:null,container:t("body"),direction:void 0,ignoreInactiveItems:!0,itemWidth:0,fillEmptySpace:!1,flexibleWidth:0,offset:2,outerOffset:0,onLayoutChanged:void 0,possibleFilters:[],resizeDelay:50,verticalOffset:void 0};var n=window.requestAnimationFrame||function(t){t()},r=t(window);s=function(){function s(i,e){this.handler=i,this.columns=this.containerWidth=this.resizeTimer=null,this.activeItemCount=0,this.itemHeightsDirty=!0,this.placeholders=[],t.extend(!0,this,h,e),this.verticalOffset=this.verticalOffset||this.offset,this.update=o(this.update,this),this.onResize=o(this.onResize,this),this.onRefresh=o(this.onRefresh,this),this.getItemWidth=o(this.getItemWidth,this),this.layout=o(this.layout,this),this.layoutFull=o(this.layoutFull,this),this.layoutColumns=o(this.layoutColumns,this),this.filter=o(this.filter,this),this.clear=o(this.clear,this),this.getActiveItems=o(this.getActiveItems,this),this.refreshPlaceholders=o(this.refreshPlaceholders,this),this.sortElements=o(this.sortElements,this),this.updateFilterClasses=o(this.updateFilterClasses,this),this.updateFilterClasses(),this.autoResize&&r.bind("resize.wookmark",this.onResize),this.container.bind("refreshWookmark",this.onRefresh)}return s.prototype.updateFilterClasses=function(){for(var t,i,s,h,o=0,n=0,r=0,a={},l=this.possibleFilters;this.handler.length>o;o++)if(i=this.handler.eq(o),t=i.data("filterClass"),"object"==typeof t&&t.length>0)for(n=0;t.length>n;n++)s=e(t[n]),a[s]===void 0&&(a[s]=[]),a[s].push(i[0]);for(;l.length>r;r++)h=e(l[r]),h in a||(a[h]=[]);this.filterClasses=a},s.prototype.update=function(i){this.itemHeightsDirty=!0,t.extend(!0,this,i)},s.prototype.onResize=function(){clearTimeout(this.resizeTimer),this.itemHeightsDirty=0!==this.flexibleWidth,this.resizeTimer=setTimeout(this.layout,this.resizeDelay)},s.prototype.onRefresh=function(){this.itemHeightsDirty=!0,this.layout()},s.prototype.filter=function(i,s,h){var o,n,r,a,l,f=[],u=t();if(i=i||[],s=s||"or",h=h||!1,i.length){for(n=0;i.length>n;n++)l=e(i[n]),l in this.filterClasses&&f.push(this.filterClasses[l]);if(o=f.length,"or"==s||1==o)for(n=0;o>n;n++)u=u.add(f[n]);else if("and"==s){var c,d,m,p=f[0],g=!0;for(n=1;o>n;n++)f[n].length<p.length&&(p=f[n]);for(p=p||[],n=0;p.length>n;n++){for(d=p[n],g=!0,r=0;f.length>r&&g;r++)if(m=f[r],p!=m){for(a=0,c=!1;m.length>a&&!c;a++)c=m[a]==d;g&=c}g&&u.push(p[n])}}h||this.handler.not(u).addClass("inactive")}else u=this.handler;return h||(u.removeClass("inactive"),this.columns=null,this.layout()),u},s.prototype.refreshPlaceholders=function(i,e){for(var s,h,o,n,r,a,l=this.placeholders.length,f=this.columns.length,u=this.container.innerHeight();f>l;l++)s=t('<div class="wookmark-placeholder"/>').appendTo(this.container),this.placeholders.push(s);for(a=this.offset+2*parseInt(this.placeholders[0].css("borderLeftWidth"),10),l=0;this.placeholders.length>l;l++)if(s=this.placeholders[l],o=this.columns[l],l>=f||!o[o.length-1])s.css("display","none");else{if(h=o[o.length-1],!h)continue;r=h.data("wookmark-top")+h.data("wookmark-height")+this.verticalOffset,n=u-r-a,s.css({position:"absolute",display:n>0?"block":"none",left:l*i+e,top:r,width:i-a,height:n})}},s.prototype.getActiveItems=function(){return this.ignoreInactiveItems?this.handler.not(".inactive"):this.handler},s.prototype.getItemWidth=function(){var t=this.itemWidth,i=this.container.width()-2*this.outerOffset,e=this.handler.eq(0),s=this.flexibleWidth;if(void 0===this.itemWidth||0===this.itemWidth&&!this.flexibleWidth?t=e.outerWidth():"string"==typeof this.itemWidth&&this.itemWidth.indexOf("%")>=0&&(t=parseFloat(this.itemWidth)/100*i),s){"string"==typeof s&&s.indexOf("%")>=0&&(s=parseFloat(s)/100*i);var h=i+this.offset,o=~~(.5+h/(s+this.offset)),n=~~(h/(t+this.offset)),r=Math.max(o,n),a=Math.min(s,~~((i-(r-1)*this.offset)/r));t=Math.max(t,a),this.handler.css("width",t)}return t},s.prototype.layout=function(t){if(this.container.is(":visible")){var i,e=this.getItemWidth()+this.offset,s=this.container.width(),h=s-2*this.outerOffset,o=~~((h+this.offset)/e),n=0,r=0,a=0,l=this.getActiveItems(),f=l.length;if(this.itemHeightsDirty||!this.container.data("itemHeightsInitialized")){for(;f>a;a++)i=l.eq(a),i.data("wookmark-height",i.outerHeight());this.itemHeightsDirty=!1,this.container.data("itemHeightsInitialized",!0)}o=Math.max(1,Math.min(o,f)),n=this.outerOffset,"center"==this.align&&(n+=~~(.5+(h-(o*e-this.offset))>>1)),this.direction=this.direction||("right"==this.align?"right":"left"),r=t||null===this.columns||this.columns.length!=o||this.activeItemCount!=f?this.layoutFull(e,o,n):this.layoutColumns(e,n),this.activeItemCount=f,this.container.css("height",r),this.fillEmptySpace&&this.refreshPlaceholders(e,n),void 0!==this.onLayoutChanged&&"function"==typeof this.onLayoutChanged&&this.onLayoutChanged()}},s.prototype.sortElements=function(t){return"function"==typeof this.comparator?t.sort(this.comparator):t},s.prototype.layoutFull=function(e,s,h){var o,n,r=0,a=0,l=t.makeArray(this.getActiveItems()),f=l.length,u=null,c=null,d=[],m=[],p="left"==this.align?!0:!1;for(this.columns=[],l=this.sortElements(l);s>d.length;)d.push(this.outerOffset),this.columns.push([]);for(;f>r;r++){for(o=t(l[r]),u=d[0],c=0,a=0;s>a;a++)u>d[a]&&(u=d[a],c=a);o.data("wookmark-top",u),n=h,(c>0||!p)&&(n+=c*e),(m[r]={obj:o,css:{position:"absolute",top:u}}).css[this.direction]=n,d[c]+=o.data("wookmark-height")+this.verticalOffset,this.columns[c].push(o)}return i(m),Math.max.apply(Math,d)},s.prototype.layoutColumns=function(t,e){for(var s,h,o,n,r=[],a=[],l=0,f=0,u=0;this.columns.length>l;l++){for(r.push(this.outerOffset),h=this.columns[l],n=l*t+e,s=r[l],f=0;h.length>f;f++,u++)o=h[f].data("wookmark-top",s),(a[u]={obj:o,css:{top:s}}).css[this.direction]=n,s+=o.data("wookmark-height")+this.verticalOffset;r[l]=s}return i(a),Math.max.apply(Math,r)},s.prototype.clear=function(){clearTimeout(this.resizeTimer),r.unbind("resize.wookmark",this.onResize),this.container.unbind("refreshWookmark",this.onRefresh),this.handler.wookmarkInstance=null},s}(),t.fn.wookmark=function(t){return this.wookmarkInstance?this.wookmarkInstance.update(t||{}):this.wookmarkInstance=new s(this,t||{}),this.wookmarkInstance.layout(!0),this.show()}});

    /*

     Quicksand 1.4

     Reorder and filter items with a nice shuffling animation.

     Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
     Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

     Dual licensed under the MIT and GPL version 2 licenses.
     http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
     http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

     Project site: http://razorjack.net/quicksand
     Github site: http://github.com/razorjack/quicksand

     */

    (function(e){var t=function(e){var t=e.clone();var n=e.find("canvas");if(n.length){var r=t.find("canvas");r.each(function(e){var t=this.getContext("2d");t.drawImage(n.get(e),0,0)})}return t};e.fn.quicksand=function(n,r){var i={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",adjustWidth:"auto",useScaling:false,enhancement:function(e){},selector:"> *",atomic:false,dx:0,dy:0,maxWidth:0,retainExisting:true},s=function(){var e="transform WebkitTransform MozTransform OTransform msTransform".split(" "),t=document.createElement("div");for(var n=0;n<e.length;n++){if(typeof t.style[e[n]]!="undefined"){return true}}return false}();e.extend(i,r);if(!s||typeof e.fn.scale=="undefined"){i.useScaling=false}var o;if(typeof arguments[1]=="function"){o=arguments[1]}else if(typeof (arguments[2]=="function")){o=arguments[2]}return this.each(function(r){var s;var u=[];var a;if(typeof i.attribute=="function"){a=e(n)}else{a=t(e(n).filter("["+i.attribute+"]"))}var f=e(this);var l=e(this).css("height");var c=e(this).css("width");var h,p;var d=false;var v=false;var m=e(f).offset();var g=[];var y=e(this).find(i.selector);var b=e(y).innerWidth();if(navigator.userAgent.match(/msie [6]/i)){f.html("").append(a);return}var w=0;var E=function(){e(this).css("margin","").css("position","").css("top","").css("left","").css("opacity","");if(!w){w=1;if(!i.atomic){var t=f.find(i.selector);if(!i.retainExisting){f.prepend(C.find(i.selector));t.remove()}else{var n=e([]);C.find(i.selector).each(function(r){var s=e([]);if(typeof i.attribute=="function"){var o=i.attribute(e(this));t.each(function(){if(i.attribute(this)==o){s=e(this);return false}})}else{s=t.filter("["+i.attribute+'="'+e(this).attr(i.attribute)+'"]')}if(s.length>0){n=n.add(s);if(r===0){f.prepend(s)}else{s.insertAfter(f.find(i.selector).get(r-1))}}});t.not(n).remove()}if(d){f.css("height",h)}if(v){f.css("width",c)}}i.enhancement(f);if(typeof o=="function"){o.call(this)}}if(false===i.adjustHeight){f.css("height","auto")}if(false===i.adjustWidth){f.css("width","auto")}};var S=f.offsetParent();var x=S.offset();if(S.css("position")=="relative"){if(S.get(0).nodeName.toLowerCase()!="body"){x.top+=parseFloat(S.css("border-top-width"))||0;x.left+=parseFloat(S.css("border-left-width"))||0}}else{x.top-=parseFloat(S.css("border-top-width"))||0;x.left-=parseFloat(S.css("border-left-width"))||0;x.top-=parseFloat(S.css("margin-top"))||0;x.left-=parseFloat(S.css("margin-left"))||0}if(isNaN(x.left)){x.left=0}if(isNaN(x.top)){x.top=0}x.left-=i.dx;x.top-=i.dy;f.css("height",e(this).height());f.css("width",e(this).width());y.each(function(t){g[t]=e(this).offset()});e(this).stop();var T=0;var N=0;y.each(function(t){e(this).stop();var n=e(this).get(0);if(n.style.position=="absolute"){T=-i.dx;N=-i.dy}else{T=i.dx;N=i.dy}n.style.position="absolute";n.style.margin="0";if(!i.adjustWidth){n.style.width=b+"px"}n.style.top=g[t].top-parseFloat(n.style.marginTop)-x.top+N+"px";n.style.left=g[t].left-parseFloat(n.style.marginLeft)-x.left+T+"px";if(i.maxWidth>0&&g[t].left>i.maxWidth){n.style.display="none"}});var C=t(e(f));var k=C.get(0);k.innerHTML="";k.setAttribute("id","");k.style.height="auto";k.style.width=f.width()+"px";C.append(a);C.insertBefore(f);C.css("opacity",0);k.style.zIndex=-1;k.style.margin="0";k.style.position="absolute";k.style.top=m.top-x.top+"px";k.style.left=m.left-x.left+"px";if(i.adjustHeight==="dynamic"){f.animate({height:C.height()},i.duration,i.easing)}else if(i.adjustHeight==="auto"){h=C.height();if(parseFloat(l)<parseFloat(h)){f.css("height",h)}else{d=true}}if(i.adjustWidth==="dynamic"){f.animate({width:C.width()},i.duration,i.easing)}else if(i.adjustWidth==="auto"){p=C.width();if(parseFloat(c)<parseFloat(p)){f.css("width",p)}else{v=true}}y.each(function(t){var n=[];if(typeof i.attribute=="function"){s=i.attribute(e(this));a.each(function(){if(i.attribute(this)==s){n=e(this);return false}})}else{n=a.filter("["+i.attribute+'="'+e(this).attr(i.attribute)+'"]')}if(n.length){if(!i.useScaling){u.push({element:e(this),dest:n,style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},animation:{top:n.offset().top-x.top,left:n.offset().left-x.left,opacity:1}})}else{u.push({element:e(this),dest:n,style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},animation:{top:n.offset().top-x.top,left:n.offset().left-x.left,opacity:1,scale:"1.0"}})}}else{if(!i.useScaling){u.push({element:e(this),style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},animation:{opacity:"0.0"}})}else{u.push({element:e(this),animation:{opacity:"0.0",style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},scale:"0.0"}})}}});a.each(function(n){var r=[];var o=[];if(typeof i.attribute=="function"){s=i.attribute(e(this));y.each(function(){if(i.attribute(this)==s){r=e(this);return false}});a.each(function(){if(i.attribute(this)==s){o=e(this);return false}})}else{r=y.filter("["+i.attribute+'="'+e(this).attr(i.attribute)+'"]');o=a.filter("["+i.attribute+'="'+e(this).attr(i.attribute)+'"]')}var l;if(r.length===0&&o.length>0){if(!i.useScaling){l={opacity:"1.0"}}else{l={opacity:"1.0",scale:"1.0"}}var c=t(o);var h=c.get(0);h.style.position="absolute";h.style.margin="0";if(!i.adjustWidth){h.style.width=b+"px"}h.style.top=o.offset().top-x.top+"px";h.style.left=o.offset().left-x.left+"px";c.css("opacity",0);if(i.useScaling){c.scale(0)}c.appendTo(f);if(i.maxWidth===0||o.offset().left<i.maxWidth){u.push({element:e(c),dest:o,animation:l})}}});C.remove();if(!i.atomic){i.enhancement(f);for(r=0;r<u.length;r++){u[r].element.animate(u[r].animation,i.duration,i.easing,E)}}else{$toDelete=f.find(i.selector);f.prepend(C.find(i.selector));for(r=0;r<u.length;r++){if(u[r].dest&&u[r].style){var L=u[r].dest;var A=L.offset();L.css({position:"relative",top:u[r].style.top-A.top,left:u[r].style.left-A.left});L.animate({top:"0",left:"0"},i.duration,i.easing,E)}else{u[r].element.animate(u[r].animation,i.duration,i.easing,E)}}$toDelete.remove()}})}})(jQuery)


    /*
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     *
     * Uses the built in easing capabilities added In jQuery 1.1
     * to offer multiple easing options
     *
     * TERMS OF USE - jQuery Easing
     *
     * Open source under the BSD License.
     *
     * Copyright © 2008 George McGinley Smith
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */

// t: current time, b: begInnIng value, c: change In value, d: duration

    jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})

    /*
     *
     * TERMS OF USE - EASING EQUATIONS
     *
     * Open source under the BSD License.
     *
     * Copyright © 2001 Robert Penner
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */

    // jQuery flexImages v1.0.1
    // https://github.com/Pixabay/jQuery-flexImages
    !function(t){function e(t,a,n,r){function o(t){n.maxRows&&w>n.maxRows||n.truncate&&t?d[c][0].hide():(d[c][5]&&(d[c][4].attr("src",d[c][5]),d[c][5]=""),d[c][0].css({width:s,height:x}).show())}var c,s,f=1,w=1,g=t.width(),d=[],u=0,x=n.rowHeight;for(i=0;i<a.length;i++)if(d.push(a[i]),u+=a[i][3]+n.margin,u>=g){for(f=g/u,x=Math.ceil(n.rowHeight*f),exact_w=0,s,c=0;c<d.length;c++)s=Math.ceil(d[c][3]*f),exact_w+=s+n.margin,exact_w>g&&(s-=exact_w-g+1),o();d=[],u=0,w++}for(c=0;c<d.length;c++)s=Math.floor(d[c][3]*f),h=Math.floor(n.rowHeight*f),o(!0);r||g==t.width()||e(t,a,n,!0)}t.fn.flexImages=function(i){var a=t.extend({container:".item",object:"img",rowHeight:180,maxRows:0,truncate:!1},i);return this.each(function(){var i=t(this),n=t(a.container,i),h=[],r=n.eq(0),o=(new Date).getTime();a.margin=r.outerWidth(!0)-r.innerWidth(),n.each(function(){var e=parseInt(t(this).data("w")),i=parseInt(t(this).data("h")),n=e*(a.rowHeight/i),r=t(this).find(a.object);h.push([t(this),e,i,n,r,r.data("src")])}),e(i,h,a),t(window).off("resize.flexImages"+i.data("flex-t")),t(window).on("resize.flexImages"+o,function(){e(i,h,a)}),i.data("flex-t",o)})}}(jQuery);

    /** ==========================================================

     * jquery lightSlider.js v1.1.1
     * http://sachinchoolur.github.io/lightslider/
     * Released under the MIT License - http://opensource.org/licenses/mit-license.html  ---- FREE ----

     =========================================================/**/
    ;
    (function ($, undefined) {
        "use strict";
        var defaults = {
            item: 3,
            autoWidth: false,
            slideMove: 1,
            slideMargin: 10,
            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',//
            speed: 400, //ms'
            auto: false,
            loop: false,
            slideEndAnimatoin: true,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl: false,
            adaptiveHeight: false,
            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,
            responsive: [],
            onBeforeStart: function ($el) {},
            onSliderLoad: function ($el) {},
            onBeforeSlide: function ($el, scene) {},
            onAfterSlide: function ($el, scene) {},
            onBeforeNextSlide: function ($el, scene) {},
            onBeforePrevSlide: function ($el, scene) {}
        };
        $.fn.lightSlider = function (options) {
            if (this.length === 0) {
                return this;
            }

            if (this.length > 1) {
                this.each(function () {
                    $(this).lightSlider(options);
                });
                return this;
            }

            var plugin = {},
                settings = $.extend(true, {}, defaults, options),
                settingsTemp = {},
                $el = this;
            plugin.$el = this;

            if (settings.mode === 'fade') {
                settings.vertical = false;
            }
            var $children = $el.children(),
                windowW = $(window).width(),
                breakpoint = null,
                resposiveObj = null,
                length = 0,
                w = 0,
                on = false,
                elSize = 0,
                $slide = '',
                scene = 0,
                property = (settings.vertical === true) ? "height" : "width",
                gutter = (settings.vertical === true) ? "margin-bottom" : "margin-right",
                slideValue = 0,
                pagerWidth = 0,
                slideWidth = 0,
                thumbWidth = 0,
                interval = null,
                isTouch = ('ontouchstart' in document.documentElement);
            var refresh = new Object();

            refresh.chbreakpoint = function () {
                windowW = $(window).width();
                if (settings.responsive.length) {
                    if (settings.autoWidth === false) {
                        var item = settings.item;
                    }
                    if (windowW < settings.responsive[0].breakpoint) {
                        for (var i = 0; i < settings.responsive.length; i++) {
                            if (windowW < settings.responsive[i].breakpoint) {
                                breakpoint = settings.responsive[i].breakpoint;
                                resposiveObj = settings.responsive[i];
                            }
                        }
                    }
                    if (typeof resposiveObj !== "undefined" && resposiveObj != null) {
                        for (i in resposiveObj.settings) {
                            if (typeof settingsTemp[i] == "undefined" || settingsTemp[i] == null) {
                                settingsTemp[i] = settings[i];
                            }
                            settings[i] = resposiveObj.settings[i];
                        }
                    }
                    if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                        for (i in settingsTemp) {
                            settings[i] = settingsTemp[i];
                        }
                    }
                    if (settings.autoWidth === false) {
                        if (slideValue > 0 && slideWidth > 0) {
                            if (item !== settings.item) {
                                scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                            }
                        }
                    }
                }
            };

            refresh.calSW = function () {
                if (settings.autoWidth === false) {
                    slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
                }
            };

            refresh.calWidth = function (cln) {
                var ln = cln === true ? $slide.find('.lslide').length : $children.length;
                if (settings.autoWidth === false) {
                    w = ln * (slideWidth + settings.slideMargin);
                } else {
                    w = 0;
                    for (var i = 0; i < ln; i++) {
                        w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                if (w % 1 !== 0) {
                    w = w + 1;
                }
                return w;
            };
            plugin = {
                doCss: function () {
                    var support = function () {
                        var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                        var root = document.documentElement;
                        for (var i = 0; i < transition.length; i++) {
                            if (transition[i] in root.style) {
                                return true;
                            }
                        }
                    };
                    if (settings.useCSS && support()) {
                        return true;
                    }
                    return false;
                },
                keyPress: function () {
                    if (settings.keyPress) {
                        $(document).on('keyup.lightslider', function (e) {
                            e.preventDefault();
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide();
                                clearInterval(interval);
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide();
                                clearInterval(interval);
                            }
                        });
                    }
                },
                controls: function () {
                    if (settings.controls) {
                        $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                        if (!settings.autoWidth) {
                            if (length <= settings.item) {
                                $slide.find('.lSAction').hide();
                            }
                        } else {
                            if (refresh.calWidth(false) < elSize) {
                                $slide.find('.lSAction').hide();
                            }
                        }
                        $slide.find('.lSAction a').on('click', function (e) {
                            e.preventDefault();
                            if ($(this).attr('class') === 'lSPrev') {
                                $el.goToPrevSlide();
                            } else {
                                $el.goToNextSlide();
                            }
                            clearInterval(interval);
                            return false;
                        });
                    }
                },
                initialStyle: function () {
                    var $this = this;
                    if (settings.mode === 'fade') {
                        settings.autoWidth = false;
                        settings.slideEndAnimatoin = false;
                    }
                    if (settings.auto) {
                        settings.slideEndAnimatoin = false;
                    };
                    if (settings.autoWidth) {
                        settings.slideMove = 1;
                        settings.item = 1;
                    }
                    if (settings.loop) {
                        settings.slideMove = 1;
                        settings.freeMove = false;
                    }
                    settings.onBeforeStart.call(this, $el);
                    refresh.chbreakpoint();
                    $el.addClass('lightSlider').wrap("<div class='lSSlideOuter " + settings.addClass + "'><div class='lSSlideWrapper'></div></div>");
                    $slide = $el.parent('.lSSlideWrapper');
                    if (settings.rtl === true) {
                        $slide.parent().addClass('lSrtl');
                    }
                    if (settings.vertical) {
                        $slide.parent().addClass('vertical');
                        elSize = settings.verticalHeight;
                        $slide.css('height', elSize + 'px');
                    } else {
                        elSize = $el.outerWidth();
                    }
                    $children.addClass('lslide');
                    if (settings.loop === true && settings.mode === 'slide') {
                        refresh.calSW();
                        refresh.clone = function () {
                            if (refresh.calWidth(true) > elSize) {
                                /**/
                                var tWr = 0,
                                    tI = 0;
                                for (var k = 0; k < $children.length; k++) {
                                    tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                    tI++;
                                    if (tWr >= (elSize + settings.slideMargin)) {
                                        break;
                                    }
                                }
                                var tItem = settings.autoWidth === true ? tI : settings.item;

                                /**/
                                if (tItem < $el.find('.clone.left').length) {
                                    for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                        $children.eq(i).remove();
                                    }
                                }
                                if (tItem < $el.find('.clone.right').length) {
                                    for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                        scene--;
                                        $children.eq(j).remove();
                                    }
                                }
                                /**/
                                for (var k = $el.find('.clone.right').length; k < tItem; k++) {
                                    $el.find('.lslide').eq(k).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                    scene++;
                                }
                                for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                    $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                                }
                                $children = $el.children();
                            } else {
                                if ($children.hasClass('clone')) {
                                    $el.find('.clone').remove();
                                    $this.move($el, 0);
                                }
                            }
                        };
                        refresh.clone();
                    }
                    refresh.sSW = function () {
                        length = $children.length;
                        if (settings.rtl === true && settings.vertical === false) {
                            gutter = "margin-left";
                        }
                        if (settings.autoWidth === false) {
                            $children.css(property, slideWidth + 'px');
                        }
                        $children.css(gutter, settings.slideMargin + 'px');
                        w = refresh.calWidth(false);
                        $el.css(property, w + 'px');
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (on === false) {
                                scene = $el.find('.clone.left').length;
                            }
                        }
                    };
                    refresh.calL = function () {
                        $children = $el.children();
                        length = $children.length;
                    };
                    if (this.doCss()) {
                        $slide.addClass('usingCss');
                    }
                    refresh.calL();
                    if (settings.mode === "slide") {
                        refresh.calSW();
                        refresh.sSW();
                        if (settings.loop === true) {
                            slideValue = $this.slideValue();
                            this.move($el, slideValue);
                        }
                        if (settings.vertical === false) {
                            this.setHeight($el, false, true);
                        }

                    } else {
                        this.setHeight($el, true, true);
                        $el.addClass('lSFade');
                        if (!this.doCss()) {
                            $children.not(".active").css('display', 'none');
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        $children.eq(scene).addClass('active');
                    } else {
                        $children.first().addClass('active');
                    }
                },
                pager: function () {
                    var $this = this;
                    refresh.createPager = function () {
                        thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                        var $children = $slide.find('.lslide');
                        var length = $slide.find('.lslide').length;
                        var i = 0,
                            pagers = '',
                            v = 0;
                        for (i = 0; i < length; i++) {
                            if (settings.mode === 'slide') {
                                // calculate scene * slide value
                                if (!settings.autoWidth) {
                                    v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                                } else {
                                    v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                                }
                            }
                            var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                            if (settings.gallery === true) {
                                pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                            } else {
                                pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                            }
                            if (settings.mode === 'slide') {
                                if ((v) >= w - elSize - settings.slideMargin) {
                                    i = i + 1;
                                    var minPgr = 2;
                                    if (settings.autoWidth) {
                                        pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                        minPgr = 1;
                                    }
                                    if (i < minPgr) {
                                        pagers = null;
                                        $slide.parent().addClass('noPager');
                                    } else {
                                        $slide.parent().removeClass('noPager');
                                    }
                                    break;
                                }
                            }
                        }
                        var $cSouter = $slide.parent();
                        $cSouter.find('.lSPager').html(pagers);
                        if (!settings.vertical && settings.gallery) {
                            var $pgr = $slide.parent().find('.lSGallery');
                            setTimeout(function () {
                                $this.setHeight($pgr, false, false);
                            });
                        }
                        if (settings.gallery === true) {
                            if (settings.vertical === true) {
                                // set Gallery thumbnail width
                                $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                            }
                            pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                            $cSouter.find('.lSPager').css({
                                property: pagerWidth + 'px',
                                'transition-duration': settings.speed + 'ms'
                            });
                            if (settings.vertical === true) {
                                $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                            }
                            $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                        }
                        var $pager = $cSouter.find('.lSPager').find('li');
                        $pager.first().addClass('active');
                        $pager.on('click', function () {
                            if (settings.loop === true && settings.mode === 'slide') {
                                scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                            } else {
                                scene = $pager.index(this);
                            }
                            $el.mode(false);
                            if (settings.gallery === true) {
                                $this.slideThumb();
                            }
                            clearInterval(interval);
                            return false;
                        });
                    };
                    if (settings.pager) {
                        var cl = 'lSpg';
                        if (settings.gallery) {
                            cl = 'lSGallery';
                        }
                        $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                        var gMargin = (settings.vertical) ? "margin-left" : "margin-top";
                        $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                        refresh.createPager();
                    }

                    setTimeout(function () {
                        refresh.init();
                    }, 0);
                },
                setHeight: function (ob, fade, loop) {
                    var obj = null;
                    if (loop) {
                        obj = ob.children(".lslide ").first();
                    }else{
                        obj = ob.children().first();
                    }
                    var setCss = function () {
                        var tH = obj.height(),
                            tP = 0,
                            tHT = tH;
                        if (fade) {
                            tH = 0;
                            tP = ((tHT) * 100) / elSize;
                        }
                        ob.css({
                            'height': tH + 'px',
                            'padding-bottom': tP + '%'
                        });
                    };
                    setCss();
                    obj.find('img').load(function () {
                        setTimeout(function(){
                            setCss();
                        },100);
                    });
                },
                active: function (ob, t) {
                    if (this.doCss() && settings.mode === "fade") {
                        $slide.addClass('on');
                    }
                    var sc = 0;
                    if (scene * settings.slideMove < length) {
                        ob.removeClass('active');
                        if (!this.doCss() && settings.mode === "fade" && t === false) {
                            ob.fadeOut(settings.speed);
                        }
                        t === true ? sc = scene : sc = scene * settings.slideMove;
                        if (t === true) {
                            var l = ob.length;
                            var nl = l - 1;
                            if (sc + 1 >= l) {
                                sc = nl;
                            }
                        }
                        if (settings.loop === true && settings.mode === 'slide') {
                            t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                            if (t === true) {
                                var l = ob.length;
                                var nl = l - 1;
                                if (sc + 1 == l) {
                                    sc = nl;
                                } else if (sc + 1 > l) {
                                    sc = 0;
                                }
                            }
                        }

                        if (!this.doCss() && settings.mode === "fade" && t === false) {
                            ob.eq(sc).fadeIn(settings.speed);
                        }
                        ob.eq(sc).addClass('active');
                    } else {
                        ob.removeClass('active');
                        ob.eq(ob.length - 1).addClass('active');
                        if (!this.doCss() && settings.mode === "fade" && t === false) {
                            ob.fadeOut(settings.speed);
                            ob.eq(sc).fadeIn(settings.speed);
                        }
                    }
                },
                move: function (ob, v) {
                    if (settings.rtl === true) {
                        v = -v;
                    }
                    if (this.doCss()) {
                        if (settings.vertical === true) {
                            ob.css({
                                'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                                '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                            });
                        } else {
                            ob.css({
                                'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                                '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            });
                        }
                    } else {
                        if (settings.vertical === true) {
                            ob.css('position', 'relative').animate({
                                top: -v + 'px'
                            }, settings.speed, settings.easing);
                        } else {
                            ob.css('position', 'relative').animate({
                                left: -v + 'px'
                            }, settings.speed, settings.easing);
                        }
                    }
                    var $thumb = $slide.parent().find('.lSPager').find('li');
                    this.active($thumb, true);
                },
                fade: function () {
                    this.active($children, false);
                    var $thumb = $slide.parent().find('.lSPager').find('li');
                    this.active($thumb, true);
                },
                slide: function () {
                    var $this = this;
                    refresh.calSlide = function () {
                        if (w > elSize) {
                            slideValue = $this.slideValue();
                            $this.active($children, false);
                            if ((slideValue) > w - elSize - settings.slideMargin) {
                                slideValue = w - elSize - settings.slideMargin;
                            } else if (slideValue < 0) {
                                slideValue = 0;
                            }
                            $this.move($el, slideValue);
                            if (settings.loop === true && settings.mode === 'slide') {
                                if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                    $this.resetSlide($el.find('.clone.left').length);
                                }
                                if (scene === 0) {
                                    $this.resetSlide($slide.find('.lslide').length);
                                }
                            }
                        }
                    };
                    refresh.calSlide();
                },
                resetSlide: function (s) {
                    var $this = this;
                    $slide.find('.lSAction a').addClass('disabled');
                    setTimeout(function () {
                        scene = s;
                        $slide.css('transition-duration', '0ms');
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        plugin.move($el, slideValue);
                        setTimeout(function () {
                            $slide.css('transition-duration', settings.speed + 'ms');
                            $slide.find('.lSAction a').removeClass('disabled');
                        }, 50);
                    }, settings.speed + 100);
                },
                slideValue: function () {
                    var _sV = 0;
                    if (settings.autoWidth === false) {
                        _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                    } else {
                        _sV = 0;
                        for (var i = 0; i < scene; i++) {
                            _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                        }
                    }
                    return _sV;
                },
                slideThumb: function () {
                    var position;
                    switch (settings.currentPagerPosition) {
                        case 'left':
                            position = 0;
                            break;
                        case 'middle':
                            position = (elSize / 2) - (thumbWidth / 2);
                            break;
                        case 'right':
                            position = elSize - thumbWidth;
                    }
                    var sc = scene - $el.find('.clone.left').length;
                    var $pager = $slide.parent().find('.lSPager');
                    if (settings.mode === 'slide' && settings.loop === true) {
                        if (sc >= $pager.children().length) {
                            sc = 0;
                        } else if (sc < 0) {
                            sc = $pager.children().length;
                        }
                    }
                    var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                    if ((thumbSlide + elSize) > pagerWidth) {
                        thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                    }
                    if (thumbSlide < 0) {
                        thumbSlide = 0;
                    }
                    this.move($pager, thumbSlide);
                },
                auto: function () {
                    if (settings.auto) {
                        interval = setInterval(function () {
                            $el.goToNextSlide();
                        }, settings.pause);
                    }
                },

                touchMove: function (endCoords, startCoords) {
                    $slide.css('transition-duration', '0ms');
                    if (settings.mode === 'slide') {
                        var distance = endCoords - startCoords;
                        var swipeVal = slideValue - distance;
                        if ((swipeVal) >= w - elSize - settings.slideMargin) {
                            if (settings.freeMove === false) {
                                swipeVal = w - elSize - settings.slideMargin;
                            } else {
                                var swipeValT = w - elSize - settings.slideMargin;
                                swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

                            }
                        } else if (swipeVal < 0) {
                            if (settings.freeMove === false) {
                                swipeVal = 0;
                            } else {
                                swipeVal = swipeVal / 5;
                            }
                        }
                        this.move($el, swipeVal);
                    }
                },

                touchEnd: function (distance) {
                    $slide.css('transition-duration', settings.speed + 'ms');
                    clearInterval(interval);
                    if (settings.mode === 'slide') {
                        var mxVal = false;
                        var _next = true;
                        slideValue = slideValue - distance;
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                            if (settings.autoWidth === false) {
                                mxVal = true;
                            }
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        var gC = function (next) {
                            var ad = 0;
                            if (!mxVal) {
                                if (next) {
                                    ad = 1;
                                };
                            }
                            if (!settings.autoWidth) {
                                var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                                scene = parseInt(num) + ad;
                                if (slideValue >= (w - elSize - settings.slideMargin)) {
                                    if (num % 1 !== 0) {
                                        scene++;
                                    }
                                }
                            } else {
                                var tW = 0;
                                for (var i = 0; i < $children.length; i++) {
                                    tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                    scene = i + ad;
                                    if (tW >= slideValue) {
                                        break;
                                    }
                                }
                            }
                        };
                        if (distance >= settings.swipeThreshold) {
                            gC(false);
                            _next = false;
                        } else if (distance <= -settings.swipeThreshold) {
                            gC(true);
                            _next = false;
                        }
                        $el.mode(_next);
                        this.slideThumb();
                    } else {
                        if (distance >= settings.swipeThreshold) {
                            $el.goToPrevSlide();
                        } else if (distance <= -settings.swipeThreshold) {
                            $el.goToNextSlide();
                        }
                    }
                },



                enableDrag: function () {
                    var $this = this;
                    if (!isTouch) {
                        var startCoords = 0,
                            endCoords = 0,
                            isDraging = false;
                        $slide.on('mousedown', function (e) {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return false;
                                }
                            }
                            if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                                startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                                isDraging = true;
                                e.preventDefault();
                            }
                        });
                        $(window).on('mousemove', function (e) {
                            if (isDraging) {
                                endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                                $this.touchMove(endCoords, startCoords);
                            }
                        });
                        $(window).on('mouseup', function (e) {
                            if (isDraging) {
                                isDraging = false;
                                endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                                var distance = endCoords - startCoords;
                                if (Math.abs(distance) >= settings.swipeThreshold) {
                                    $(window).on('click.ls', function(e) {
                                        e.preventDefault();
                                        e.stopImmediatePropagation();
                                        e.stopPropagation();
                                        $(window).off('click.ls');
                                    });
                                }

                                $this.touchEnd(distance);

                            }
                        });
                    }
                },




                enableTouch: function () {
                    var $this = this;
                    if (isTouch) {
                        var startCoords = {},
                            endCoords = {};
                        $slide.on('touchstart', function (e) {
                            endCoords = e.originalEvent.targetTouches[0];
                            startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                            startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        });
                        $slide.on('touchmove', function (e) {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return false;
                                }
                            }
                            var orig = e.originalEvent;
                            endCoords = orig.targetTouches[0];
                            var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                            var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                            if (settings.vertical === true) {
                                if ((yMovement * 3) > xMovement) {
                                    e.preventDefault();
                                }
                                $this.touchMove(endCoords.pageY, startCoords.pageY);
                            } else {
                                if ((xMovement * 3) > yMovement) {
                                    e.preventDefault();
                                }
                                $this.touchMove(endCoords.pageX, startCoords.pageX);
                            }

                        });
                        $slide.on('touchend', function () {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return false;
                                }
                            }
                            if (settings.vertical === true) {
                                var distance = endCoords.pageY - startCoords.pageY;
                            } else {
                                var distance = endCoords.pageX - startCoords.pageX;
                            }
                            $this.touchEnd(distance);
                        });
                    }
                },
                build: function () {
                    var $this = this;
                    $this.initialStyle();
                    $this.auto();
                    if (this.doCss()) {

                        if (settings.enableTouch === true) {
                            $this.enableTouch();
                        }
                        if (settings.enableDrag === true) {
                            $this.enableDrag();
                        }
                    }
                    $this.pager();
                    $this.controls();
                    $this.keyPress();
                }
            };
            plugin.build();
            refresh.init = function () {
                refresh.chbreakpoint();
                if (settings.vertical === true) {
                    if (settings.item > 1) {
                        elSize = settings.verticalHeight;
                    } else {
                        elSize = $children.outerHeight();
                    }
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $slide.outerWidth();
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.clone();
                }
                refresh.calL();
                if (settings.mode === "slide") {
                    $el.removeClass('lSSlide');
                }
                if (settings.mode === "slide") {
                    refresh.calSW();
                    refresh.sSW();
                }
                setTimeout(function () {
                    if (settings.mode === "slide") {
                        $el.addClass('lSSlide');
                    }
                }, 1000);
                if (settings.pager) {
                    refresh.createPager();
                }
                if (settings.adaptiveHeight === true && settings.vertical === false) {
                    $el.css('height', $children.eq(scene).height());
                }
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
                if (settings.mode === "slide") {
                    plugin.slide();
                }
                if (settings.autoWidth === false) {
                    if ($children.length <= settings.item) {
                        $slide.find('.lSAction').hide();
                    } else {
                        $slide.find('.lSAction').show();
                    }
                } else {
                    if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                        $slide.find('.lSAction').hide();
                    } else {
                        $slide.find('.lSAction').show();
                    }
                }
            };
            $el.goToPrevSlide = function () {
                if (scene > 0) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    scene--;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else {
                    if (settings.loop === true) {
                        settings.onBeforePrevSlide.call(this, $el, scene);
                        if (settings.mode === 'fade') {
                            var l = (length - 1);
                            scene = parseInt(l / settings.slideMove);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            plugin.slideThumb();
                        }
                    } else if (settings.slideEndAnimatoin === true) {
                        $el.addClass('leftEnd');
                        setTimeout(function () {
                            $el.removeClass('leftEnd');
                        }, 400);
                    }
                }
            };
            $el.goToNextSlide = function () {
                var nextI = true;
                if (settings.mode === 'slide') {
                    var _slideValue = plugin.slideValue();
                    var nextI = _slideValue < w - elSize - settings.slideMargin;
                }
                if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene++;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else {
                    if (settings.loop === true) {
                        settings.onBeforeNextSlide.call(this, $el, scene);
                        scene = 0;
                        $el.mode(false);
                        if (settings.gallery === true) {
                            plugin.slideThumb();
                        }
                    } else if (settings.slideEndAnimatoin === true) {
                        $el.addClass('rightEnd');
                        setTimeout(function () {
                            $el.removeClass('rightEnd');
                        }, 400);
                    }
                }
            };
            $el.mode = function (_touch) {
                if (settings.adaptiveHeight === true && settings.vertical === false) {
                    $el.css('height', $children.eq(scene).height());
                }
                if (on === false) {
                    if (settings.mode === "slide") {
                        if (plugin.doCss()) {
                            $el.addClass('lSSlide');
                            if (settings.speed !== '') {
                                $slide.css('transition-duration', settings.speed + 'ms');
                            }
                            if (settings.cssEasing !== '') {
                                $slide.css('transition-timing-function', settings.cssEasing);
                            }
                        }
                    } else {
                        if (plugin.doCss()) {
                            if (settings.speed !== '') {
                                $el.css('transition-duration', settings.speed + 'ms');
                            }
                            if (settings.cssEasing !== '') {
                                $el.css('transition-timing-function', settings.cssEasing);
                            }
                        }
                    }
                }
                if (!_touch) {
                    settings.onBeforeSlide.call(this, $el, scene);
                }
                if (settings.mode === "slide") {
                    plugin.slide();
                } else {
                    plugin.fade();
                }
                setTimeout(function () {
                    if (!_touch) {
                        settings.onAfterSlide.call(this, $el, scene);
                    }
                }, settings.speed);
                on = true;
            };
            $el.play = function () {
                clearInterval(interval);
                $el.goToNextSlide();
                interval = setInterval(function () {
                    $el.goToNextSlide();
                }, settings.pause);
            };
            $el.pause = function () {
                clearInterval(interval);
            };
            $el.refresh = function () {
                refresh.init();
            };
            $el.getCurrentSlideCount = function () {
                var sc = scene;
                if (settings.loop) {
                    var ln = $slide.find('.lslide').length,
                        cl = $el.find('.clone.left').length;
                    if(scene<=cl-1){
                        sc = ln  + (scene-cl);
                    }else if(scene >= (ln+cl)){
                        sc = scene - ln - cl;
                    }else{
                        sc = scene - cl;
                    }
                };
                return sc+1;
            };
            $el.getTotalSlideCount = function(){
                return $slide.find('.lslide').length;
            };
            $el.goToSlide = function (s) {
                if (settings.loop) {
                    scene = (s + $el.find('.clone.left').length -1);
                }else{
                    scene = s;
                }
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            };
            setTimeout(function(){
                settings.onSliderLoad.call(this, $el);
            },10);
            $(window).on('resize orientationchange', function (e) {
                setTimeout(function () {
                    e.preventDefault();
                    refresh.init();
                }, 200);
            });
            return this;
        };
    }(jQuery));

    /* ------------------------------------------------------------------------
        Class: prettyPhoto
        Use: Lightbox clone for jQuery
        Author: Stephane Caron (http://www.no-margin-for-errors.com)
        Version: 3.1.6
    ------------------------------------------------------------------------- */
    (function($) {
        $.prettyPhoto = {version: '3.1.6'};
        
        $.fn.prettyPhoto = function(pp_settings) {
            pp_settings = jQuery.extend({
                hook: 'rel', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
                animation_speed: 'fast', /* fast/slow/normal */
                ajaxcallback: function() {},
                slideshow: 5000, /* false OR interval time in ms */
                autoplay_slideshow: false, /* true/false */
                opacity: 0.80, /* Value between 0 and 1 */
                show_title: true, /* true/false */
                allow_resize: true, /* Resize the photos bigger than viewport. true/false */
                allow_expand: true, /* Allow the user to expand a resized image. true/false */
                default_width: 500,
                default_height: 344,
                counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
                theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
                horizontal_padding: 20, /* The padding on each side of the picture */
                hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
                wmode: 'opaque', /* Set the flash wmode attribute */
                autoplay: true, /* Automatically start videos: True/False */
                modal: false, /* If set to true, only the close button will close the window */
                deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
                overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
                overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
                keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
                changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
                callback: function(){}, /* Called when prettyPhoto is closed */
                ie6_fallback: true,
                markup: '<div class="pp_pic_holder"> \
                            <div class="ppt">&nbsp;</div> \
                            <div class="pp_top"> \
                                <div class="pp_left"></div> \
                                <div class="pp_middle"></div> \
                                <div class="pp_right"></div> \
                            </div> \
                            <div class="pp_content_container"> \
                                <div class="pp_left"> \
                                <div class="pp_right"> \
                                    <div class="pp_content"> \
                                        <div class="pp_loaderIcon"></div> \
                                        <div class="pp_fade"> \
                                            <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                            <div class="pp_hoverContainer"> \
                                                <a class="pp_next" href="#">next</a> \
                                                <a class="pp_previous" href="#">previous</a> \
                                            </div> \
                                            <div id="pp_full_res"></div> \
                                            <div class="pp_details"> \
                                                <div class="pp_nav"> \
                                                    <a href="#" class="pp_arrow_previous">Previous</a> \
                                                    <p class="currentTextHolder">0/0</p> \
                                                    <a href="#" class="pp_arrow_next">Next</a> \
                                                </div> \
                                                <p class="pp_description"></p> \
                                                <div class="pp_social">{pp_social}</div> \
                                                <a class="pp_close" href="#">Close</a> \
                                            </div> \
                                        </div> \
                                    </div> \
                                </div> \
                                </div> \
                            </div> \
                            <div class="pp_bottom"> \
                                <div class="pp_left"></div> \
                                <div class="pp_middle"></div> \
                                <div class="pp_right"></div> \
                            </div> \
                        </div> \
                        <div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> \
                                    <a href="#" class="pp_arrow_previous">Previous</a> \
                                    <div> \
                                        <ul> \
                                            {gallery} \
                                        </ul> \
                                    </div> \
                                    <a href="#" class="pp_arrow_next">Next</a> \
                                </div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: '',
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
            }, pp_settings);
            
            // Global variables accessible only by prettyPhoto
            var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
            
            // prettyPhoto container specific
            pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
            
            // Window size
            windowHeight = $(window).height(), windowWidth = $(window).width(),

            // Global elements
            pp_slideshow;
            
            doresize = true, scroll_pos = _get_scroll();
        
            // Window/Keyboard events
            $(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
            
            if(pp_settings.keyboard_shortcuts) {
                $(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
                    if(typeof $pp_pic_holder != 'undefined'){
                        if($pp_pic_holder.is(':visible')){
                            switch(e.keyCode){
                                case 37:
                                    $.prettyPhoto.changePage('previous');
                                    e.preventDefault();
                                    break;
                                case 39:
                                    $.prettyPhoto.changePage('next');
                                    e.preventDefault();
                                    break;
                                case 27:
                                    if(!settings.modal)
                                    $.prettyPhoto.close();
                                    e.preventDefault();
                                    break;
                            };
                            // return false;
                        };
                    };
                });
            };

            /**
            * Refresh prettyPhoto.
            */
            $.prettyPhoto.refresh = function() {
                matchedObjects = $(matchedObjects.selector);
                matchedObjects.unbind('click.prettyphoto').bind('click.prettyphoto', $.prettyPhoto.initialize);
            }
            
            /**
            * Initialize prettyPhoto.
            */
            $.prettyPhoto.initialize = function() {
                
                settings = pp_settings;
                
                if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
                
                // Find out if the picture is part of a set
                theRel = $(this).attr(settings.hook);
                galleryRegExp = /\[(?:.*)\]/;
                isSet = (galleryRegExp.exec(theRel)) ? true : false;
                
                // Put the SRCs, TITLEs, ALTs into an array.
                pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
                pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
                pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
                
                if(pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
                
                set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
                rel_index = (isSet) ? set_position : $("a["+settings.hook+"^='"+theRel+"']").index($(this));
                
                _build_overlay(this); // Build the overlay {this} being the caller
                
                if(settings.allow_resize)
                    $(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
                
                
                $.prettyPhoto.open();
                
                return false;
            }


            /**
            * Opens the prettyPhoto modal box.
            * @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
            * @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
            * @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
            */
            $.prettyPhoto.open = function(event) {
                if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
                    settings = pp_settings;
                    pp_images = $.makeArray(arguments[0]);
                    pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
                    pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
                    isSet = (pp_images.length > 1) ? true : false;
                    set_position = (arguments[3])? arguments[3]: 0;
                    _build_overlay(event.target); // Build the overlay {this} being the caller
                }
                
                if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

                _checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
            
                $('.pp_loaderIcon').show();
            
                if(settings.deeplinking)
                    setHashtag();
            
                // Rebuild Facebook Like Button with updated href
                if(settings.social_tools){
                    facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 
                    $pp_pic_holder.find('.pp_social').html(facebook_like_link);
                }
                
                // Fade the content in
                if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
                $pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

                // Display the current position
                $pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

                // Set the description
                if(typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != ""){
                    $pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
                }else{
                    $pp_pic_holder.find('.pp_description').hide();
                }
                
                // Get the dimensions
                movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
                movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
                
                // If the size is % based, calculate according to window dimensions
                percentBased=false;
                if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
                if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
                
                // Fade the holder
                $pp_pic_holder.fadeIn(function(){
                    // Set the title
                    (settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');
                    
                    imgPreloader = "";
                    skipInjection = false;
                    
                    // Inject the proper content
                    switch(_getFileType(pp_images[set_position])){
                        case 'image':
                            imgPreloader = new Image();

                            // Preload the neighbour images
                            nextImage = new Image();
                            if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
                            prevImage = new Image();
                            if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

                            $pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

                            imgPreloader.onload = function(){
                                // Fit item to viewport
                                pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

                                _showContent();
                            };

                            imgPreloader.onerror = function(){
                                alert('Image cannot be loaded. Make sure the path is correct and image exist.');
                                $.prettyPhoto.close();
                            };
                        
                            imgPreloader.src = pp_images[set_position];
                        break;
                    
                        case 'youtube':
                            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
                            
                            // Regular youtube link
                            movie_id = getParam('v',pp_images[set_position]);
                            
                            // youtu.be link
                            if(movie_id == ""){
                                movie_id = pp_images[set_position].split('youtu.be/');
                                movie_id = movie_id[1];
                                if(movie_id.indexOf('?') > 0)
                                    movie_id = movie_id.substr(0,movie_id.indexOf('?')); // Strip anything after the ?

                                if(movie_id.indexOf('&') > 0)
                                    movie_id = movie_id.substr(0,movie_id.indexOf('&')); // Strip anything after the &
                            }

                            movie = 'http://www.youtube.com/embed/'+movie_id;
                            (getParam('rel',pp_images[set_position])) ? movie+="?rel="+getParam('rel',pp_images[set_position]) : movie+="?rel=1";
                                
                            if(settings.autoplay) movie += "&autoplay=1";
                        
                            toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
                        break;
                    
                        case 'vimeo':
                            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
                        
                            movie_id = pp_images[set_position];
                            var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
                            var match = movie_id.match(regExp);
                            
                            movie = 'http://player.vimeo.com/video/'+ match[3] +'?title=0&amp;byline=0&amp;portrait=0';
                            if(settings.autoplay) movie += "&autoplay=1;";
                    
                            vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
                    
                            toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
                        break;
                    
                        case 'quicktime':
                            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
                            pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
                    
                            toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
                        break;
                    
                        case 'flash':
                            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
                        
                            flash_vars = pp_images[set_position];
                            flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

                            filename = pp_images[set_position];
                            filename = filename.substring(0,filename.indexOf('?'));
                        
                            toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
                        break;
                    
                        case 'iframe':
                            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
                    
                            frame_url = pp_images[set_position];
                            frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

                            toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
                        break;
                        
                        case 'ajax':
                            doresize = false; // Make sure the dimensions are not resized.
                            pp_dimensions = _fitToViewport(movie_width,movie_height);
                            doresize = true; // Reset the dimensions
                        
                            skipInjection = true;
                            $.get(pp_images[set_position],function(responseHTML){
                                toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
                                $pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
                                _showContent();
                            });
                            
                        break;
                        
                        case 'custom':
                            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
                        
                            toInject = settings.custom_markup;
                        break;
                    
                        case 'inline':
                            // to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
                            myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
                            doresize = false; // Make sure the dimensions are not resized.
                            pp_dimensions = _fitToViewport($(myClone).width(),$(myClone).height());
                            doresize = true; // Reset the dimensions
                            $(myClone).remove();
                            toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
                        break;
                    };

                    if(!imgPreloader && !skipInjection){
                        $pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
                    
                        // Show content
                        _showContent();
                    };
                });

                return false;
            };

        
            /**
            * Change page in the prettyPhoto modal box
            * @param direction {String} Direction of the paging, previous or next.
            */
            $.prettyPhoto.changePage = function(direction){
                currentGalleryPage = 0;
                
                if(direction == 'previous') {
                    set_position--;
                    if (set_position < 0) set_position = $(pp_images).size()-1;
                }else if(direction == 'next'){
                    set_position++;
                    if(set_position > $(pp_images).size()-1) set_position = 0;
                }else{
                    set_position=direction;
                };
                
                rel_index = set_position;

                if(!doresize) doresize = true; // Allow the resizing of the images
                if(settings.allow_expand) {
                    $('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
                }

                _hideContent(function(){ $.prettyPhoto.open(); });
            };


            /**
            * Change gallery page in the prettyPhoto modal box
            * @param direction {String} Direction of the paging, previous or next.
            */
            $.prettyPhoto.changeGalleryPage = function(direction){
                if(direction=='next'){
                    currentGalleryPage ++;

                    if(currentGalleryPage > totalPage) currentGalleryPage = 0;
                }else if(direction=='previous'){
                    currentGalleryPage --;

                    if(currentGalleryPage < 0) currentGalleryPage = totalPage;
                }else{
                    currentGalleryPage = direction;
                };
                
                slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

                slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

                $pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
            };


            /**
            * Start the slideshow...
            */
            $.prettyPhoto.startSlideshow = function(){
                if(typeof pp_slideshow == 'undefined'){
                    $pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
                        $.prettyPhoto.stopSlideshow();
                        return false;
                    });
                    pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
                }else{
                    $.prettyPhoto.changePage('next');   
                };
            }


            /**
            * Stop the slideshow...
            */
            $.prettyPhoto.stopSlideshow = function(){
                $pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
                    $.prettyPhoto.startSlideshow();
                    return false;
                });
                clearInterval(pp_slideshow);
                pp_slideshow=undefined;
            }


            /**
            * Closes prettyPhoto.
            */
            $.prettyPhoto.close = function(){
                if($pp_overlay.is(":animated")) return;
                
                $.prettyPhoto.stopSlideshow();
                
                $pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
                
                $('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
                
                $pp_overlay.fadeOut(settings.animation_speed, function(){
                    
                    if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
                    
                    $(this).remove(); // No more need for the prettyPhoto markup
                    
                    $(window).unbind('scroll.prettyphoto');
                    
                    clearHashtag();
                    
                    settings.callback();
                    
                    doresize = true;
                    
                    pp_open = false;
                    
                    delete settings;
                });
            };
        
            /**
            * Set the proper sizes on the containers and animate the content in.
            */
            function _showContent(){
                $('.pp_loaderIcon').hide();

                // Calculate the opened top position of the pic holder
                projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
                if(projectedTop < 0) projectedTop = 0;

                $ppt.fadeTo(settings.animation_speed,1);

                // Resize the content holder
                $pp_pic_holder.find('.pp_content')
                    .animate({
                        height:pp_dimensions['contentHeight'],
                        width:pp_dimensions['contentWidth']
                    },settings.animation_speed);
                
                // Resize picture the holder
                $pp_pic_holder.animate({
                    'top': projectedTop,
                    'left': ((windowWidth/2) - (pp_dimensions['containerWidth']/2) < 0) ? 0 : (windowWidth/2) - (pp_dimensions['containerWidth']/2),
                    width:pp_dimensions['containerWidth']
                },settings.animation_speed,function(){
                    $pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

                    $pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

                    // Show the nav
                    if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }
                
                    if(settings.allow_expand) {
                        if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
                            $('a.pp_expand,a.pp_contract').show();
                        }else{
                            $('a.pp_expand').hide();
                        }
                    }
                    
                    if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
                    
                    settings.changepicturecallback(); // Callback!
                    
                    pp_open = true;
                });
                
                _insert_gallery();
                pp_settings.ajaxcallback();
            };
            
            /**
            * Hide the content...DUH!
            */
            function _hideContent(callback){
                // Fade out the current picture
                $pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
                $pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
                    $('.pp_loaderIcon').show();
                    
                    callback();
                });
            };
        
            /**
            * Check the item position in the gallery array, hide or show the navigation links
            * @param setCount {integer} The total number of items in the set
            */
            function _checkPosition(setCount){
                (setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
            };
        
            /**
            * Resize the item dimensions if it's bigger than the viewport
            * @param width {integer} Width of the item to be opened
            * @param height {integer} Height of the item to be opened
            * @return An array containin the "fitted" dimensions
            */
            function _fitToViewport(width,height){
                resized = false;

                _getDimensions(width,height);
                
                // Define them in case there's no resize needed
                imageWidth = width, imageHeight = height;

                if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
                    resized = true, fitting = false;
                
                    while (!fitting){
                        if((pp_containerWidth > windowWidth)){
                            imageWidth = (windowWidth - 200);
                            imageHeight = (height/width) * imageWidth;
                        }else if((pp_containerHeight > windowHeight)){
                            imageHeight = (windowHeight - 200);
                            imageWidth = (width/height) * imageHeight;
                        }else{
                            fitting = true;
                        };

                        pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
                    };
                

                    
                    if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
                        _fitToViewport(pp_containerWidth,pp_containerHeight)
                    };
                    
                    _getDimensions(imageWidth,imageHeight);
                };
                
                return {
                    width:Math.floor(imageWidth),
                    height:Math.floor(imageHeight),
                    containerHeight:Math.floor(pp_containerHeight),
                    containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
                    contentHeight:Math.floor(pp_contentHeight),
                    contentWidth:Math.floor(pp_contentWidth),
                    resized:resized
                };
            };
            
            /**
            * Get the containers dimensions according to the item size
            * @param width {integer} Width of the item to be opened
            * @param height {integer} Height of the item to be opened
            */
            function _getDimensions(width,height){
                width = parseFloat(width);
                height = parseFloat(height);
                
                // Get the details height, to do so, I need to clone it since it's invisible
                $pp_details = $pp_pic_holder.find('.pp_details');
                $pp_details.width(width);
                detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
                
                $pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
                    'position':'absolute',
                    'top':-10000
                });
                detailsHeight += $pp_details.height();
                detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
                $pp_details.remove();
                
                // Get the titles height, to do so, I need to clone it since it's invisible
                $pp_title = $pp_pic_holder.find('.ppt');
                $pp_title.width(width);
                titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
                $pp_title = $pp_title.clone().appendTo($('body')).css({
                    'position':'absolute',
                    'top':-10000
                });
                titleHeight += $pp_title.height();
                $pp_title.remove();
                
                // Get the container size, to resize the holder to the right dimensions
                pp_contentHeight = height + detailsHeight;
                pp_contentWidth = width;
                pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
                pp_containerWidth = width;
            }
        
            function _getFileType(itemSrc){
                if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) {
                    return 'youtube';
                }else if (itemSrc.match(/vimeo\.com/i)) {
                    return 'vimeo';
                }else if(itemSrc.match(/\b.mov\b/i)){ 
                    return 'quicktime';
                }else if(itemSrc.match(/\b.swf\b/i)){
                    return 'flash';
                }else if(itemSrc.match(/\biframe=true\b/i)){
                    return 'iframe';
                }else if(itemSrc.match(/\bajax=true\b/i)){
                    return 'ajax';
                }else if(itemSrc.match(/\bcustom=true\b/i)){
                    return 'custom';
                }else if(itemSrc.substr(0,1) == '#'){
                    return 'inline';
                }else{
                    return 'image';
                };
            };
        
            function _center_overlay(){
                if(doresize && typeof $pp_pic_holder != 'undefined') {
                    scroll_pos = _get_scroll();
                    contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

                    projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
                    if(projectedTop < 0) projectedTop = 0;
                    
                    if(contentHeight > windowHeight)
                        return;

                    $pp_pic_holder.css({
                        'top': projectedTop,
                        'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
                    });
                };
            };
        
            function _get_scroll(){
                if (self.pageYOffset) {
                    return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
                } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
                    return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
                } else if (document.body) {// all other Explorers
                    return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
                };
            };
        
            function _resize_overlay() {
                windowHeight = $(window).height(), windowWidth = $(window).width();
                
                if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
            };
        
            function _insert_gallery(){
                if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
                    itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
                    navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
                    
                    itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
                    itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
                    totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

                    // Hide the nav in the case there's no need for links
                    if(totalPage == 0){
                        navWidth = 0; // No nav means no width!
                        $pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
                    }else{
                        $pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
                    };

                    galleryWidth = itemsPerPage * itemWidth;
                    fullGalleryWidth = pp_images.length * itemWidth;
                    
                    // Set the proper width to the gallery items
                    $pp_gallery
                        .css('margin-left',-((galleryWidth/2) + (navWidth/2)))
                        .find('div:first').width(galleryWidth+5)
                        .find('ul').width(fullGalleryWidth)
                        .find('li.selected').removeClass('selected');
                    
                    goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

                    $.prettyPhoto.changeGalleryPage(goToPage);
                    
                    $pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
                }else{
                    $pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
                    // $pp_gallery.hide();
                }
            }
        
            function _build_overlay(caller){
                // Inject Social Tool markup into General markup
                if(settings.social_tools)
                    facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 

                settings.markup = settings.markup.replace('{pp_social}',''); 
                
                $('body').append(settings.markup); // Inject the markup
                
                $pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
                
                // Inject the inline gallery!
                if(isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0;
                    toInject = "";
                    for (var i=0; i < pp_images.length; i++) {
                        if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
                            classname = 'default';
                            img_src = '';
                        }else{
                            classname = '';
                            img_src = pp_images[i];
                        }
                        toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                    };
                    
                    toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
                    
                    $pp_pic_holder.find('#pp_full_res').after(toInject);
                    
                    $pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
                    
                    $pp_gallery.find('.pp_arrow_next').click(function(){
                        $.prettyPhoto.changeGalleryPage('next');
                        $.prettyPhoto.stopSlideshow();
                        return false;
                    });
                    
                    $pp_gallery.find('.pp_arrow_previous').click(function(){
                        $.prettyPhoto.changeGalleryPage('previous');
                        $.prettyPhoto.stopSlideshow();
                        return false;
                    });
                    
                    $pp_pic_holder.find('.pp_content').hover(
                        function(){
                            $pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
                        },
                        function(){
                            $pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
                        });

                    itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
                    $pp_gallery_li.each(function(i){
                        $(this)
                            .find('a')
                            .click(function(){
                                $.prettyPhoto.changePage(i);
                                $.prettyPhoto.stopSlideshow();
                                return false;
                            });
                    });
                };
                
                
                // Inject the play/pause if it's a slideshow
                if(settings.slideshow){
                    $pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
                    $pp_pic_holder.find('.pp_nav .pp_play').click(function(){
                        $.prettyPhoto.startSlideshow();
                        return false;
                    });
                }
                
                $pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
                
                $pp_overlay
                    .css({
                        'opacity':0,
                        'height':$(document).height(),
                        'width':$(window).width()
                        })
                    .bind('click',function(){
                        if(!settings.modal) $.prettyPhoto.close();
                    });

                $('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });


                if(settings.allow_expand) {
                    $('a.pp_expand').bind('click',function(e){
                        // Expand the image
                        if($(this).hasClass('pp_expand')){
                            $(this).removeClass('pp_expand').addClass('pp_contract');
                            doresize = false;
                        }else{
                            $(this).removeClass('pp_contract').addClass('pp_expand');
                            doresize = true;
                        };
                    
                        _hideContent(function(){ $.prettyPhoto.open(); });
                
                        return false;
                    });
                }
            
                $pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
                    $.prettyPhoto.changePage('previous');
                    $.prettyPhoto.stopSlideshow();
                    return false;
                });
            
                $pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
                    $.prettyPhoto.changePage('next');
                    $.prettyPhoto.stopSlideshow();
                    return false;
                });
                
                _center_overlay(); // Center it
            };

            if(!pp_alreadyInitialized && getHashtag()){
                pp_alreadyInitialized = true;
                
                // Grab the rel index to trigger the click on the correct element
                hashIndex = getHashtag();
                hashRel = hashIndex;
                hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
                hashRel = hashRel.substring(0,hashRel.indexOf('/'));

                // Little timeout to make sure all the prettyPhoto initialize scripts has been run.
                // Useful in the event the page contain several init scripts.
                setTimeout(function(){ $("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
            }
            
            return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
        };
        
        function getHashtag(){
            var url = location.href;
            hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)) : false;
            if(hashtag){  hashtag = hashtag.replace(/<|>/g,''); }
            return hashtag;
        };
        
        function setHashtag(){
            if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
            location.hash = theRel + '/'+rel_index+'/';
        };
        
        function clearHashtag(){
            if ( location.href.indexOf('#prettyPhoto') !== -1 ) location.hash = "prettyPhoto";
        }
        
        function getParam(name,url){
          name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
          var regexS = "[\\?&]"+name+"=([^&#]*)";
          var regex = new RegExp( regexS );
          var results = regex.exec( url );
          return ( results == null ) ? "" : results[1];
        }
        
    })(jQuery);

    var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.

    function Gallery(selector, autoInit) {

        autoInit = autoInit || false;

        this.$container  = $(selector);
        this.$elements   = this.$container.find('figure.grid-gallery-caption').fadeIn();
        this.initialMargin = this.$elements.first().css('margin-bottom');
        this.$navigation = this.$container.find('nav.grid-gallery-nav');

        this.selectedCategory="";

		this.$qsData = null;
        this.$qsDuration = '750';
        this.$qsEnable = false;
		this.areaPosition = this.$container.data('area-position');	// I think we wil need this in future
		
		this.pagination = {
            currentPage: 1,
            limit: 0,
            total: this.$elements.length,
            pages: 1,
            $wrapper: this.$container.find('.grid-gallery-pagination-wrap')
        };

        if (this.isFluidHeight()) {
            this.$elements.addClass('wookmarked');
        }

        $(document).trigger("GalleryExtend", this);

        if (autoInit) {
            this.init();
        }
    }

    Gallery.prototype.isFluidHeight = (function () {
        return this.$container.is('.grid-gallery-fluid-height');
    });

    Gallery.prototype.isImageOverlay = (function () {
        return this.$container.find('.crop').is('.image-overlay');
    });

    Gallery.prototype.isMouseShadowShow = (function () {
        return this.$container.find('.grid-gallery-caption').is('.shadow-show');
    });

    Gallery.prototype.isThumbs = (function () {
        return this.$container.is('.grid-gallery-thumbs');
    });

    Gallery.prototype.initQuicksand = (function () {
        if(this.$container.data('quicksand') == 'enabled')  {
            this.$qsEnable = true;
            this.$qsDuration = this.$container.data('quicksand-duration');
            this.$qsHolder = this.$container.find('.grid-gallery-photos:first');
            this.$qsData = this.$container.find('.grid-gallery-photos > a');
        }
    });

    Gallery.prototype.showCaption = (function () {
        this.$container.find('.grid-gallery-figcaption-wrap').each(function() {
            if ($.trim($(this).text()) === '' && !$(this).find('img').length && $(this).has('.hi-icon').length == 0) {
                $(this).closest('figcaption').remove();
            }
        });
    });

    Gallery.prototype.initWookmark = (function () {
        self = this;
        width = this.$container.data('width');
        offset = 0;
        outerOffset = 0;

        if (this.$container.data('offset')) {
            offset = this.$container.data('offset');
        }

        if (this.$container.data('padding')) {
            outerOffset = parseInt(this.$container.data('padding'));
        }

        if (String(width).indexOf('%') > -1) {
            imagesPerRow = Math.floor(100 / parseInt(width));
            spacing = (offset * (imagesPerRow - 1)) + outerOffset * 2;
            width = (this.$container.width() - spacing) / 100 * parseInt(width);
            $.each(this.$container.find('img'), function() {
                aspectRatio = $(this).width() / $(this).height();
                $(this).width(width);
                $(this).height(width / aspectRatio);
            });
        }

       if (this.$container.data('columns-number')) {
            columnsNumber = parseInt(this.$container.data('columns-number'));
            spacing = (offset * (columnsNumber - 1)) + outerOffset * 2;
            width = (this.$container.width() - spacing) / 100 * Math.floor(100 / columnsNumber);
            this.$container.find('img').css({
                width: width,
                height: 'auto'
            });
        };


        if (this.$container.data('width') !== 'auto' && !this.$qsEnable) {
            this.$elements.filter(':visible').wookmark({
                autoResize:     true,
                container:      this.$container.find('.grid-gallery-photos'),
                direction:      'left',
                fillEmptySpace: false,
                flexibleWidth:  true,
                itemWidth:      width,
                offset:         offset,
                align:          this.$container.data('area-position'),
                outerOffset:    outerOffset,
                onLayoutChanged: function() {
                    setTimeout(function() {
                        self.$container.trigger('wookmark.changed');
                    }, 50);
                }
            }).css({
    			'margin': '0'
                // 'transition': 'all 0.9s ease-out',
    		});
        } 

        this.$container.find('.grid-gallery-photos').css('text-align', this.$container.data('area-position'));
        this.$container.filter(':visible').find('.grid-gallery-photos > *').filter(':visible').css({
            'float': 'none',
            'display': 'inline-block',
            'vertical-align': 'top'
        });

    });

    Gallery.prototype.initPopup = (function() {
       var popupType = this.$container.data('popup-type');

        if(popupType == 'colorbox') {
            this.$container.find('.gg-colorbox').colorbox({
                fadeOut: this.$container.data('popup-fadeOut'),
                fixed:  true,
                maxHeight: '95%',
                maxWidth: '95%',
                rel: 'grid-gallery',
                scrolling: false,
                slideshow: this.$container.data('popup-slideshow'),
                slideshowAuto: this.$container.data('popup-slideshowAuto'),
                slideshowSpeed: this.$container.data('popup-slideshow-speed'),
                speed: 350,
                transition: 'elastic',
                onComplete: function() {
                    $.colorbox.resize();
                }
            });
        }

        if(popupType == 'pretty-photo') {

            if (!this.prettyPhotoInit) {
                $prettyPhoto = this.$container.find("a[rel^='prettyPhoto']").prettyPhoto({
                    theme: 'light_square',
                    show_title: false,
                    allow_resize: true,
                    slideshow:  this.$container.data('popup-slideshow-speed'),
                    autoplay_slideshow: this.$container.data('popup-slideshowAuto'),
                    social_tools: ''
                });
                this.prettyPhotoInit = true;
            } else {
                $.prettyPhoto.refresh();
            };
        }

        if (popupType == 'photobox') {
            this.$container.find('.grid-gallery-photos').photobox('a.pbox', {
            	autoplay: this.$container.data('popup-slideshowAuto'),
            });
        }

        popupBackground = this.$container.data('popup-background');

        if (popupBackground && popupBackground.length) {

            if (popupType == 'pretty-photo') {
                style = '.pp_overlay { background-color:'+ popupBackground +'!important;}';
            };

            if (popupType == 'photobox') {
                color = this.hex2rgb(popupBackground);
                rgba = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',.95)';
                style = '#pbOverlay { background-image:none!important;background-color:'+ rgba +'!important;}';
            };

             if(popupType == 'colorbox') {
                style = '#cboxOverlay { background-image:none!important;background-color:'+ popupBackground +'!important;}';
             }

            $('<style type="text/css"> ' + style + '</style>').appendTo("head");
        }

    });


    Gallery.prototype.preventImages = (function() {
        var popupType = this.$container.data('popup-type');

        if(popupType == 'disable') {
        	$('a.gg-link').addClass('disabled');
            $('a.gg-link').on('click', function(e) {
                e.preventDefault();
            });
        }
    });

    Gallery.prototype.initFlex = (function() {
        this.$container.find('.grid-gallery-photos').flexImages({
            container: this.$container.find('.crop'),
            rowHeight: this.$container.data('height')
        });
    });

    Gallery.prototype.initSlider = (function() {
        if(this.isThumbs()) {
            $('.grid-gallery-clearfix').remove();
            this.$container.find('a').each(function() {
                var tumb = $(this).find('img').attr('src');
                $(this).attr('data-thumb', tumb);
            });
            this.$container.find('section').lightSlider({
                gallery: true,
                item: 1,
                loop:true,
                slideMargin: 0,
                thumbItem: 4,
                thumbMargin: 1
            });
        }
    });

    Gallery.prototype.initRowsMode = function() {
        var columnsNumber = parseInt(this.$container.data('columns-number'));

        if (columnsNumber) {
            var containerWidth = parseInt(this.$container.width()),
                spacing = parseInt(this.$container.data('offset')),
                scaleHeight = parseInt(this.$container.data('width')) / parseInt(this.$container.data('height')),
                elementWidth = null,
                elementHeight = null;

            //containerWidth -= columnsNumber * 2 * spacing;

            elementWidth = Math.floor((this.$container.width() - (columnsNumber - 1) * spacing) / columnsNumber);
            elementHeight = Math.floor(elementWidth / scaleHeight);

            this.$elements.each(function() {
                if (!$(this).find('.post-feed-crop').length) {                 
                    $(this).css('width', elementWidth);
                    $(this).css('height', elementHeight);
                } else {
                    $(this).find('figcaption').css('width', elementWidth);
                };
            });

            this.$elements.find('.crop').css({
                width: 'auto',
                height: 'auto'
            });
        }
    };

    Gallery.prototype.setImagesHeight = (function () {
        var $images = this.$container.find('img');

        if ($images != undefined && $images.length > 0) {
            $images.each(function () {
                var $image = $(this),
                    $wrapper = $image.parent();

                if ($image.height() < $wrapper.height()) {
                    $wrapper.css('height', $image.height());
                }
            });
        }
    });

    Gallery.prototype.setOverlayTransparency = (function () {
        this.$elements.find('figcaption, [class*="caption-with-icons"]').each(function () {
            var $caption = $(this),
                alpha    = (10 - parseInt($caption.data('alpha'), 10)) / 10,
                rgb      = $caption.css('background-color'),
                rgba     = rgb.replace(')', ', ' + alpha + ')').replace('rgb', 'rgba');


            $caption.css('background', rgba);
        });
    });

    Gallery.prototype.setIconsPosition = (function () {
        this.$elements.each(function () {
            var $element = $(this),
                $wrapper = $element.find('div.hi-icon-wrap'),
                $icons   = $element.find('a.hi-icon');

            $icons.each(function () {
                var $icon   = $(this),
                    marginY = ($element.height() / 2) - ($icon.height() / 2) - 10,
                    marginX = $wrapper.data('margin');

                $icon.css({
                    'margin-top':   Math.abs(marginY),
                    'margin-left':  marginX,
                    'margin-right': marginX
                });
            });
        });
    });

    Gallery.prototype.initCategories = (function () {

        var $defaultElement = this.$navigation.find('a[data-tag="__all__"]'),
            $elements = this.$navigation.find('a'),
            $defaultBackground = $elements.first().css('background-color');

        // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
        function shadeColor(color, percent) {   
            var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
            return "#" + (0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
        }

        bg = shadeColor('#' + this.rgb2hex($elements.first().css('borderTopColor')), 0.3);

        this.$navigation.find('a').on('click', $.proxy(function (event) {
            event.preventDefault();

            var $category   = $(event.currentTarget),
                requested   = String($category.data('tag')),
                _defaultTag = '__all__',
                currentGallery = this.$navigation.parent().attr('id');

            $elements.css('background-color', $defaultBackground);
            $category.css('background-color', bg);

            if (requested == _defaultTag) {

                this.$elements.each(function () {
                    if ($(this).parent().attr('rel')) {
                        $(this).parent().attr('rel', 'prettyPhoto['+currentGallery+']');
                    }
                }).fadeIn();

                this.correctMargin();
                this.initWookmark();

                if (!this.isFluidHeight() && this.$qsEnable) {
                    this.callQuicksand(this.$qsHolder, this.$qsData, this.$qsDuration);
                } 
                return false;
            }

            if (!this.isFluidHeight() && this.$qsEnable) {
                var $filteredData = this.$qsData.filter(function () {
                    var tags = $(this).children().data('tags');
                    if (typeof tags !== 'undefined') {
                        tags = tags.split('|');
                    }
                    return ($.inArray(requested, tags) > -1);
                });
                this.callQuicksand(this.$qsHolder, $filteredData, this.$qsDuration);
            } else {

                $hidden = $();
                $visible = $();
                this.$elements.each(function () {
                    var $element = $(this),
                        tags     = $element.data('tags');

                    if (typeof tags != 'string') {
                        tags = String(tags);
                    }

                    if (tags != undefined) {
                        tags = tags.split('|');
                    }
                    if ($.inArray(requested, tags) > -1) {
                        if ($element.parent().attr('rel')) {
                            $element.parent().attr('rel', 'prettyPhoto['+currentGallery+'-'+requested+']');
                        }
                        $visible.push(this);
                    } else {
                        $hidden.push(this);
                    }
                });

                $.when($hidden.fadeOut()).done($.proxy(function(){
                    $visible.fadeIn();
                    this.correctMargin();
                    this.initWookmark();
                }, this));
            }

        }, this));

        $elements.first().trigger('click');
    });

    Gallery.prototype.callQuicksand = function($holder, $filteredData, duration) {
        self = this;
        
        $filteredData.find('figure.grid-gallery-caption').css('margin', '0 ' + this.initialMargin + ' ' + this.initialMargin + ' 0').parent().css('clear', 'none');

        $holder.quicksand($filteredData, {
            duration: Number(duration),
            easing: 'swing',
            attribute: 'href',
        }, function() {
                $holder.css({
                    width: 'auto',
                    height: 'auto'
                }).append('<div class="grid-gallery-clearfix"></div>');
                self.initPopup();
                self.correctMargin();
            }
        );
    };

    Gallery.prototype.hidePopupCaptions = function() {
        if (this.$container.data('popup-captions') == 'hide') {
            $('<style type="text/css">#cboxTitle, #cboxCurrent, .pbCaptionText, .pp_description { display:none!important; }</style>').appendTo("head");
        }
    };

    Gallery.prototype.hidePaginationControls = (function () {
        return false;
    });

    Gallery.prototype.setImageOverlay = (function() {
        if(this.isImageOverlay()) {
            this.$container.find('.grid-gallery-caption').each(function () {
                var image = $(this).find('img');
                var crop = $(this).find('.image-overlay');
                image.css('opacity', '0.2');
                crop.css('background-color', '#424242');
                $(this).on('mouseenter', function () {
                        image.css('opacity', '1.0');
                        crop.css('background-color', 'inherit');
                    }
                );
                $(this).on('mouseleave', function () {
                    image.css('opacity', '0.2');
                    crop.css('background-color', '#424242');
                });
            });
        }
    });

    Gallery.prototype.setMouseShadow = (function() {
        var shadow = null,
            $selector = null,
            $captions = this.$container.find('.grid-gallery-caption'),
            boxShadow = $captions.filter(':first').css('box-shadow'),
            showOver = function(event) {
                if (event.type === 'mouseenter') {
                    $(this).css('box-shadow', boxShadow);
                } else {
                    $(this).css('box-shadow', 'none');
                }
            },
            hideOver = function(event) {
                if (event.type === 'mouseenter') {
                    $(this).css('box-shadow', 'none');
                } else {
                    $(this).css('box-shadow', boxShadow);
                }
            };

        if ($captions.is('.shadow-show')) {
            $captions.css('box-shadow', 'none');
            $captions.on('hover', showOver);
        } else if ($captions.is('.shadow-hide')) {
            $captions.on('hover', hideOver);
        }
    });

    Gallery.prototype.initPagination = (function () {
        var perPage = parseInt(this.$container.find('.grid-gallery-photos').data('per-page'), 10),
            buffer  = [],
            page    = 1,
            offset  = 0
            self    = this;

        if (isNaN(perPage)) {
            this.$elements.fadeIn();
            return false;
        }

        var showCurrentPage = (function (gallery) {
            gallery.$elements.removeClass('current-page').hide(350);

            $.each(buffer[gallery.pagination.currentPage], function () {
                $(this).addClass('current-page').show(function () {
                    gallery.setIconsPosition();
                    self.correctMargin();
                });
            });
            /*
            if (!gallery.isFluidHeight()) {
                $('.current-page .crop').css('height', function () {
                    var height = null;
                    $('.crop img').each(function () {
                        if($(this).height() && !height) {
                            height = $(this).height();
                        }
                    });
                    return height;
                });
            }
            */
        });

        this.pagination.limit = perPage;

        this.$elements.each($.proxy(function (index, el) {
            var currentIndex = index + 1;

            if ((currentIndex - offset) <= this.pagination.limit) {
                if (!$.isArray(buffer[page])) {
                    buffer[page] = [];
                }

                buffer[page].push(el);
            } else {
                offset += this.pagination.limit;
                page   += 1;

                buffer[page] = [el];
            }
        }, this)).hide();

        this.pagination.pages = Math.ceil(this.pagination.total / this.pagination.limit);

        var element=this.pagination.$wrapper.find('a.grid-gallery-page[data-page="1"]');
        element.css('font-size','19pt');

        this.pagination.$wrapper.find('a.grid-gallery-page').on('click', $.proxy(function (e) {
            e.preventDefault();

            var element = $(e.currentTarget);
            var galery = Gallery.prototype;
            this.pagination.$wrapper.find('a.grid-gallery-page').each(function() {
                $(this).css('font-size','inherit');
            });
            galery.selectedCategory = element.data('page');
            element.css('font-size','19pt');

            var $anchor       = $(e.currentTarget),
                requestedPage = $anchor.data('page');

            this.pagination.currentPage = requestedPage;

            showCurrentPage(this);

            return false;
        }, this));

        showCurrentPage(this);
    });

    Gallery.prototype.hex=function(x) {
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    };

    Gallery.prototype.rgb2hex = function(rgb) {
        if(rgb) {
            rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
    };

    Gallery.prototype.hex2rgb = function(hex) {

        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    Gallery.prototype.loadFontFamily = (function () {
        font = this.$container.data('caption-font-family');
        if (font && font !== 'Default') {
            WebFont.load({
                google: {
                  families: [font + ':400,800']
                }
            });
        }
    });

    Gallery.prototype.initCaptionCalculations = (function () {
        var self = this;

        this.$container.find('.grid-gallery-caption').each(function () {
            wrap = $(this).find('div.grid-gallery-figcaption-wrap');
            figcaption = $(this).find('figcaption');

            wrap.css({
                'display': 'table-cell',
                'text-align': figcaption.css('text-align')
            });

            wrap.wrap($('<div>', {
                css: {
                    display:'table',
                    height:'100%',
                    width:'100%'
                }
            }));

        });
    });

    Gallery.prototype.checkDirection = function($element, e) {
        var w = $element.width(),
            h = $element.height(),
            x = ( e.pageX - $element.offset().left - ( w / 2 )) * ( w > h ? ( h / w ) : 1 ),
            y = ( e.pageY - $element.offset().top - ( h / 2 )) * ( h > w ? ( w / h ) : 1 );

        return Math.round(( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3) % 4;
    };

    Gallery.prototype.initCaptionEffects = (function () {
        var self = this;

        $.each(this.$elements, function(index, el) {
            $el = $(el);
            if ($el.data('grid-gallery-type') == 'cube') {
                $el.on('mouseenter mouseleave', function(e) {
                    var $figcaption = $(this).find('figcaption'),
                        direction = self.checkDirection($(this), e),
                        classHelper = null;

                    switch (direction) {
                        case 0:
                            classHelper = 'cube-' + (e.type == 'mouseenter' ? 'in' : 'out') + '-top';
                            break;
                        case 1:
                            classHelper = 'cube-' + (e.type == 'mouseenter' ? 'in' : 'out') + '-right';
                            break;
                        case 2:
                            classHelper = 'cube-' + (e.type == 'mouseenter' ? 'in' : 'out') + '-bottom';
                            break;
                        case 3:
                            classHelper = 'cube-' + (e.type == 'mouseenter' ? 'in' : 'out') + '-left';
                            break;
                    }

                    $figcaption.removeClass().addClass(classHelper);
                });
            }

            if ($el.data('grid-gallery-type') == 'polaroid') { 

                if (!$(this).find('.post-feed-crop').length && !$el.hasClass('initialized')) {
                    $el.addClass('initialized');
                    width = $el.width();
                    frameWidth = 20;

                    $img = $(this).find('img');
                    scaleRatio = $img.width() / $img.height();
                    imageWidth = $img.width() - frameWidth * 2;
                    imageHeight = imageWidth / scaleRatio;

                    $img.css({    
                        'width': imageWidth + 'px',
                        'height': imageHeight + 'px',
                        'margin': frameWidth + 'px auto 0',
                    });
                    

                    $(this).css({
                        'width': $(this).width(),
                        'height': (imageHeight + frameWidth * 4) + 'px',
                        'transform': 'rotate(' + (-3 + Math.random() * (10 - 3)) + 'deg)'
                    });

                };
            }

            if ($el.data('grid-gallery-type') == 'direction-aware') {

                var overlayColor = $el.find('figcaption').css('backgroundColor'),
                alpha = parseInt($el.find('figcaption').data('alpha')),
                color = $el.find('figcaption').css('color'),
                align = $el.find('figcaption').css('text-align'),
                generateOverlayColor = function(overlayColor, alpha) {
                    overlayColor = overlayColor.split(')')[0].split('(');
                    return overlayColor[0] + 'a(' + overlayColor[1] + ', ' + (1 - alpha/10) + ')';
                };
                
                $el.find('img').attr('data-caption', '<span style="font-family:' + 
                    self.$container.data('caption-font-family') + '">' + 
                    $el.find('img').attr('data-caption') + '</span>');

                $el.sliphover({
                    target: 'img',
                    backgroundColor: generateOverlayColor(overlayColor, alpha),
                    fontColor: color,
                    textAlign: align,
                    caption: 'data-caption'
                });
            };

        });


        // On touchscreen devices show caption before do action
        $('.grid-gallery-caption').on('touchstart', function(event) {
            $caption = $(this);

            if ($caption.data('grid-gallery-type') == 'none') {
                return;
            }

            $('.grid-gallery-caption').not($caption).removeClass('hovered');

            if (!$caption.hasClass('hovered')) {
                event.preventDefault();
                event.stopPropagation();
                $caption.addClass('hovered');
                $('body').one('touchstart', function(event) {
                    $caption.removeClass('hovered');
                });
            };
        });

    });
	/**
	 * Do not margin left - first element of set, and don't marging right - last element
	 */
	 Gallery.prototype.correctMargin = (function () {
		if(!this.isFluidHeight()) {

            if (this.$qsEnable) {
                this.$elements = this.$container.find('figure.grid-gallery-caption');
            };

			var prevElement = null
			,	totalElements = this.$elements.filter(':visible').size()
            ,   rowWidth = 0
            ,   maxRowWidth = this.$container.width()
            ,   initialMargin = this.initialMargin;

            this.$elements.css('margin', '0 ' + this.initialMargin + ' ' + this.initialMargin + ' 0');
            this.$elements.parent().css('clear', 'none');

			this.$elements.filter(':visible').each(function(index){

                if (rowWidth + $(this).outerWidth() > maxRowWidth) {
                    $(prevElement).css('margin-right', 0);
                    $(this).css('margin-right', this.initialMargin);
                    $(this).parent().css('clear', 'left');
                    rowWidth = $(this).outerWidth() + parseInt(initialMargin);
                } else if (rowWidth + $(this).outerWidth() == maxRowWidth) {
                    $(this).css('margin-right', 0);
                    rowWidth = 0;
                } else {
                    rowWidth += $(this).outerWidth() + parseInt(initialMargin);
                }

				if(index == totalElements - 1) {
					$(this).css('margin-right', 0);
				}

				prevElement = this;
				
			});
		}
    });
    
    Gallery.prototype.hideTitleTooltip = (function () {
        if (this.$container.data('hide-tooltip') == true) {         
            title = '';
            this.$container.on('hover', 'a, img', function(event) {
                if (event.type == "mouseenter") {
                    title = $(this).attr('title');
                    $(this).attr({'title':''}); 
                }
                else {
                    $(this).attr({'title':title}); 
                }
            });
        };
    });

    Gallery.prototype.correctFullscreen = (function () {
        var windowWidth = $(window).width();
        this.$elements.each(function() {
            var coef = parseInt(windowWidth / $(this).width())
                , resultWidth = windowWidth / coef;
            $(this).width(resultWidth);
        });
    });

    Gallery.prototype.init = (function () {
        this.$container.imagesLoaded($.proxy(function () {

            // this.setImagesHeight();
            $(document).trigger("GalleryBeforeInit", this);

            this.initRowsMode();
            this.initQuicksand();

            this.initCaptionCalculations();
            this.initCaptionEffects();
            this.initCategories();
            this.initPagination();
            
            this.initPopup();
            this.initSlider();
            
            this.setMouseShadow();
            this.setImageOverlay();
            
            this.setOverlayTransparency();

            this.showCaption();
            this.loadFontFamily();
            this.hidePopupCaptions();
            this.preventImages();
            this.initWookmark();
            this.setIconsPosition();

            this.correctMargin();
            this.hideTitleTooltip();

            if(this.$container.attr('data-fullscreen') == 'true') {
                this.correctFullscreen();
                var self = this;
                $(window).resize(function() {
                    self.correctFullscreen();
                });
            }

            this.$container.find('.gallery-loading').hide();
            this.$container.find('.grid-gallery-photos').css({
                opacity: '1',
                transition: 'all 0.5s ease-out'
            });

            $(document).trigger("GalleryAfterInit", this);

        }, this));

		$(window).on('resize', $.proxy(function () {
			this.correctMargin();
		}, this));
    });

    window.initGridGallery = (function (el, autoInit) {
        var makeSelector = (function (el) {
            return '#' + el.id;
        });

        return new Gallery(makeSelector(el), autoInit);
    });

    window.contentLoaded = (function() {

        var $galleries = $('.grid-gallery');

        if ($galleries.length > 0) {
            $.each($galleries, (function () {
                initGridGallery(this, true);
            }));
        }

        $('.crop').css('display', 'inherit');
    });

    $(document).ready(function () {
        contentLoaded();
    }).ajaxComplete(function() {
        //contentLoaded();
    });

}(jQuery));

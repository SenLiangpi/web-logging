!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib",n(n.s=1)}([function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib",n(n.s=1)}([function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=function(){this.height=window.screen.availHeight};r.prototype.binding=function(e,t,n){let r=document.getElementsByClassName(e),o=window.screen.availHeight;window.onscroll=function(){for(let e=0;e<r.length;e++)r[e].getBoundingClientRect().top<o&&r[e].getBoundingClientRect().top>0?t():n()}};var o=r;const u=e=>e.toString().replace(/(?=(\B)(\d{3})+$)/g,",");function c(e,t){for(let n in e)if(-1==t.indexOf(e[n]))return!1;return!0}function a(e,t){const n=new Set(t);for(let t in e)if(0==n.has(e[t]))return!1;return!0}function i(e,t){return-1!=e.indexOf(t)&&e.splice(e.findIndex(e=>e==t),1)}function s(e){var t=e.length;if(t<2)return e;var n=Math.floor(t/2),r=e.slice(0,n),o=e.slice(n);return function(e,t){for(var n=[];e.length>0&&t.length>0;)e[0]<=t[0]?n.push(e.shift()):n.push(t.shift());for(;e.length;)n.push(e.shift());for(;t.length;)n.push(t.shift());return n}(mergeSort(r),mergeSort(o))}function l(e){let t,n;for(let r=1;r<e.length;r++){for(t=e[r],n=r-1;n>-1&&e[n]>t;)e[n+1]=e[n],n--;e[n+1]=t}return e}function d(e){const t=Object.create(Array.prototype);return["push","pop","shift","unshift","splice","sort","reverse"].forEach(n=>{const r=Array.prototype[n];t[n]=function(...t){r.apply(this,t),e(n)}}),t}function f(e,t,n){let r=atob(e.split(",")[1]),o=[];for(var u=0;u<r.length;u++)o.push(r.charCodeAt(u));return new File([new Uint8Array(o)],n,{type:t})}function h(e){if(e)return;let t=new Date(e).getUTCDay();0==t?t=6:t-=1;let n=new Date(e).getTime()-864e5*t;return[n,n+5184e5]}function p(e){let t,n,r=new Date(date),o=new Number(r.getFullYear()),u=new Number(r.getMonth())+1;return[t=o+"/"+u+"/01 12:00:00",n=12==u?new Date(o+1+"/01/01 12:00:00").getTime()-864e5:new Date(o+"/"+(u+1)+"/01 12:00:00").getTime()-864e5]}function g(){let e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0;for(let r in t)if(e.indexOf(t[r])>0){n=!1;break}return n}function b(e){let t=null;return null!=window.createObjcectURL?t=window.createOjcectURL(e):null!=window.URL?t=window.URL.createObjectURL(e):null!=window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t}function m(e){return new Promise((t,n)=>{let r;window.XMLHttpRequest?r=new XMLHttpRequest:window.ActiveXObject&&(r=new ActiveXObject("Microsoft.XMLHTTP")),null!=r?(r.open(e.type,baseUrl+e.url,e.async||!0),r.setRequestHeader("Content-type","application/json;charset=UTF-8"),r.send(JSON.stringify(e.data)),r.onreadystatechange=()=>{4==r.readyState&&(200==r.status?t(JSON.parse(r.response)):n(JSON.parse(r)))}):console.log("你的不支持XMLHTTP！")})}function w(e,t){var n={};return function e(n,r){for(let o in n){let u=n[o];Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:function(){return u},set:function(e){u=e,t()}});try{"Object"==n[o].constructor.name&&e(n[o],r[o])}catch(e){console.log(e)}}}(e,n),n}class y{sketchpad(e){this.sketchpadDom=e.id,this.sketchpadIf=!1;const t=document.getElementById(this.sketchpadDom),n=t.getContext("2d");let r,o,u=!1;t.addEventListener("touchstart",function(e){if(1==e.targetTouches.length){e.preventDefault();var t=e.targetTouches[0];u=!0,c(t.pageX-this.offsetLeft,t.pageY-this.offsetTop,!1)}},!1),t.addEventListener("touchmove",function(e){if(1==e.targetTouches.length){e.preventDefault();var t=e.targetTouches[0];u&&c(t.pageX-this.offsetLeft,t.pageY-this.offsetTop,!0)}},!1),t.addEventListener("touchend",function(e){1==e.targetTouches.length&&(e.preventDefault(),u=!1)},!1),t.onmousedown=function(e){u=!0,c(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,!1)},t.onmousemove=function(e){u&&c(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,!0)},t.onmouseup=function(e){u=!1};let c=(e,t,u)=>{u&&(sketchpadIf=!0,n.strokeStyle="#000",n.lineWidth=4,n.lineJoin="round",n.beginPath(),n.moveTo(r,o),n.lineTo(e,t),n.closePath(),n.stroke()),r=e,o=t}}clearArea(){if(this.sketchpadIf){const e=document.getElementById(this.sketchpadDom).getContext("2d");e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),this.sketchpadIf=!1}}saveImageInfo(){return this.sketchpadIf?document.getElementById(this.sketchpadDom).toDataURL("image/png"):this.sketchpadIf}}const v=e=>{window.onscroll=()=>{(function(){let e=0,t=0,n=0;return document.body&&(t=document.body.scrollHeight),document.documentElement&&(n=document.documentElement.scrollHeight),e=t-n>0?t:n})()<function(){let e=0;return e="CSS1Compat"==document.compatMode?document.getElementById("visibleHeight").offsetHeight:document.body.clientHeight}()+function(){let e=0,t=0,n=0;return document.body&&(t=document.body.scrollTop),document.documentElement&&(n=document.documentElement.scrollTop),(e=t-n>0?t:n)+1}()&&e()}};function k(e,t){return new Promise((n,r)=>{const o=b(e);var u=new Image;u.src=o,u.onload=()=>{const r=u.width,c=u.height;let a=1;if(r>t||c>t){a=r>c?r/t:c/t;var i=document.createElement("canvas");i.width=r/a,i.height=c/a;var s=i.getContext("2d"),l=new Image;l.src=o,l.onload=function(){s.width=i.width,s.height=i.height,s.drawImage(this,0,0,s.width,s.height);const e=f(i.toDataURL("image/jpeg",.9),"image/jpeg","pipi.jpg");n(e)}}else n(e)}})}class j{constructor(){this.queue=[]}enqueue_before(e){this.queue.push(e)}enqueue_after(e){this.queue.unshift(e)}dequeue_before(){return this.queue.pop()}dequeue_after(){return this.queue.shift()}data_type(){return this.queue.length>0}get_queue(){return this.queue}}class T{constructor(e){this.queue=new j,this.dequeueType=!0,e.lock||!1===e.lock?this.lock=e.lock:this.lock=!0,e.callback?this.callback=e.callback:this.callback=()=>{}}enqueue(e){this.queue.enqueue_after(e),this.lock&&this.dequeue()}dequeue(){let e=()=>{if(this.queue.data_type()&&this.lock){let t=this.queue.dequeue_before();this.callback(t),e()}else this.dequeueType=!0};this.dequeueType&&this.lock&&(this.dequeueType=!1,e())}controller(e){this.lock=e}}n.d(t,"domArea",function(){return o}),n.d(t,"commaSeparated",function(){return u}),n.d(t,"search",function(){return c}),n.d(t,"search1",function(){return a}),n.d(t,"ArrDelete",function(){return i}),n.d(t,"Collocate",function(){return s}),n.d(t,"sort",function(){return l}),n.d(t,"getBlobBydataURI",function(){return f}),n.d(t,"dateWeek",function(){return h}),n.d(t,"dateMonth",function(){return p}),n.d(t,"equipmentJudgment",function(){return g}),n.d(t,"getObjectURL",function(){return b}),n.d(t,"http",function(){return m}),n.d(t,"recursion",function(){return w}),n.d(t,"sketchpad",function(){return y}),n.d(t,"swipingBottom",function(){return v}),n.d(t,"pictureCompression",function(){return k}),n.d(t,"arrayMonitor",function(){return d}),n.d(t,"queue",function(){return j}),n.d(t,"queue_basis",function(){return T})}])},function(e,t,n){"use strict";n.r(t);class r{constructor(e){this.V=e.v,this.dbName=e.db,this.dbData=e.dbData}open(){return window.indexedDB||window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."),new Promise((e,t)=>{let n=window.indexedDB.open(this.dbName,this.V);n.onsuccess=t=>{this.db=n.result,e(!1)},n.onerror=e=>{t(e)},n.onupgradeneeded=t=>{this.db=t.target.result;for(let t in this.dbData)this.db.objectStoreNames.contains(t)||(this.db.createObjectStore(t,{keyPath:"key"}).transaction.oncomplete=t=>{e(!0)})}})}addData(e,t){return new Promise((n,r)=>{try{var o=this.db.transaction([e],"readwrite").objectStore(e).add(t);o.onsuccess=e=>{n(e)},o.onerror=e=>{r(e)}}catch(e){console.log(e),r(!1)}})}read(e,t){return new Promise((n,r)=>{try{var o=this.db.transaction([e]).objectStore(e).get(t);o.onsuccess=e=>{n(o)},o.onerror=e=>{r(e)}}catch(e){console.log(e),r(!1)}})}readAll(e,t){return new Promise((n,r)=>{try{var o=this.db.transaction(t).objectStore(t),u=[];o.openCursor(e).onsuccess=e=>{let t=e.target.result;t?(u.push(t.value),t.continue()):n(u)}}catch(e){console.log(e),r(!1)}})}update(e,t){return new Promise((n,r)=>{try{var o=this.db.transaction([e],"readwrite").objectStore(e).put(t);o.onsuccess=e=>{n(e)},o.onerror=e=>{r(e)}}catch(e){console.log(e),r(!1)}})}remove(e,t){return new Promise((n,r)=>{try{var o=this.db.transaction([e],"readwrite").objectStore(e).delete(t);o.onsuccess=e=>{n(e)},o.onerror=e=>{r(e)}}catch(e){console.log(e),r(!1)}})}allLength(e){return new Promise((t,n)=>{try{var r=this.db.transaction([e],"readonly").objectStore(e).count();r.onsuccess=()=>{t(r.result)},r.onerror=e=>{n(e)}}catch(e){console.log(e),n(!1)}})}}const o={};let u,c=new(n(0).queue_basis)({lock:!1,callback:e=>{switch(e.type){case"add":u.addData(e.storeNames,e.data).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"read":u.read(e.storeNames,e.key).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"readAll":u.readAll(e.condition,e.storeNames).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"update":u.update(e.storeNames,e.data).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"remove":u.remove(e.storeNames,e.key).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"allLength":u.allLength(e.storeNames).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})})}}});o.install=(e,t)=>{(u=new r({v:t.v,db:t.name,dbData:t.dbData})).open().then(e=>{c.controller(!0),c.dequeue()}).catch(e=>{console.log(e)})},o.db=class{constructor(e){this.name=e}add(e){return new Promise((t,n)=>{c.enqueue({type:"add",storeNames:this.name,data:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}read(e){return new Promise((t,n)=>{c.enqueue({type:"read",storeNames:this.name,key:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}readAll(e){return new Promise((t,n)=>{c.enqueue({type:"readAll",storeNames:this.name,condition:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}update(e){return new Promise((t,n)=>{c.enqueue({type:"update",storeNames:this.name,data:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}remove(e){return new Promise((t,n)=>{c.enqueue({type:"remove",storeNames:this.name,key:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}allLength(){return new Promise((e,t)=>{c.enqueue({type:"allLength",storeNames:this.name,callback:n=>{n.code?e(n.result):t(n.result)}})})}},t.default=o}])},function(e,t,n){"use strict";n.r(t),n.d(t,"webLoggingWrite",function(){return c}),n.d(t,"webLoggingList",function(){return a});var r=n(0),o=n.n(r);o.a.install("",{v:1,name:"d2ViTG9nZ2luZwog",dbData:{webLogging:""}});let u=new o.a.db("webLogging");function c(e){let t=0,n=()=>{u.add({key:(new Date).getTime(),value:e}).then(e=>{console.log("日志 ok")}).catch(e=>{var r=parseInt(10*Math.random())+1;t<5&&(t++,setTimeout(()=>{n()},r))})};n()}function a(e,t){return new Promise((n,r)=>{let o=IDBKeyRange.upperBound((new Date).getTime()+1e4);e&&t?o=IDBKeyRange.bound(new Date(e).getTime(),new Date(t).getTime()):e?o=IDBKeyRange.lowerBound(new Date(e).getTime()):t&&(o=IDBKeyRange.upperBound(new Date(t).getTime())),u.readAll(o).then(e=>{n(e)}).catch(e=>{r(e)})})}u.readAll(IDBKeyRange.upperBound((new Date).getTime()-1296e6)).then(e=>{console.log(e.length);for(let t in e)u.remove(e[t].key).then(e=>{console.log("delete")}).catch(e=>{console.log(e)})}).catch(e=>{console.log(e)})}])});
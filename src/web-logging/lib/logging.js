!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib",n(n.s=1)}([function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib",n(n.s=1)}([function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=function(){this.height=window.screen.availHeight};o.prototype.binding=function(e,t,n){let o=document.getElementsByClassName(e),r=window.screen.availHeight;window.onscroll=function(){for(let e=0;e<o.length;e++)o[e].getBoundingClientRect().top<r&&o[e].getBoundingClientRect().top>0?t():n()}};var r=o;const i=e=>e.toString().replace(/(?=(\B)(\d{3})+$)/g,",");function a(e,t){for(let n in e)if(-1==t.indexOf(e[n]))return!1;return!0}function l(e,t){const n=new Set(t);for(let t in e)if(0==n.has(e[t]))return!1;return!0}function u(e,t){return-1!=e.indexOf(t)&&e.splice(e.findIndex(e=>e==t),1)}function c(e){var t=e.length;if(t<2)return e;var n=Math.floor(t/2),o=e.slice(0,n),r=e.slice(n);return function(e,t){for(var n=[];e.length>0&&t.length>0;)e[0]<=t[0]?n.push(e.shift()):n.push(t.shift());for(;e.length;)n.push(e.shift());for(;t.length;)n.push(t.shift());return n}(mergeSort(o),mergeSort(r))}function s(e){let t,n;for(let o=1;o<e.length;o++){for(t=e[o],n=o-1;n>-1&&e[n]>t;)e[n+1]=e[n],n--;e[n+1]=t}return e}function d(e){const t=Object.create(Array.prototype);return["push","pop","shift","unshift","splice","sort","reverse"].forEach(n=>{const o=Array.prototype[n];t[n]=function(...t){o.apply(this,t),e(n)}}),t}function g(e,t,n){let o=atob(e.split(",")[1]),r=[];for(var i=0;i<o.length;i++)r.push(o.charCodeAt(i));return new File([new Uint8Array(r)],n,{type:t})}function f(e){if(e)return;let t=new Date(e).getUTCDay();0==t?t=6:t-=1;let n=new Date(e).getTime()-864e5*t;return[n,n+5184e5]}function p(e){let t,n,o=new Date(date),r=new Number(o.getFullYear()),i=new Number(o.getMonth())+1;return[t=r+"/"+i+"/01 12:00:00",n=12==i?new Date(r+1+"/01/01 12:00:00").getTime()-864e5:new Date(r+"/"+(i+1)+"/01 12:00:00").getTime()-864e5]}function h(){let e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0;for(let o in t)if(e.indexOf(t[o])>0){n=!1;break}return n}function m(e){let t=null;return null!=window.createObjcectURL?t=window.createOjcectURL(e):null!=window.URL?t=window.URL.createObjectURL(e):null!=window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t}function b(e){return new Promise((t,n)=>{let o;window.XMLHttpRequest?o=new XMLHttpRequest:window.ActiveXObject&&(o=new ActiveXObject("Microsoft.XMLHTTP")),null!=o?(o.open(e.type,baseUrl+e.url,e.async||!0),o.setRequestHeader("Content-type","application/json;charset=UTF-8"),o.send(JSON.stringify(e.data)),o.onreadystatechange=()=>{4==o.readyState&&(200==o.status?t(JSON.parse(o.response)):n(JSON.parse(o)))}):console.log("你的不支持XMLHTTP！")})}function w(e,t){var n={};return function e(n,o){for(let r in n){let i=n[r];Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:function(){return i},set:function(e){i=e,t()}});try{"Object"==n[r].constructor.name&&e(n[r],o[r])}catch(e){console.log(e)}}}(e,n),n}class y{sketchpad(e){this.sketchpadDom=e.id,this.sketchpadIf=!1;const t=document.getElementById(this.sketchpadDom),n=t.getContext("2d");let o,r,i=!1;t.addEventListener("touchstart",function(e){if(1==e.targetTouches.length){e.preventDefault();var t=e.targetTouches[0];i=!0,a(t.pageX-this.offsetLeft,t.pageY-this.offsetTop,!1)}},!1),t.addEventListener("touchmove",function(e){if(1==e.targetTouches.length){e.preventDefault();var t=e.targetTouches[0];i&&a(t.pageX-this.offsetLeft,t.pageY-this.offsetTop,!0)}},!1),t.addEventListener("touchend",function(e){1==e.targetTouches.length&&(e.preventDefault(),i=!1)},!1),t.onmousedown=function(e){i=!0,a(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,!1)},t.onmousemove=function(e){i&&a(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,!0)},t.onmouseup=function(e){i=!1};let a=(e,t,i)=>{i&&(sketchpadIf=!0,n.strokeStyle="#000",n.lineWidth=4,n.lineJoin="round",n.beginPath(),n.moveTo(o,r),n.lineTo(e,t),n.closePath(),n.stroke()),o=e,r=t}}clearArea(){if(this.sketchpadIf){const e=document.getElementById(this.sketchpadDom).getContext("2d");e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),this.sketchpadIf=!1}}saveImageInfo(){return this.sketchpadIf?document.getElementById(this.sketchpadDom).toDataURL("image/png"):this.sketchpadIf}}const v=e=>{window.onscroll=()=>{(function(){let e=0,t=0,n=0;return document.body&&(t=document.body.scrollHeight),document.documentElement&&(n=document.documentElement.scrollHeight),e=t-n>0?t:n})()<function(){let e=0;return e="CSS1Compat"==document.compatMode?document.getElementById("visibleHeight").offsetHeight:document.body.clientHeight}()+function(){let e=0,t=0,n=0;return document.body&&(t=document.body.scrollTop),document.documentElement&&(n=document.documentElement.scrollTop),(e=t-n>0?t:n)+1}()&&e()}};function x(e,t){return new Promise((n,o)=>{const r=m(e);var i=new Image;i.src=r,i.onload=()=>{const o=i.width,a=i.height;let l=1;if(o>t||a>t){l=o>a?o/t:a/t;var u=document.createElement("canvas");u.width=o/l,u.height=a/l;var c=u.getContext("2d"),s=new Image;s.src=r,s.onload=function(){c.width=u.width,c.height=u.height,c.drawImage(this,0,0,c.width,c.height);const e=g(u.toDataURL("image/jpeg",.9),"image/jpeg","pipi.jpg");n(e)}}else n(e)}})}class k{constructor(){this.queue=[]}enqueue_before(e){this.queue.push(e)}enqueue_after(e){this.queue.unshift(e)}dequeue_before(){return this.queue.pop()}dequeue_after(){return this.queue.shift()}data_type(){return this.queue.length>0}get_queue(){return this.queue}}class _{constructor(e){this.queue=new k,this.dequeueType=!0,e.lock||!1===e.lock?this.lock=e.lock:this.lock=!0,e.callback?this.callback=e.callback:this.callback=()=>{}}enqueue(e){this.queue.enqueue_after(e),this.lock&&this.dequeue()}dequeue(){let e=()=>{if(this.queue.data_type()&&this.lock){let t=this.queue.dequeue_before();this.callback(t),e()}else this.dequeueType=!0};this.dequeueType&&this.lock&&(this.dequeueType=!1,e())}controller(e){this.lock=e}}n.d(t,"domArea",function(){return r}),n.d(t,"commaSeparated",function(){return i}),n.d(t,"search",function(){return a}),n.d(t,"search1",function(){return l}),n.d(t,"ArrDelete",function(){return u}),n.d(t,"Collocate",function(){return c}),n.d(t,"sort",function(){return s}),n.d(t,"getBlobBydataURI",function(){return g}),n.d(t,"dateWeek",function(){return f}),n.d(t,"dateMonth",function(){return p}),n.d(t,"equipmentJudgment",function(){return h}),n.d(t,"getObjectURL",function(){return m}),n.d(t,"http",function(){return b}),n.d(t,"recursion",function(){return w}),n.d(t,"sketchpad",function(){return y}),n.d(t,"swipingBottom",function(){return v}),n.d(t,"pictureCompression",function(){return x}),n.d(t,"arrayMonitor",function(){return d}),n.d(t,"queue",function(){return k}),n.d(t,"queue_basis",function(){return _})}])},function(e,t,n){"use strict";n.r(t);class o{constructor(e){this.V=e.v,this.dbName=e.db,this.dbData=e.dbData}open(){return window.indexedDB||window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."),new Promise((e,t)=>{let n=window.indexedDB.open(this.dbName,this.V);n.onsuccess=t=>{this.db=n.result,e(!1)},n.onerror=e=>{t(e)},n.onupgradeneeded=t=>{this.db=t.target.result;for(let t in this.dbData)this.db.objectStoreNames.contains(t)||(this.db.createObjectStore(t,{keyPath:"key"}).transaction.oncomplete=t=>{e(!0)})}})}addData(e,t){return new Promise((n,o)=>{try{var r=this.db.transaction([e],"readwrite").objectStore(e).add(t);r.onsuccess=e=>{n(e)},r.onerror=e=>{o(e)}}catch(e){console.log(e),o(!1)}})}read(e,t){return new Promise((n,o)=>{try{var r=this.db.transaction([e]).objectStore(e).get(t);r.onsuccess=e=>{n(r)},r.onerror=e=>{o(e)}}catch(e){console.log(e),o(!1)}})}readAll(e,t){return new Promise((n,o)=>{try{var r=this.db.transaction(t).objectStore(t),i=[];r.openCursor(e).onsuccess=e=>{let t=e.target.result;t?(i.push(t.value),t.continue()):n(i)}}catch(e){console.log(e),o(!1)}})}update(e,t){return new Promise((n,o)=>{try{var r=this.db.transaction([e],"readwrite").objectStore(e).put(t);r.onsuccess=e=>{n(e)},r.onerror=e=>{o(e)}}catch(e){console.log(e),o(!1)}})}remove(e,t){return new Promise((n,o)=>{try{var r=this.db.transaction([e],"readwrite").objectStore(e).delete(t);r.onsuccess=e=>{n(e)},r.onerror=e=>{o(e)}}catch(e){console.log(e),o(!1)}})}allLength(e){return new Promise((t,n)=>{try{var o=this.db.transaction([e],"readonly").objectStore(e).count();o.onsuccess=()=>{t(o.result)},o.onerror=e=>{n(e)}}catch(e){console.log(e),n(!1)}})}}const r={};let i,a=new(n(0).queue_basis)({lock:!1,callback:e=>{switch(e.type){case"add":i.addData(e.storeNames,e.data).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"read":i.read(e.storeNames,e.key).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"readAll":i.readAll(e.condition,e.storeNames).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"update":i.update(e.storeNames,e.data).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"remove":i.remove(e.storeNames,e.key).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})});break;case"allLength":i.allLength(e.storeNames).then(t=>{e.callback({code:!0,result:t})}).catch(t=>{e.callback({code:!1,result:t})})}}});r.install=(e,t)=>{(i=new o({v:t.v,db:t.name,dbData:t.dbData})).open().then(e=>{a.controller(!0),a.dequeue()}).catch(e=>{console.log(e)})},r.db=class{constructor(e){this.name=e}add(e){return new Promise((t,n)=>{a.enqueue({type:"add",storeNames:this.name,data:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}read(e){return new Promise((t,n)=>{a.enqueue({type:"read",storeNames:this.name,key:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}readAll(e){return new Promise((t,n)=>{a.enqueue({type:"readAll",storeNames:this.name,condition:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}update(e){return new Promise((t,n)=>{a.enqueue({type:"update",storeNames:this.name,data:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}remove(e){return new Promise((t,n)=>{a.enqueue({type:"remove",storeNames:this.name,key:e,callback:e=>{e.code?t(e.result):n(e.result)}})})}allLength(){return new Promise((e,t)=>{a.enqueue({type:"allLength",storeNames:this.name,callback:n=>{n.code?e(n.result):t(n.result)}})})}},t.default=r}])},function(e,t,n){"use strict";n.r(t),n.d(t,"webLoggingWrite",function(){return c}),n.d(t,"webLoggingList",function(){return s}),n.d(t,"webLoggingIn",function(){return d});var o=n(0),r=n.n(o);function i(e){let t=new Date(e);return`${t.getFullYear()}/${(1*t.getMonth()+1>=10?"":"0")+(1*t.getMonth()+1)}/${(1*t.getDate()>=10?"":"0")+t.getDate()} ${(1*t.getHours()>=10?"":"0")+t.getHours()}:${(1*t.getMinutes()>=10?"":"0")+t.getMinutes()}:${(1*t.getSeconds()>=10?"":"0")+t.getSeconds()}`}r.a.install("",{v:1,name:"d2ViTG9nZ2luZwog",dbData:{webLogging:""}});let a=new r.a.db("webLogging"),l=[];function u(e){a.update({key:"webLogging_logName_list",value:e}).then(e=>{console.log("ok")}).catch(e=>{console.log(e)})}function c(e){e.location=location.href;let t=0,n=()=>{a.add({key:(new Date).getTime(),value:e}).then(t=>{console.log("日志 ok"),l.includes(e.logName)||(l.push(e.logName),u(l))}).catch(e=>{var o=parseInt(10*Math.random())+1;t<5&&(t++,setTimeout(()=>{n()},o))})};n()}function s(e,t,n){return new Promise((o,r)=>{let i=IDBKeyRange.upperBound((new Date).getTime()+1e4);e&&t?i=IDBKeyRange.bound(new Date(e).getTime(),new Date(t).getTime()):e?i=IDBKeyRange.lowerBound(new Date(e).getTime()):t&&(i=IDBKeyRange.upperBound(new Date(t).getTime())),a.readAll(i).then(e=>{if(console.log(n),n&&"all"!=n){let t=[];for(let o in e)e[o].value.logName==n&&t.push(e[o]);o(t)}else o(e)}).catch(e=>{r(e)})})}function d(e){e&&function(){let e=document.getElementsByTagName("body")[0],t=document.createElement("dev");t.className="web-logging",t.id="web_logging",t.style.height="100vh",e.append(t),t.innerHTML='\n    <div style="position: fixed;bottom: 5vw;left: 0;padding: 10px 15px;border-radius: 0 50px 50px 0;cursor: pointer;color: #fff;\n    z-index: 9999;background-image: linear-gradient(90deg,#e52e71,#ff8a00);opacity: 0.8;"\n    onclick="web_logging.loggingButton()">logging</div>\n    <div id="web_logging_list" style="display: none;width: 100vw;position: fixed;top: 0;z-index: 9998;\n    background-color: rgba(16, 14, 23, 0.8);height: 100vh; overflow: auto;">\n      <input id="input_1" type="text" style="width: 35vw;\n      outline: none;\n      color: #fff;\n      border: 1px solid transparent;\n      border-image: linear-gradient(to left,#ff8a00,#e52e71);\n      border-image-slice: 10;\n      padding: 5px;\n      margin-left: -1px;\n      margin-top: 20px;\n      max-width: 220px;\n      font-size: 12px;\n      background-color: rgba(0,0,0,0);" />\n      <input id="input_2" type="text" style="width: 35vw;\n      outline: none;\n      color: #fff;\n      border: 1px solid transparent;\n      border-image: linear-gradient(to left,#e52e71,#ff8a00);\n      border-image-slice: 10;\n      padding: 5px;\n      margin-left: 5px;\n      margin-top: 20px;\n      max-width: 220px;\n      font-size: 12px;\n      background-color: rgba(0,0,0,0);" />\n      <select name="pets" id="webLogging_logName_select" style="\n      width: 35vw;\n      outline: none;\n      color: #fff;\n      border: 1px solid transparent;\n      border-image: linear-gradient(to left,#ff8a00,#e52e71);\n      border-image-slice: 10;\n      padding: 5px;\n      margin-left: -1px;\n      margin-top: 10px;\n      max-width: 220px;\n      font-size: 12px;\n      background-color: rgba(0,0,0,0);"\n      ">\n      </select>\n      <button onclick="web_logging.ok()" name="button" style="width: 10vw;border-radius: 0 15px 15px 0;width: 15vw;\n      padding: 7px 0;border: 0;margin-left: 5px;max-width: 120px;outline: none;\n      background-image: linear-gradient(90deg,#e52e71,#ff8a00);border: 0;color: #fff;">ok</button>\n      <div id="logging_lists" style="padding-right: 12px;margin-top: 10px"></div>\n      <div style="height: 15px;"></div>\n    </div>\n  ';let n=document.getElementById("web_logging_list"),o=document.getElementById("logging_lists"),r=document.getElementById("webLogging_logName_select"),a=document.getElementById("input_1"),u=document.getElementById("input_2");window.web_logging.loggingButton=()=>{"none"==n.style.display?(window.web_logging.loggingList(a.value,u.value,r.value),function(){let e='<option value="all" style="color: #000;">全部</option>';for(let t in l)e+=`<option value="${l[t]}" style="color: #000;">${l[t]}</option>`;r.innerHTML=e,r.value=window.web_logging.webLogging_logName_select_value}(),n.style.display="block"):n.style.display="none"},window.web_logging.ok=()=>{window.web_logging.webLogging_logName_select_value=r.value,window.web_logging.loggingList(a.value,u.value,r.value)},window.web_logging.loggingList=(e,t,n)=>{s(e,t,n).then(e=>{console.log(e.length);let t="";for(let n in e){let o=(new Date).getTime()+"_"+parseInt(1e9*Math.random());t+=`<div style="background-image: linear-gradient(90deg,#e52e71,#ff8a00);width: 95vw;\n        padding: 1px 1px 1px 0;\n        margin-top: 8px;border-radius: 0 20px 20px 0;\n        margin-top: 10px;">\n        <div style="background: #201c29;\n        color: #a1a1af;border-radius: 0 20px 20px 0;\n        font-size: 12px;\n        text-align: left;">\n        <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding: 8px 10px;cursor: pointer;\n        margin: 0;" onclick="\n        if(document.getElementById('${o}').style.display == 'none'){\n          document.getElementById('${o}').style.display = 'block';\n        }else{\n          document.getElementById('${o}').style.display = 'none';\n        }">\n        [${i(e[n].key)}] : [${e[n].value.logName}] [${e[n].value.location}] : ${e[n].value.remarks}\n        </p>\n        <div id="${o}" style="border-top: 1px solid transparent;\n        border-image: linear-gradient(to left,#ff8a00,#e52e71);\n        border-image-slice: 10;line-height: 18px;padding: 5px 10px;display: none;">\n          <p style="margin: 0;">time:${i(e[n].key)}</p>\n          <p style="margin: 0;">logName:${e[n].value.logName}</p>\n          <p style="margin: 0;">location:${e[n].value.location}</p>\n          <p style="margin: 0;">remarks:${e[n].value.remarks}</p>\n        </div>\n        </div></div>`}o.innerHTML=t}).catch(e=>{console.log(e)})};let c=(new Date).getTime();a.value=i(c-5e3),u.value=i(c+864e5),window.web_logging.loggingList(a.value,u.value,r.value),window.web_logging.webLogging_logName_select_value="all",d=0,g=document.getElementsByTagName("html")[0],f=document.getElementsByTagName("body")[0],g.onclick=function(e){var t=document.createElement("b");t.style.color="#e91e63",t.style.zIndex=9999,t.style.position="fixed",t.style.select="none";var n=e.pageX,o=e.pageY;switch(t.style.left=n-10+"px",t.style.top=o-20+"px",clearInterval(r),++d){case 10:t.innerText="OωO";break;case 20:t.innerText="(๑•́ ∀ •̀๑)";break;case 30:t.innerText="(๑•́ ₃ •̀๑)";break;case 40:t.innerText="(๑•̀_•́๑)";break;case 50:t.innerText="（￣へ￣）";break;case 60:t.innerText="(╯°口°)╯(┴—┴";break;case 70:t.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:t.innerText="╮(｡>口<｡)╭";break;case 90:t.innerText="( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";break;case 100:case 101:case 102:case 103:case 104:case 105:t.innerText="(ꐦ°᷄д°᷅)";break;default:t.innerText="(●'◡'●)"}t.style.fontSize=10*Math.random()+8+"px",t.style.width="240px",t.style.pointerEvents="none";var r,i=0;setTimeout(function(){r=setInterval(function(){150==++i&&(clearInterval(r),f.removeChild(t)),t.style.top=o-20-i+"px",t.style.opacity=(150-i)/120},10)},70),f.appendChild(t)};var d,g,f}()}a.readAll(IDBKeyRange.upperBound((new Date).getTime()-1296e6)).then(e=>{console.log(e.length);for(let t in e)a.remove(e[t].key).then(e=>{console.log("delete")}).catch(e=>{console.log(e)})}).catch(e=>{console.log(e)}),a.read("webLogging_logName_list").then(e=>{if(e.result.value){for(let t in e.result.value)l.includes(e.result.value[t])&&l.push(e.result.value[t]);u(l)}}).catch(e=>{console.log(e)})}])});
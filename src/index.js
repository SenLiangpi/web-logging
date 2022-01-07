/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-04-20 10:21:32
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-11-03 17:47:46
 */
import dataDB from 'amx-indexeddb'
function timeFormat(a){
  let myDate = new Date(a);
  return `${myDate.getFullYear()}/${(((myDate.getMonth()*1)+1)>=10 ? '' : '0') + ((myDate.getMonth()*1)+1)}/${((myDate.getDate()*1)>=10 ? '' : '0') + myDate.getDate()} ${((myDate.getHours()*1)>=10 ? '' : '0') + myDate.getHours()}:${((myDate.getMinutes()*1)>=10 ? '' : '0') + myDate.getMinutes()}:${((myDate.getSeconds()*1)>=10 ? '' : '0') + myDate.getSeconds()}`
}
// function happy(){
//   var click_cnt = 0;
//   var $html = document.getElementsByTagName("html")[0];
//   var $body = document.getElementsByTagName("body")[0];
//   $html.onclick = function(e) {
//       var $elem = document.createElement("b");
//       $elem.style.color = "#e91e63";
//       $elem.style.zIndex = 9999;
//       $elem.style.position = "fixed";
//       $elem.style.select = "none";
//       var x = e.pageX;
//       var y = e.pageY;
//       $elem.style.left = (x - 10) + "px";
//       $elem.style.top = (y - 20) + "px";
//       clearInterval(anim);
//       switch (++click_cnt) {
//           case 10:
//               $elem.innerText = "OωO";
//               break;
//           case 20:
//               $elem.innerText = "(๑•́ ∀ •̀๑)";
//               break;
//           case 30:
//               $elem.innerText = "(๑•́ ₃ •̀๑)";
//               break;
//           case 40:
//               $elem.innerText = "(๑•̀_•́๑)";
//               break;
//           case 50:
//               $elem.innerText = "（￣へ￣）";
//               break;
//           case 60:
//               $elem.innerText = "(╯°口°)╯(┴—┴";
//               break;
//           case 70:
//               $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
//               break;
//           case 80:
//               $elem.innerText = "╮(｡>口<｡)╭";
//               break;
//           case 90:
//               $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
//               break;
//           case 100:
//           case 101:
//           case 102:
//           case 103:
//           case 104:
//           case 105:
//               $elem.innerText = "(ꐦ°᷄д°᷅)";
//               break;
//           default:
//               // $elem.innerText = "❤";
//               $elem.innerText = "(●'◡'●)";
//               break;
//       }
//       $elem.style.fontSize = Math.random() * 10 + 8 + "px";
//       $elem.style.width = '240px';
//       $elem.style.pointerEvents = "none";
//       var increase = 0;
//       var anim;
//       setTimeout(function() {
//           anim = setInterval(function() {
//               if (++increase == 150) {
//                   clearInterval(anim);
//                   $body.removeChild($elem);
//               }
//               $elem.style.top = y - 20 - increase + "px";
//               $elem.style.opacity = (150 - increase) / 120;
//           }, 10);
//       }, 70);
//       $body.appendChild($elem);
//   };
// };

dataDB.install('',{v: 1,name: 'd2ViTG9nZ2luZwog',dbData: { webLogging: '' }})

let webLogging = new dataDB.db('webLogging'),webLogging_logName_list = [];
//获取总数据 条数
// webLogging.allLength().then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// });
webLogging.readAll(IDBKeyRange.upperBound(new Date().getTime()-(1000*60*60*24*15))).then((result) => {
  console.log(result.length)
  for(let a in result){
    webLogging.remove(result[a].key).then((result1) => {
      console.log('delete')
    }).catch((err) => {
      console.log(err)
    })
  }
}).catch((err) => {
  console.log(err)
})
function webLogging_logName_list_update(arr){
  webLogging.update({key:"webLogging_logName_list",value:arr }).then((result) => {
    console.log('ok')
  }).catch((err) => {
    console.log(err)
  })
}

webLogging.read('webLogging_logName_list').then((result) => {
  if(result.result.value){
    for(let a in result.result.value){
      if(webLogging_logName_list.includes(result.result.value[a])){
        webLogging_logName_list.push(result.result.value[a])
      }
    }
    webLogging_logName_list_update(webLogging_logName_list);
  }
}).catch((err) => {
  console.log(err)
})
// webLogging.readAll(IDBKeyRange.upperBound(new Date().getTime()-(1000*60*60*24*15))).then((result) => {
//   if(result.code){
//     for(let a in result.result){
//       webLogging.remove(result.result[a].key).then((result1) => {
//         if(result1.code){
//           console.log('delete')
//         }else{
//           console.log(result1.result)
//         }
//       })
//     }
//   }else{
//     console.log(result.result)
//   }
// })
export function webLoggingWrite(json){
  /**
   * { 
   * key: '', 
   * logName: '用于标识日志，例如请求日志、标准错误、标准输出等。',
   * location: '记录日志 的位置',
   * logo: '标识符',
   * remarks: '备注'
   * }
   */
  json.location = location.href;
  let a = 0;
  let push = ()=>{
    webLogging.add({key:new Date().getTime(),value:json }).then((result) => {
      // console.log(result)
      console.log('日志 ok')
      if(!webLogging_logName_list.includes(json.logName)){
        webLogging_logName_list.push(json.logName);
        webLogging_logName_list_update(webLogging_logName_list);
      }
    }).catch((err) => {
      var random = parseInt(Math.random() * 10)+1;
      if(a<5){
        a++;
        setTimeout(()=>{
          push()
        },random)
      }
    })
    // webLogging.add({key:new Date().getTime(),value:json },(result) => {
    //   if(result.code){
    //     console.log('ok')
    //   }else{
    //     // console.log(result.result.target.error.message)
    //     // console.log(a)
    //     var random = parseInt(Math.random() * 10)+1;
    //     if(a<5){
    //       a++;
    //       setTimeout(()=>{
    //         push()
    //       },random)
    //     }
    //   }
    // })
  }
  push()
}

export function webLoggingList(startTime,endTime,selectName){
  return new Promise((resolve, reject)=>{
    let condition = IDBKeyRange.upperBound(new Date().getTime()+10000);
    if(startTime && endTime){
      condition = IDBKeyRange.bound(new Date(startTime).getTime(), new Date(endTime).getTime());
    }else if(startTime){
      condition = IDBKeyRange.lowerBound(new Date(startTime).getTime());
    }else if(endTime){
      condition = IDBKeyRange.upperBound(new Date(endTime).getTime());
    }
    webLogging.readAll(condition).then((result) => {
      console.log(selectName)
      if(selectName && selectName != 'all'){
        let arr = [];
        for(let a in result){
          if(result[a].value.logName == selectName){
            arr.push(result[a])
          }
        }
        resolve(arr)
      }else{
        resolve(result)
      }
    }).catch((err) => {
      reject(err)
    })
  })
}
export function webLoggingIn(type){
  if(type){
    initialization()
  }
}
window.onerror = function(message, source, lineno, colno, error) {
  webLoggingWrite({logName:'ReferenceError',remarks: error})
  // console.log(message)
  // console.log(source)
  // console.log(lineno)
  // console.log(colno)
  console.error(err);
}
// aa();
function initialization(){
  let bodyDom = document.getElementsByTagName("body")[0],
  devDom = document.createElement('dev');
  devDom.className = 'web-logging'
  devDom.id = 'web_logging'
  devDom.style.height = "100vh";
  bodyDom.append(devDom);
  devDom.innerHTML = `
    <div style="position: fixed;bottom: 5vw;left: 0;padding: 10px 15px;border-radius: 0 50px 50px 0;cursor: pointer;color: #fff;
    z-index: 9999;background-image: linear-gradient(90deg,#e52e71,#ff8a00);opacity: 0.8;"
    onclick="web_logging.loggingButton()">logging</div>
    <div id="web_logging_list" style="display: none;width: 100vw;position: fixed;top: 0;z-index: 9998;
    background-color: rgba(16, 14, 23, 0.8);height: 100vh; overflow: auto;">
      <input id="input_1" type="text" style="width: 35vw;
      outline: none;
      color: #fff;
      border: 1px solid transparent;
      border-image: linear-gradient(to left,#ff8a00,#e52e71);
      border-image-slice: 10;
      padding: 5px;
      margin-left: -1px;
      margin-top: 20px;
      max-width: 220px;
      font-size: 12px;
      background-color: rgba(0,0,0,0);" />
      <input id="input_2" type="text" style="width: 35vw;
      outline: none;
      color: #fff;
      border: 1px solid transparent;
      border-image: linear-gradient(to left,#e52e71,#ff8a00);
      border-image-slice: 10;
      padding: 5px;
      margin-left: 5px;
      margin-top: 20px;
      max-width: 220px;
      font-size: 12px;
      background-color: rgba(0,0,0,0);" />
      <select name="pets" id="webLogging_logName_select" style="
      width: 35vw;
      outline: none;
      color: #fff;
      border: 1px solid transparent;
      border-image: linear-gradient(to left,#ff8a00,#e52e71);
      border-image-slice: 10;
      padding: 5px;
      margin-left: -1px;
      margin-top: 10px;
      max-width: 220px;
      font-size: 12px;
      background-color: rgba(0,0,0,0);"
      ">
      </select>
      <button onclick="web_logging.ok()" name="button" style="width: 10vw;border-radius: 0 15px 15px 0;width: 15vw;
      padding: 7px 0;border: 0;margin-left: 5px;max-width: 120px;outline: none;
      background-image: linear-gradient(90deg,#e52e71,#ff8a00);border: 0;color: #fff;">ok</button>
      <div id="logging_lists" style="padding-right: 12px;margin-top: 10px"></div>
      <div style="height: 15px;"></div>
    </div>
  `
  let web_logging_list = document.getElementById('web_logging_list'),
  logging_lists = document.getElementById('logging_lists'),
  webLogging_logName_select = document.getElementById('webLogging_logName_select'),
  input_1_startTime = document.getElementById('input_1'),
  input_2_endTime = document.getElementById('input_2');
  function webLogging_logName_select_list(){
    let list = '<option value="all" style="color: #000;">全部</option>'
    for(let a in webLogging_logName_list){
      list += `<option value="${webLogging_logName_list[a]}" style="color: #000;">${webLogging_logName_list[a]}</option>`
    }
    webLogging_logName_select.innerHTML = list;
    webLogging_logName_select.value = window.web_logging.webLogging_logName_select_value;
  }
  window.web_logging.loggingButton = ()=>{
    if(web_logging_list.style.display == 'none'){
      window.web_logging.loggingList(input_1_startTime.value,input_2_endTime.value,webLogging_logName_select.value);
      webLogging_logName_select_list();
      web_logging_list.style.display = 'block';
    }else{
      web_logging_list.style.display = 'none';
    }
  }
  window.web_logging.ok = ()=>{
    window.web_logging.webLogging_logName_select_value =  webLogging_logName_select.value;
    window.web_logging.loggingList(input_1_startTime.value,input_2_endTime.value,webLogging_logName_select.value);
  }
  window.web_logging.loggingList = (startTime,endTime,selectValue)=>{
    webLoggingList(startTime,endTime,selectValue).then((result) => {
      console.log(result.length)
      let lists = '';
      for(let a in result){
        let id = new Date().getTime()+'_'+parseInt(Math.random() * 1000000000);
        lists += `<div style="background-image: linear-gradient(90deg,#e52e71,#ff8a00);width: 95vw;
        padding: 1px 1px 1px 0;
        margin-top: 8px;border-radius: 0 20px 20px 0;
        margin-top: 10px;">
        <div style="background: #201c29;
        color: #a1a1af;border-radius: 0 20px 20px 0;
        font-size: 12px;
        text-align: left;">
        <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding: 8px 10px;cursor: pointer;
        margin: 0;" onclick="
        if(document.getElementById('${id}').style.display == 'none'){
          document.getElementById('${id}').style.display = 'block';
        }else{
          document.getElementById('${id}').style.display = 'none';
        }">
        [${timeFormat(result[a].key)}] : [${result[a].value.logName}] [${result[a].value.location}] : ${result[a].value.remarks}
        </p>
        <div id="${id}" style="border-top: 1px solid transparent;
        border-image: linear-gradient(to left,#ff8a00,#e52e71);
        border-image-slice: 10;line-height: 18px;padding: 5px 10px;display: none;">
          <p style="margin: 0;">time:${timeFormat(result[a].key)}</p>
          <p style="margin: 0;">logName:${result[a].value.logName}</p>
          <p style="margin: 0;">location:${result[a].value.location}</p>
          <p style="margin: 0;">remarks:${result[a].value.remarks}</p>
        </div>
        </div></div>`
      }
      logging_lists.innerHTML = lists;
    }).catch((err) => {
      console.log(err)
    });
  }
  let time = new Date().getTime();
  input_1_startTime.value = timeFormat(time-5000);
  input_2_endTime.value = timeFormat(time+3600000*24);
  window.web_logging.loggingList(input_1_startTime.value,input_2_endTime.value,webLogging_logName_select.value);
  window.web_logging.webLogging_logName_select_value = 'all';
  // happy();
}

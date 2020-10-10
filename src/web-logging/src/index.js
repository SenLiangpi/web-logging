/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-04-20 10:21:32
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-10 15:32:13
 */
function timeFormat(a){
  let myDate = new Date(a);
  return `${myDate.getFullYear()}/${(((myDate.getMonth()*1)+1)>=10 ? '' : '0') + ((myDate.getMonth()*1)+1)}/${((myDate.getDate()*1)>=10 ? '' : '0') + myDate.getDate()} ${((myDate.getHours()*1)>=10 ? '' : '0') + myDate.getHours()}:${((myDate.getMinutes()*1)>=10 ? '' : '0') + myDate.getMinutes()}:${((myDate.getSeconds()*1)>=10 ? '' : '0') + myDate.getSeconds()}`
}

import dataDB from 'amx-indexeddb'

dataDB.install('',{v: 1,name: 'd2ViTG9nZ2luZwog',dbData: { webLogging: '' }})

let webLogging = new dataDB.db('webLogging')
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
  let a = 0;
  let push = ()=>{
    webLogging.add({key:new Date().getTime(),value:json }).then((result) => {
      // console.log(result)
      console.log('日志 ok')
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

export function webLoggingList(startTime,endTime){
  return new Promise((resolve, reject)=>{
    let condition = IDBKeyRange.upperBound(new Date().getTime()+10000);
    if(startTime && endTime){
      condition = IDBKeyRange.bound(new Date(startTime).getTime(), new Date(endTime).getTime());
    }else if(startTime){
      condition = IDBKeyRange.lowerBound(new Date(startTime).getTime());
    }else if(endTime){
      condition = IDBKeyRange.upperBound(new Date(endTime).getTime());
    }
    // webLogging.readAll(condition,(result) => {
    //   if(result.code){
    //     resolve(result.result)
    //   }else{
    //     reject(result.result)
    //   }
    // })
    webLogging.readAll(condition).then((result) => {
      resolve(result)
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
function initialization(){
  let bodyDom = document.getElementsByTagName("body")[0],
  devDom = document.createElement('dev');
  devDom.className = 'web-logging'
  devDom.id = 'web_logging'
  bodyDom.append(devDom);
  devDom.innerHTML = `
    <div style="position: fixed;bottom: 5vw;left: 5vw;padding: 10px;background-color: rgba(0, 0, 0, 0.5);border-radius: 50px;cursor: pointer;z-index: 9999;"
    onclick="web_logging.loggingButton()">logging</div>
    <div id="web_logging_list" style="display: none;width: 100vw;position: fixed;top: 0;background-color: rgba(0, 0, 0, 0.8);height: 100vh; overflow: auto;">
      <input id="input_1" type="text" style="width: 40vw" />
      <input id="input_2" type="text" style="width: 40vw" />
      <button onclick="web_logging.ok()" name="button" style="width: 10vw;">ok</button>
      <div id="logging_lists" style="padding: 0 1vw;"></div>
    </div>
  `
  let web_logging_list = document.getElementById('web_logging_list'),
  logging_lists = document.getElementById('logging_lists'),
  input_1_startTime = document.getElementById('input_1'),
  input_2_endTime = document.getElementById('input_2');
  window.web_logging.loggingButton = ()=>{
    if(web_logging_list.style.display == 'none'){
      window.web_logging.loggingList(input_1_startTime.value,input_2_endTime.value);
      web_logging_list.style.display = 'block';
    }else{
      web_logging_list.style.display = 'none';
    }
  }
  window.web_logging.ok = ()=>{
    window.web_logging.loggingList(input_1_startTime.value,input_2_endTime.value);
  }
  window.web_logging.loggingList = (startTime,endTime)=>{
    webLoggingList(startTime,endTime).then((result) => {
      console.log(result.length)
      let lists = '';
      for(let a in result){
        let id = new Date().getTime()+'_'+parseInt(Math.random() * 1000000000);
        lists += `<div style="border: 1px solid transparent;border-image: linear-gradient(to top,#2299de,#0cd8e2);
        border-image-slice: 10;font-size: 12px;text-align: left;color: #fff;margin-top: 8px;">
        <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding: 5px;cursor: pointer;" onclick="
        if(document.getElementById('${id}').style.display == 'none'){
          document.getElementById('${id}').style.display = 'block';
        }else{
          document.getElementById('${id}').style.display = 'none';
        }">
        ${result[a].key} : [${timeFormat(result[a].key)}] [${result[a].value.logName}] [${result[a].value.location}] [${result[a].value.logo}] : ${result[a].value.remarks}
        </p>
        <div id="${id}" style="border-top: 1px solid transparent;border-image: linear-gradient(to left,#0cd8e2,#e5ec54);border-image-slice: 10;line-height: 18px;padding: 5px;display: none;">
          <p>id:${result[a].key}</p>
          <p>time:${timeFormat(result[a].key)}</p>
          <p>logName:${result[a].value.logName}</p>
          <p>location:${result[a].value.location}</p>
          <p>logo:${result[a].value.logo}</p>
          <p>remarks:${result[a].value.remarks}</p>
        </div>
        </div>`
      }
      logging_lists.innerHTML = lists;
    }).catch((err) => {
      console.log(err)
    });
  }
  let time = new Date().getTime();
  input_1_startTime.value = timeFormat(time-5000);
  input_2_endTime.value = timeFormat(time+3600000*24);
  window.web_logging.loggingList(input_1_startTime.value,input_2_endTime.value);
}

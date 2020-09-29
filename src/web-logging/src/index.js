/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-04-20 10:21:32
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-09-24 10:04:41
 */
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
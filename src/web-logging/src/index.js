/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-04-20 10:21:32
 * @LastEditors: PiPi
 * @LastEditTime: 2020-06-23 16:14:04
 */
import dataDB from './indexedDB/dataDB'

dataDB.install('',{v: 1,name: 'd2ViTG9nZ2luZwog',dbData: { webLogging: '' }})

let webLogging = new dataDB.db('webLogging')

webLogging.allLength().then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});
// 1000*60*60*24*30
// let aaa = new Date().getTime()
webLogging.readAll(IDBKeyRange.upperBound(new Date().getTime()-(1000*60*60*24*30))).then((result) => {
  // let bbb = new Date().getTime()
  // console.log(bbb-aaa)
  console.log(result)
  for(let a in result){
    webLogging.remove(result[a].key).then((result) => {
      // console.log(new Date().getTime()-bbb)
      console.log('delete ok')
    }).catch((err) => {
      console.log(err)
    });
  }
}).catch((err) => {
  console.log(err)
});
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
  webLogging.update({key:new Date().getTime(),value:json }).then((result) => {
    console.log('ok')
  }).catch((err) => {
    console.log(err)
  });
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
    webLogging.readAll(condition).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    });
  })
}
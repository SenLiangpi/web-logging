/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-22 09:43:19
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-09-03 09:48:57
 */ 
// import amx from 'vue-amx/1x/index'
import amxIndexedDB from './index'
import { queue } from './queue'
//   type: '操作类型',
//    type: 
//      add:添加，storeNames,data
//      read:获取数据，storeNames,key
//      readAll:获取对应表范围中的所有数据，storeNames,condition
//      update:修改数据，storeNames,data
//      remove:删除数据，storeNames,key
//      allLength:对应表的总数据条数，storeNames
//   storeNames: '操作表名',
//   data: '添加或修改的数据',
//   key: '对应表数据的key 删除或获取数据时使用',
//   condition: '获取对应表范围中的所有数据'
//   callback: ()=>{} 回调函数
const dataDB = {}
let amxDataDBOpenDb,
amxDataDBQueue = new queue(false,(data)=>{
  switch (data.type) {
    case 'add':
      amxDataDBOpenDb.addData(data.storeNames,data.data).then((result) => {
        data.callback({code: true,result: result})
      }).catch((err) => {
        data.callback({code: false,result: err})
      })
      break;
    case 'read':
      amxDataDBOpenDb.read(data.storeNames,data.key).then((result) => {
        data.callback({code: true,result: result})
      }).catch((err) => {
        data.callback({code: false,result: err})
      })
      break;
    case 'readAll':
      amxDataDBOpenDb.readAll(data.condition,data.storeNames).then((result) => {
        data.callback({code: true,result: result})
      }).catch((err) => {
        data.callback({code: false,result: err})
      })
      break;
    case 'update':
      amxDataDBOpenDb.update(data.storeNames,data.data).then((result) => {
        data.callback({code: true,result: result})
      }).catch((err) => {
        data.callback({code: false,result: err})
      })
      break;
    case 'remove':
      amxDataDBOpenDb.remove(data.storeNames,data.key).then((result) => {
        data.callback({code: true,result: result})
      }).catch((err) => {
        data.callback({code: false,result: err})
      })
      break;
    case 'allLength':
      amxDataDBOpenDb.allLength(data.storeNames).then((result) => {
        data.callback({code: true,result: result})
      }).catch((err) => {
        data.callback({code: false,result: err})
      })
      break;
  }
});
dataDB.install = (Vue, store)=>{
  //初始化值
  amxDataDBOpenDb = new amxIndexedDB({
    v: store.v,
    db: store.name,
    dbData: store.dbData
  })
  amxDataDBOpenDb.open().then((result) => {
    amxDataDBQueue.modificationSemaphore(true)
    amxDataDBQueue.dequeue()
    if(result){//判断是否版本更新
      
    }
  }).catch((err) => {
    console.log(err)
  });
}
dataDB.db = class {
  constructor(name){//初始化参数
    this.name = name
  }
  add(json,callback){//添加
    amxDataDBQueue.enqueue({
      type: 'add',
      storeNames: this.name,
      data: json,
      callback: callback
    })
  }
  read(key,callback){//获取
    amxDataDBQueue.enqueue({
      type: 'read',
      storeNames: this.name,
      key: key,
      callback: callback
    })
  }
  readAll(condition,callback){
    amxDataDBQueue.enqueue({
      type: 'readAll',
      storeNames: this.name,
      condition: condition,
      callback: callback
    })
  }
  update(json,callback){//修改
    amxDataDBQueue.enqueue({
      type: 'update',
      storeNames: this.name,
      data: json,
      callback: callback
    })
  }
  remove(key,callback){//删除
    amxDataDBQueue.enqueue({
      type: 'remove',
      storeNames: this.name,
      key: key,
      callback: callback
    })
  }
  allLength(callback){
    amxDataDBQueue.enqueue({
      type: 'allLength',
      storeNames: this.name,
      callback: callback
    })
  }
}

export default dataDB;
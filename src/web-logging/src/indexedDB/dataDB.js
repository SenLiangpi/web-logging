/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-22 09:43:19
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-08-26 17:54:02
 */ 
// import amx from 'vue-amx/1x/index'
import amxIndexedDB from './index'

// function errorType(err){
//   if (err instanceof TypeError) { //TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误
//     return false
//   } else if (err instanceof RangeError) {//RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中
//     return false
//   }
//   else if (err instanceof EvalError) {//本对象代表了一个关于 eval 函数的错误.此异常不再会被JavaScript抛出，但是EvalError对象仍然保持兼容性.
//     return false
//   }
//   else {
//     return true
//   }
// }
const dataDB = {}
let amxDataDBOpenDb
dataDB.install = (Vue, store)=>{
  //初始化值
  amxDataDBOpenDb = new amxIndexedDB({
    v: store.v,
    db: store.name,
    dbData: store.dbData
  })
  //链接数据库
  amxDataDBOpenDb.open().then((result) => {
    if(result){//判断是否版本更新
      for(let a in store.dbData){
        for(let b in store.dbData[a]){
          let amxDBRead = setInterval(()=>{//写入表对应数据
            amxDataDBOpenDb.addData(a,{key:b,value:store.dbData[a][b]}).then((result) => {
              clearTimeout(amxDBRead)
            }).catch((err) => {
              if(err){
                clearTimeout(amxDBRead)
              }else{
                console.error(err)
              }
            })
          },2)
          // amxDataDBOpenDb.addData(a,{key:b,value:store.dbData[a][b]}).then((e) => {
            
          // }).catch((err) => {
          //   if(err){
          //     console.log(err)
          //   }else{
          //     console.error(err)
          //   }
          // })
        }
      }
    }
  }).catch((err) => {
    console.log(err)
  });
}
// dataDB.amx = (store)=>{
//   let json = { data:{} }
//   for(let a in store.table){
//     json.data['amxDataDB'+store.table[a]] = ''
//   }
//   return json
// }
dataDB.db = class {
  constructor(name){//初始化参数
    this.name = name
    this.millisecond = 15
  }
  add(json){//添加
    return new Promise((resolve, reject)=>{
      let amxDBRead = setInterval(()=>{
        amxDataDBOpenDb.addData(this.name,json).then((result) => {
          resolve(result)
          clearTimeout(amxDBRead)
        }).catch((err) => {
          if(err){
            reject(err)
            clearTimeout(amxDBRead)
          }else{
            // console.error(err)
          }
        })
      },this.millisecond)
    })
  }
  read(key){//获取
    return new Promise((resolve, reject)=>{
      // let time = new Date().getTime();
      let amxDBRead = setInterval(()=>{
        amxDataDBOpenDb.read(this.name,key).then((result) => {
          resolve(result)
          clearTimeout(amxDBRead)
        }).catch((err) => {
          if(err){
            reject(err)
            clearTimeout(amxDBRead)
          }else{
            // console.error(err)
          }
        })
      },this.millisecond)
    })
  }
  readAll(condition){
    return new Promise((resolve, reject)=>{
      let amxDBRead = setInterval(()=>{
        amxDataDBOpenDb.readAll(condition,this.name).then((result) => {
          resolve(result)
          clearTimeout(amxDBRead)
        }).catch((err) => {
          if(err){
            reject(err)
            clearTimeout(amxDBRead)
          }else{
            // console.error(err)
          }
        })
      },this.millisecond)
    })
  }
  update(json){//修改
    return new Promise((resolve, reject)=>{
      let amxDBRead = setInterval(()=>{
        amxDataDBOpenDb.update(this.name,json).then((result) => {
          resolve(result)
          clearTimeout(amxDBRead)
        }).catch((err) => {
          if(err){
            reject(err)
            clearTimeout(amxDBRead)
          }else{
            // console.error(err)
          }
        })
      },this.millisecond)
    })
  }
  remove(key){//删除
    return new Promise((resolve, reject)=>{
      let amxDBRead = setInterval(()=>{
        amxDataDBOpenDb.remove(this.name,key).then((result) => {
          resolve(result)
          clearTimeout(amxDBRead)
        }).catch((err) => {
          if(err){
            reject(err)
            clearTimeout(amxDBRead)
          }else{
            // console.error(err)
          }
        })
      },this.millisecond)
    })
  }
  allLength(){
    return new Promise((resolve, reject)=>{
      let amxDBRead = setInterval(()=>{
        amxDataDBOpenDb.allLength(this.name).then((result) => {
          resolve(result)
          clearTimeout(amxDBRead)
        }).catch((err) => {
          if(err){
            reject(err)
            clearTimeout(amxDBRead)
          }else{
            // console.error(err)
          }
        })
      },this.millisecond)
    })
  }
}

export default dataDB;
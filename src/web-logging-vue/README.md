<!--
 * @Author: PiPi
 * @Github: https://github.com/SenLiangpi
 * @Email: pisenliang@gmail.com
 * @Date: 2019-06-17 15:38:23
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-28 10:09:05
 -->
# web-logging 日志记录
web-logging-vue 是vue版本的 web-logging。
web-logging是一个纯JavaScript编写的 前端日志管理，用於檢測前端的日志系統。web-logging日志存储为近15天的记录。本庫依賴 amx-indexeddb。

支持Amx技术：
* IndexedDB - IndexedDB 是一个用于在浏览器中储存较大数据结构的 Web API, 并提供索引功能以实现高性能查找. 像其他基于 SQL 的 关系型数据库管理系统 (RDBMS) 一样, IndexedDB 是一个事务型的数据库系统. 然而, 它是使用 JavaScript 对象而非列数固定的表格来储存数据的.

github : https://github.com/SenLiangpi/web-logging

# 用法
安装 npm i web-logging-amx
在main点引入 web-logging-amx
```javascript
  import web_logging_vue from 'web-logging-vue'
  //傳入參數 true 或 false ，true為允許 將渲染dom false 為不允許 將不會渲染
  Vue.use(web_logging_vue,true)

  //在需要logging日志記錄點引入
  import web_logging_vue from 'web-logging-vue'
  //記錄日志
  web_logging_vue.webLoggingWrite(json)
  //日志記錄輸出
  web_logging_vue.webLoggingList(startDate,endDate)
```
# API
webLoggingWrite(json)
```javascript
/**
   * { 
   * logName: '用于标识日志，例如请求日志、标准错误、标准输出等。',
   * remarks: '备注'
   * }
   */
  webLoggingWrite({logName:'业务逻辑',remarks: '外部引入方法'})
```
webLoggingList(startDate,endDate)
```javascript
//startDate 开始时间 endDate结束时间 时间段查询 如果不传值则查询全部
//如果传开始时间 就查询开始时间之后所有的数据 如果传结束时间就查询结束时间之后记录的所有数据 已对应设备的时间为准
  webLoggingList(startDate,endDate).then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  });
```
皮皮研究所製作
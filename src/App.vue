<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-20 09:46:48
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-20 10:30:07
--> 
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import web_logging_vue from './web-logging-vue/src/index'
// bb()
// webLoggingIn(true)
export default {
  name: 'App',
  created(){
    console.log('aaa')
    // setTimeout
    // setInterval(()=>{
      web_logging_vue.webLoggingWrite({logName:'web-logging-vue',location:'App.vue',logo: 'Appcreated',remarks: '外部引入方法'})
    // },1)
    // for(let a = 0;a<10000;a++){
      // webLoggingWrite({logName:'业务逻辑',location:'App.vue',logo: 'Appcreated',remarks: '外部引入方法'})
      aa()
    // }
  }
}
</script>

<style>
* {margin: 0;padding: 0}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

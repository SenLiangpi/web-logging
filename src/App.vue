<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-20 09:46:48
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-22 11:11:09
--> 
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import {webLoggingWrite} from './web-logging/src/index'
export default {
  name: 'App',
  created(){
    // setInterval(()=>{
    //   webLogging({logName:'业务逻辑',location:'App.vue',logo: 'Appcreated',remarks: '外部引入方法'})
    // },10)
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

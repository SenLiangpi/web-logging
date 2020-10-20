<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-20 09:46:48
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-20 09:56:34
--> 
<template>
  <div class="hello" v-if="true">
    <!-- <div style="height: 50px;"></div>
    <input v-model="startTime" type="text" style="width: 40vw">
    <input v-model="endTime" type="text" style="width: 40vw">
    <button @click="ok()" name="button" style="width: 10vw;">ok</button>
    <p class="hello-p" v-for="(item, index) in logList" :key="index">
      {{item.key}} : [{{timeFormat(item.key)}}] [{{item.value.logName}}] [{{item.value.location}}] [{{item.value.logo}}] : {{item.value.remarks}}
    </p> -->
  </div>
</template>

<script>
// import {webLoggingWrite,webLoggingList} from '../web-logging/src/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // logList: [],
      // startTime: '',
      // endTime: ''
    }
  },
  methods: {
    // ok(){
    //   this.loggingList()
    // },
    // loggingList(){
    //   let aaa = new Date().getTime()
    //   webLoggingList(this.startTime,this.endTime).then((result) => {
    //     console.log(result.length)
    //     console.log(new Date().getTime()-aaa)
    //     this.logList = result
    //   }).catch((err) => {
    //     console.log(err)
    //   });
    // },
    // timeFormat(a){
    //   let myDate = new Date(a);
    //   return `${myDate.getFullYear()}/${(((myDate.getMonth()*1)+1)>=10 ? '' : '0') + ((myDate.getMonth()*1)+1)}/${((myDate.getDate()*1)>=10 ? '' : '0') + myDate.getDate()} ${((myDate.getHours()*1)>=10 ? '' : '0') + myDate.getHours()}:${((myDate.getMinutes()*1)>=10 ? '' : '0') + myDate.getMinutes()}:${((myDate.getSeconds()*1)>=10 ? '' : '0') + myDate.getSeconds()}`
    // }
  },
  created(){
    // let time = new Date().getTime();
    // this.endTime = this.timeFormat(time+1000*60*60);
    // this.startTime = this.timeFormat(time-(1000*60*60));
    // this.loggingList()
    // webLoggingWrite({logName:'接口',location:'App.vue',logo: 'Appcreated',remarks: '外部引入方法'})
    // webLoggingWrite({logName:'Appcreated',location:'App.vue',logo: 'Appcreated',remarks: '外部引入方法'})
    // webLoggingWrite({logName:'qqq',location:'App.vue',logo: 'Appcreated',remarks: '外部引入方法'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh; 
  overflow: auto;
}
.hello-p{
  font-size: 12px;
  text-align: left;
  color: #aaa;
}
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>

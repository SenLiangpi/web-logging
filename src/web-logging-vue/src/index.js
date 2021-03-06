/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-10-20 09:28:25
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-28 10:12:59
 */
import { webLoggingWrite, webLoggingList, webLoggingIn } from '../../web-logging/src/index'

const webLoggingVue = {};
webLoggingVue.install = (Vue,type)=>{
  Vue.config.errorHandler = (err, vm, info)=>{
    webLoggingWrite({logName:'ReferenceError',remarks: err})
    console.error(err);
    // console.log(vm);
    console.log(info);
  }
  webLoggingIn(type)
  Vue.prototype.$webLoggingWrite = webLoggingWrite;
  Vue.prototype.$webLoggingList = webLoggingList;
}
webLoggingVue.webLoggingWrite = webLoggingWrite;
webLoggingVue.webLoggingList = webLoggingList;

export default webLoggingVue
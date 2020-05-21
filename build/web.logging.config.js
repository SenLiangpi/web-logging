/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-20 09:59:31
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-20 10:00:50
 */ 
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./lib'),
    filename: 'model.umd.min.js',
    publicPath: '/lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
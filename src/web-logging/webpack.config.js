/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-04-20 10:17:45
 * @LastEditors: PiPi
 * @LastEditTime: 2020-05-21 11:16:53
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./lib'),
        filename: 'logging.js',
        publicPath: '/lib',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
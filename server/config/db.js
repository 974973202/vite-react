/**
 * 数据库连接
 * @auther 何小生
 */

const mongoose = require('mongoose')  // 引入mongoose
const config = require('./index')     // 引入config配置信息
// const log4js = require('../utils/log4') // 引入log4j的日志系统

// mongoose连接数据库
mongoose.connect(config.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

// 打印数据库连接成功
db.on('error', () => {
    console.error('*** 数据库连接失败 ***')
})

// 打印数据库连接失败
db.on('open', () => {
    console.info('*** 数据库连接成功 ***')
})

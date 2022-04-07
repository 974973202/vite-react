const Koa = require('koa')
const cors = require('koa2-cors');
const bodyparser = require('koa-body');
const json = require('koa-json');
const router = require('./routes/index');
// 这里是一些常量的配置文件
const { port } = require('./config');

const app = new Koa();

// 使用db连接数据库
require('./config/db')

app.use(cors());

// logger
// app.use(async (ctx, next) => {
//     console.log('--0-0--')
//     await next();
//     const rt = ctx.response.get('X-Response-Time')
//     console.log(`--0-1-- ${ctx.method} ${ctx.url} - ${rt}`)
//   })

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())

router.prefix('/api')  // api前缀
// 挂载todo上路由
// router.use(todo.routes(), todo.allowedMethods())

// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    // console.error('server error', err, ctx)
    console.error(`${err.stack}`)
});

app.listen(port, () => {
    console.log(`seccess start server`)
    console.log(`local: http://127.0.0.1:${port}`)
});
const Koa = require('koa');
const app = new Koa();
const User = require('./models/user')

// User.sync({force:true}).then(()=>{
//     return User.create({
//         firstName:'ciro',
//         lastName:'Leesss'
//     })
// });

//创建表，添加数据
// User.sync();
// User.create({
//     username:'tom',
//     role:1
// })
app.use(async (ctx)=>{
    let result = await User.findAll();
    console.log(result)
    ctx.body = result;
   
})

const PORT = process.env.PORT || 3000,
      IP   = process.env.IP || 'localhost';

app.listen(PORT,IP,()=>{
    console.log(`server is running on ${IP}:${PORT}`)
})
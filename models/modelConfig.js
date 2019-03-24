const Sequelize = require('sequelize');
const config = require('../config/mysqlConfig');
//建立连接
const sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        ide:3000
    }
});

//验证连接
sequelize.authenticate().then(()=>{
    console.log('connection has been estblished successfully!')
}).catch(err=>{
    console.error('Unable to connect to the database:', err)
});

module.exports = sequelize;
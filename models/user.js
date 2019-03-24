const Sequelize = require('sequelize');
const sequelize = require('./modelConfig');
const User = sequelize.define('user',
    {
        id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
        username:{type:Sequelize.STRING,allowNull:true},
        role:{type:Sequelize.INTEGER,defaultValue:0}
    },
    {
        timestamps: false
    }
);

module.exports = User;
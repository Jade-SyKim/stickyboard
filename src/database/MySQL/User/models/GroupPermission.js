// src/models/MySQL/GroupPermission.js

var Sequelize = require('sequelize')

const MySqlConn = require('database/MySQL/Connection');

var GroupPermission = MySqlConn.define('stkbd_group_permission', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    group_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    permission_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: false
})

module.exports = GroupPermission;

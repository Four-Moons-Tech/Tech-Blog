const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            references: {
                model: 'user',
                key: 'id'
            }
        },
        created_on: {
            type: DataTypes.DATE,

        }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

)
module.exports = Post;
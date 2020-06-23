const { STRING, UUID, UUIDV4, INTEGER} = require('sequelize')

const db = require ('../db')

const User = db.define ('user', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }, 
    },
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        },
    departmentId: {
        type: UUID,
        references: {
            model: department,
            key: id
        }
    }
})

module.exports = User;
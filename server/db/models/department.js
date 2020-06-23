const { STRING, UUID, UUIDV4, INTEGER} = require('sequelize')

const db = require ('../db')

const Department = db.define ('department', {
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
    
})

module.exports = Department;
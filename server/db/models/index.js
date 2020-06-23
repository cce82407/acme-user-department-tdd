const User = require ('./user')
const Department = require ('./department')

User.belongsTo(Department)
Department.hasMany(User)


module.exports = {
    User,
    Department
}
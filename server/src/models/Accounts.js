const bcrypt = require('bcryptjs')

async function hashPassword (account) {
  const SALT_FACTOR = 8

  if (!account.changed('password')) {
    return
  }

  const genSalt = await bcrypt.genSaltSync(SALT_FACTOR)
  const hash = await bcrypt.hashSync(account.password, genSalt)
  account.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Accounts', {
    email: {
      type: DataTypes.STRING(150),
      unique: true
    },
    password: DataTypes.STRING(250),
    fname: DataTypes.STRING(35),
    lname: DataTypes.STRING(35),
    accPin: DataTypes.INTEGER(4)
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })

  Account.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  return Account
}

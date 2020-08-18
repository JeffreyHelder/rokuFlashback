module.exports = (sequelize, DataTypes) =>
  sequelize.define('tbl_accounts', {
    email: {
      type: DataTypes.STRING(150),
      unique: true
    },
    password: DataTypes.STRING(35),
    fname: DataTypes.STRING(35),
    lname: DataTypes.STRING(35),
    accPin: DataTypes.INTEGER(4)
  })

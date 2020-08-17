module.exports = (sequelize, DataTypes) =>
  sequelize.define('tbl_accounts', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    acc_pin: DataTypes.INTEGER
  })

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    accId: DataTypes.INTEGER,
    isMaster: DataTypes.BOOLEAN,
    isKid: DataTypes.BOOLEAN,
    isLocked: DataTypes.BOOLEAN,
    name: DataTypes.STRING(150),
    avatar: DataTypes.STRING(250),
    uPin: DataTypes.INTEGER(4),
    viewPermission: DataTypes.TINYINT(1)
  })

  return User
}

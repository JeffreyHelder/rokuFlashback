module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatars', {
    pack: DataTypes.STRING(100),
    src: DataTypes.STRING(250)
  })

  return Avatar
}

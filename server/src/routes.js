const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UsersController = require('./controllers/UsersController')
const AvatarController = require('./controllers/AvatarController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/users',
    UsersController.index)

  app.post('/avatars',
    AvatarController.index)

  app.post('/addUser',
    UsersController.addUser)

  app.post('/editUser',
    UsersController.editUser)

  app.post('/deleteUser',
    UsersController.delete)
}

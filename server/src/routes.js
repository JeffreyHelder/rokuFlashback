const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UsersController = require('./controllers/UsersController')
const AvatarController = require('./controllers/AvatarController')
const AccountsController = require('./controllers/AccountsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/users',
    UsersController.index)

  app.post('/findUser',
    UsersController.indexOne)

  app.post('/avatars',
    AvatarController.index)

  app.post('/addUser',
    UsersController.addUser)

  app.post('/editUser',
    UsersController.editUser)

  app.post('/deleteUser',
    UsersController.delete)

  app.post('/deleteAccount',
    AccountsController.deleteAccount)

  app.post('/editAccount',
    AccountsController.editAccount)

  app.post('/findAccount',
    AccountsController.indexAccount)
}

const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UsersController = require('./controllers/UsersController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/users',
    UsersController.index)

  app.post('/makeUser',
    UsersController.make)

  app.post('/deleteUser',
    UsersController.delete)
}

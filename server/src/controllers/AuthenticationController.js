const { Accounts } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignAccount (account) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(account, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const account = await Accounts.create(req.body)
      res.send(account.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Email Already In Use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const account = await Accounts.findOne({
        where: {
          email: email
        }
      })
      if (!account) {
        return res.status(403).send({
          error: 'No account found with that email'
        })
      }

      const isPassValid = await account.comparePassword(password)
      if (!isPassValid) {
        return res.status(403).send({
          error: 'Incorrect Password'
        })
      }

      const accountJson = account.toJSON()
      res.send({
        account: accountJson,
        token: jwtSignAccount(accountJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Hmmm, something went wrong on our side.'
      })
    }
  }
}

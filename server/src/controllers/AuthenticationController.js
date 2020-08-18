const { Accounts } = require('../models')

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
  }
}

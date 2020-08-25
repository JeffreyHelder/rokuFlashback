const { Users } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { accId } = req.body
      const user = await Users.findAll({
        where: {
          accId: accId
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'No user found matching this account'
        })
      }
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'Hmmm, something went wrong on our end.'
      })
    }
  },
  async make (req, res) {
    try {
      const user = await Users.create(req.body)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'Could not create user'
      })
    }
  },
  async delete (req, res) {
    try {
      const { userId } = req.body
      Users.destroy({
        where: {
          id: userId
        }
      })
      res.status(200).send({
        message: 'deleted'
      })
    } catch (err) {
      res.status(500).send({
        error: 'Hmmm, something went wrong on our end.'
      })
    }
  }
}

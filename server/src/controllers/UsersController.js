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
  async addUser (req, res) {
    console.log(req.body)
    try {
      await Users.create(req.body)
      res.status(200).send('User Created')
    } catch (err) {
      res.status(500).send({
        error: 'Something went wrong on our end'
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

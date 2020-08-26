const { Avatars } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const avatar = await Avatars.findAll()
      res.send(avatar)
    } catch (err) {
      res.status(500).send({
        error: 'Hmmm, something went wrong on our end.'
      })
    }
  }
}

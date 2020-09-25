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
  async indexOne (req, res) {
    try {
      const { id } = req.body
      const user = await Users.findOne({
        where: {
          id: id
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
  async editUser (req, res) {
    try {
      const findUser = await Users.findOne({
        where: {
          id: req.body.userId,
          accId: req.body.accId
        }
      })
      if (findUser) {
        await findUser.update({
          isKid: req.body.isKid,
          isLocked: req.body.isLocked,
          name: req.body.name,
          avatar: req.body.avatar,
          viewPermission: req.body.viewPermission,
          updatedAt: 'DEFAULT'
        })
      }
      res.status(200).send('User Updated')
    } catch (err) {
      res.status(500).send({
        error: 'Something went wrong while updating'
      })
    }
  },
  async delete (req, res) {
    try {
      const { userId } = req.body
      await Users.destroy({
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

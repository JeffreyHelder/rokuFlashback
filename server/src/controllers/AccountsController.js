const { Accounts } = require('../models')

module.exports = {
  async indexAccount (req, res) {
    try {
      const { id } = req.body
      const account = await Accounts.findOne({
        where: {
          id: id
        }
      })
      if (!account) {
        return res.status(403).send({
          error: 'No account found. This is our fault. Try Later..'
        })
      }
      res.send(account)
    } catch (err) {
      res.status(500).send({
        error: 'Hmmm, something went wrong on our end.'
      })
    }
  },
  async editAccount (req, res) {
    try {
      const findAccount = await Accounts.findOne({
        where: {
          id: req.body.id
        }
      })
      if (findAccount) {
        await findAccount.update({
          isKid: req.body.fname,
          isLocked: req.body.lname,
          name: req.body.email,
          avatar: req.body.password,
          updatedAt: 'DEFAULT'
        })
      }
      res.status(200).send('Account Updated')
    } catch (err) {
      res.status(500).send({
        error: 'Something went wrong while updating'
      })
    }
  },
  async deleteAccount (req, res) {
    try {
      const { id } = req.body
      await Accounts.destroy({
        where: {
          id: id
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

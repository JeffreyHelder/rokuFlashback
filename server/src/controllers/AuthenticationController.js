module.exports = {
  register (req, res) {
    res.send({
      message: `${req.body.email}, ${req.body.confemail}, ${req.body.password}, ${req.body.confpassword}, ${req.body.fname}, ${req.body.lname}`
    })
  }
}

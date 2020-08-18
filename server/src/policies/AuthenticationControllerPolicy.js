const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const regSchema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ca', 'org', 'on'] } })
        .required()
        .error((errors) => new Error('You must provide a valid email address')),
      password: Joi.string()
        .pattern(new RegExp('^.{8,32}$'))
        .required()
        .error((errors) => new Error('Password must be 8-32 characters.')),
      fname: Joi.string()
        .pattern(new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,32}$"))
        .error((errors) => new Error('First name Can not contain symbols or be longer than 32 characters')),
      lname: Joi.string()
        .pattern(new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,32}$"))
        .error((errors) => new Error('Last name can not contain symbols or be longer than 32 characters')),
      accPin: Joi.string()
        .pattern(new RegExp('^[0-9]{4,4}$'))
        .error((errors) => new Error('Pin Must be 4 characters AND only numbers'))
    })

    const isValid = regSchema.validate(req.body, { abortEarly: false })

    if (isValid.error) {
      res.status(400).send({
        error: `${isValid.error}`
      })
    } else {
      next()
    }
  }
}

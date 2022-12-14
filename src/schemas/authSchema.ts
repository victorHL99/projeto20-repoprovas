import Joi from 'joi';

const authSchemaSignup = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().min(6).required().valid(Joi.ref('password')).messages({
    'any.only': 'Passwords do not match'
  })
})

const authSchemaSignin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

const authSchema = {
  authSchemaSignup,
  authSchemaSignin
}

export default authSchema;
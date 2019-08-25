import * as yup from 'yup'

const ERROR_REQUIRED = 'This field is required'
const ERROR_EMAIL = 'Field should be a valid email'
const ERROR_LENGTH = 'Mininal length - 8 symbols'
const ERROR_NOT_MATCH = 'Passwords do not match'

export default yup.object({
  email:  yup.string().required(ERROR_REQUIRED).email(ERROR_EMAIL),
  name: yup.string().required(ERROR_REQUIRED),
  password: yup.string().required(ERROR_REQUIRED).min(8, ERROR_LENGTH),
  password_confirmation: yup.string().required(ERROR_REQUIRED).oneOf([yup.ref('password')], ERROR_NOT_MATCH)
})
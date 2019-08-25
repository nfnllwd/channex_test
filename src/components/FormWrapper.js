import React, { useState } from 'react'
import Form from 'react-formal'
import Mail from '@material-ui/icons/Mail'
import Person from '@material-ui/icons/PersonOutline'
import Lock from '@material-ui/icons/Lock'
import SignUpButton from './SignUpButton'

import WrappedInput from './WrappedInput'
import Schema from './../schemas/signUpSchema'
import { signUp } from './../actions/backend'

export default function FormWrapper() {
  const [errors, setErrors] = useState({})

  const handleSubmit = async data => {
    setErrors(await signUp(data))
  }

  return (
    <Form
      schema={Schema}
      onSubmit={handleSubmit}
      errors={errors}
      onError={errors => setErrors(errors)}
    >
      <WrappedInput name="email" placeholder="Email" icon={<Mail/>}/>
      <WrappedInput name="name"  placeholder="Name" icon={<Person/>}/>
      <WrappedInput name="password"  placeholder="Password" icon={<Lock/>}/>
      <WrappedInput name="password_confirmation"  placeholder="Password Confirmation" icon={<Lock/>}/>
      <SignUpButton/>
    </Form>
  )
}
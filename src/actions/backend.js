const VALIDATION_ERROR_CODE = 'validation_error'

export const signUp = async signupData => {
  const body = JSON.stringify({user: signupData})
  const url =  'https://staging.channex.io/api/v1/sign_up'
  const headers = {'Content-Type': 'application/json'}

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    })

    if (response.ok) {
      alert('Success')
      return {}
    }

    const data = await response.json()
    const { errors: { code, title, details = {} } = {}} = data

    if (code === VALIDATION_ERROR_CODE) {
      const validationErrors = {}
      Object.keys(details).forEach(key => {
        const [ errorText = '' ] = details[key]
        validationErrors[key] = `${key} ${errorText}`
      })

      return validationErrors
    }
    alert(title)

  } catch (error) {
    alert(error)
  }
  
  return {}
}
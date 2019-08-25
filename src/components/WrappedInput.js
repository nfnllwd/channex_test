import React from 'react'
import { withStyles, TextField, InputAdornment } from '@material-ui/core'
import { Field, Message } from 'react-formal'

const styles = _ => ({
  wrapper: {
    marginBottom: '40px'
  },
  adornment: {
    '& svg': {
      width: '20px',
      fill: 'rgba(0, 0, 0, 0.23)'
    }
  },
  input: {
    '& input': {
      padding: '12px 0 8px',
    }
  },
  message: {
    fontSize: '12px',
    color: 'red',
    display: 'block',
    margin: '3px 0 -19px 5px',
  }
})

function WrappedInput(props) {
  const { icon, name, placeholder, classes } = props

  const startAdornment = <InputAdornment position="start" className={classes.adornment}>{icon}</InputAdornment>

  return (
    <div className={classes.wrapper}>
      <Field
        name={name}
        placeholder={placeholder}
        as={TextField}
        InputProps={{startAdornment, className: classes.input}}
        fullWidth
        variant="outlined"
      />
      <Message className={classes.message} for={name}/>
    </div>
  )
}

export default withStyles(styles)(WrappedInput)
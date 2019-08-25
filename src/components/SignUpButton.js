import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Person from '@material-ui/icons/PersonOutline'

const styles = _ => ({
  button: {
    padding: '12px',
    fontSize: '16px',
    textTransform: 'capitalize'
  }
})

function SignUpButton({classes}) {
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      type="submit"
      fullWidth
    >
      <Person/>
      Sign Up
    </Button>
  )
}

export default withStyles(styles)(SignUpButton)
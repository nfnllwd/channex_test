import React from 'react'
import { withStyles, Link, Paper } from '@material-ui/core'
import FormWrapper from './FormWrapper'

const styles = _ => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: '430px',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    maxWidth: '240px',
    display: 'block',
    margin: '31px auto 30px',
  },
  label: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '20px 30px',
    letterSpacing: '-1px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
  },
  formWrapper: {
    margin: '30px'
  },
  footer: {
    margin: '0 30px 30px 30px',
    justifyContent: 'space-between',
    display: 'flex',
  },
  footerLink: {
    display: 'block'
  }
})

function SignUp({classes}) {
  return (
    <div className={classes.root}>
      <img className={classes.logo} src="https://staging.channex.io/static/media/logo__color.eed5def4.svg" alt="That's logo"/>
      <Paper>
        <div className={classes.label}>Sign Up</div>
        <div className={classes.formWrapper}>
         <FormWrapper/>
        </div>
        <div className={classes.footer}>
          <Link to="/sign-in" className={classes.footerLink}>Already registered?</Link>
          <Link to="/recovery" className={classes.footerLink}>Forgot Password?</Link>
        </div>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(SignUp)
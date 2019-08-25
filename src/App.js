import React from 'react'
import { withStyles } from '@material-ui/core'

import SignUp from './components/SignUp'

const styles = _ => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  }
})

function App({classes}) {
  return (
    <div className={classes.root}>
      <SignUp/>
    </div>
  )
}

export default withStyles(styles)(App)
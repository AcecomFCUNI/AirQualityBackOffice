import { CircularProgress } from '@mui/material'

import { makeStyles } from '~/utils'

const useStyles = makeStyles()(() => ({
  loaderContent: {
    background: '#05183C',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 40
  },
  loader: {
    color: '#48D180'
  }
}))

const Loader = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.loaderContent}>
      <CircularProgress size='50px' className={classes.loader} />
    </div>
  )
}

export { Loader }

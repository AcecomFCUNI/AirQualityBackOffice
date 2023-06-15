import type { Theme } from '@mui/material'
import { ClientOnly, Map as MapComponent } from '~/components'
import { makeStyles } from '~/utils'

const MAP_HEIGHT_SMALL = 'calc(100vh - 452px)'
const MAP_HEIGHT = 'calc(100vh - 386px)'
const MAP_WIDTH = '100%'

const useStyles = makeStyles()((theme: Theme, props) => ({
  skeleton: {
    height: MAP_HEIGHT,
    width: MAP_WIDTH
  },
  mapContainer: {
    height: MAP_HEIGHT,
    width: MAP_WIDTH,
    [theme.breakpoints.down('lmd')]: {
      height: MAP_HEIGHT_SMALL
    },
    [theme.breakpoints.down('smd')]: {
      height: MAP_HEIGHT
    }
  }
}))

const Map = () => {
  const { classes } = useStyles()

  return (
    <ClientOnly fallback={<div id='skeleton' className={classes.skeleton} />}>
      {() => <MapComponent mapContainerClassName={classes.mapContainer} />}
    </ClientOnly>
  )
}

export default Map

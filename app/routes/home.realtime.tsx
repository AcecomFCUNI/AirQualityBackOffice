import { Outlet } from '@remix-run/react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Grid } from '@mui/material'

import { CustomLine, DataCard } from '~/components'
import { useClientData } from '~/hooks'
import { makeStyles } from '~/utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const useStyles = makeStyles()(theme => ({
  container: {
    backgroundColor: '#bdbddd',
    margin: '0px auto auto 0px',
    paddingTop: '24px',
    width: '100%',
    '& .MuiGrid-item': {
      paddingTop: '0px'
    },
    height: 'calc(100vh - 64px)'
  },
  leftGridItem: {
    height: 'calc(100vh - 96px)',
    overflow: 'auto',
    padding: '0px 24px 24px'
  },
  rightGridItem: {
    paddingTop: '0px',
    height: 'calc(100vh - 96px)'
  },
  lefGridContainer: {
    justifyContent: 'center',
    marginTop: '0px',
    width: '100%',
    marginLeft: '0px',
    '& .MuiGrid-item': {
      paddingLeft: '0px'
    }
  },
  rightGridContainer: {
    overflowY: 'auto',
    marginTop: '0px !important',
    paddingRight: '24px',
    height: '100%'
  },
  paddingLeft0: {
    paddingLeft: '0px'
  },
  paddingTop0: {
    paddingTop: '0px !important'
  }
}))

const Realtime = () => {
  const {
    aq,
    h2s,
    humidity,
    temperature,
    historicDate,
    historicAq,
    historicH2s,
    historicHumidity,
    historicTemperature
  } = useClientData()
  const { classes } = useStyles()

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid className={classes.leftGridItem} item smd={6}>
        <Grid className={classes.lefGridContainer} container spacing={3}>
          <Grid
            className={`${classes.paddingLeft0} ${classes.paddingTop0}`}
            item
            xxs={12}
          >
            <CustomLine
              historicDate={historicDate}
              data={historicAq}
              label='Calidad de Aire'
              borderColor='rgb(113, 88, 159)'
              backgroundColor='rgba(113, 88, 159, 0.5)'
            />
          </Grid>
          <Grid className={classes.paddingLeft0} item xxs={12}>
            <CustomLine
              historicDate={historicDate}
              data={historicH2s}
              label='H2S'
              borderColor='rgb(154, 128, 83)'
              backgroundColor='rgba(154, 128, 83, 0.5)'
            />
          </Grid>
          <Grid className={classes.paddingLeft0} item xxs={12}>
            <CustomLine
              historicDate={historicDate}
              data={historicHumidity}
              label='Humedad'
              borderColor='rgb(224, 113, 47)'
              backgroundColor='rgba(224, 113, 47, 0.5)'
            />
          </Grid>
          <Grid className={classes.paddingLeft0} item xxs={12}>
            <CustomLine
              historicDate={historicDate}
              data={historicTemperature}
              label='Temperatura'
              borderColor='rgb(255, 99, 132)'
              backgroundColor='rgba(255, 99, 132, 0.5)'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.rightGridItem} item smd={6}>
        <Grid className={classes.rightGridContainer} container spacing={3}>
          <Grid className={classes.paddingTop0} item xxs={6}>
            <DataCard data='Calidad de Aire' value={aq} />
          </Grid>
          <Grid className={classes.paddingTop0} item xxs={6}>
            <DataCard data='H2S' value={h2s} />
          </Grid>
          <Grid item xxs={6}>
            <DataCard data='Humedad' value={humidity} />
          </Grid>
          <Grid item xxs={6}>
            <DataCard data='Temperatura' value={temperature} suffix=' °C' />
          </Grid>
          <Grid item xxs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Realtime

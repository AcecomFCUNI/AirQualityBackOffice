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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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

  return (
    <Grid
      style={{
        overflow: 'auto',
        backgroundColor: '#BDBDDD',
        margin: '0px auto auto 0px',
        paddingTop: '0px !important',
        height: 'calc(100vh - 64px)',
        width: '100%'
      }}
      container
      spacing={3}
    >
      <Grid item smd={6} style={{ paddingTop: '0px', paddingBottom: '24px' }}>
        <Grid
          container
          spacing={3}
          style={{
            justifyContent: 'center',
            marginTop: '0px',
            width: '100%',
            marginLeft: '0px'
          }}
        >
          <Grid item xxs={12} style={{ paddingLeft: '0px' }}>
            <CustomLine
              historicDate={historicDate}
              data={historicAq}
              label='Calidad de Aire'
              borderColor='rgb(113, 88, 159)'
              backgroundColor='rgba(113, 88, 159, 0.5)'
            />
          </Grid>
          <Grid item xxs={12} style={{ paddingLeft: '0px' }}>
            <CustomLine
              historicDate={historicDate}
              data={historicH2s}
              label='H2S'
              borderColor='rgb(154, 128, 83)'
              backgroundColor='rgba(154, 128, 83, 0.5)'
            />
          </Grid>
          <Grid item xxs={12} style={{ paddingLeft: '0px' }}>
            <CustomLine
              historicDate={historicDate}
              data={historicHumidity}
              label='Humedad'
              borderColor='rgb(224, 113, 47)'
              backgroundColor='rgba(224, 113, 47, 0.5)'
            />
          </Grid>
          <Grid item xxs={12} style={{ paddingLeft: '0px' }}>
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
      <Grid item smd={6} style={{ paddingTop: '0px' }}>
        <Grid
          container
          style={{
            overflowY: 'auto',
            backgroundColor: '#BDBDDD',
            marginTop: '0px !important',
            paddingRight: '24px'
          }}
          spacing={3}
        >
          <Grid item xxs={6}>
            <DataCard data='Calidad de Aire' value={aq} />
          </Grid>
          <Grid item xxs={6}>
            <DataCard data='H2S' value={h2s} />
          </Grid>
          <Grid item xxs={6}>
            <DataCard data='Humedad' value={humidity} />
          </Grid>
          <Grid item xxs={6}>
            <DataCard data='Temperatura' value={temperature} suffix=' °C' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Realtime

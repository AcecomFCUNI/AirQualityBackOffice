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

import { CustomLine, DataCard, GridItem } from '~/components'
import { Container } from '~/global'
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

const Dashboard = () => {
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
    <Container style={{ overflowY: 'auto', backgroundColor: '#BDBDDD' }}>
      <article
        style={{
          display: 'grid',
          placeContent: 'start',
          gridTemplateColumns: 'repeat(4, 20%)',
          gap: 32,
          paddingTop: '2.5rem',
          justifyContent: 'space-evenly'
        }}
      >
        <DataCard data='Calidad de Aire' value={aq} />
        <DataCard data='H2S' value={h2s} />
        <DataCard data='Humedad' value={humidity} />
        <DataCard data='Temperatura' value={temperature} />
      </article>
      <Grid
        container
        spacing={3}
        style={{
          justifyContent: 'center',
          paddingTop: '2rem',
          margin: '0 0 1rem',
          width: '100%'
        }}
      >
        <GridItem>
          <CustomLine
            historicDate={historicDate}
            data={historicAq}
            label='Calidad de Aire'
            borderColor='rgb(113, 88, 159)'
            backgroundColor='rgba(113, 88, 159, 0.5)'
          />
        </GridItem>
        <GridItem>
          <CustomLine
            historicDate={historicDate}
            data={historicH2s}
            label='H2S'
            borderColor='rgb(154, 128, 83)'
            backgroundColor='rgba(154, 128, 83, 0.5)'
          />
        </GridItem>
        <GridItem>
          <CustomLine
            historicDate={historicDate}
            data={historicHumidity}
            label='Humedad'
            borderColor='rgb(224, 113, 47)'
            backgroundColor='rgba(224, 113, 47, 0.5)'
          />
        </GridItem>
        <GridItem>
          <CustomLine
            historicDate={historicDate}
            data={historicTemperature}
            label='Temperatura'
            borderColor='rgb(255, 99, 132)'
            backgroundColor='rgba(255, 99, 132, 0.5)'
          />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Dashboard

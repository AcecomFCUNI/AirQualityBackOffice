import type { FC } from 'react'

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography
} from '@mui/material'

import { makeStyles } from '~/utils'
import { ClientOnly } from '../ClientOnly'

type CardProps = {
  data: string
  value: number
  suffix?: string
}

const useStyles = makeStyles()(theme => ({
  cardContent: {
    textAlign: 'start',
    minHeight: '80px',
    boxSizing: 'content-box',
    paddingBottom: '16px !important'
  }
}))

const DataCard: FC<CardProps> = props => {
  const { data, value, suffix } = props
  const { classes } = useStyles()

  return (
    <Card id={`${value}`}>
      <CardContent className={classes.cardContent}>
        <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
          {data}
        </Typography>
        <Typography
          variant='body2'
          sx={{ fontSize: 32, boxSizing: 'content-box' }}
          color='#004EDA'
        >
          {isFinite(value) ? (
            <>
              {value} {suffix}
            </>
          ) : (
            <ClientOnly>
              {() => (
                <Box sx={{ display: 'flex', color: '#004EDA' }}>
                  <CircularProgress />
                </Box>
              )}
            </ClientOnly>
          )}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { DataCard }

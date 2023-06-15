import { Card, CardContent, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import type { FC } from 'react'

type CardProps = {
  data: string
  value: number
  suffix?: string
}

const DataCard: FC<CardProps> = props => {
  const { data, value, suffix } = props

  return (
    <Card id={`${value}`}>
      <CardContent
        style={{
          textAlign: 'start',
          minHeight: '80px',
          boxSizing: 'content-box',
          paddingBottom: '16px'
        }}
      >
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
            <Box sx={{ display: 'flex', color: '#004EDA' }}>
              <CircularProgress />
            </Box>
          )}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { DataCard }

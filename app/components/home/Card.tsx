import { Card, CardContent, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import type { FC } from 'react'

type CardProps = {
  data: string
  value: ReactNode
  suffix?: string
}

const DataCard: FC<CardProps> = props => {
  const { data, value, suffix } = props

  return (
    <Card>
      <CardContent style={{ textAlign: 'start' }}>
        <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
          {data}
        </Typography>
        <Typography variant='body2' sx={{ fontSize: 32 }} color='#004EDA'>
          {value}
          {suffix}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { DataCard }

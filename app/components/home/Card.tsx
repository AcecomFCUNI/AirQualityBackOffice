import { Card, CardContent, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import type { FC } from 'react'

type CardProps = {
  data: string
  value: ReactNode
}

const DataCard: FC<CardProps> = props => {
  const { data, value } = props

  return (
    <Card>
      <CardContent style={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {data}
        </Typography>
        <Typography variant='body2'>{value}</Typography>
      </CardContent>
    </Card>
  )
}

export { DataCard }

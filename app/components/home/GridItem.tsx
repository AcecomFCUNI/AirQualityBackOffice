import { Grid } from '@mui/material'
import type { FC, ReactNode } from 'react'

type GridItemProps = {
  children: ReactNode
}

const GridItem: FC<GridItemProps> = props => {
  const { children } = props

  return (
    <Grid
      item
      smd={5}
      xxs={12}
      style={{
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}
    >
      {children}
    </Grid>
  )
}

export { GridItem }

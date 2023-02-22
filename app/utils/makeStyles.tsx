import { createMakeStyles } from 'tss-react'
import { theme } from '../global/theme'

const { makeStyles } = createMakeStyles({
  useTheme: () => theme
})

export { makeStyles }

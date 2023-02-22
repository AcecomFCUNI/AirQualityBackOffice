import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'

import { CacheProvider, ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import { theme } from './global'
import { createEmotionCache } from './utils'

const emotionCache = createEmotionCache()

hydrate(
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </CacheProvider>,
  document
)

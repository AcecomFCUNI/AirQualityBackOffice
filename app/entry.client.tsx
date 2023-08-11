import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode, useMemo, useState } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { CacheProvider, ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import { theme } from './global'
import { ClientStyleContext } from './context'
import { createEmotionCache } from './utils'

type ClientCacheProviderProps = {
  children: React.ReactNode
}

const ClientCacheProvider = ({ children }: ClientCacheProviderProps) => {
  const [cache, setCache] = useState(createEmotionCache())

  const clientStyleContextValue = useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache())
      }
    }),
    []
  )

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ClientCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RemixBrowser />
          </ThemeProvider>
        </ClientCacheProvider>
      </StrictMode>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}

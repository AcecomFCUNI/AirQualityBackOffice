import { useContext, type ReactNode } from 'react'
import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction
} from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'

import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material'
import { withEmotionCache } from '@emotion/react'

import Nunito300 from '@fontsource/nunito/300.css'
import Nunito400 from '@fontsource/nunito/400.css'
import Nunito500 from '@fontsource/nunito/500.css'
import Nunito700 from '@fontsource/nunito/700.css'

import type { ENV } from './env.server'
import { getENV } from './env.server'
import { GlobalStyle, theme } from './global'
import { ClientStyleContext } from './context'

type DocumentProps = {
  children: ReactNode
  title?: string
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach(tag => {
        // eslint-disable-next-line no-underscore-dangle
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData.reset()
    }, [])

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='theme-color' content={theme.palette.primary.main} />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <meta
            name='emotion-insertion-point'
            content='emotion-insertion-point'
          />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: Nunito300
  },
  {
    rel: 'stylesheet',
    href: Nunito400
  },
  {
    rel: 'stylesheet',
    href: Nunito500
  },
  {
    rel: 'stylesheet',
    href: Nunito700
  }
]

export const meta: V2_MetaFunction = () => [
  { property: 'viewport', content: 'width=device-width,initial-scale=1' },
  { property: 'keywords', content: 'Air,Quality,Lima,Peru,IoT' },
  { property: 'description', content: 'Air quality meter for Lima, Peru' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://air-quality-back-office.vercel.app' },
  { property: 'og:title', content: 'Air Quality' },
  { property: 'og:description', content: 'Air quality meter for Lima, Peru' },
  { property: 'og:locale', content: 'es_ES' },
  { property: 'twitter:card', content: 'summary_large_image' },
  { property: 'twitter:creator', content: '@AnthonyLzq' },
  {
    property: 'twitter:url',
    content: 'https://air-quality-back-office.vercel.app'
  },
  { property: 'twitter:title', content: 'Air Quality' },
  {
    property: 'twitter:description',
    content: 'Air quality meter for Lima, Peru.'
  }
]

type LoaderData = {
  ENV: ENV
}

export const loader: LoaderFunction = () => {
  return json<LoaderData>({
    ENV: getENV()
  })
}

const App = () => {
  const { ENV } = useLoaderData<LoaderData>()

  return (
    <Document>
      <GlobalStyle />
      <Outlet />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)}`
        }}
      />
    </Document>
  )
}

export default App

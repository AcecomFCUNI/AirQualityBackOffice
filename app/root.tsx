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

import Nunito300 from '@fontsource/nunito/300.css'
import Nunito400 from '@fontsource/nunito/400.css'
import Nunito500 from '@fontsource/nunito/500.css'
import Nunito700 from '@fontsource/nunito/700.css'

import type { ENV } from './env.server'
import { getENV } from './env.server'
import { GlobalStyle } from './global'

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
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalStyle />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }}
        />
        <LiveReload />
      </body>
    </html>
  )
}

export default App

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction
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

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Water Quality Back Office',
  viewport: 'width=device-width,initial-scale=1',
  'Content-Security-Policy': {
    httpEquiv: 'Content-Security-Policy',
    content: 'upgrade-insecure-requests'
  }
})

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

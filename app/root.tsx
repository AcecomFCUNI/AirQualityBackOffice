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
  title: 'Air Quality',
  viewport: 'width=device-width,initial-scale=1',
  keywords: 'Air,Quality,Lima,Peru,IoT',
  description: 'Air quality meter for Lima, Peru',
  'og:type': 'website',
  'og:url': 'https://air-quality-back-office.vercel.app',
  'og:title': 'Air Quality',
  'og:description': 'Air quality meter for Lima, Peru',
  // 'og:image': 'https://acecom.dev/images/Marck5.png',
  'og:locale': 'es_ES',
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@AnthonyLzq',
  'twitter:url': 'https://air-quality-back-office.vercel.app',
  'twitter:title': 'Air Quality',
  'twitter:description': 'Air quality meter for Lima, Peru.'
  // 'twitter:image': 'https://acecom.dev/images/Marck5.png'
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

import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const meta: V2_MetaFunction = () => [
  { title: 'IOT - Calidad de Aire' },
  {
    property: 'description',
    content: 'Sistema de monitoreo de calidad de aire en tiempo real'
  }
]

export let loader: LoaderFunction = async () => {
  return redirect('/demo/realtime/map')
}

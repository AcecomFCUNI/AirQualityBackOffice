import { createContext } from 'react'

type ClientStyleContextData = {
  reset: () => void
}

const ClientStyleContext = createContext<ClientStyleContextData>({
  reset: () => {}
})

export { ClientStyleContext }

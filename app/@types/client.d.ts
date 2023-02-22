type ClientData = {
  date: string
  aq: number
  h2s: number
  humidity: number
  temperature: number
}

type Module = {
  id: number
  sensorIds: number[]
}

type ClientDto = {
  id: string
  email: string
  name: string
  lastName: string
  modules: Module[]
}

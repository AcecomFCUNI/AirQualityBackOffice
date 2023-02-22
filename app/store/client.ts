import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ClientDataState = {
  clientID: string
  historicDate: string[]
  updateHistoricDate: (date: string) => void
  historicAq: number[]
  updateHistoricAq: (pH: number) => void
  historicH2s: number[]
  updateHistoricH2s: (tds: number) => void
  historicHumidity: number[]
  updateHistoricHumidity: (turbidity: number) => void
  historicTemperature: number[]
  updateHistoricTemperature: (temperature: number) => void
}

const useClientDataStore = create<ClientDataState>()(set => ({
  clientID: Date.now().toString(),
  historicDate: [],
  updateHistoricDate: date =>
    set(({ historicDate }) => {
      historicDate.push(date)

      return {
        historicDate
      }
    }),
  historicAq: [],
  updateHistoricAq: pH =>
    set(({ historicAq }) => {
      historicAq.push(pH)

      return {
        historicAq
      }
    }),
  historicTemperature: [],
  updateHistoricTemperature: temperature =>
    set(({ historicTemperature }) => {
      historicTemperature.push(temperature)

      return {
        historicTemperature
      }
    }),
  historicH2s: [],
  updateHistoricH2s: tds =>
    set(({ historicH2s }) => {
      historicH2s.push(tds)

      return {
        historicH2s
      }
    }),
  historicHumidity: [],
  updateHistoricHumidity: turbidity =>
    set(({ historicHumidity }) => {
      historicHumidity.push(turbidity)

      return {
        historicHumidity
      }
    })
}))

type ClientState = {
  client: ClientDto | null
  signIn: (client: ClientDto) => void
  logout: () => void
}

const useClientStore = create<ClientState>()(
  persist(
    set => ({
      client: null,
      signIn: client => set(() => ({ client })),
      logout: () => set(() => ({ client: null }))
    }),
    {
      name: 'client-storage' // unique name
    }
  )
)

export { useClientDataStore, useClientStore }

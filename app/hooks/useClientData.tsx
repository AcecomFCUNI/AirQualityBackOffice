import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { useClientDataStore } from '~/store'

const initialData: ClientData = {
  date: '',
  aq: Infinity,
  h2s: Infinity,
  humidity: Infinity,
  temperature: Infinity
}

type NumberObject = {
  value: number
}

const useClientData = () => {
  const [date, setDate] = useState(initialData.date)
  const [aq, setAq] = useState<NumberObject>({ value: initialData.aq })
  const [h2s, setH2s] = useState<NumberObject>({ value: initialData.h2s })
  const [humidity, setHumidity] = useState<NumberObject>({
    value: initialData.humidity
  })
  const [temperature, setTemperature] = useState<NumberObject>({
    value: initialData.temperature
  })
  const {
    historicDate,
    updateHistoricDate,
    historicAq,
    updateHistoricAq,
    historicH2s,
    updateHistoricH2s,
    historicHumidity,
    updateHistoricHumidity,
    historicTemperature,
    updateHistoricTemperature
  } = useClientDataStore()

  useEffect(() => {
    const socket = io(ENV.WS_URL, {
      reconnectionDelayMax: 10000,
      transports: ['websocket', 'polling', 'flashsocket'],
      query: {
        id: ENV.USER_ID,
        moduleId: 1,
        sensorId: 1
      }
    })

    socket.on('1/initialData', (message: ClientData) => {
      setDate(message.date)
      setAq({ value: message.aq })
      setH2s({ value: message.h2s })
      setHumidity({ value: message.humidity })
      setTemperature({ value: message.temperature })
    })

    socket.on('1/aq', (pHMessage: number) => {
      setAq({ value: pHMessage })
    })

    socket.on('1/temperature', (temperatureMessage: number) => {
      setTemperature({ value: temperatureMessage })
    })

    socket.on('1/h2s', (tdsMessage: number) => {
      setH2s({ value: tdsMessage })
    })

    socket.on('1/humidity', (turbidityMessage: number) => {
      setHumidity({ value: turbidityMessage })
    })

    socket.on('1/date', (dateMessage: string) => {
      setDate(dateMessage)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (aq.value !== Infinity) updateHistoricAq(aq.value)
  }, [aq, updateHistoricAq])

  useEffect(() => {
    if (h2s.value !== Infinity) updateHistoricH2s(h2s.value)
  }, [h2s, updateHistoricH2s])

  useEffect(() => {
    if (temperature.value !== Infinity)
      updateHistoricTemperature(temperature.value)
  }, [temperature, updateHistoricTemperature])

  useEffect(() => {
    if (humidity.value !== Infinity) updateHistoricHumidity(humidity.value)
  }, [humidity, updateHistoricHumidity])

  useEffect(() => {
    if (date) {
      const formattedDate = new Intl.DateTimeFormat('es-ES', {
        dateStyle: 'short',
        hour12: true,
        timeStyle: 'medium'
      }).format(new Date(date))

      updateHistoricDate(formattedDate)
    }
  }, [date, updateHistoricDate])

  return {
    aq: aq.value,
    h2s: h2s.value,
    temperature: temperature.value,
    humidity: humidity.value,
    historicDate,
    historicAq,
    historicH2s,
    historicTemperature,
    historicHumidity
  }
}

export { useClientData }

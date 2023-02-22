import type { FC } from 'react'
import { Line } from 'react-chartjs-2'

type CustomLineProps = {
  historicDate: string[]
  data: number[]
  borderColor: string
  backgroundColor: string
  label: string
}

const CustomLine: FC<CustomLineProps> = props => {
  const { historicDate, data, borderColor, backgroundColor, label } = props

  return (
    <Line
      style={{
        backgroundColor: '#f2f2f2',
        borderRadius: '0.25rem',
        width: '100%',
        boxShadow:
          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            ticks: {
              callback: (value, index) => historicDate[index].split(',')
            }
          }
        }
      }}
      data={{
        labels: historicDate,
        datasets: [
          {
            label,
            data,
            borderColor,
            backgroundColor
          }
        ]
      }}
    />
  )
}

export { CustomLine }

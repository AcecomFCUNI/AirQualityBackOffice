import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      upColor: string
      middleColor: string
      bottomColor: string
      gradient: string
    }
    fab: {
      mainColor: string
      hoverColor: string
      activeColor: string
      fontColor: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customColors?: {
      upColor?: string
      middleColor?: string
      bottomColor?: string
      gradient?: string
    }
    fab?: {
      mainColor?: string
      hoverColor?: string
      activeColor?: string
      fontColor?: string
    }
  }
  interface BreakpointOverrides {
    xxs: true
    xs: true
    smd: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

const themeConfig = {
  customColors: {
    upColor: 'rgb(0,21,41)',
    middleColor: 'rgba(17,93,99,1)',
    bottomColor: 'rgba(27,143,133,1)',
    gradient:
      'linear-gradient(180deg, rgba(0,21,41,1) 0%, rgba(17,93,99,1) 50%, rgba(27,143,133,1) 100%)'
  },
  fab: {
    mainColor: '#3D3D3D',
    hoverColor: '#4B4B4B',
    activeColor: '#363636',
    fontColor: '#BCBCBC'
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 464,
      sm: 600,
      smd: 756,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
}

const theme = createTheme(themeConfig)

export { theme, themeConfig }

import { GlobalStyles } from '@mui/material'

const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        fontFamily: 'Nunito'
      },
      '*::-webkit-scrollbar': {
        backgroundColor: '#5bc1a5',
        width: 8,
        height: 8
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'grey',
        borderRadius: 16
      },
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px #fff inset',
          WebkitTextFillColor: '#666',
          fontFamily: 'Nunito !important',
          WebkitAnimation: 'autofill 0s forwards',
          animation: 'autofill 0s forwards',
          '&:hover': {
            WebkitBoxShadow: '0 0 0 1000px #fff inset',
            WebkitTextFillColor: '#666',
            fontFamily: 'Nunito !important',
            WebkitAnimation: 'autofill 0s forwards',
            animation: 'autofill 0s forwards'
          },
          '&:focus': {
            WebkitBoxShadow: '0 0 0 1000px #fff inset',
            WebkitTextFillColor: '#666',
            fontFamily: 'Nunito !important',
            WebkitAnimation: 'autofill 0s forwards',
            animation: 'autofill 0s forwards'
          },
          '&:active': {
            WebkitBoxShadow: '0 0 0 1000px #fff inset',
            WebkitTextFillColor: '#666',
            fontFamily: 'Nunito !important',
            WebkitAnimation: 'autofill 0s forwards',
            animation: 'autofill 0s forwards'
          }
        },
        '&:-internal-autofill-selected': {
          fontFamily: 'Nunito !important',
          fontWeight: '700 !important',
          '&::first-line': {
            fontFamily: 'Nunito !important'
          }
        },
        '&:-internal-autofill-previewed': {
          fontFamily: 'Nunito !important'
        }
      },
      a: {
        all: 'unset',
        cursor: 'pointer'
      },
      body: {
        overflowY: 'auto'
      }
    }}
  />
)

export { GlobalStyle }

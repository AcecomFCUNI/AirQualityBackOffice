import type { Theme } from '@mui/material'
import { Typography, styled } from '@mui/material'

import { makeStyles } from '~/utils'

type CardStylesProps = {
  height?: string
  minWidthCardContainer?: string | number
  maxWidthCardContainer?: string | number
}

const useCardStyles = makeStyles<CardStylesProps>()((theme: Theme, props) => ({
  wrapper: {
    display: 'grid',
    placeContent: 'center',
    overflow: 'hidden',
    marginTop: 40,
    height: props.height || 'calc(100vh - 40px)',
    width: '100vw',
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      height: '100vh'
    }
  },
  cardFormContainer: {
    minWidth: 240,
    maxWidth: 340,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: '32px 36px',
    boxSizing: 'content-box',
    [theme.breakpoints.down('xs')]: {
      minWidth: 220
    }
  },
  cardBodyTitle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: '#417cea',
    fontSize: 26,
    fontFamily: 'Nunito, sans-serif',
    '&:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      left: 0,
      bottom: -10,
      width: 25,
      height: 4,
      backgroundColor: '#417cea'
    },
    marginBottom: 64
  },
  cardFormControl: {
    width: '-webkit-fill-available',
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid #666',
    color: '#666',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s',
    '&::placeholder': {
      color: '#666'
    },
    '&:focus': {
      borderBottomColor: '#ddd'
    },
    borderRadius: '4px'
  },
  cardFormControlButtonContainer: {
    marginTop: 16,
    marginBottom: 0,
    display: 'grid',
    placeContent: 'flex-end'
  },
  cardFormControlButton: {
    background: 'none',
    border: 'none',
    fontSize: 14,
    backgroundColor: '#004eda',
    padding: '12px 20px',
    minWidth: 120,
    borderRadius: 8,
    outline: 'none',
    fontWeight: 700
  }
}))

type ButtonStyleProps = {
  active: boolean
}

const useButtonStyles = makeStyles<ButtonStyleProps>()(
  (theme: Theme, props) => ({
    button: {
      color: props.active ? '#f2f0f0' : '#929292',
      cursor: props.active ? 'pointer' : 'default'
    }
  })
)

const MainContactTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 700,
  fontSize: 28,
  [theme.breakpoints.down('md')]: {
    fontSize: 24
  }
}))

const SecondaryContactTypography = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 400,
  fontSize: 12
})

export {
  MainContactTypography,
  SecondaryContactTypography,
  useCardStyles,
  useButtonStyles
}

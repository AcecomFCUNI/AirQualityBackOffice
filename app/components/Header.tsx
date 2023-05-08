import { Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

import { EXTERNAL_BACKGROUND } from '~/utils'

const Header = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '1rem',
        height: '64px',
        backgroundColor: EXTERNAL_BACKGROUND,
        width: '100%',
        zIndex: 1
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          color: '#ddd'
        }}
      >
        <Typography variant='subtitle1' color='inherit'>
          Jhon Rincón
        </Typography>
        <PersonIcon fontSize='small' color='inherit' />
      </div>
    </nav>
  )
}

export { Header }

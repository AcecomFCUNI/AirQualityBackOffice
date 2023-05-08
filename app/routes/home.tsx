import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'

import { List, ListItemButton, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'

import { CustomListItemIcon, Header } from '~/components'
import { EXTERNAL_BACKGROUND, makeStyles } from '~/utils'
import FullLogo from '~/static/images/fullLogo.png'

export const loader: LoaderFunction = async ({ request }) => {
  if (!request.url.includes('/home/realtime')) return redirect('/home/realtime')

  return null
}

const SIDEBAR_WIDTH = '240px'

const useStyles = makeStyles()(() => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: `${SIDEBAR_WIDTH} 1fr`,
    background: EXTERNAL_BACKGROUND,
    color: '#ddd',
    overflow: 'auto'
  },
  figure: {
    width: '100%',
    height: '64px',
    paddingLeft: '8px',
    '& > img': {
      maxWidth: SIDEBAR_WIDTH,
      height: '100%'
    }
  },
  sidebar: {
    zIndex: 0,
    color: '#ddd'
  },
  main: {
    width: '100%',
    height: '100vh'
  }
}))

const Dashboard = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <aside className={classes.sidebar}>
        <Link to='/'>
          <ListItemButton className={classes.figure}>
            <img src={FullLogo} alt='Bus Geolocation' loading='lazy' />
          </ListItemButton>
        </Link>
        <List style={{ paddingTop: '0px' }}>
          <ListItemButton>
            <CustomListItemIcon>
              <HomeIcon fontSize='small' color='inherit' />
            </CustomListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <CustomListItemIcon>
              <PersonIcon fontSize='small' />
            </CustomListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <CustomListItemIcon>
              <NotificationsIcon fontSize='small' />
            </CustomListItemIcon>
            <ListItemText>Notifications</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <CustomListItemIcon>
              <SettingsIcon fontSize='small' />
            </CustomListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </List>
      </aside>
      <section className={classes.main}>
        <Header />
        <Outlet />
      </section>
    </div>
  )
}

export default Dashboard

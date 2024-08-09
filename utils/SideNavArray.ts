import { FiHome, FiCalendar, FiClock, FiVideo, FiUser } from 'react-icons/fi'
import { SIDENAV } from './SideNavInterface'

const sideNavItems: SIDENAV[] = [
  {
    name: 'Home',
    icon: FiHome,
    index: 0,
  },
  {
    name: 'Previous',
    icon: FiCalendar,
    index: 1,
  },
  {
    name: 'Upcoming',
    icon: FiClock,
    index: 2,
  },
  {
    name: 'Recordings',
    icon: FiVideo,
    index: 3,
  },
  {
    name: 'Personal Room',
    icon: FiUser,
    index: 4,
  },
]

export default sideNavItems

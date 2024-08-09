import { FiHome, FiCalendar, FiClock, FiVideo, FiUser } from 'react-icons/fi'
import { SIDENAV } from './SideNavInterface'

const sideNavItems: SIDENAV[] = [
  {
    name: 'Home',
    icon: FiHome,
    index: 1,
  },
  {
    name: 'Previous',
    icon: FiCalendar,
    index: 2,
  },
  {
    name: 'Upcoming',
    icon: FiClock,
    index: 3,
  },
  {
    name: 'Recordings',
    icon: FiVideo,
    index: 4,
  },
  {
    name: 'Personal Room',
    icon: FiUser,
    index: 5,
  },
]

export default sideNavItems

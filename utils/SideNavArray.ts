import { FiHome, FiCalendar, FiClock, FiVideo, FiUser } from 'react-icons/fi'

const sideNavItems = [
  {
    name: 'Home',
    path: '/home',
    icon: FiHome,
  },
  {
    name: 'Previous',
    path: '/previous-meetings',
    icon: FiCalendar,
  },
  {
    name: 'Upcoming',
    path: '/upcoming-meetings',
    icon: FiClock,
  },
  {
    name: 'Recordings',
    path: '/recordings',
    icon: FiVideo,
  },
  {
    name: 'Personal Room',
    path: '/personal-room',
    icon: FiUser,
  },
]

export default sideNavItems

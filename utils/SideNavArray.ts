import { FiHome, FiCalendar, FiClock, FiVideo, FiUser } from 'react-icons/fi'

const sideNavItems = [
  {
    name: 'Home',
    path: '/home',
    icon: FiHome,
    index: 1,
  },
  {
    name: 'Previous',
    path: '/previous-meetings',
    icon: FiCalendar,
    index: 2,
  },
  {
    name: 'Upcoming',
    path: '/upcoming-meetings',
    icon: FiClock,
    index: 3,
  },
  {
    name: 'Recordings',
    path: '/recordings',
    icon: FiVideo,
    index: 4,
  },
  {
    name: 'Personal Room',
    path: '/personal-room',
    icon: FiUser,
    index: 5,
  },
]

export default sideNavItems

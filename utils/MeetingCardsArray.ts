import {
  FaVideo,
  FaDoorOpen,
  FaCalendarAlt,
  FaRegFileVideo,
} from 'react-icons/fa'

const meetingCards = [
  {
    icon: FaVideo, // Start Meeting Icon
    heading: 'Start Meeting',
    bgColor: 'bg-blue-800', // Navy Blue
  },
  {
    icon: FaDoorOpen, // Join Meeting Icon
    heading: 'Join Meeting',
    bgColor: 'bg-teal-600', // Teal
  },
  {
    icon: FaCalendarAlt, // Schedule Meeting Icon
    heading: 'Schedule Meeting',
    bgColor: 'bg-gray-700', // Dark Gray-Blue
  },
  {
    icon: FaRegFileVideo, // View Recordings Icon
    heading: 'View Recordings',
    bgColor: 'bg-slate-700', // Slate
  },
]

export default meetingCards

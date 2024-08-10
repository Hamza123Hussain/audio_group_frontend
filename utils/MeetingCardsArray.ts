import CreateMeeting from '@/components/Inputfields/CreateMeeting'
import Empty from '@/components/Inputfields/Empty'
import JoinMeeting from '@/components/Inputfields/JoinMeeting'
import { Input } from 'postcss'
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
    bgColor: 'bg-blue-600', // Navy Blue
    Input: CreateMeeting,
  },
  {
    icon: FaDoorOpen, // Join Meeting Icon
    heading: 'Join Meeting',
    bgColor: 'bg-teal-600', // Teal
    Input: JoinMeeting,
  },
  {
    icon: FaCalendarAlt, // Schedule Meeting Icon
    heading: 'Schedule Meeting',
    bgColor: 'bg-gray-700', // Dark Gray-Blue
    Input: Empty,
  },
  {
    icon: FaRegFileVideo, // View Recordings Icon
    heading: 'View Recordings',
    bgColor: 'bg-slate-700', // Slate
    Input: Empty,
  },
]

export default meetingCards

import React from 'react'
import CurrentDateTime from '../CurrenTimeandDate'
import TheMeetingsCards from './Home/TheMeetingsCards'
import { FaCalendarAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <div className=" p-4 flex-col flex ">
      <div className=" p-4 bg-slate-950 rounded-lg text-white flex flex-col justify-between gap-10 items-start ">
        <div>
          {' '}
          <h1 className=" bg-slate-500 rounded-lg text-black p-2">
            Upcoming Meeting : 12:30 PM
          </h1>
        </div>

        <CurrentDateTime />
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-2 justify-center md:grid-cols-4 mt-5 md:px-4   gap-10 items-center md:justify-between">
        <TheMeetingsCards />
      </div>
      <div className=" flex flex-col px-4 mt-5 gap-2">
        <h1 className=" font-extrabold text-2xl">Upcoming Meetings</h1>
        <div className=" w-full flex flex-col bg-slate-800 rounded-lg p-3">
          <h1>
            <FaCalendarAlt />
          </h1>
          <h1> Meeting Title</h1>
          <div className=" flex gap-2">
            <h1> Meeting Date</h1>
            <h1>Meeting time</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

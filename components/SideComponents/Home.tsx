import React from 'react'
import CurrentDateTime from '../CurrenTimeandDate'
import TheMeetingsCards from './Home/TheMeetingsCards'

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
      <div className=" grid grid-cols-1 sm:grid-cols-4 mt-5  px-4 gap-10 justify-between">
        <TheMeetingsCards />
      </div>
    </div>
  )
}

export default Home

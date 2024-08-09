import React from 'react'

const JoinMeeting = () => {
  return (
    <div className=" flex flex-col items-center gap-5">
      {' '}
      <h1 className=" text-2xl text-white"> Join A Meeting </h1>
      <input type="text" className=" bg-black text-white rounded-lg p-2" />
      <button className=" bg-blue-700 rounded-lg  px-5 p-2 text-white">
        Join Meeting
      </button>
    </div>
  )
}

export default JoinMeeting

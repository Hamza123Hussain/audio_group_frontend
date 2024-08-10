import React from 'react'

const CurrentDateTime = () => {
  const now = new Date()

  // Format the date
  const date = now.toLocaleDateString('en-US', {
    weekday: 'long', // 'Monday'
    year: 'numeric', // '2024'
    month: 'long', // 'August'
    day: 'numeric', // '10'
  })

  // Format the time
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="flex flex-col ">
      <h1 className="  text-white text-xl sm:text-6xl sm:px-2 px-4 py-2 ">
        {' '}
        {time}
      </h1>
      <h1 className=" text-white px-4"> {date}</h1>
    </div>
  )
}

export default CurrentDateTime

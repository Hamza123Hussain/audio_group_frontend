import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center  text-white bg-slate-200  w-full   fixed bottom-0">
      <div className="flex items-center ">
        <Image src={'/Logo.png'} width={40} height={40} alt="TalkHub Logo" />
        <h1 className="text-slate-900 font-semibold hover:font-bold text-lg">
          TalkHub
        </h1>
      </div>
      <p className="text-gray-400 text-sm mt-2">
        © {new Date().getFullYear()} TalkHub. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

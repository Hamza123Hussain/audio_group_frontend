import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { IoAdd } from 'react-icons/io5'
import meetingCards from '@/utils/MeetingCardsArray'
const TheMeetingsCards = () => {
  return (
    <>
      {meetingCards.map((element) => (
        <div key={element.heading}>
          <Dialog>
            <DialogTrigger>
              <div
                className={`${element.bgColor} hover:border-2 flex flex-col p-2 w-[32vw]  md:w-[18vw]   rounded-xl gap-10`}
              >
                <div className=" border-2 border-gray-300 w-fit rounded-lg">
                  {<element.icon size={40} />}
                </div>
                <h1 className=" text-left font-bold text-[8px] sm:text-xs md:text-base">
                  {element.heading}
                </h1>
              </div>
            </DialogTrigger>
            <DialogContent className=" bg-slate-800">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription>{<element.Input />}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  )
}

export default TheMeetingsCards

import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import SideNavCompoentsSmall from './SideComponents/sidenavsmallcomponents'
import Image from 'next/image'

const SidenavSmall = () => {
  return (
    <Sheet>
      <div className=" min-h-screen bg-slate-900">
        <SheetTrigger className="sm:hidden  p-2 ">
          <div className=" hover:border-2 text-white">
            <CiMenuBurger size={20} />
          </div>
        </SheetTrigger>
        <SheetContent side={'left'} className=" bg-slate-800 w-full">
          <SheetHeader>
            <SheetTitle>
              {' '}
              <div className="flex items-center gap-3 ">
                <Image
                  src={'/Logo.png'}
                  width={50}
                  height={50}
                  alt="TalkHub Logo"
                />
                <h1 className="text-2xl font-bold">TalkHub</h1>
              </div>
            </SheetTitle>
            <SheetDescription className="w-full min-h-screen">
              <SideNavCompoentsSmall />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </div>
    </Sheet>
  )
}

export default SidenavSmall

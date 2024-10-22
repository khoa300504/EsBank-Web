'use client'

import React, { useState } from 'react'
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const [menuStatus, setMenuStatus] = useState(false)

  const handleToggleMenu = () => {
    setMenuStatus(!menuStatus)
  }

  return (
    <div className='h-full flex flex-col sm:flex-row'>
      {/* SideBar */}
      <div className={`${menuStatus === false ? 'hidden' : ''} sm:w-[10%] lg:w-[17%] xl:w-[15%] 2xl:w-[12%] sm:flex flex-col items-center
        h-fit sm:h-screen border-r sticky top-[123px] sm:top-0 bottom-0 z-50 bg-white border-b`}>
        <Sidebar/>
      </div>
      {/* Header and Content */}
      <div className="w-full sm:w-[90%] lg:w-[83%] xl:w-[85%] 2xl:w-[88%] flex flex-col sm:relative">
        <Header handleToggleMenu={handleToggleMenu}/>
        <div className="main-content bg-[#F4F6F9] h-full mt-[7.7rem] sm:mt-20">
          {children}
        </div>
      </div>
    </div>
  )
}
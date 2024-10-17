import React from 'react'
import { Metadata } from 'next'
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Main dashboard for esbank'
}

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-full flex'>
      {/* SideBar */}
      <div className="hidden sm:w-[10%] lg:w-[17%] xl:w-[15%] 2xl:w-[12%] sm:flex flex-col items-center relative h-screen border-r">
        <Sidebar/>
      </div>
      {/* Header and Content */}
      <div className="w-full sm:w-[90%] lg:w-[83%] xl:w-[85%] 2xl:w-[88%] flex flex-col relative">
        <Header/>
        <div className="main-content bg-[#EEEEEE] h-full mt-24">
          {children}
        </div>
      </div>
    </div>
  )
}
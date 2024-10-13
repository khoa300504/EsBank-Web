import React from 'react'
import { Metadata } from 'next'
import Sidebar from '~/components/Sidebar'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Main dashboard for esbank'
}

export default function DashboardLayout({
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-screen flex'>
      <div className="side-bar w-[13%] flex flex-col items-center py-10 gap-[60px]">
        <div className="logo">
          <Image
            alt='Logo'
            src='/images/img_sidebar_logo.png'
            width={160}
            height={40}
          />
        </div>
        <Sidebar/>
      </div>
      <div className="w-[87%] bg-purple-300">R</div>
    </div>
  )
}
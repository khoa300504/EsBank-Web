'use client'
import Image from 'next/image'
import { useState } from 'react'

interface HeaderProps {
  handleToggleMenu: () => void
}

export default function Header({ handleToggleMenu }: HeaderProps) {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="header flex flex-col-reverse md:flex-row items-center border-b py-3 px-1 sm:px-5 fixed top-0 right-0 w-[inherit] bg-white z-50">
      <div className="w-1/5 md:w-2/5 font-inter text-[28px] text-black font-semibold flex items-center justify-start sm:justify-center gap-1 sm:gap-3">
        {/* <div className="">
        </div> */}
        <div className="">Overview</div>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/5 flex justify-between sm:justify-end items-center gap-3 md:gap-7 pr-1 md:pr-6">
        <div className="cursor-pointer flex sm:hidden" onClick={() => handleToggleMenu()}>
          <Image
            alt=''
            src='/images/img_menu.svg'
            height={24}
            width={24}
          />
        </div>
        {/* Search */}
        <label className="input flex items-center gap-3 bg-[#EEEEEE] hover:bg-[#e3e1e1]
          focus-within:outline-offset-0 border-none rounded-3xl w-56 sm:w-72 relative">
          <Image
            alt='search icon'
            src='/images/img_search.svg'
            width={16}
            height={16}
            className='cursor-pointer'
          />
          <input
            type="text"
            className="grow"
            placeholder="Search for something"
            value={searchText}
            onChange={( e: React.ChangeEvent<HTMLInputElement> ) => {
              setSearchText(e.target.value)
            }}/>
          {/* Clear BTN */}
          <Image
            alt='search icon'
            src='/images/img_x.svg'
            width={16}
            height={16}
            className={`cursor-pointer ${searchText === '' ? 'hidden' : 'block'} absolute right-4`}
            onClick={() => {
              setSearchText('')
            }}
          />
        </label>
        {/* Notify Button */}
        <button className="btn btn-circle hover:bg-[#e3e1e1]">
          <Image
            alt='Setting Image'
            src='/images/img_no_notification.svg'
            width={24}
            height={24}
          />
        </button>
        {/* Avatar */}
        <div className="avatar online cursor-pointer">
          <div className="w-14 h-14 rounded-full">
            <Image
              alt='Your avatar'
              src='/images/avatar.jpg'
              width={24}
              height={24}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}
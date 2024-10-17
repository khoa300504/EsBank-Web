'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="header h-24 flex items-center border-b py-7 px-5 fixed top-0 right-0 w-[inherit] bg-white">
      <div className="w-2/5 font-inter text-[28px] text-black font-semibold flex items-center justify-start sm:justify-center gap-3">
        {/* <div className="">
          <button className="btn btn-circle btn-outline flex sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div> */}
        <div className="">Overview</div>
      </div>
      <div className="w-3/5 flex justify-end items-center gap-7 pr-6">
        {/* Search */}
        <label className="input flex items-center gap-3 bg-[#EEEEEE] hover:bg-[#e3e1e1] focus-within:outline-offset-0 border-none rounded-3xl w-72">
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
          <Image
            alt='search icon'
            src='/images/img_x.svg'
            width={16}
            height={16}
            className={`cursor-pointer ${searchText === '' ? 'hidden' : 'block'}`}
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
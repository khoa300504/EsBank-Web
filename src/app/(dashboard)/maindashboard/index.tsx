'use client'

import Image from 'next/image'
import CreditCard from '~/components/CreditCard'
import SectionTitle from '~/components/SectionTitle'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const WeeklyChart = dynamic(() => import('~/components/BarChart/index'), { ssr: false })

function DashboardPage() {
  const [amount, setAmount] = useState('')

  return (
    <div className='dashboard sm:flex flex-col px-10 gap-6 h-full'>
      {/* My cards and Recent transaction */}
      <div className="flex flex-col xl:flex-row gap-16">
        <div className="cards-section w-full xl:w-[62%] flex flex-col">
          <div className="py-3 flex justify-between">
            <SectionTitle title='My Cards'/>
            <div className="font-inter text-[17px] font-semibold self-end cursor-pointer">See ALL</div>
          </div>
          <div className="cards flex flex-col sm:flex-row gap-5 justify-between">
            <CreditCard card_holder='Nguyen Tuan Khoa' card_valid_date='12/25' card_number='3778 **** **** 1234' card_balance='7,777'/>
            <CreditCard card_holder='Nguyen Tuan Khoa' card_valid_date='12/25' card_number='3778 **** **** 1234' card_balance='15,000'/>
          </div>
        </div>
        <div className="transactions-section w-full xl:w-[38%]">
          <div className="py-3">
            <SectionTitle title='Recent Transactions'/>
          </div>
          <div className="transactions flex flex-col p-6 justify-between bg-white rounded-3xl h-60 gap-3">
            <div className="flex items-center gap-4">
              <button className="btn btn-circle">
                <Image
                  alt=''
                  src='/images/img_mini_card.svg'
                  width={28}
                  height={28}
                />
              </button>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col font-inter">
                  <div className="text-base text-[#505887] font-medium">Deposit from my Card</div>
                  <div className="text-[15px] text-[#887EA2]">28 January 2024</div>
                </div>
                <div className="font-inter text-base text-[#D13329] font-medium">+$5,400</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn btn-circle">
                <Image
                  alt=''
                  src='/images/img_mini_card.svg'
                  width={28}
                  height={28}
                />
              </button>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col font-inter">
                  <div className="text-base text-[#505887] font-medium">Deposit Paypal</div>
                  <div className="text-[15px] text-[#887EA2]">25 January 2024</div>
                </div>
                <div className="font-inter text-base text-[#D13329] font-medium">+$2,400</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn btn-circle">
                <Image
                  alt=''
                  src='/images/img_mini_card.svg'
                  width={28}
                  height={28}
                />
              </button>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col font-inter">
                  <div className="text-base text-[#505887] font-medium">Nguyen Manh Tan</div>
                  <div className="text-[15px] text-[#887EA2]">15 January 2024</div>
                </div>
                <div className="font-inter text-base text-[#D13329] font-medium">-$10,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Weekly activity and Expense statistics */}
      <div className="flex flex-col xl:flex-row gap-16">
        {/* Weekly Chart */}
        <div className="w-full xl:w-[62%] rounded-3xl flex flex-col">
          <div className="py-3"><SectionTitle title='Weekly Activity'/></div>
          <div className="h-96 bg-white rounded-3xl pt-10 pb-6 px-6"><WeeklyChart/></div>
        </div>
        {/* Quick tranfer */}
        <div className="w-full xl:w-[38%]">
          <div className="py-3"><SectionTitle title='Quick Tranfer'/></div>
          <div className="h-96 bg-white rounded-3xl flex flex-col p-12">
            <div className="recent-users flex h-2/3 xl:justify-between px-0 sm:px-10 xl:px-0">
              <div className="recent-user w-1/3 flex flex-col justify-center items-center">
                <div className="avatar h-2/3 cursor-pointer">
                  <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                    <Image
                      alt='user'
                      src='/images/img_recent_01.jpg'
                      width={24}
                      height={24}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="user-info font-inter">
                  <div className="text-center text-dblue text-base font-semibold">Venus</div>
                  <div className="text-center text-[15px] font-semibold text-[#888EA2]">CEO</div>
                </div>
              </div>
              <div className="recent-user w-1/3 flex flex-col justify-center items-center">
                <div className="avatar h-2/3 cursor-pointer">
                  <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                    <Image
                      alt='user'
                      src='/images/img_recent_02.jpg'
                      width={24}
                      height={24}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="user-info font-inter">
                  <div className="text-center text-dblue text-base font-semibold">Charlotte</div>
                  <div className="text-center text-[15px] font-semibold text-[#888EA2]">CEO</div>
                </div>
              </div>
              <div className="recent-user w-1/3 flex flex-col justify-center items-center">
                <div className="avatar h-2/3 cursor-pointer">
                  <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                    <Image
                      alt='user'
                      src='/images/img_recent_03.jpg'
                      width={24}
                      height={24}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="user-info font-inter">
                  <div className="text-center text-dblue text-base font-semibold">Pandora</div>
                  <div className="text-center text-[15px] font-semibold text-[#888EA2]">CEO</div>
                </div>
              </div>
            </div>
            <div className="tranfer-info h-1/3 py-6 flex justify-between">
              <div className="w-[30%] self-center">Write Amount</div>
              <div className="w-[70%] self-center relative">
                <input
                  type="number"
                  placeholder="Amount"
                  className="input input-ghost w-full rounded-full
                  outline-none border-none focus-within:outline-white bg-[#F4F4F6] font-semibold text-black"
                  onChange={e => {
                    setAmount(e.target.value)
                  }}
                  value={amount}
                />
                <button className="btn text-white bg-black rounded-full absolute right-0 hover:bg-dblue">
                    Send
                  <Image
                    alt=''
                    src='/images/img_send.svg'
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

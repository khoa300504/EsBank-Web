'use client'

import Image from 'next/image'
import { useState } from 'react'
import SectionTitle from '~/components/SectionTitle'

export default function TransactionsPage() {
  const [filterType, setFilterType] = useState(1)
  const [pageNum, setPageNum] = useState(1)

  const handleFilterType = (type: number) => {
    setFilterType(type)
  }

  const handlePageNum = (num: number) => {
    setPageNum(num)
  }

  return (
    <div className="transactions flex flex-col px-10 w-full gap-6">
      <div className="py-6"><SectionTitle title="Recent Transactions" /></div>
      <div className='flex flex-col'>
        <div className="operations flex font-inter justify-between md:justify-end text-base text-lgray font-medium py-1">
          <div
            className={`all hover:text-[#2D60FF] cursor-pointer mr-32 ${filterType === 1 ? 'text-[#2D60FF]' : ''}`}
            onClick={() => handleFilterType(1)}>
            All
          </div>
          <div
            className={`income hover:text-[#2D60FF] cursor-pointer mr-32 ${filterType === 2 ? 'text-[#2D60FF]' : ''}`}
            onClick={() => handleFilterType(2)}>
            Income
          </div>
          <div
            className={`expense hover:text-[#2D60FF] cursor-pointer ${filterType === 3 ? 'text-[#2D60FF]' : ''}`}
            onClick={() => handleFilterType(3)}>
            Expense
          </div>
        </div>
        <hr className='h-[2px] w-full bg-black mb-6'/>
        <div className="transactions-section p-6 mb-6">
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className='font-inter text-base text-lgray font-medium'>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Card</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody className='font-inter text-[#182651]'>
                  <tr className="hover">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>Blue</td>
                  </tr>
                  <tr className="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Purple</td>
                    <td>Purple</td>
                    <td>Purple</td>
                  </tr>
                  <tr className="hover">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                  </tr>
                  <tr className="hover">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                  </tr>
                  <tr className="hover">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                  </tr>
                  <tr className="hover">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="page-manage w-5/6 md:w-3/5 lg:w-1/2 self-center flex justify-between items-center font-inter text-[15px] font-medium text-dblue">
          <div className="previous flex" onClick={() => setPageNum(prev => (prev > 1 ? prev - 1 : prev))}>
            <div className="cursor-pointer">
              <Image
                alt=''
                src='/images/img_arrow_left.svg'
                width={24}
                height={24}
              />
            </div>
            <div className="cursor-pointer">Previous</div>
          </div>
          <div className="page-nums flex gap-1 xl:gap-5 2xl:gap-7">
            <div
              className={`cursor-pointer px-3 py-1 rounded-full ${pageNum === 1 ? 'bg-dblue text-white' : 'hover:opacity-85'}`}
              onClick={() => handlePageNum(1)}>
              1
            </div>
            <div
              className={`cursor-pointer px-3 py-1 rounded-full ${pageNum === 2 ? 'bg-dblue text-white' : 'hover:opacity-85'}`}
              onClick={() => handlePageNum(2)}>
              2
            </div>
            <div
              className={`cursor-pointer px-3 py-1 rounded-full ${pageNum === 3 ? 'bg-dblue text-white' : 'hover:opacity-85'}`}
              onClick={() => handlePageNum(3)}>
              3
            </div>
            <div
              className={`cursor-pointer px-3 py-1 rounded-full ${pageNum === 4 ? 'bg-dblue text-white' : 'hover:opacity-85'}`}
              onClick={() => handlePageNum(4)}>
              4
            </div>
          </div>
          <div className="next flex" onClick={() => setPageNum(prev => (prev < 4 ? prev + 1 : prev))}>
            <div className="cursor-pointer">Next</div>
            <div className="cursor-pointer">
              <Image
                alt=''
                src='/images/img_arrow_right.svg'
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

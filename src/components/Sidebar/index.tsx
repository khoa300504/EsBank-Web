'use client'

import MenuItem from '../MenuItem'
import Image from 'next/image'
import React, { useCallback, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState(() => {
    const path = pathname.split('/')[1]
    switch (path) {
    case 'transactions':
      return 'Transaction'
    case 'investments':
      return 'Investment'
    case 'loans':
      return 'Loan'
    case 'creditcards':
      return 'Credit Card'
    case 'accounts':
      return 'Account'
    case 'setting':
      return 'Setting'
    default:
      return 'Dashboard'
    }
  })

  useEffect(() => {
    const path = pathname.split('/')[1]

    switch (path) {
    case 'transactions':
      setActiveItem('Transaction')
      break
    case 'investments':
      setActiveItem('Investment')
      break
    case 'loans':
      setActiveItem('Loan')
      break
    case 'creditcards':
      setActiveItem('Credit Card')
      break
    case 'accounts':
      setActiveItem('Account')
      break
    case 'setting':
      setActiveItem('Setting')
      break
    default:
      setActiveItem('Dashboard')
    }
  }, [pathname])

  const handleChangeIcon = useCallback((title: string) => {
    setActiveItem(title)
  }, [])

  return (
    <nav className="side-bar flex flex-col gap-[60px] py-7">
      {/* logo */}
      <div className="logo hidden sm:flex items-center gap-3 justify-center">
        <Image
          alt='Logo'
          src='/images/img_react.svg'
          width={40}
          height={40}
        />
        <h2 className='font-poppins font-semibold text-2xl text-dblue hidden lg:block'>EsBank</h2>
      </div>
      {/* Sidebar menu */}
      <ul className='flex flex-col gap-10 lg:gap-5 items-center lg:items-start font-inter text-lg text-lgray font-medium mb-52 lg:mb-40 justify-center'>
        <MenuItem
          key="dashboard"
          img_url={`img_home${activeItem === 'Dashboard' ? '_02' : ''}`}
          img_alt='Home Icon'
          title='Dashboard'
          page_url='maindashboard'
          handleChangeIcon = {handleChangeIcon}/>
        <MenuItem
          key="transaction"
          img_url={`img_transaction${activeItem === 'Transaction' ? '_02' : ''}`}
          img_alt='Transactions Icon'
          title='Transaction'
          page_url='transactions'
          handleChangeIcon = {handleChangeIcon}/>
        <MenuItem
          key="investment"
          img_url={`img_investment${activeItem === 'Investment' ? '_02' : ''}`}
          img_alt='Investments Icon'
          title='Investment'
          page_url='investments'
          handleChangeIcon = {handleChangeIcon}/>
        <MenuItem
          key="loan"
          img_url={`img_loan${activeItem === 'Loan' ? '_02' : ''}`}
          img_alt='Loans Icon'
          title='Loan'
          page_url='loans'
          handleChangeIcon = {handleChangeIcon}/>
        <MenuItem
          key="credit-card"
          img_url={`img_card${activeItem === 'Credit Card' ? '_02' : ''}`}
          img_alt='CreditCard Icon'
          title='Credit Card'
          page_url='creditcards'
          handleChangeIcon = {handleChangeIcon}/>
        <MenuItem
          key="account"
          img_url={`img_user${activeItem === 'Account' ? '_02' : ''}`}
          img_alt='Account Icon'
          title='Account'
          page_url='accounts'
          handleChangeIcon = {handleChangeIcon}/>
        <MenuItem
          key="setting"
          img_url={`img_settings${activeItem === 'Setting' ? '_02' : ''}`}
          img_alt='Setting Icon'
          title='Setting'
          page_url='setting'
          handleChangeIcon = {handleChangeIcon}/>
      </ul>
      {/* Expand button */}
      {/* <button className="btn btn-circle bg-white flex lg:hidden outline-none w-8">
        <Image
          alt='expand icon'
          src='/images/img_expand.svg'
          height={16}
          width={16}
        />
      </button> */}
      {/* Theme toggle */}
      <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value="synthwave" />

        {/* sun icon */}
        <svg
          className="swap-off h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill='#888EA2'>
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" fill='#888EA2'/>
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill='#888EA2'>
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" fill='#888EA2'/>
        </svg>
      </label>
    </nav>
  )
}
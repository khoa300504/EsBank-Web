import React from 'react'
import { Metadata } from 'next'
import Page from '.'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'The Main Dashboard provides a clear overview of your finances and access your dashboard to view recent transaction, balance history and expense statistics. Manage your accounts, investments and cards efficiently.'
}

export default function MainDashboardPage() {
  return <Page />
}

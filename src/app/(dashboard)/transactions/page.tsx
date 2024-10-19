import React from 'react'
import { Metadata } from 'next'
import Page from '.'

export const metadata: Metadata = {
  title: 'Transactions',
  description: 'The Main Dashboard allows users to view and manage their financial activities, such as deposits, withdrawals, and transfers.'
}

export default function TransactionsPage() {
  return <Page />
}

import React from 'react'
import { Metadata } from 'next'
import Page from '.'

export const metadata: Metadata = {
  title: 'Loans',
  description: 'With advanced features like real-time transaction updates, a responsive dashboard, and secure financial data handling, EsBank simplifies loan management for both individuals and enterprises, ensuring transparency and efficiency throughout the lending process.'
}

export default function LoansPage() {
  return <Page />
}
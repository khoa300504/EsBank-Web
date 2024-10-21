import React from 'react'
import { Metadata } from 'next'
import Page from '.'

export const metadata: Metadata = {
  title: 'Investments',
  description: 'Discover tailored investment opportunities designed to grow your wealth'
}

export default function InvestmentsPage() {
  return <Page />
}
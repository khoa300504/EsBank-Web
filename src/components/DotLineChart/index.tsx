import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', investment: 5000, profit: 1000 },
  { month: 'Feb', investment: 7000, profit: 1500 },
  { month: 'Mar', investment: 6000, profit: 1200 },
  { month: 'Apr', investment: 8000, profit: 1700 },
  { month: 'May', investment: 7500, profit: 1800 },
  { month: 'Jun', investment: 9000, profit: 2200 },
  { month: 'Jul', investment: 10000, profit: 2500 },
  { month: 'Aug', investment: 8500, profit: 2000 },
  { month: 'Sep', investment: 9500, profit: 2300 },
  { month: 'Oct', investment: 11000, profit: 2700 }
]


const StatisticsInvestmentChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default StatisticsInvestmentChart

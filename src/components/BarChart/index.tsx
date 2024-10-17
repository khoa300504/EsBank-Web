import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Mon',
    deposti: 400,
    withdraw: 250,
    amt: 300
  },
  {
    name: 'Tue',
    deposti: 200,
    withdraw: 300,
    amt: 150
  },
  {
    name: 'Wed',
    deposti: 450,
    withdraw: 200,
    amt: 300
  },
  {
    name: 'Thu',
    deposti: 400,
    withdraw: 150,
    amt: 250
  },
  {
    name: 'Fri',
    deposti: 350,
    withdraw: 100,
    amt: 200
  },
  {
    name: 'Sat',
    deposti: 450,
    withdraw: 300,
    amt: 350
  },
  {
    name: 'Sun',
    deposti: 300,
    withdraw: 200,
    amt: 250
  }
]

function WeeklyChart() {
  return (
    <ResponsiveContainer width="100%" height="100%" className={'h-96'}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="withdraw" fill="#8C82FC" activeBar={<Rectangle fill="#6A5CFD"/>} barSize={25} />
        <Bar dataKey="deposti" fill="#4CB5AE" activeBar={<Rectangle fill="#2E978C"/>} barSize={25}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default WeeklyChart

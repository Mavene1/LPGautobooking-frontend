import React from 'react'
//import {Bar} from 'react-chartjs-2'
//import {Line} from 'react-chartjs-2'
//import {PieChart,Pie,Tooltip} from 'recharts'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
//import { render } from "react-dom";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Typed from 'react-typed';

const Charts = () => {
    
    const data=[
        {name:"FB",value:200},
        {name:"IG",value:100},
        {name:"WA",value:150},
        {name:"TW",value:75}
    ]

    const percentage = 66;

  return (
    <div className='w-full px-4 bg-[#a0a4a0] py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div>
                <h1 className='text-center my-2 font-bold text-4xl'>Bar Chart</h1>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                    >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8AFF8A" background={{ fill: '#fefefe' }} />
                </BarChart>
                </div>
                <div className='justify-center mx-auto flex flex-col'>
                    <h1 className='text-center my-2 font-bold text-4xl mt-10 md:mt-0'>Line Chart</h1>
                    
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8AFF8A" activeDot={{ r: 8 }} />
                        
                    </LineChart>
                </div>
                <div className=''>
                <div className='justify-center flex flex-col'>
                    <h1 className='text-center my-2 font-bold text-4xl mt-10 md:mt-10 mb-7'>Percentage Remaining</h1>
                    <div className='mx-auto flex justify-center' style={{ width: 300, height: 300 }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`}
                            styles={buildStyles({
                                pathColor: `rgba(0,255,0, ${percentage / 100})`,
                                textColor: '#2EFF2E',
                                trailColor: '#FFFFFF',
                                backgroundColor: '#8AFF8A',
                            })}
                        />;
                    </div>
                    </div>
                    <div className='pl-20 ml-6 items-center flex'>
                        <p className='py-10 text-xl font-bold'> Approximate number of days remaining is: </p>
                        <Typed 
                            className='text-xl font-bold md:pl-4 pl-3' 
                                strings={['100 days!','56 days!','12 days!']} 
                                typeSpeed={100} 
                                backSpeed={140} loop/>
                    </div>
                </div>
                
            </div>    
        </div>
    
  )
}

export default Charts
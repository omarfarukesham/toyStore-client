import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Growth = () => {
    const[charts, setCharts] = useState([])
    useEffect(()=>{
        fetch('https://serene-headland-23680.herokuapp.com/sales')
        .then(res=>res.json())
        .then(data => setCharts(data))

    },[])
   
console.log(charts);
    return ( 
        <div className='container'>
        <div className='d-flex justify-content-center align-items-center gap-4'>  
         <div className='m-3'>
             <h3 className='text-success fw-bold'>First Quarter(Sales)</h3>
            <LineChart width={350} height={250} data={charts}>
                <Line  dataKey={"sell"} stroke="#8884d8" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
         </div>

         <div className='m-2'>
            <h3 className='text-success fw-bold'>Second Quarter(Revenue)</h3>
            <BarChart width={350} height={250} data={charts}>
                <XAxis dataKey="month"  />
                <YAxis />
                <Bar dataKey="revenue" barSize={25} fill="#8884d8" />
                <Tooltip></Tooltip>
             </BarChart>
         </div>
        
        </div>

        
        </div>
        
    );
};

export default Growth;
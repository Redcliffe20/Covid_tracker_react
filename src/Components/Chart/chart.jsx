import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';
import {Line,Bar} from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart=({data,country})=>{
    // console.log("*************************")
    // console.log(data)
    // console.log(data.country)
    // console.log("****************************")

    const[dailydata,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchAPI=async ()=>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
        
    },[])
    console.log(data.confirmed,data.recovered,data.deaths)

   const barChart=(
       data.confirmed ?
       (<Bar
       data={{
           labels: ['Infected','Recovered','Deaths'],
           datasets: [{
               label: 'People',
               backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
               data: [data.confirmed.value,data.recovered.value,data.deaths.value]
       }]
    }}
       options={{
           legend: {display: false},
           title: {display: true,text: `Current state in ${country}`}
       }}
       />
        )
       : null
   )

    console.log(dailydata)
    const linechart=(
        dailydata.length ? (<Line
        data={{
            labels: dailydata.map(({date})=>date),
            datasets: [{
                data: dailydata.map(({confirmed})=>confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },{
                data: dailydata.map(({deaths})=>deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            }]
        }}
        />)
        :
        null
    )
    return(
        <div className={styles.container}>
            {country ? barChart : linechart} 
        </div>
    )
}

export default Chart;
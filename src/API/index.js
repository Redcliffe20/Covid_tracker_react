import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData=async (country)=>{
    let changeAbleURL=url;

    if(country){
        changeAbleURL=`${url}/countries/${country}`
    }


    try {
        const {data}=await axios.get(changeAbleURL);
        const modifiedObj={
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths, 
            lastUpdate: data.lastUpdate
        }
        return modifiedObj;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData=async ()=>{
    try {
        const {data}=await axios.get(`${url}/daily`);
        
        const modifiedData=data.map((dd)=>({
            confirmed: dd.confirmed.total,
            deaths: dd.deaths.total,
            date: dd.reportDate

        }))

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const countriys=async ()=>{
    try {
        const {data: {countries}} =await axios.get(`${url}/countries`)
        
        return countries.map((c)=>c.name)

    } catch (error) {
        console.log(error);
    }
}

import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './country.module.css';
import { countriys } from '../../API';




const Country=({handleCountryChange})=>{

    const [fcountries,scountries]=useState([])

    useEffect(()=>{
    const fetchCountries=async ()=>{
        scountries(await countriys());
    }
    fetchCountries();
    },[scountries])

    console.log(fcountries)


    return(
        <div>
            <FormControl className={styles.formcontrol}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fcountries.map((c,i)=><option key={i} value={c}>{c}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Country;
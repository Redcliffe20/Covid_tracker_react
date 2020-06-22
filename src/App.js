// import './App.css';

import React, { Component } from 'react';
import Cards from './Components/Cards/cards';
import Chart from './Components/Chart/chart';
import Country from './Components/Country/country';
import styles from './App.module.css';
import { fetchData } from './API';



class App extends Component {

  state={
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    // console.log(data);
    this.setState({data: fetchedData});
  }

  handleCountryChange=async (country)=>{
    const fetchedData=await fetchData(country);
    // console.log(fetchedData);
    this.setState({data: fetchedData,country: country});
  }


  render() { 
    const {data,country}=this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Country handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        
      </div>
    );
  }
}
 
export default App;

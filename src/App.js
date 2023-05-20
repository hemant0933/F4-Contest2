
import './App.css';
import DisplayComponent from './components/DisplayComponent';
import React,{useState,useEffect} from 'react';


function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetchData()
  },[]) 

  // fetchData function is is fecthing my data from this url using 
  // .then method 
  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => console.error(error))
  }
  // over here i have made DisplayComponent in which my table is present 
  // i have passed the data as an property 
  return (
    <div className='App'>
        <DisplayComponent data={data}/> 
    </div>
  );
}

export default App;

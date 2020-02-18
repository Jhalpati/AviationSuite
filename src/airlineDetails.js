import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function AirlineDetails({match}) {


  useEffect(() => {
    fetchItem();
    console.log(match);



  },[]);

  const [item, setItem] = useState([]);
  const APP_ID = '544b084a';
  const APP_KEY= '5f2e41dee933f04c8eb95d74ef52b0e9';
  

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airlines/rest/v1/json/iata/${
      match.params.id
    }?appId=${APP_ID}&appKey=${APP_KEY}`)
    const item = await fetchItem.json();
    console.log(item.airlines[0]);
    setItem(item.airlines[0]);
  };
  




  return (
    <div className="airport-info">
         <h1>Name: {item.name}</h1> 
        <h2>IATA: {item.iata}</h2>
        <h4>Contact: {item.phoneNumber}</h4>
        <Link to={`/news/${item.name}`}>News about: {item.name}</Link>
        
    </div>

    
  );
}

export default AirlineDetails;

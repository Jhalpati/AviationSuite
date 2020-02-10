import React,{useState, useEffect} from 'react';
import './App.css';


function Item({match}) {


  useEffect(() => {
    fetchItem();
    console.log(match);



  },[]);

  const [item, setItem] = useState([]);
  const APP_ID = '544b084a';
  const APP_KEY= '5f2e41dee933f04c8eb95d74ef52b0e9';
  

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/iata/${
      match.params.id
    }?appId=${APP_ID}&appKey=${APP_KEY}`)
    const item = await fetchItem.json();
    console.log(item.airports[0]);
    setItem(item.airports[0]);
  };
  




  return (
    <div className="airport-info">
        <h1>Name: {item.name}</h1>
        <h2>City:{item.city}, {item.countryName}</h2>
        <h3>Local time:{item.localTime}</h3>
        <h4>Weather:{item.weatherUrl}</h4>
        
    </div>
  );
}

export default Item;
